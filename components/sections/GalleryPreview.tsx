import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {images} from '@/lib/images';

export function GalleryPreview() {
  const t = useTranslations('Gallery');

  const alts = [
    t('alt1'),
    t('alt2'),
    t('alt3'),
    t('alt4'),
    t('alt5'),
    t('alt6'),
  ] as const;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-forest-950">
      <div className="container-page">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="eyebrow text-gold-400 mb-3">{t('eyebrow')}</p>
            <h2 className="font-display text-display text-cream-50">{t('title')}</h2>
          </div>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors duration-200"
          >
            {t('linkAll')}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative w-full ${i === 0 ? 'aspect-[4/5] md:h-full' : 'aspect-[4/3]'}`}>
                <Image
                  src={src}
                  alt={alts[i] ?? 'Mintakép'}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  quality={70}
                />
                <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
