/* DreamVoyagers — demo data & configuration
   All prices are indicative placeholders from the business concept; confirm before launch. */
window.DV = window.DV || {}; var DV = window.DV;

DV.config = {
  brand: 'DreamVoyagers',
  tagline: 'Your first week in New Zealand, taken care of.',
  city: 'Auckland',
  whatsapp: '6421000000',                 // placeholder — replace with WhatsApp Business number (international format, no +)
  email: 'hello@dreamvoyagers.co.nz',     // placeholder
  phone: '+64 9 000 0000',                // placeholder
  address: '27E Smales Road, East Tamaki, Auckland 2013',
  hours: 'Mon–Sat, 8am–8pm NZT · WhatsApp monitored 7 days',
  currency: 'NZD',
  gstNote: 'Prices in NZ dollars and include GST.',
  refPrefix: 'DV'
};

DV.origins = [
  { id: 'IN', name: 'India' }, { id: 'CN', name: 'China' }, { id: 'PH', name: 'Philippines' },
  { id: 'VN', name: 'Vietnam' }, { id: 'KR', name: 'South Korea' }, { id: 'JP', name: 'Japan' },
  { id: 'NP', name: 'Nepal' }, { id: 'LK', name: 'Sri Lanka' }, { id: 'OT', name: 'Somewhere else' }
];

DV.packages = [
  {
    id: 'essential', name: 'Essential Arrival', price: 399, days: 'Day 1',
    for: 'You have accommodation sorted and just need a safe, simple landing.',
    tagline: 'Met at the airport, connected and oriented on day one.',
    includes: ['Meet & greet at Auckland Airport', 'Private transfer to your accommodation', 'NZ SIM or eSIM, activated', 'Arrival briefing: transport, groceries, emergency contacts', 'WhatsApp support for 7 days'],
    excludes: ['Accommodation', 'Food starter pack', 'Bank & IRD assistance']
  },
  {
    id: 'starter', name: '7-Day Starter', price: 699, days: 'Days 1–7', featured: true,
    for: 'Most students. Everything for a confident first week.',
    tagline: 'Pickup, a place to stay, food in the fridge and your admin started.',
    includes: ['Everything in Essential Arrival', '7 nights in vetted student accommodation', 'Food & grocery starter pack (vegetarian, halal and other options)', 'Bank appointment booked, documents checked', 'IRD number application assistance', 'AT HOP card & public transport walkthrough', 'Auckland orientation walk'],
    excludes: ['Long-term accommodation search', 'Airport pickup for family members']
  },
  {
    id: 'premium', name: 'Premium Landing', price: 1199, days: 'Days 1–7',
    for: 'When you want more comfort and a hand with everything.',
    tagline: 'A nicer place to stay, and someone beside you for every appointment.',
    includes: ['Everything in 7-Day Starter', 'Upgraded private room or studio for 7 nights', 'Accompanied bank & IRD appointments', 'Shopping trip: bedding, kitchen basics, winter layers', 'University / campus orientation', 'Long-term accommodation shortlist and 2 viewings', 'Priority WhatsApp line for 14 days'],
    excludes: ['Vehicle hire', 'Immigration advice (we don’t give it)']
  },
  {
    id: 'family', name: 'Family Arrival', price: 1999, days: 'Days 1–7',
    for: 'Families relocating together, with children to settle.',
    tagline: 'A whole-family landing: home, school area, groceries and admin.',
    includes: ['Meet & greet for up to 4 people, van transfer', '7 nights family accommodation', 'Family grocery pack', 'School-zone and neighbourhood orientation', 'Bank & IRD assistance for both adults', 'SIMs for the whole family', 'Long-term rental guidance'],
    excludes: ['School enrolment decisions', 'Furniture or vehicle purchase']
  },
  {
    id: 'settlement', name: '30-Day Settlement', price: 2499, days: 'Days 1–30',
    for: 'Skilled migrants and anyone who wants a month of support.',
    tagline: 'First week sorted, then a month of help finding your feet.',
    includes: ['Everything in Premium Landing', 'Weekly check-in calls for 4 weeks', 'Utilities set-up guidance (power, internet)', 'Long-term accommodation search support until signed', 'Local services map: GP, pharmacy, groceries, places of worship', 'Job-search and NZ workplace orientation session', 'Community introductions'],
    excludes: ['Guaranteed housing or employment outcomes']
  }
];

