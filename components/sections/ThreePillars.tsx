import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {ArrowUpRight} from 'lucide-react';
import {images} from '@/lib/images';
import {contactInfo} from '@/lib/site-config';

type PillarProps = {
  image: string;
  alt: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
  external?: boolean;
};

function PillarCard({image, alt, title, text, linkLabel, href, external}: PillarProps) {
  return (
    <div
      id={title.toLowerCase().replace(/\s+/g, '')}
      className="group flex flex-col bg-forest-800 rounded-2xl overflow-hidden border border-cream-50/5 hover:border-gold-500/30 transition-colors duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-2xl text-cream-50 mb-3">{title}</h3>
        <p className="text-cream-100/70 text-sm leading-relaxed flex-1">{text}</p>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors duration-200"
        >
          {linkLabel}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}

export function ThreePillars() {
  const t = useTranslations('Pillars');

  return (
    <section className="py-24 md:py-32 bg-forest-950">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="eyebrow text-gold-400 mb-4">{t('eyebrow')}</p>
          <h2 className="font-display text-display text-cream-50">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PillarCard
            image={images.pillarGolf}
            alt="Golf pálya — mintakép"
            title={t('golfTitle')}
            text={t('golfText')}
            linkLabel={t('golfLink')}
            href="#inquiry"
          />
          <PillarCard
            image={images.pillarFootgolf}
            alt="Footgolf pálya — mintakép"
            title={t('footgolfTitle')}
            text={t('footgolfText')}
            linkLabel={t('footgolfLink')}
            href="#inquiry"
          />
          <PillarCard
            image={images.pillarStay}
            alt="Hotel szoba — mintakép"
            title={t('stayTitle')}
            text={t('stayText')}
            linkLabel={t('stayLink')}
            href={contactInfo.hotelPartnerUrl}
            external
          />
        </div>
      </div>
    </section>
  );
}
