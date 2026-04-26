'use client'

import Link from 'next/link'
import { useLanguage } from '../components/language-provider'
import { privacyApps } from '../lib/privacy'

export default function PrivacyHubPage() {
  const { t, lang } = useLanguage()

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter mb-3">
        {t.privacy.hubTitle}
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl">
        {t.privacy.hubLead}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {privacyApps.map((app) => (
          <li key={app.slug}>
            <Link
              href={`/privacy/${app.slug}`}
              className="block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <p className="font-medium tracking-tight mb-1">{app.name}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                {app.type[lang]}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
