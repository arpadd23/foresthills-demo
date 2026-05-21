import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {LinkButton} from '@/components/ui/Button';
import {images} from '@/lib/images';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-svh min-h-[600px] flex items-end pb-20 md:pb-28 overflow-hidden">
      <Image
        src={images.hero}
        alt="Bakony tájkép — mintakép"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,31,21,0.85) 0%, rgba(10,31,21,0.5) 45%, rgba(10,31,21,0.15) 100%)',
        }}
      />

      <div className="container-page relative z-10 max-w-3xl">
        <p className="eyebrow text-gold-400 mb-4">{t('eyebrow')}</p>
        <h1 className="text-display-lg font-display font-semibold text-cream-50 mb-6 leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-cream-100/90 mb-10 max-w-xl leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex flex-wrap gap-4">
          <LinkButton href="#inquiry" size="lg">
            {t('primaryCta')}
          </LinkButton>
          <LinkButton href="#story" variant="secondary" size="lg">
            {t('secondaryCta')}
          </LinkButton>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Görgetés lefelé"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream-50/60 hover:text-cream-50 transition-colors duration-200"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Tovább</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="animate-bounce"
        >
          <path
            d="M10 4v12M5 11l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
