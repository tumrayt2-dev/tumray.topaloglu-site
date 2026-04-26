'use client'

import { useLanguage } from './language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mb-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-2">
        {t.hero.title}
      </h1>
      <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
        {t.hero.studio}
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
        {t.hero.intro}
      </p>
    </section>
  )
}
