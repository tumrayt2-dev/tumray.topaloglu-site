import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { LanguageProvider } from './components/language-provider'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Tumray Topaloğlu — Solo Developer · Garaj Bilişim',
    template: '%s | Tumray Topaloğlu',
  },
  description:
    'Solo developer building mobile games and web apps. Indie projects under the Garaj Bilişim banner.',
  openGraph: {
    title: 'Tumray Topaloğlu — Solo Developer',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="tr"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <LanguageProvider>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}