DV.addons = [
  { id: 'welcomebox', name: 'NZ Welcome Box', price: 79, desc: 'Power adapter, toiletries, snacks, tea & coffee, noodles, water bottle, maps and your bank/IRD checklist — waiting in your room.' },
  { id: 'extra_night', name: 'Extra night of accommodation', price: 65, desc: 'Per night, same room, subject to availability.' },
  { id: 'extra_pax', name: 'Additional traveller at pickup', price: 45, desc: 'A friend or family member on the same flight.' }
];

DV.statuses = [
  ['pending_payment', 'Pending payment'], ['paid', 'Paid'], ['in_progress', 'In progress'],
  ['services_confirmed', 'Services confirmed'], ['ready_for_arrival', 'Ready for arrival'],
  ['arrived', 'Arrived'], ['completed', 'Completed'], ['cancelled', 'Cancelled'], ['expired', 'Expired']
];
DV.statusLabel = s => (DV.statuses.find(x => x[0] === s) || [s, s])[1];

DV.milestones = [
  ['pickup', 'Airport pickup confirmed'], ['accommodation', 'Accommodation confirmed'],
  ['sim', 'SIM / eSIM ready'], ['food', 'Food starter pack ordered'],
  ['bank', 'Bank appointment booked'], ['ird', 'IRD application assistance scheduled']
];

DV.faqs = [
  ['Who will meet me at the airport?', 'A DreamVoyagers arrival host with a named sign, your booking reference and a photo we send you in advance. We track your flight, so if it is delayed we are still there.'],
  ['Can my parents book and pay for me?', 'Yes. The booking form asks for the person paying and the person travelling separately. Both receive the confirmation and progress updates.'],
  ['Can you open my bank account or get my IRD number?', 'No — and anyone who promises that should worry you. The bank decides on accounts and Inland Revenue issues IRD numbers. We book the appointment, check your documents, come with you (Premium and above) and explain the process.'],
  ['Do you give immigration or visa advice?', 'No. We are not licensed immigration advisers and we do not advise on visas. We help with the practical things once your visa is sorted.'],
  ['What food options are in the starter pack?', 'Vegetarian, vegan, halal, Jain-friendly and standard packs. Tell us in the booking form and we will stock accordingly, including some familiar brands from home where we can.'],
  ['What if my flight changes?', 'Send us the new flight number on WhatsApp. We reschedule the pickup at no charge up to 24 hours before arrival.'],
  ['When do I pay, and can I cancel?', 'You pay the full package price securely by card when you book. Cancellations more than 14 days before arrival are refunded in full less a small admin fee; see our cancellation policy for the detail (placeholder — to be confirmed).'],
  ['Which cities do you cover?', 'Auckland for now. Wellington and Christchurch are next — tell us if you need them and we will let you know when they open.']
];

