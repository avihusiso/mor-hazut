import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { TRANSLATIONS } from './translations';

export type Lang = 'he' | 'en';

const STORAGE_KEY = 'mor-hazut-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.readInitialLang());
  readonly dir = computed<'rtl' | 'ltr'>(() => (this.lang() === 'he' ? 'rtl' : 'ltr'));
  readonly isHebrew = computed(() => this.lang() === 'he');

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      this.document.documentElement.dir = this.dir();
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.set(this.lang() === 'he' ? 'en' : 'he');
  }

  t(path: string): string {
    const dict = TRANSLATIONS[this.lang()];
    const value = path.split('.').reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);
    return typeof value === 'string' ? value : path;
  }

  pick(pair: { he: string; en: string }): string {
    return pair[this.lang()];
  }

  private readInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'he' || stored === 'en') {
        return stored;
      }
    } catch {}
    return 'he';
  }
}
