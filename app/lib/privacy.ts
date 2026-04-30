export type LocalizedString = { tr: string; en: string }
export type LocalizedList = { tr: string[]; en: string[] }

export type ThirdParty = {
  name: string
  body: LocalizedString
}

export type AdditionalSection =
  | { heading: LocalizedString; paragraph: LocalizedString }
  | { heading: LocalizedString; list: LocalizedList }

export type PrivacyApp = {
  slug: string
  name: string
  type: LocalizedString
  effectiveDate: string | LocalizedString
  contactEmail: string
  publisher: string
  intro: LocalizedString
  locallyStored: LocalizedList
  thirdParties: ThirdParty[]
  additionalSections?: AdditionalSection[]
  childrens?: LocalizedString
}

const COMMON_EMAIL = 'tumray.topaloglu@gmail.com'
const PUBLISHER = 'Garaj Bilişim'

const GOOGLE_PRIVACY_URL = 'https://policies.google.com/privacy'

export const privacyApps: PrivacyApp[] = [
  // Ember Wings
  {
    slug: 'ember-wings',
    name: 'Ember Wings',
    type: { tr: 'Mobil Oyun (Android)', en: 'Mobile Game (Android)' },
    effectiveDate: '2026-04-11',
    contactEmail: COMMON_EMAIL,
    publisher: PUBLISHER,
    intro: {
      tr: 'Ember Wings ("Uygulama"), bağımsız olarak geliştirilmiş bir mobil oyundur. Kullanıcı gizliliğine saygılıdır ve yalnızca oyun deneyimini sağlamak için gerekli olan verileri kullanır. Bu politika; hangi verilerin toplandığını, nasıl kullanıldığını ve hangi üçüncü taraf hizmetlerin devrede olduğunu açıklar.',
      en: 'Ember Wings ("the App") is an independently developed mobile game. We respect user privacy and only use data necessary to provide the game experience. This policy explains what data is collected, how it is used, and which third-party services are involved.',
    },
    locallyStored: {
      tr: [
        'En yüksek skor',
        'Karakter sahipliği ve seçilen karakter',
        'Deneme hakkı ve oturum bilgileri',
        'Reklamsız paket durumu',
        'Ses ve müzik tercihleri',
      ],
      en: [
        'High score',
        'Character ownership and selected character',
        'Continue attempts and session info',
        'Ad-free pack status',
        'Sound and music preferences',
      ],
    },
    thirdParties: [
      {
        name: 'Google AdMob (Ödüllü Reklamlar)',
        body: {
          tr: 'Oyuncunun isteğe bağlı izlediği ödüllü videolar AdMob aracılığıyla sunulur. AdMob, reklam kişiselleştirmesi için Android Reklam Kimliği (AAID), cihaz modeli, işletim sistemi sürümü ve kaba konum (ülke düzeyi) bilgilerini kullanabilir. Daha fazlası: policies.google.com/privacy.',
          en: 'Optional rewarded video ads are served through AdMob. AdMob may use the Android Advertising ID (AAID), device model, OS version and coarse (country-level) location to personalize ads. More: policies.google.com/privacy.',
        },
      },
      {
        name: 'Google Play Billing',
        body: {
          tr: 'Uygulama içi satın alımlar Google Play Billing üzerinden işlenir. Ödeme bilgileri (kart numarası, fatura adresi vb.) doğrudan Google tarafından yönetilir, bize iletilmez.',
          en: 'In-app purchases are processed by Google Play Billing. Payment details (card number, billing address, etc.) are handled entirely by Google and are never shared with us.',
        },
      },
      {
        name: 'Google Play Games Services',
        body: {
          tr: 'Liderlik tablosu özelliği için Google Play Games Services kullanılır. Giriş yaparsanız Google hesabınız ile oyun skorlarınız eşleştirilir. Bu özellik isteğe bağlıdır.',
          en: 'The leaderboard feature uses Google Play Games Services. If you sign in, your Google account is linked to your game scores. This feature is optional.',
        },
      },
      {
        name: 'Firebase Crashlytics',
        body: {
          tr: 'Uygulamadaki kilitlenmeleri tespit edip düzeltmek için kullanılır. Anonim çökme raporları, cihaz modeli, işletim sistemi sürümü ve yığın izi (stack trace) toplar. Kişisel kimlik bilgisi toplamaz.',
          en: 'Used to detect and fix crashes. Collects anonymous crash reports, device model, OS version and stack traces. No personally identifying information is collected.',
        },
      },
      {
        name: 'Firebase Analytics',
        body: {
          tr: 'Anonim kullanım istatistikleri toplanır (oyun başladı, oyun bitti, seçilen karakter, ödüllü reklam izlendi). Veriler toplu halde analiz edilir, bireysel kullanıcı izleme yapılmaz.',
          en: 'Anonymous usage statistics are collected (game start, game over, character selected, rewarded ad watched). Data is analyzed in aggregate; no individual user tracking is performed.',
        },
      },
    ],
    additionalSections: [
      {
        heading: { tr: 'Reklam Kimliği (AD_ID)', en: 'Advertising ID (AD_ID)' },
        paragraph: {
          tr: 'Uygulama, AdMob reklamları için Android Reklam Kimliği\'ni kullanır. Bu kimliği cihaz ayarlarınızdan sıfırlayabilir veya kişiselleştirilmiş reklamları kapatabilirsiniz: Ayarlar → Google → Reklamlar.',
          en: 'The App uses the Android Advertising ID for AdMob ads. You can reset this ID or opt out of personalized ads from device settings: Settings → Google → Ads.',
        },
      },
      {
        heading: {
          tr: 'Veri Aktarımı ve Güvenlik',
          en: 'Data Transmission and Security',
        },
        paragraph: {
          tr: 'Üçüncü taraf hizmetlerle yapılan tüm veri alışverişi HTTPS üzerinden şifreli olarak gerçekleşir.',
          en: 'All data exchange with third-party services is encrypted via HTTPS.',
        },
      },
      {
        heading: {
          tr: 'Veri Silme Talebi',
          en: 'Data Deletion Requests',
        },
        paragraph: {
          tr: 'Cihazda saklanan tüm verileri silmek için uygulamayı kaldırmanız yeterlidir. AdMob / Firebase tarafında toplanan anonim verilerin silinmesi için Google\'ın ilgili politikaları geçerlidir; ek olarak bize e-posta ile talep iletebilirsiniz.',
          en: 'To delete all locally stored data, simply uninstall the App. For anonymous data collected by AdMob / Firebase, Google\'s relevant policies apply; you may also contact us via email.',
        },
      },
    ],
    childrens: {
      tr: 'Ember Wings özellikle çocuklara yönelik bir uygulama değildir ve 13 yaş altı kullanıcılardan bilerek veri toplamaz. 13 yaşın altındaysanız uygulamayı kullanmadan önce ebeveyninizden izin alınız.',
      en: 'Ember Wings is not specifically directed to children and does not knowingly collect data from users under 13. If you are under 13, please obtain parental consent before using the App.',
    },
  },

  // Taboo Rush
  {
    slug: 'taboo-rush',
    name: 'Taboo Rush',
    type: { tr: 'Mobil Oyun (Android)', en: 'Mobile Game (Android)' },
    effectiveDate: '2026-04-10',
    contactEmail: COMMON_EMAIL,
    publisher: PUBLISHER,
    intro: {
      tr: 'Taboo Rush ("Uygulama"), kullanıcılarının gizliliğine saygı duymaktadır. Bu gizlilik politikası, uygulamanın hangi verileri topladığını, nasıl kullandığını ve koruduğunu açıklar.',
      en: 'Taboo Rush ("the App") respects user privacy. This privacy policy explains what data the App collects, how it is used and how it is protected.',
    },
    locallyStored: {
      tr: [
        'Oyun ayarları (tur süresi, puan değerleri, bahis modu tercihi)',
        'Kelime paketi kilit açma durumları',
      ],
      en: [
        'Game settings (round duration, scoring values, betting-mode preference)',
        'Word-pack unlock states',
      ],
    },
    thirdParties: [
      {
        name: 'Google AdMob',
        body: {
          tr: 'Ödüllü reklamlar göstermek için kullanılır. AdMob, reklam kişiselleştirme amacıyla cihaz tanımlayıcıları ve kullanım verileri toplayabilir. Detaylar için policies.google.com/privacy.',
          en: 'Used to serve rewarded ads. AdMob may collect device identifiers and usage data for ad personalization. Details at policies.google.com/privacy.',
        },
      },
      {
        name: 'Google Play Billing',
        body: {
          tr: 'Uygulama içi satın almalar Google Play Billing üzerinden gerçekleştirilir. Ödeme bilgileriniz Google tarafından işlenir, uygulama tarafından saklanmaz.',
          en: 'In-app purchases are handled via Google Play Billing. Your payment details are processed by Google and are not stored by the App.',
        },
      },
    ],
    additionalSections: [
      {
        heading: { tr: 'Kişisel Bilgiler', en: 'Personal Information' },
        paragraph: {
          tr: 'Taboo Rush; isim, e-posta, telefon numarası veya benzeri kişisel bilgileri talep etmez ve toplamaz. Uygulama hesap oluşturmayı veya giriş yapmayı gerektirmez.',
          en: 'Taboo Rush does not request or collect names, emails, phone numbers or any similar personal information. The App does not require an account or sign-in.',
        },
      },
      {
        heading: { tr: 'Veri Güvenliği', en: 'Data Security' },
        paragraph: {
          tr: 'Tüm oyun verileri yalnızca cihazınızda yerel olarak (Hive üzerinden) saklanır. Sunucu tarafına veri aktarımı yapılmaz. Üçüncü taraf hizmetlerin (AdMob, Google Play) veri güvenliği, ilgili şirketlerin gizlilik politikalarına tabidir.',
          en: 'All game data is stored only locally on your device (via Hive). No data is transferred to any server we operate. Data security for third-party services (AdMob, Google Play) is governed by their respective privacy policies.',
        },
      },
    ],
    childrens: {
      tr: 'Taboo Rush, doğrudan 13 yaşın altındaki çocuklara yönelik değildir ve 13 yaş altı kullanıcılardan bilerek kişisel veri toplamaz. Ebeveynler veya vasiler, çocuklarının kişisel bilgi sağladığını fark ederlerse bizimle iletişime geçebilir.',
      en: 'Taboo Rush is not directed to children under 13 and does not knowingly collect personal data from users under 13. Parents or guardians who suspect their child has provided personal information may contact us.',
    },
  },

  // Emojice
  {
    slug: 'emojice',
    name: 'Emojice',
    type: { tr: 'Mobil Oyun (Android)', en: 'Mobile Game (Android)' },
    effectiveDate: '2026-04-25',
    contactEmail: COMMON_EMAIL,
    publisher: PUBLISHER,
    intro: {
      tr: 'Emojice ("Uygulama"), bağımsız olarak geliştirilmiş ücretsiz bir mobil oyundur. Bu politika, uygulamayı kullanırken hangi verilerin toplandığını ve nasıl kullanıldığını açıklar.',
      en: 'Emojice ("the App") is a free, independently developed mobile game. This policy explains what data is collected when you use the App and how it is used.',
    },
    locallyStored: {
      tr: [
        'Çözdüğünüz bulmacaların ID listesi ve yıldız sayıları',
        'Toplam puanınız ve bakiye jetonlarınız',
        'Açtığınız başarımlar',
        'İzlediğiniz reklam sayaçları (kategori açma için)',
        'Onboarding ve dev mod tercihleri',
      ],
      en: [
        'IDs of solved puzzles and earned stars',
        'Total score and token balance',
        'Unlocked achievements',
        'Watched ad counters (used for category unlocks)',
        'Onboarding and dev-mode preferences',
      ],
    },
    thirdParties: [
      {
        name: 'Google AdMob',
        body: {
          tr: 'Reklam göstermek için kullanılır. AdMob; cihaz tanımlayıcısı (Advertising ID), IP adresi, cihaz bilgileri (model, işletim sistemi) ve reklam etkileşimlerinizi toplayabilir. Detay: policies.google.com/privacy. Reklamları kaldırmak için "Premium Paket" satın alabilirsiniz.',
          en: 'Used to display ads. AdMob may collect your device identifier (Advertising ID), IP address, device info (model, OS) and ad interactions. Details at policies.google.com/privacy. You can remove ads by purchasing the Premium Pack.',
        },
      },
      {
        name: 'Google Play Billing',
        body: {
          tr: 'Premium Paket veya jeton satın alımları Google Play tarafından işlenir. Ödeme bilgileriniz Emojice tarafından görülmez veya saklanmaz. Detay: play.google.com/about/play-terms.',
          en: 'Premium Pack and token purchases are handled by Google Play. Your payment details are never seen or stored by Emojice. Details at play.google.com/about/play-terms.',
        },
      },
    ],
    additionalSections: [
      {
        heading: { tr: 'İzinler', en: 'Permissions' },
        list: {
          tr: [
            'INTERNET — reklam yüklemek için',
            'ACCESS_NETWORK_STATE — bağlantı durumunu kontrol etmek için',
          ],
          en: [
            'INTERNET — to load ads',
            'ACCESS_NETWORK_STATE — to check connectivity',
          ],
        },
      },
      {
        heading: { tr: 'Verilerin Paylaşımı', en: 'Data Sharing' },
        paragraph: {
          tr: 'Toplanan reklam verileri yalnızca Google AdMob ile paylaşılır. Üçüncü taraflarla başka veri paylaşımı yapılmaz.',
          en: 'Collected ad data is shared only with Google AdMob. No other data is shared with third parties.',
        },
      },
    ],
    childrens: {
      tr: 'Emojice 13 yaş altı kullanıcılardan bilinçli olarak veri toplamaz. AdMob politikasına göre reklamlar yaşa uygun gösterilir.',
      en: 'Emojice does not knowingly collect data from users under 13. Ads are shown in accordance with AdMob age-appropriate policies.',
    },
  },

  // Bulmaca Ustası
  {
    slug: 'bulmaca_ustasi',
    name: 'Bulmaca Ustası',
    type: { tr: 'Mobil Bulmaca (Android)', en: 'Mobile Puzzle (Android)' },
    effectiveDate: '2026-04-30',
    contactEmail: COMMON_EMAIL,
    publisher: PUBLISHER,
    intro: {
      tr: 'Bulmaca Ustası ("Uygulama"), bağımsız olarak geliştirilmiş bir bulmaca uygulamasıdır. Hesap oluşturmayı gerektirmez; tüm ilerleme ve ayarlar yalnızca cihazınızda saklanır. Bu politika; hangi verilerin toplandığını, nasıl kullanıldığını ve hangi üçüncü taraf hizmetlerin devrede olduğunu açıklar.',
      en: 'Bulmaca Ustası ("the App") is an independently developed puzzle application. It does not require an account; all progress and settings are stored only on your device. This policy explains what data is collected, how it is used and which third-party services are involved.',
    },
    locallyStored: {
      tr: [
        'Oyun ilerlemesi, en iyi süreler, skor ve seriler (atasözü en iyi serisi, nonogram tamamlanan şablonlar vb.)',
        'Uygulama ayarları (tema, ses, yazı boyutu, hata gösterimi, dil, ipucu sayısı, geliştirici modu vb.)',
        'Günlük meydan ilerlemesi',
      ],
      en: [
        'Game progress, best times, scores and streaks (e.g. proverb best streak, completed nonogram templates)',
        'App settings (theme, sound, font size, error display, language, hint count, developer mode, etc.)',
        'Daily challenge progress',
      ],
    },
    thirdParties: [
      {
        name: 'Google AdMob',
        body: {
          tr: 'Banner, geçiş (interstitial) ve ödüllü reklamlar AdMob aracılığıyla sunulur. AdMob; Android Reklam Kimliği (AAID), cihaz modeli, işletim sistemi sürümü ve yaklaşık konum (ülke düzeyi) bilgilerini kullanabilir; ayrıca reklam ölçümü ve dolandırıcılık tespiti için anonim tanımlayıcılar (cookie benzeri SDK işaretçileri) toplayabilir. Daha fazlası: policies.google.com/privacy.',
          en: 'Banner, interstitial and rewarded ads are served via AdMob. AdMob may use the Android Advertising ID (AAID), device model, OS version and approximate (country-level) location, and may collect anonymous identifiers (cookie-like SDK markers) for ad measurement and fraud prevention. More: policies.google.com/privacy.',
        },
      },
      {
        name: 'Google Play Services',
        body: {
          tr: 'Uygulama dağıtımı ve temel platform hizmetleri için Google Play Services kullanılır.',
          en: 'Google Play Services is used for app distribution and core platform services.',
        },
      },
    ],
    additionalSections: [
      {
        heading: { tr: 'Kişisel Bilgiler', en: 'Personal Information' },
        paragraph: {
          tr: 'Bulmaca Ustası; isim, e-posta, telefon numarası veya benzeri kişisel bilgileri talep etmez ve toplamaz. Uygulama hesap oluşturmayı veya giriş yapmayı gerektirmez; hesap, lider tablosu, bulut kaydı veya kullanıcı tarafından oluşturulan içerik gibi çevrimiçi özellikler içermez. Yalnızca reklam yüklemek için Google sunucularıyla iletişim kurulur.',
          en: 'Bulmaca Ustası does not request or collect names, emails, phone numbers or any similar personal information. The App does not require an account or sign-in and contains no online features such as accounts, leaderboards, cloud save or user-generated content. Network access is used only to load ads from Google servers.',
        },
      },
      {
        heading: { tr: 'Kişiselleştirilmiş Reklam ve Onay (GDPR)', en: 'Personalized Ads & Consent (GDPR)' },
        paragraph: {
          tr: 'Avrupa Ekonomik Alanı (AEA), Birleşik Krallık ve İsviçre\'deki kullanıcılara reklam gösterilmeden önce Google\'ın User Messaging Platform (UMP) onay akışı çalıştırılır. İlk açılışta gösterilen onay ekranından kişiselleştirilmiş reklamlara izin verebilir veya reddedebilirsiniz; reddedildiğinde yalnızca kişiselleştirilmemiş reklamlar (NPA) gösterilir. Tercihinizi daha sonra cihaz ayarlarından veya destekleyen sürümlerde uygulama ayarlarından sıfırlayabilirsiniz.',
          en: 'Before any ads are served to users in the European Economic Area (EEA), United Kingdom or Switzerland, Google\'s User Messaging Platform (UMP) consent flow is run. On first launch you can grant or decline personalized ads from the consent dialog; if declined, only non-personalized ads (NPA) are shown. You can reset your choice later from device settings, or from in-app settings on supported builds.',
        },
      },
      {
        heading: { tr: 'Reklam Kimliği (AD_ID)', en: 'Advertising ID (AD_ID)' },
        paragraph: {
          tr: 'Uygulama, AdMob reklamları için Android Reklam Kimliği\'ni kullanır. Bu kimliği cihaz ayarlarınızdan sıfırlayabilir veya kişiselleştirilmiş reklamları kapatabilirsiniz: Ayarlar → Google → Reklamlar.',
          en: 'The App uses the Android Advertising ID for AdMob ads. You can reset this ID or opt out of personalized ads from device settings: Settings → Google → Ads.',
        },
      },
      {
        heading: {
          tr: 'Veri Aktarımı ve Güvenlik',
          en: 'Data Transmission and Security',
        },
        paragraph: {
          tr: 'Tüm bulmaca ilerlemesi ve ayarlar yalnızca cihazınızda saklanır; tarafımızca yönetilen herhangi bir sunucuya aktarım yapılmaz. AdMob ile yapılan veri alışverişi HTTPS üzerinden şifreli olarak gerçekleşir.',
          en: 'All puzzle progress and settings are stored only on your device; no data is transferred to any server we operate. Data exchange with AdMob is encrypted via HTTPS.',
        },
      },
      {
        heading: {
          tr: 'Veri Silme',
          en: 'Data Deletion',
        },
        paragraph: {
          tr: 'Cihazda saklanan tüm verileri silmek için uygulamayı kaldırmanız yeterlidir. AdMob tarafında toplanan anonim verilerin silinmesi için Google\'ın ilgili politikaları geçerlidir; ek olarak bize e-posta ile talep iletebilirsiniz.',
          en: 'To delete all locally stored data, simply uninstall the App. For anonymous data collected by AdMob, Google\'s relevant policies apply; you may also contact us via email.',
        },
      },
    ],
    childrens: {
      tr: 'Bulmaca Ustası özellikle çocuklara yönelik bir uygulama değildir ve 13 yaş altı kullanıcılardan bilerek veri toplamaz. 13 yaşın altındaysanız uygulamayı kullanmadan önce ebeveyninizden izin alınız.',
      en: 'Bulmaca Ustası is not specifically directed to children and does not knowingly collect data from users under 13. If you are under 13, please obtain parental consent before using the App.',
    },
  },

  // Trakyaoto
  {
    slug: 'trakyaoto',
    name: 'Trakyaoto Yedek Parça',
    type: { tr: 'E-Ticaret Web Sitesi', en: 'E-Commerce Website' },
    effectiveDate: '2026-04-26',
    contactEmail: COMMON_EMAIL,
    publisher: PUBLISHER,
    intro: {
      tr: 'Trakyaoto Yedek Parça ("Site"), otomotiv yedek parça satışı yapan bir e-ticaret sitesidir. Bu politika; siparişiniz ve hesabınız için hangi verilerin işlendiğini, hangi üçüncü taraf hizmetlerin devrede olduğunu ve haklarınızı açıklar.',
      en: 'Trakyaoto Yedek Parça ("the Site") is an automotive spare-parts e-commerce site. This policy explains which data we process for your order and account, which third-party services are involved, and your rights.',
    },
    locallyStored: {
      tr: [
        'Hesap bilgileri: ad-soyad, e-posta, telefon, adres',
        'Sipariş geçmişi ve fatura bilgileri',
        'Sepet ve son ziyaret edilen ürünler',
        'Çerez (cookie) bilgileri — oturum yönetimi ve tercihleriniz için',
      ],
      en: [
        'Account info: name, email, phone, address',
        'Order history and invoice data',
        'Cart and recently viewed products',
        'Cookies — for session management and preferences',
      ],
    },
    thirdParties: [
      {
        name: 'PayTR',
        body: {
          tr: 'Online ödeme işlemleri PayTR altyapısı ile gerçekleştirilir. Kart bilgileriniz PayTR tarafından işlenir; sitemizde saklanmaz veya görüntülenmez.',
          en: 'Online payments are processed by PayTR. Card details are handled by PayTR and are not stored or visible on our site.',
        },
      },
      {
        name: 'Kargo Firmaları',
        body: {
          tr: 'Sipariş teslimatı için ad, adres ve iletişim bilgileri ilgili kargo firması ile paylaşılır.',
          en: 'For order delivery, your name, address and contact details are shared with the relevant shipping company.',
        },
      },
    ],
    additionalSections: [
      {
        heading: { tr: 'KVKK Bilgilendirmesi', en: 'KVKK Notice' },
        paragraph: {
          tr: '6698 sayılı KVKK kapsamında veri sorumlusu Garaj Bilişim adına işletilmektedir. Verilerinizin silinmesini, düzeltilmesini veya bir kopyasını talep etmek için iletişim adresinden yazabilirsiniz.',
          en: 'Operating under Turkish KVKK Law No. 6698 as the data controller on behalf of Garaj Bilişim. To request deletion, correction or a copy of your data, contact us at the email below.',
        },
      },
    ],
  },
]

export function getPrivacyApp(slug: string) {
  return privacyApps.find((a) => a.slug === slug)
}
