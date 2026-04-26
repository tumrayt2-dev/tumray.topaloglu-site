export type Lang = 'tr' | 'en'

export type Translation = {
  nav: {
    home: string
    projects: string
    blog: string
    contact: string
  }
  hero: {
    title: string
    studio: string
    intro: string
  }
  sections: {
    featured: string
    contact: string
  }
  statusLabels: {
    live: string
    closedTest: string
    earlyTest: string
    development: string
  }
  projectActions: {
    visit: string
    contactForAccess: string
    comingSoon: string
  }
  contact: {
    lead: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    linkedinSoon: string
  }
}

export const translations: Record<Lang, Translation> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim',
    },
    hero: {
      title: 'Solo Developer — Games & Web',
      studio: 'Garaj Bilişim',
      intro:
        'Mobil oyunlar ve web uygulamaları üretiyorum. Aynı anda birden fazla projeyi tasarımdan yayına kadar tek başıma götürüyorum.',
    },
    sections: {
      featured: 'Öne Çıkan Projeler',
      contact: 'İletişim',
    },
    statusLabels: {
      live: 'Yayında',
      closedTest: 'Kapalı Test',
      earlyTest: 'Erken Test',
      development: 'Geliştirme',
    },
    projectActions: {
      visit: 'Siteyi Aç',
      contactForAccess: 'Erişim için iletişime geç',
      comingSoon: 'Yakında',
    },
    contact: {
      lead: 'Bir proje hakkında konuşmak veya kapalı test erişimi istemek için bana yazabilirsin.',
      emailLabel: 'E-posta',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      linkedinSoon: 'Yakında',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Solo Developer — Games & Web',
      studio: 'Garaj Bilişim',
      intro:
        'I build mobile games and web apps end-to-end. From design to launch, I run multiple projects on my own.',
    },
    sections: {
      featured: 'Featured Projects',
      contact: 'Contact',
    },
    statusLabels: {
      live: 'Live',
      closedTest: 'Closed Test',
      earlyTest: 'Early Test',
      development: 'In Development',
    },
    projectActions: {
      visit: 'Open Site',
      contactForAccess: 'Contact for access',
      comingSoon: 'Coming soon',
    },
    contact: {
      lead: 'Reach out to discuss a project or to request closed-test access.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      linkedinSoon: 'Coming soon',
    },
  },
}
