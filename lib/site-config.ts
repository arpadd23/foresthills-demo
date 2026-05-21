export const siteConfig = {
  name: 'Forest Hills Golf Club',
  shortName: 'Forest Hills',
  url: 'https://foresthills-demo.vercel.app',
  ogImage: '/og-image.jpg',
} as const;

export const contactInfo = {
  phone: '+36 88 573 310',
  phoneHref: 'tel:+3688573310',
  email: 'golf@foresthills.hu',
  emailHref: 'mailto:golf@foresthills.hu',
  address: {
    street: 'Szarvaskút',
    postal: '8420',
    city: 'Zirc',
    country: 'Magyarország',
  },
  mapsQuery: 'Forest+Hills+Golf+Club+Zirc',
  hotelPartnerUrl: 'https://hotelszarvaskut.hu',
} as const;

export const courseFacts = {
  holes: '9 + 9',
  par: '72',
  length: '6200 m',
  bunkers: '15+',
} as const;
