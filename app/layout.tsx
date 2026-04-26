import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { LanguageProvider } from './components/language-provider'
import { ThemeProvider } from './components/theme-provider'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tumray Topaloğlu — Mobile Game & Web Developer · Garaj Bilişim',
    template: '%s | Tumray Topaloğlu',
  },
  description:
    'Solo developer building mobile games and web apps. Indie projects under the Garaj Bilişim banner.',
  openGraph: {
    title: 'Tumray Topaloğlu — Mobile Game & Web Developer',
    description:
      'Solo developer building mobile games and web apps. Indie projects under the Garaj Bilişim banner.',
    url: baseUrl,
    siteName: 'Tumray Topaloğlu',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('site-theme');
    var theme = (saved === 'light' || saved === 'dark')
      ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={cx(
        'text-neutral-900 bg-white dark:text-neutral-100 dark:bg-neutral-950',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider>
          <LanguageProvider>
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
              <SpeedInsights />
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
