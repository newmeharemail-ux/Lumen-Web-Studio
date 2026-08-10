import proof1 from '../assets/proof-1.png'
import proof2 from '../assets/proof-2.png'
import proof3 from '../assets/proof-3.png'

const content = {
  brand: {
    name: 'Lumen Web Studio',
  },

  global: {
    cta: {
      label: 'Book a free call',
      href: 'https://calendly.com/newmeharemail/30min',
    },
  },

  contact: {
    email: 'newmeharemail@gmail.com',
    phone: '+923034721384',
    phoneDisplay: '+92 303 4721384',
    serviceArea: 'Serving solar installers worldwide',
  },

  hero: {
    eyebrow: 'For solar installation companies',
    headlineBefore: 'Websites that turn local searches into',
    headlineHighlight: 'booked installs.',
    subheadline:
      "A clean, professional website that turns visitors into enquiries — and it's live in a week.",
  },

  services: {
    index: '01',
    eyebrow: 'Services',
    title: 'Everything you need to look professional online.',
    intro: 'Plain-language offers — no retainers, no jargon, no surprises.',
    items: [
      {
        icon: 'design',
        title: 'Website design & build',
        benefit: 'A clean, fast site that makes your business look established and worth calling.',
      },
      {
        icon: 'seo',
        title: 'Get found on Google',
        benefit: 'So local customers searching "solar installers near me" find you first.',
      },
      {
        icon: 'support',
        title: 'Updates & support',
        benefit: 'Your site stays current, secure, and working — so you can focus on installs.',
      },
    ],
  },

  proof: {
    index: '02',
    eyebrow: 'Proof',
    heading: 'Stopped-in, real builds.',
    subheading:
      'These demo builds show exactly what your customers see — a website that looks credible and makes them call.',
    screenshots: [
      { src: proof1, alt: 'Ecogreen solar demo website — hero section', label: 'Ecogreen — Hero' },
      { src: proof2, alt: 'Ecogreen solar demo website — services section', label: 'Ecogreen — Services' },
      { src: proof3, alt: 'Ecogreen solar demo website — gallery section', label: 'Ecogreen — Gallery' },
    ],
    testimonials: [],
  },

  process: {
    index: '03',
    eyebrow: 'Process',
    heading: 'Live in a week, without drama.',
    steps: [
      {
        title: 'Book a free call',
        body: 'We talk about your business and goals. No pressure, 30 minutes.',
      },
      {
        title: 'We build the site',
        body: 'You review it before anything goes live.',
      },
      {
        title: 'Go live in a week',
        body: 'Your new site starts bringing in enquiries and booked installs.',
      },
    ],
  },

  about: {
    index: '04',
    eyebrow: 'About',
    heading: 'Websites built to book you work.',
    paragraphs: [
      "Abdulrehman Saghir is the person behind Lumen Web Studio — a small studio that builds websites for solar installation companies.",
      'Honest, fast work that turns visitors into customers. No fluff, no jargon, no two-month timelines — just a clean site that ships in a week and gets you enquiries.',
    ],
  },

  finalCta: {
    headline: 'Ready to turn your website into a lead machine?',
    subheading:
      "Book a free, no-pressure call. We'll talk about your business and goals — then you'll have a new site in a week.",
  },
}

export default content