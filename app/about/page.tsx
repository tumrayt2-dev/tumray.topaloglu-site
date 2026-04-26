'use client'

import { useLanguage } from '../components/language-provider'

const SITE_URL = 'https://tumraytopaloglu.com'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter mb-6">
        {t.about.title}
      </h1>

      <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2 className="text-lg font-medium tracking-tight mt-8 mb-3">
        {t.about.projectsHeading}
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
        {t.about.projects.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <p className="mt-6 text-neutral-700 dark:text-neutral-300">
        {t.about.stack}
      </p>

      <p className="mt-2 text-sm">
        <span className="text-neutral-500 dark:text-neutral-400 mr-2">
          {t.about.webLabel}:
        </span>
        <a
          href={SITE_URL}
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          tumraytopaloglu.com
        </a>
      </p>
    </section>
  )
}
