'use client'

import Link from 'next/link'
import { use } from 'react'
import { useLanguage } from '../../components/language-provider'
import { getPrivacyApp, type AdditionalSection } from '../../lib/privacy'
import type { Lang } from '../../lib/i18n'

type Props = { params: Promise<{ app: string }> }

export default function PrivacyAppPage({ params }: Props) {
  const { app: slug } = use(params)
  const { t, lang } = useLanguage()
  const app = getPrivacyApp(slug)

  if (!app) {
    return (
      <section>
        <p className="text-neutral-700 dark:text-neutral-300">
          {t.privacy.notFound}
        </p>
        <Link
          href="/privacy"
          className="inline-block mt-4 text-sm underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4"
        >
          {t.privacy.backToHub}
        </Link>
      </section>
    )
  }

  return (
    <section>
      <Link
        href="/privacy"
        className="inline-block mb-6 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        {t.privacy.backToHub}
      </Link>

      <h1 className="text-2xl font-semibold tracking-tighter mb-2">
        {app.name}
      </h1>
      <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
        {app.type[lang]}
      </p>

      <dl className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm mb-8">
        <dt className="text-neutral-500 dark:text-neutral-400">
          {t.privacy.publisher}:
        </dt>
        <dd className="text-neutral-700 dark:text-neutral-300">
          {app.publisher}
        </dd>
        <dt className="text-neutral-500 dark:text-neutral-400">
          {t.privacy.effectiveDate}:
        </dt>
        <dd className="text-neutral-700 dark:text-neutral-300">
          {typeof app.effectiveDate === 'string'
            ? app.effectiveDate
            : app.effectiveDate[lang]}
        </dd>
      </dl>

      <PolicySection heading={t.privacy.sections.intro}>
        <p>{app.intro[lang]}</p>
      </PolicySection>

      <PolicySection heading={t.privacy.sections.dataCollected}>
        <ul className="list-disc pl-5 space-y-1">
          {app.locallyStored[lang].map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </PolicySection>

      <PolicySection heading={t.privacy.sections.thirdParties}>
        <ul className="space-y-3">
          {app.thirdParties.map((tp, i) => (
            <li key={i}>
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {tp.name}
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                {tp.body[lang]}
              </p>
            </li>
          ))}
        </ul>
      </PolicySection>

      {app.additionalSections?.map((section, i) => (
        <ExtraSection key={i} section={section} lang={lang} />
      ))}

      <PolicySection heading={t.privacy.sections.childrens}>
        <p>{app.childrens ? app.childrens[lang] : t.privacy.childrens}</p>
      </PolicySection>

      <PolicySection heading={t.privacy.sections.rights}>
        <p>{t.privacy.rights}</p>
      </PolicySection>

      <PolicySection heading={t.privacy.sections.changes}>
        <p>{t.privacy.changes}</p>
      </PolicySection>

      <PolicySection heading={t.privacy.sections.contact}>
        <p className="mb-2">{t.privacy.contactLine}</p>
        <a
          href={`mailto:${app.contactEmail}`}
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          {app.contactEmail}
        </a>
      </PolicySection>
    </section>
  )
}

function PolicySection({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-medium tracking-tight mb-3">{heading}</h2>
      <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function ExtraSection({
  section,
  lang,
}: {
  section: AdditionalSection
  lang: Lang
}) {
  return (
    <PolicySection heading={section.heading[lang]}>
      {'paragraph' in section ? (
        <p>{section.paragraph[lang]}</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {section.list[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </PolicySection>
  )
}
