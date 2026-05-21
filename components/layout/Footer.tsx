import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {contactInfo} from '@/lib/site-config';

export function Footer() {
  const t = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const year = new Date().getFullYear();

  const navItems = [
    {label: tHeader('navGolf'), href: '#golf'},
    {label: tHeader('navFootgolf'), href: '#footgolf'},
    {label: tHeader('navGallery'), href: '#gallery'},
    {label: tHeader('navContact'), href: '#contact'},
  ];

  return (
    <footer className="bg-charcoal-950 text-cream-100/70 pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-cream-50/10">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="font-display text-xl font-semibold text-cream-50">
                Forest Hills
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">{t('tagline')}</p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-cream-50 mb-4">
              {t('navTitle')}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-cream-50 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-cream-50 mb-4">
              {t('contactTitle')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="hover:text-cream-50 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className="hover:text-cream-50 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-cream-100/50">
                {contactInfo.address.postal} {contactInfo.address.city},{' '}
                {contactInfo.address.street}
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest font-medium text-cream-50 mb-2">
                {t('partnerTitle')}
              </h3>
              <p className="text-sm">{t('partnerText')}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/40">
          <p>{t('copyright', {year})}</p>
          <p className="italic">{t('sampleNote')}</p>
        </div>
      </div>
    </footer>
  );
}
