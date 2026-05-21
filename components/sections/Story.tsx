import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {images} from '@/lib/images';

export function Story() {
  const t = useTranslations('Story');

  return (
    <section id="story" className="py-24 md:py-32 bg-forest-900">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="eyebrow text-gold-400 mb-4">{t('eyebrow')}</p>
            <h2 className="font-display text-display text-cream-50 mb-8 leading-tight">
              {t('title')}
            </h2>
            <div className="space-y-5 text-cream-100/80 text-lg leading-relaxed">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/60">
            <Image
              src={images.story}
              alt="Bakony tájkép — mintakép"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
