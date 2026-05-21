import {useTranslations} from 'next-intl';
import {MapPin, Phone, Mail, Clock} from 'lucide-react';
import {contactInfo} from '@/lib/site-config';

export function LocationContact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-24 md:py-32 bg-forest-900">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="eyebrow text-gold-400 mb-3">{t('eyebrow')}</p>
          <h2 className="font-display text-display text-cream-50">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <ContactRow icon={<MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" aria-hidden />} label={t('addressLabel')}>
              <address className="not-italic text-cream-100/80 leading-relaxed whitespace-pre-line">
                {t('addressValue')}
              </address>
            </ContactRow>

            <ContactRow icon={<Phone className="h-5 w-5 text-gold-400 shrink-0" aria-hidden />} label={t('phoneLabel')}>
              <a
                href={contactInfo.phoneHref}
                className="text-cream-100/80 hover:text-cream-50 transition-colors duration-200"
              >
                {contactInfo.phone}
              </a>
            </ContactRow>

            <ContactRow icon={<Mail className="h-5 w-5 text-gold-400 shrink-0" aria-hidden />} label={t('emailLabel')}>
              <a
                href={contactInfo.emailHref}
                className="text-cream-100/80 hover:text-cream-50 transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </ContactRow>

            <ContactRow icon={<Clock className="h-5 w-5 text-gold-400 shrink-0" aria-hidden />} label={t('hoursLabel')}>
              <span className="text-cream-100/80">{t('hoursValue')}</span>
            </ContactRow>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96 border border-cream-50/10">
            <iframe
              title="Forest Hills Golf Club térképen"
              src={`https://maps.google.com/maps?q=${contactInfo.mapsQuery}&output=embed&z=14`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              style={{border: 0}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({icon, label, children}: {icon: React.ReactNode; label: string; children: React.ReactNode}) {
  return (
    <div className="flex gap-4">
      <div className="pt-0.5">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest font-medium text-cream-100/70 mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}
