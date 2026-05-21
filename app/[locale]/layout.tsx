import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Cormorant_Garamond, Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {siteConfig, contactInfo} from '@/lib/site-config';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Meta'});
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('title'),
      template: `%s — ${siteConfig.shortName}`,
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      locale: locale === 'hu' ? 'hu_HU' : 'en_GB',
      url: '/',
      title: t('title'),
      description: t('description'),
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      languages: {
        hu: '/hu',
        en: '/en',
      },
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: siteConfig.name,
    description: 'Par 72, 18-hole golf course and dedicated footgolf facility in the Bakony Hills, near Zirc, Hungary.',
    url: siteConfig.url,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address.street,
      postalCode: contactInfo.address.postal,
      addressLocality: contactInfo.address.city,
      addressCountry: 'HU',
    },
    sport: ['Golf', 'Footgolf'],
    amenityFeature: [
      {name: 'Driving Range', '@type': 'LocationFeatureSpecification', value: true},
      {name: 'Putting Green', '@type': 'LocationFeatureSpecification', value: true},
      {name: 'Footgolf Course', '@type': 'LocationFeatureSpecification', value: true},
    ],
  };

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body className="bg-forest-900 text-cream-50 min-h-screen flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
