'use client';

import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';
import {Link} from '@/i18n/navigation';
import {LanguageSwitcher} from './LanguageSwitcher';

type NavItem = {label: string; href: string};

type Props = {
  items: NavItem[];
};

export function MobileMenu({items}: Props) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Header');

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('menuOpen')}
        className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-full text-cream-50 hover:bg-cream-50/10 transition-colors"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label={t('menuClose')}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-forest-950/90 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 bg-forest-800 border-b border-cream-50/10 shadow-xl">
            <div className="container-page flex items-center justify-between py-4">
              <span className="font-display text-lg text-cream-50">Forest Hills</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('menuClose')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cream-50 hover:bg-cream-50/10 transition-colors"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav className="container-page pb-8">
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg font-display text-cream-50 hover:text-gold-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-cream-50/10">
                <LanguageSwitcher variant="mobile" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
