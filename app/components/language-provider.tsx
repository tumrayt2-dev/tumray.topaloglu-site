'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Lang, type Translation } from '../lib/i18n'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translation
}

const LanguageContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'site-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr')

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (saved === 'tr' || saved === 'en') {
      setLangState(saved)
      return
    }
    const browser = window.navigator.language.toLowerCase()
    setLangState(browser.startsWith('tr') ? 'tr' : 'en')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
