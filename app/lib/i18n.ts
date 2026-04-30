export type Lang = 'tr' | 'en'

export type Translation = {
  nav: {
    home: string
    about: string
    projects: string
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
    playStore: string
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
  privacy: {
    hubTitle: string
    hubLead: string
    backToHub: string
    appType: string
    effectiveDate: string
    publisher: string
    sections: {
      intro: string
      dataCollected: string
      thirdParties: string
      childrens: string
      rights: string
      changes: string
      contact: string
      notes: string
    }
    intro: string
    childrens: string
    rights: string
    changes: string
    contactLine: string
    footerLink: string
    notFound: string
  }
}

export const translations: Record<Lang, Translation> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
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
      playStore: 'Play Store\'da Aç',
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
        'Ember Wings — Mobil oyun (Play Store\'da yayında)',
        'Taboo Rush — Mobil oyun (Play Store\'da yayında)',
        'Emojice — Mobil oyun (erken test)',
        'Workflow SaaS — Çok kiracılı web platformu (geliştirme)',
      ],
      stack: 'Stack: Flutter, Unity, .NET, React, Next.js, PostgreSQL, SQL Server.',
      webLabel: 'Web',
    },
    privacy: {
      hubTitle: 'Gizlilik Politikaları',
      hubLead: 'Garaj Bilişim çatısı altında yayınlanan ve test aşamasındaki uygulamaların gizlilik politikalarına buradan ulaşabilirsiniz.',
      backToHub: '← Tüm Politikalar',
      appType: 'Tür',
      effectiveDate: 'Yürürlük Tarihi',
      publisher: 'Yayıncı',
      sections: {
        intro: 'Genel',
        dataCollected: 'Toplanan Veriler',
        thirdParties: 'Üçüncü Taraf Hizmetler',
        childrens: 'Çocukların Gizliliği',
        rights: 'Haklarınız',
        changes: 'Değişiklikler',
        contact: 'İletişim',
        notes: 'Ek Notlar',
      },
      intro: 'Bu politika, uygulamanın hangi verileri topladığını, bu verilerin nasıl kullanıldığını ve hangi üçüncü taraf hizmetlerin devreye girdiğini açıklar. Verileriniz reklam ve temel işlevler dışında pazarlama amacıyla satılmaz.',
      childrens: 'Uygulamamız 13 yaş altındaki kullanıcıları hedef almaz. Yanlışlıkla 13 yaş altı bir kullanıcıdan veri topladığımızı öğrenirsek, bu veriyi en kısa sürede sileriz. Ebeveyn veya vasi olarak böyle bir durumdan haberdarsanız bize ulaşabilirsiniz.',
      rights: 'KVKK ve GDPR kapsamında verilerinize erişim, düzeltme, silme ve işlemeye itiraz haklarınız bulunmaktadır. Bu hakları kullanmak için aşağıdaki iletişim bilgisinden bize ulaşabilirsiniz.',
      changes: 'Bu politika zaman zaman güncellenebilir. Önemli değişiklikleri uygulama içinde veya bu sayfada duyuracağız. Yürürlük tarihi her güncellemede yenilenir.',
      contactLine: 'Sorularınız veya talepleriniz için bize aşağıdaki adresten ulaşabilirsiniz:',
      footerLink: 'Gizlilik Politikaları',
      notFound: 'Aradığınız politika bulunamadı.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
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
      playStore: 'Open in Play Store',
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
        'Ember Wings — Mobile game (live on Play Store)',
        'Taboo Rush — Mobile game (live on Play Store)',
        'Emojice — Mobile game (early test)',
        'Workflow SaaS — Multi-tenant web platform (in development)',
      ],
      stack: 'Stack: Flutter, Unity, .NET, React, Next.js, PostgreSQL, SQL Server.',
      webLabel: 'Web',
    },
    privacy: {
      hubTitle: 'Privacy Policies',
      hubLead: 'Privacy policies for apps published or in testing under the Garaj Bilişim banner.',
      backToHub: '← All Policies',
      appType: 'Type',
      effectiveDate: 'Effective Date',
      publisher: 'Publisher',
      sections: {
        intro: 'Overview',
        dataCollected: 'Data We Collect',
        thirdParties: 'Third-Party Services',
        childrens: 'Children\'s Privacy',
        rights: 'Your Rights',
        changes: 'Changes',
        contact: 'Contact',
        notes: 'Additional Notes',
      },
      intro: 'This policy explains what data the app collects, how it\'s used and which third-party services are involved. Your data is not sold for marketing purposes beyond the advertising and core functionality described below.',
      childrens: 'This app is not directed to users under 13. If we learn we have collected data from a user under 13, we will delete it as soon as possible. Parents or guardians who suspect this can contact us at the address below.',
      rights: 'Under KVKK (Turkey) and GDPR (EU) you have the right to access, correct, delete and object to the processing of your data. To exercise these rights, contact us using the address below.',
      changes: 'This policy may be updated from time to time. Significant changes will be announced in-app or on this page. The effective date is updated with every revision.',
      contactLine: 'For questions or requests, reach us at:',
      footerLink: 'Privacy Policies',
      notFound: 'The requested policy could not be found.',
    },
  },
}
