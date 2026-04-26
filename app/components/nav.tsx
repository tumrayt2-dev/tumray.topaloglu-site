'use client'

import Link from 'next/link'
import { useLanguage } from './language-provider'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const { t } = useLanguage()

  const items = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/#projects', label: t.nav.projects },
    { href: '/blog', label: t.nav.blog },
    { href: '/#contact', label: t.nav.contact },
  ]

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {items.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
