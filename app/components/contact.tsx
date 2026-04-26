'use client'

import { useLanguage } from './language-provider'

const EMAIL = 'tumray.topaloglu@gmail.com'
const GITHUB_URL = 'https://github.com/tumrayt2-dev'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="mb-16 scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight mb-4">
        {t.sections.contact}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 max-w-2xl">
        {t.contact.lead}
      </p>
      <ul className="flex flex-col gap-2 text-sm">
        <li>
          <span className="text-neutral-500 dark:text-neutral-400 mr-2">
            {t.contact.emailLabel}:
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            {EMAIL}
          </a>
        </li>
        <li>
          <span className="text-neutral-500 dark:text-neutral-400 mr-2">
            {t.contact.githubLabel}:
          </span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            tumrayt2-dev
          </a>
        </li>
        <li>
          <span className="text-neutral-500 dark:text-neutral-400 mr-2">
            {t.contact.linkedinLabel}:
          </span>
          <span className="text-neutral-500 dark:text-neutral-400 italic">
            {t.contact.linkedinSoon}
          </span>
        </li>
      </ul>
    </section>
  )
}
