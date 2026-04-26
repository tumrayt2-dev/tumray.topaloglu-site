'use client'

import { useLanguage } from './language-provider'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
      className="text-sm tracking-tight px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors uppercase"
      aria-label="Toggle language"
    >
      {lang === 'tr' ? 'EN' : 'TR'}
    </button>
  )
}
