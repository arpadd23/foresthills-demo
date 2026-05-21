import {useTranslations} from 'next-intl';

type StatProps = {
  value: string;
  label: string;
};

function StatBlock({value, label}: StatProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <span className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream-50 mb-2 tabular-nums">
        {value}
      </span>
      <span className="text-sm uppercase tracking-widest text-gold-400 font-medium">{label}</span>
    </div>
  );
}

export function CourseStats() {
  const t = useTranslations('Stats');

  return (
    <section className="py-20 md:py-24 bg-forest-900 border-y border-cream-50/5">
      <div className="container-page">
        <div className="text-center mb-12">
          <p className="eyebrow text-gold-400 mb-3">{t('eyebrow')}</p>
          <h2 className="font-display text-display text-cream-50">{t('title')}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-cream-50/10">
          <StatBlock value={t('holesValue')} label={t('holes')} />
          <StatBlock value={t('parValue')} label={t('par')} />
          <StatBlock value={t('lengthValue')} label={t('length')} />
          <StatBlock value={t('hazardsValue')} label={t('hazards')} />
        </div>
      </div>
    </section>
  );
}