/* Seed bookings for the demo admin */
DV.seedBookings = () => [
  { ref: 'DV-2026-00112', status: 'ready_for_arrival', pkg: 'starter', addons: ['welcomebox'], total: 778, created: '2026-10-21T09:12:00Z',
    booker: { name: 'Rajesh Sharma', email: 'rajesh.sharma@example.com', phone: '+91 98100 00000', country: 'India', sameAsTraveller: false },
    traveller: { name: 'Aarav Sharma', email: 'aarav.s@example.com', phone: '+91 98100 00001', nationality: 'India', dob: '2008-02-14', institution: 'AUT', diet: 'Vegetarian', access: '' },
    arrival: { date: '2026-11-04', flight: 'SQ285', time: '10:35', airport: 'AKL', notes: 'First time flying alone. Please send host photo to father too.' },
    payment: { status: 'succeeded', id: 'pi_demo_3Q8x1', method: 'Visa •••• 4242', paidAt: '2026-10-21T09:14:00Z' },
    milestones: { pickup: true, accommodation: true, sim: true, food: true, bank: true, ird: true },
    history: [['2026-10-21T09:12:00Z', 'pending_payment', 'system'], ['2026-10-21T09:14:00Z', 'paid', 'system'], ['2026-10-22T02:00:00Z', 'in_progress', 'Sarneela'], ['2026-10-27T05:30:00Z', 'services_confirmed', 'Sarneela'], ['2026-10-29T22:10:00Z', 'ready_for_arrival', 'Sarneela']],
    notes: [['2026-10-22T02:05:00Z', 'Sarneela', 'Room 14 at Empire Apartments confirmed, check-in from 2pm. Vegetarian pack ordered from Khyber Foods.'], ['2026-10-27T05:32:00Z', 'Sarneela', 'ANZ appointment Thu 6 Nov 10:30, Queen St branch. Reminded Aarav to bring passport + offer letter.']],
    emails: [['2026-10-21T09:14:10Z', 'Payment confirmation'], ['2026-10-21T09:14:12Z', 'Welcome & next steps'], ['2026-10-27T05:33:00Z', 'Accommodation confirmed'], ['2026-10-29T22:11:00Z', 'Pre-arrival instructions']] },
  { ref: 'DV-2026-00113', status: 'in_progress', pkg: 'premium', addons: [], total: 1199, created: '2026-10-24T14:40:00Z',
    booker: { name: 'Li Wei', email: 'liwei@example.cn', phone: '+86 139 0000 0000', country: 'China', sameAsTraveller: true },
    traveller: { name: 'Li Wei', email: 'liwei@example.cn', phone: '+86 139 0000 0000', nationality: 'China', dob: '2004-07-02', institution: 'University of Auckland', diet: 'No restrictions', access: '' },
    arrival: { date: '2026-11-09', flight: 'CA783', time: '14:20', airport: 'AKL', notes: '' },
    payment: { status: 'succeeded', id: 'pi_demo_7Lm22', method: 'Mastercard •••• 5100', paidAt: '2026-10-24T14:42:00Z' },
    milestones: { pickup: true, accommodation: false, sim: true, food: false, bank: false, ird: false },
    history: [['2026-10-24T14:40:00Z', 'pending_payment', 'system'], ['2026-10-24T14:42:00Z', 'paid', 'system'], ['2026-10-25T01:00:00Z', 'in_progress', 'Sarneela']],
    notes: [['2026-10-25T01:02:00Z', 'Sarneela', 'Waiting on studio availability at UniLodge; fallback Quest Newmarket.']],
    emails: [['2026-10-24T14:42:10Z', 'Payment confirmation'], ['2026-10-24T14:42:12Z', 'Welcome & next steps']] },
  { ref: 'DV-2026-00114', status: 'paid', pkg: 'family', addons: ['welcomebox', 'extra_pax'], total: 2123, created: '2026-10-27T18:05:00Z',
    booker: { name: 'Maria Santos', email: 'maria.santos@example.ph', phone: '+63 917 000 0000', country: 'Philippines', sameAsTraveller: true },
    traveller: { name: 'Maria Santos', email: 'maria.santos@example.ph', phone: '+63 917 000 0000', nationality: 'Philippines', dob: '1988-11-30', institution: 'Middlemore Hospital (employer)', diet: 'No restrictions', access: 'Travelling with two children (6 and 9) — booster seats please' },
    arrival: { date: '2026-11-15', flight: 'PR218', time: '13:55', airport: 'AKL', notes: 'Husband arrives two weeks later.' },
    payment: { status: 'succeeded', id: 'pi_demo_9Pq40', method: 'Visa •••• 0005', paidAt: '2026-10-27T18:07:00Z' },
    milestones: { pickup: false, accommodation: false, sim: false, food: false, bank: false, ird: false },
    history: [['2026-10-27T18:05:00Z', 'pending_payment', 'system'], ['2026-10-27T18:07:00Z', 'paid', 'system']],
    notes: [],
    emails: [['2026-10-27T18:07:10Z', 'Payment confirmation'], ['2026-10-27T18:07:12Z', 'Welcome & next steps']] },
  { ref: 'DV-2026-00115', status: 'pending_payment', pkg: 'essential', addons: [], total: 399, created: '2026-10-29T06:30:00Z',
    booker: { name: 'Nguyen Thi Lan', email: 'lan.nguyen@example.vn', phone: '+84 90 000 0000', country: 'Vietnam', sameAsTraveller: true },
    traveller: { name: 'Nguyen Thi Lan', email: 'lan.nguyen@example.vn', phone: '+84 90 000 0000', nationality: 'Vietnam', dob: '2005-03-19', institution: 'Unitec', diet: 'Vegan', access: '' },
    arrival: { date: '2026-11-20', flight: 'VN—', time: '', airport: 'AKL', notes: 'Will confirm flight after ticket purchase.' },
    payment: { status: 'pending', id: 'cs_demo_abc', method: '', paidAt: null },
    milestones: { pickup: false, accommodation: false, sim: false, food: false, bank: false, ird: false },
    history: [['2026-10-29T06:30:00Z', 'pending_payment', 'system']], notes: [], emails: [['2026-10-29T06:30:05Z', 'Booking acknowledgement']] },
  { ref: 'DV-2026-00109', status: 'completed', pkg: 'starter', addons: ['welcomebox'], total: 778, created: '2026-09-30T11:00:00Z',
    booker: { name: 'Kim Ji-ho', email: 'jiho.kim@example.kr', phone: '+82 10 0000 0000', country: 'South Korea', sameAsTraveller: true },
    traveller: { name: 'Kim Ji-ho', email: 'jiho.kim@example.kr', phone: '+82 10 0000 0000', nationality: 'South Korea', dob: '2003-09-09', institution: 'Massey University (Albany)', diet: 'No restrictions', access: '' },
    arrival: { date: '2026-10-12', flight: 'KE129', time: '09:50', airport: 'AKL', notes: '' },
    payment: { status: 'succeeded', id: 'pi_demo_1Aa11', method: 'Visa •••• 4242', paidAt: '2026-09-30T11:02:00Z' },
    milestones: { pickup: true, accommodation: true, sim: true, food: true, bank: true, ird: true },
    history: [['2026-09-30T11:00:00Z', 'pending_payment', 'system'], ['2026-09-30T11:02:00Z', 'paid', 'system'], ['2026-10-01T01:00:00Z', 'in_progress', 'Sarneela'], ['2026-10-08T03:00:00Z', 'services_confirmed', 'Sarneela'], ['2026-10-10T20:00:00Z', 'ready_for_arrival', 'Sarneela'], ['2026-10-12T00:10:00Z', 'arrived', 'Sarneela'], ['2026-10-20T04:00:00Z', 'completed', 'Sarneela']],
    notes: [['2026-10-20T04:01:00Z', 'Sarneela', 'Great feedback. Asked for long-term flat help — referred to Phase 2 list.']],
    emails: [['2026-09-30T11:02:10Z', 'Payment confirmation'], ['2026-09-30T11:02:12Z', 'Welcome & next steps'], ['2026-10-08T03:01:00Z', 'Services confirmed'], ['2026-10-10T20:01:00Z', 'Pre-arrival instructions']] }
];
