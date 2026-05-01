import type { Lang } from './i18n'

export type ProjectStatus = 'live' | 'closedTest' | 'earlyTest' | 'development'
export type ProjectAction = 'visit' | 'playStore' | 'contactForAccess' | 'comingSoon'

export type Project = {
  slug: string
  name: string
  category: { tr: string; en: string }
  description: { tr: string; en: string }
  status: ProjectStatus
  action: ProjectAction
  href?: string
}

export const featuredProjects: Project[] = [
  {
    slug: 'trakyaoto',
    name: 'Trakyaoto Yedek Parça',
    category: { tr: 'E-Ticaret', en: 'E-Commerce' },
    description: {
      tr: 'Trakya bölgesine yönelik otomotiv yedek parça e-ticaret sitesi. Tasarım, geliştirme ve yayında.',
      en: 'Automotive spare parts e-commerce site serving the Trakya region. Designed, built and shipped.',
    },
    status: 'live',
    action: 'visit',
    href: 'https://trakyaotoyedekparca.com/',
  },
  {
    slug: 'ember-wings',
    name: 'Ember Wings',
    category: { tr: 'Mobil Oyun', en: 'Mobile Game' },
    description: {
      tr: '4 farklı biyomda geçen, refleks odaklı bir kuş oyunu. Google Play\'de yayında.',
      en: 'A reflex-based flying game across four biomes. Now live on Google Play.',
    },
    status: 'live',
    action: 'playStore',
    href: 'https://play.google.com/store/apps/details?id=com.tumray.emberwings',
  },
  {
    slug: 'taboo-rush',
    name: 'Taboo Rush',
    category: { tr: 'Mobil Oyun', en: 'Mobile Game' },
    description: {
      tr: 'Türkçe tabu oyunu. Klasik mod ve penaltı modu ile tur bazlı eğlenceli bir parti deneyimi. Google Play\'de yayında.',
      en: 'Turkish taboo game with classic and penalty modes — a turn-based party experience. Now live on Google Play.',
    },
    status: 'live',
    action: 'playStore',
    href: 'https://play.google.com/store/apps/details?id=com.tumray.taboo_rush',
  },
  {
    slug: 'bulmaca-ustasi',
    name: 'Bulmaca Ustası',
    category: { tr: 'Mobil Bulmaca', en: 'Mobile Puzzle' },
    description: {
      tr: 'Sudoku, Nonogram, Atasözü ve Kelime Bulmaca türlerini tek uygulamada toplayan all-in-one bulmaca. Günlük meydan, istatistikler ve dark tema. Şu an Play Console kapalı test aşamasında.',
      en: 'An all-in-one puzzle app combining Sudoku, Nonogram, Proverb and Word Search, with a daily challenge, stats and dark theme. Currently in Play Console closed testing.',
    },
    status: 'closedTest',
    action: 'contactForAccess',
  },
  {
    slug: 'emojice',
    name: 'Emojice',
    category: { tr: 'Mobil Oyun', en: 'Mobile Game' },
    description: {
      tr: 'Emojilerden ipucu bularak kelime tahmin etme oyunu. 20+ kategori, kademeli kilit sistemi. Erken test aşamasında.',
      en: 'Guess the word from emoji clues. 20+ categories with a tiered unlock system. In early testing.',
    },
    status: 'earlyTest',
    action: 'contactForAccess',
  },
  {
    slug: 'workflow-saas',
    name: 'Workflow SaaS',
    category: { tr: 'Web SaaS', en: 'Web SaaS' },
    description: {
      tr: 'Çok kiracılı (multi-tenant) onay akışı yönetim platformu. .NET 9 + React altyapısı, geliştirme aşamasında.',
      en: 'Multi-tenant approval workflow platform built on .NET 9 + React. In active development.',
    },
    status: 'development',
    action: 'comingSoon',
  },
]

export function projectCategoryLabel(p: Project, lang: Lang) {
  return p.category[lang]
}

export function projectDescription(p: Project, lang: Lang) {
  return p.description[lang]
}
