'use client';

import {useTranslations} from 'next-intl';
import {FormEvent, useState} from 'react';
import {Button} from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success';

export function InquiryWidget() {
  const t = useTranslations('Inquiry');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/api/inquiry', {method: 'POST'});
    } catch {
      // mock — always show success
    }
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <section id="inquiry" className="bg-forest-950 py-16 md:py-20">
        <div className="container-page max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold-400"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream-50 mb-4">
            {t('successTitle')}
          </h2>
          <p className="text-cream-100/80 mb-8">{t('successText')}</p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-sm text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors"
          >
            {t('successAgain')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="bg-forest-950 py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-10">
          <p className="eyebrow text-gold-400 mb-3">{t('eyebrow')}</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream-50 mb-3">{t('title')}</h2>
          <p className="text-cream-100/70">{t('subtitle')}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-forest-800 border border-cream-50/10 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-type" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelType')}
              </label>
              <select
                id="inq-type"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors appearance-none"
              >
                <option value="golf">{t('typeGolf')}</option>
                <option value="footgolf">{t('typeFootgolf')}</option>
                <option value="stay">{t('typeStay')}</option>
                <option value="event">{t('typeEvent')}</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-date" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelDate')}
              </label>
              <input
                id="inq-date"
                type="date"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-guests" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelGuests')}
              </label>
              <select
                id="inq-guests"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors appearance-none"
              >
                <option value="1">{t('guestsOne')}</option>
                <option value="2">{t('guestsTwo')}</option>
                <option value="3">{t('guestsThree')}</option>
                <option value="4">{t('guestsFour')}</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-time" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelTime')}
              </label>
              <select
                id="inq-time"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors appearance-none"
              >
                <option value="morning">{t('timeMorning')}</option>
                <option value="midday">{t('timeMidday')}</option>
                <option value="afternoon">{t('timeAfternoon')}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-name" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelName')}
              </label>
              <input
                id="inq-name"
                type="text"
                autoComplete="name"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm placeholder:text-cream-100/30 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-email" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelEmail')}
              </label>
              <input
                id="inq-email"
                type="email"
                autoComplete="email"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm placeholder:text-cream-100/30 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="inq-phone" className="text-xs font-medium text-cream-100/80 uppercase tracking-wider">
                {t('labelPhone')}
              </label>
              <input
                id="inq-phone"
                type="tel"
                autoComplete="tel"
                className="h-11 rounded-lg border border-cream-50/15 bg-forest-900/60 px-3 text-cream-50 text-sm placeholder:text-cream-100/30 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:border-gold-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5 justify-end">
              <Button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full h-11"
              >
                {status === 'submitting' ? t('submitting') : t('submit')}
              </Button>
            </div>
          </div>

          <p className="mt-2 text-xs text-cream-100/40 italic">{t('demoNote')}</p>
        </form>
      </div>
    </section>
  );
}
