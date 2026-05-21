'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

type Props = {
  variant?: 'header' | 'mobile';
};

export function LanguageSwitcher({variant = 'header'}: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('LanguageSwitcher');

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, {locale: next as 'hu' | 'en'});
    });
  }

  const containerClass =
    variant === 'mobile'
      ? 'inline-flex items-center gap-1 rounded-full border border-cream-50/20 p-1 text-base'
      : 'inline-flex items-center gap-0.5 rounded-full border border-cream-50/20 p-0.5 text-xs';

  const buttonBase =
    'rounded-full font-medium tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400';
  const buttonSize = variant === 'mobile' ? 'px-4 py-2' : 'px-3 py-1';
  const activeClass = 'bg-cream-50 text-forest-900';
  const idleClass = 'text-cream-100/80 hover:text-cream-50';

  return (
    <div role="group" aria-label={t('label')} className={containerClass}>
      {routing.locales.map((l) => {
        const isActive = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            disabled={isPending}
            aria-current={isActive ? 'true' : undefined}
            className={`${buttonBase} ${buttonSize} ${isActive ? activeClass : idleClass}`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
