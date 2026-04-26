export type Lang = 'tr' | 'en'

export type Translation = {
  nav: {
    home: string
    about: string
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
  about: {
    title: string
    paragraphs: string[]
    projectsHeading: string
    projects: string[]
    stack: string
    webLabel: string
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
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim',
    },
    hero: {
      title: 'Mobile Game & Web Developer',
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
    about: {
      title: 'Hakkımda',
      paragraphs: [
        'Fırat Üniversitesi Yazılım Mühendisliği mezunuyum. Üniversite yıllarımda C++, C#, HTML, CSS ve SQL Server ile çeşitli projeler geliştirdim. Son sınıfta Turkcell Geleceği Yazanlar .NET Bootcamp\'ine katılarak Turkcell\'de staj yapma fırsatı yakaladım.',
        'Stajımın ardından Turkcell Grubu şirketlerinden Atmosware\'de Developer olarak göreve başladım ve Şubat 2025\'e kadar bu pozisyonda çalıştım.',
        'Şubat 2025\'ten itibaren Garaj Bilişim çatısı altında bağımsız olarak çalışıyorum. Mobil oyunlar ve web uygulamaları geliştiriyorum; tasarım, geliştirme, yayın ve canlı operasyonlar dahil tüm süreci tek başıma yürütüyorum.',
      ],
      projectsHeading: 'Yayında ve test aşamasındaki projeler',
      projects: [
        'Trakyaoto Yedek Parça — E-ticaret (yayında)',
        'Ember Wings — Mobil oyun (kapalı test)',
        'Taboo Rush — Mobil oyun (kapalı test)',
        'Emojice — Mobil oyun (erken test)',
        'Workflow SaaS — Çok kiracılı web platformu (geliştirme)',
      ],
      stack: 'Stack: Flutter, Unity, .NET, React, Next.js, PostgreSQL, SQL Server.',
      webLabel: 'Web',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Mobile Game & Web Developer',
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
    about: {
      title: 'About',
      paragraphs: [
        'I\'m a graduate of Fırat University, Software Engineering. During my studies I worked with C++, C#, HTML, CSS and SQL Server. In my senior year I joined the Turkcell Geleceği Yazanlar .NET Bootcamp, which led to an internship at Turkcell.',
        'After the internship I joined Atmosware (a Turkcell Group company) as a Developer and worked there until February 2025.',
        'Since February 2025 I\'ve been working independently under the Garaj Bilişim banner, building mobile games and web apps end-to-end — design, development, release and live ops.',
      ],
      projectsHeading: 'Live and in-testing projects',
      projects: [
        'Trakyaoto Yedek Parça — E-commerce (live)',
        'Ember Wings — Mobile game (closed test)',
        'Taboo Rush — Mobile game (closed test)',
        'Emojice — Mobile game (early test)',
        'Workflow SaaS — Multi-tenant web platform (in development)',
      ],
      stack: 'Stack: Flutter, Unity, .NET, React, Next.js, PostgreSQL, SQL Server.',
      webLabel: 'Web',
    },
  },
}
