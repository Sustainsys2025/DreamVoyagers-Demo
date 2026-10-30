/* DreamVoyagers — shared behaviour (prototype). Data persists in localStorage. */
(function () {
  const DV = window.DV;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  DV.$ = $; DV.$$ = $$;

  DV.money = n => 'NZ$' + Number(n).toLocaleString('en-NZ');
  DV.fmtDate = (iso, opts) => iso ? new Date(iso).toLocaleDateString('en-NZ', opts || { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
  DV.fmtDateTime = iso => iso ? new Date(iso).toLocaleString('en-NZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '—';
  DV.pkg = id => DV.packages.find(p => p.id === id);
  DV.addon = id => DV.addons.find(a => a.id === id);
  DV.qs = k => new URLSearchParams(location.search).get(k);
  DV.rel = () => (document.body.dataset.root || './');
  DV.wa = (text) => `https://wa.me/${DV.config.whatsapp}?text=${encodeURIComponent(text || 'Hi DreamVoyagers, I have a question about arriving in Auckland.')}`;

  /* ---- storage ---- */
  const KEY = 'dv_bookings_v1';
  DV.store = {
    all() { let b = null; try { b = JSON.parse(localStorage.getItem(KEY)); } catch (e) { } if (!b) { b = DV.seedBookings(); this.save(b); } return b; },
    save(list) { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { } },
    get(ref) { return this.all().find(b => b.ref === ref); },
    put(b) { const list = this.all(); const i = list.findIndex(x => x.ref === b.ref); if (i >= 0) list[i] = b; else list.unshift(b); this.save(list); return b; },
    reset() { try { localStorage.removeItem(KEY); } catch (e) { } },
    nextRef() { const list = this.all(); const nums = list.map(b => parseInt(b.ref.split('-').pop(), 10)).filter(n => !isNaN(n)); const n = (nums.length ? Math.max(...nums) : 100) + 1; return `${DV.config.refPrefix}-${new Date().getFullYear()}-${String(n).padStart(5, '0')}`; }
  };
  /* ---- prototype accounts (localStorage only; any password accepted) ---- */
  const UKEY = 'dv_users_v1', SKEY = 'dv_session_v1', LKEY = 'dv_links_v1';
  DV.auth = {
    users() { try { return JSON.parse(localStorage.getItem(UKEY)) || []; } catch (e) { return []; } },
    find(email) { return this.users().find(u => u.email === (email || '').toLowerCase()); },
    register(u) { const list = this.users().filter(x => x.email !== u.email); list.push(u); localStorage.setItem(UKEY, JSON.stringify(list)); },
    signIn(u) { localStorage.setItem(SKEY, JSON.stringify({ email: u.email, name: u.name })); },
    signOut() { localStorage.removeItem(SKEY); },
    current() { try { return JSON.parse(localStorage.getItem(SKEY)); } catch (e) { return null; } },
    links() { try { return JSON.parse(localStorage.getItem(LKEY)) || []; } catch (e) { return []; } },
    link(ref) { const l = this.links(); if (l.indexOf(ref) < 0) l.push(ref); localStorage.setItem(LKEY, JSON.stringify(l)); }
  };
  DV.calcTotal = (pkgId, addons) => (DV.pkg(pkgId)?.price || 0) + (addons || []).reduce((s, a) => s + (DV.addon(a)?.price || 0), 0);
  DV.setStatus = (b, status, by, notify) => { b.status = status; b.history = b.history || []; b.history.push([new Date().toISOString(), status, by || 'system']); if (notify) { b.emails = b.emails || []; b.emails.push([new Date().toISOString(), notify]); } return b; };

  DV.toast = msg => { let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); } t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600); };

  /* ---- header behaviour ---- */
  document.addEventListener('DOMContentLoaded', () => {
    const tog = $('.nav-toggle'); const nav = $('.nav');
    if (tog && nav) tog.addEventListener('click', () => { const open = nav.classList.toggle('open'); tog.setAttribute('aria-expanded', open); });
    // current page highlight
    const here = location.pathname.split('/').pop() || 'index.html';
    $$('.nav-links a').forEach(a => { if ((a.getAttribute('href') || '').split('/').pop() === here) a.setAttribute('aria-current', 'page'); });
    // WhatsApp links
    $$('[data-wa]').forEach(a => { a.href = DV.wa(a.dataset.wa || undefined); a.target = '_blank'; a.rel = 'noopener'; });
    // origin chips
    const saved = localStorage.getItem('dv_origin');
    $$('.chip[data-origin]').forEach(c => {
      if (saved && c.dataset.origin === saved) c.setAttribute('aria-pressed', 'true');
      c.addEventListener('click', () => { $$('.chip[data-origin]').forEach(x => x.setAttribute('aria-pressed', 'false')); c.setAttribute('aria-pressed', 'true'); localStorage.setItem('dv_origin', c.dataset.origin); DV.personalise(c.dataset.origin); });
    });
    if (saved) DV.personalise(saved);
    // package grids
    $$('[data-packages]').forEach(el => DV.renderPackages(el, el.dataset.packages));
    // FAQ
    $$('[data-faqs]').forEach(el => { el.innerHTML = DV.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join(''); });
    // account link in header
    const me = DV.auth.current();
    $$('[data-account-link]').forEach(a => { if (me) { a.textContent = 'My journey'; a.href = DV.rel() + 'journey.html'; } });
    // year
    $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  });

  DV.personalise = origin => {
    const o = DV.origins.find(x => x.id === origin); if (!o) return;
    const msg = (DV.originNotes || {})[origin] || (DV.originNotes || {}).OTH || '';
    $$('[data-personal]').forEach(el => { el.textContent = msg; el.hidden = !msg; });
  };

  const ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  const ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  DV.renderPackages = (el, mode) => {
    const root = DV.rel();
    el.innerHTML = DV.packages.map(p => `
      <article class="pkg ${p.featured ? 'featured' : ''}">
        ${p.featured ? '<span class="pkg-tag">Most chosen</span>' : ''}
        <h3>${p.name}</h3>
        <p class="for">${p.for}</p>
        <div class="price">${DV.money(p.price)}</div>
        <div class="per">${p.days} · per person, incl. GST</div>
        <ul>${p.includes.slice(0, mode === 'compact' ? 4 : 99).map(i => `<li>${ICON_CHECK}<span>${i}</span></li>`).join('')}${mode === 'compact' ? '' : p.excludes.map(i => `<li class="no">${ICON_X}<span>${i}</span></li>`).join('')}</ul>
        <a class="btn ${p.featured ? 'btn-primary' : 'btn-outline'} btn-block" href="${root}book.html?package=${p.id}" aria-label="Book ${p.name}">Book now</a>
      </article>`).join('');
  };
})();
