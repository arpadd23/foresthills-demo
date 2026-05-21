'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';
import {Link} from '@/i18n/navigation';
import {LinkButton} from '@/components/ui/Button';
import {LanguageSwitcher} from './LanguageSwitcher';
import {MobileMenu} from './MobileMenu';

export function Header() {
  const t = useTranslations('Header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    {label: t('navGolf'), href: '#golf'},
    {label: t('navFootgolf'), href: '#footgolf'},
    {label: t('navGallery'), href: '#gallery'},
    {label: t('navContact'), href: '#contact'},
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="shrink-0">
          <span className="font-display text-xl md:text-2xl font-semibold text-cream-50 tracking-wide">
            Forest Hills
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Főnavigáció">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream-100/80 hover:text-cream-50 transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <LinkButton href="#inquiry" size="sm" className="hidden md:inline-flex">
            {t('ctaBook')}
          </LinkButton>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
