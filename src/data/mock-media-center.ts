import { PressRelease, BrandAsset } from '@/types/media-center';

export const mockBrandAssets: BrandAsset[] = [
  {
    id: "asset-1",
    title: {
      tr: "Kurumsal Profil Dosyası",
      en: "Corporate Profile Document",
      ru: "Профиль Корпорации",
      az: "Korporativ Profil Dosyası"
    },
    description: {
      tr: "Hızır Global vizyonu, misyonu ve finansal yapısı hakkında kapsamlı bilgi içerir.",
      en: "Contains comprehensive information about the vision, mission, and financial structure.",
      ru: "Содержит исчерпывающую информацию о видении, миссии и финансовой структуре.",
      az: "Hızır Global vizyonu, missiyası və maliyyə strukturu haqqında geniş məlumat ehtiva edir."
    },
    file: { url: "/mock-press/hizir-corporate-profile.pdf", type: "pdf", size: "4.2 MB" },
    iconType: "document"
  },
  {
    id: "asset-2",
    title: {
      tr: "Resmi Logolar Paketi",
      en: "Official Logos Package",
      ru: "Пакет Официальных Логотипов",
      az: "Rəsmi Loqolar Paketi"
    },
    description: {
      tr: "Tüm iştirakler için kullanım kılavuzu kurallarına uygun .SVG ve .PNG logolar.",
      en: ".SVG and .PNG logos complying with the brand guidelines for all subsidiaries.",
      ru: "Логотипы .SVG и .PNG, соответствующие правилам использования логотипов для всех дочерних компаний.",
      az: "Bütün iştirakçılar üçün təlimat qaydalarına uyğun .SVG və .PNG loqolar."
    },
    file: { url: "/mock-press/hizir-logos.zip", type: "zip", size: "12.8 MB" },
    iconType: "logo"
  },
  {
    id: "asset-3",
    title: {
      tr: "Yönetim Kurulu Portreleri",
      en: "Board of Directors Portraits",
      ru: "Портреты Совета Директоров",
      az: "İdarə Heyəti Portretləri"
    },
    description: {
      tr: "Basın kullanımlarına uygun, yüksek çözünürlüklü şeffaf ve dekupe edilmiş görseller.",
      en: "High-resolution transparent and cut-out images suitable for press use.",
      ru: "Прозрачные и вырезанные изображения высокого разрешения, подходящие для использования в прессе.",
      az: "Mətbuat istifadəsinə uyğun yüksək keyfiyyətli şəffaf və kəsilmiş şəkillər."
    },
    file: { url: "/mock-press/board-portraits.zip", type: "zip", size: "45.0 MB" },
    iconType: "image"
  }
];

export const mockPressReleases: PressRelease[] = [
  {
    id: "pr-1",
    category: "etkinlik",
    isPinned: true,
    title: {
      tr: "Yeni Nesil Küresel Lojistik Merkezinin Temelleri Atıldı",
      en: "Foundation Laid for the Next-Gen Global Logistics Center",
      ru: "Заложен Фундамент Глобального Логистического Центра Нового Поколения",
      az: "Yeni Nəsil Qlobal Logistika Mərkəzinin Təməlləri Atıldı"
    },
    excerpt: {
      tr: "Hızır Lojistik'in sürdürülebilirlik vizyonunu yansıtan 150.000 metrekarelik dev merkezin açılışı devlet erkanının da katılımıyla gerçekleşti.",
      en: "The opening of the 150,000 square meter giant center, reflecting Hizir Logistics' sustainability vision, took place with the participation of state officials.",
      ru: "Открытие огромного центра площадью 150 000 квадратных метров, отражающего концепцию устойчивого развития Hizir Logistics, состоялось при участии государственных деятелей.",
      az: "Hızır Logistika-nın davamlılıq vizyonunu əks etdirən 150,000 kvadrat metrlik nəhəng mərkəzin açılışı dövlət rəsmilərinin də iştirakı ilə baş tutdu."
    },
    publishDate: "2024-03-20",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a54?w=800&q=80",
    files: [
      { url: "/mock-press/pr1-bulten-tr.docx", type: "docx", size: "1.2 MB", lang: "tr" },
      { url: "/mock-press/pr1-bulten-en.docx", type: "docx", size: "1.1 MB", lang: "en" },
      { url: "/mock-press/pr1-media-kit.zip", type: "zip", size: "24.5 MB" }
    ]
  },
  {
    id: "pr-2",
    category: "bulten",
    title: {
      tr: "Hızır Tarım, 2023 Yılı İhracat Rekorunu Açıkladı",
      en: "Hizir Agriculture Announces 2023 Export Record",
      ru: "Хизир Сельское хозяйство Объявляет о Рекорде Экспорта в 2023 Году",
      az: "Hızır Tarım 2023 İxrac Rekordunu Açıqladı"
    },
    excerpt: {
      tr: "Geçtiğimiz yıl Avrupa pazarına yüzde %40 daha fazla organik gıda arzı gerçekleştiren grubumuz, finansal verilerini kamuoyuyla paylaştı.",
      en: "Supplying 40% more organic food to the European market last year, our group shared its financial data with the public.",
      ru: "Поставив в прошлом году на 40% больше органических продуктов питания на европейский рынок, наша группа поделилась своими финансовыми данными с общественностью.",
      az: "Keçən il Avropa bazarına 40% daha çox orqanik qida təchizatı edən qrupumuz maliyyə məlumatlarını ictimaiyyətlə paylaşdı."
    },
    publishDate: "2024-02-15",
    files: [
      { url: "/mock-press/pr2-finansal-rapor.pdf", type: "pdf", size: "3.4 MB", lang: "tr" },
      { url: "/mock-press/pr2-finansal-rapor-en.pdf", type: "pdf", size: "3.4 MB", lang: "en" }
    ]
  },
  {
    id: "pr-3",
    category: "bulten",
    title: {
      tr: "CEO'muz Yönetim Vizyonunu Forbes'a Değerlendirdi",
      en: "Our CEO Evaluated the Management Vision for Forbes",
      ru: "Наш генеральный директор оценил концепцию управления для Forbes",
      az: "CEO-muz İdarəetmə Vizyonunu Forbes-ə Dəyərləndirdi"
    },
    excerpt: {
      tr: "Aylık ekonomi dergisi Forbes'a kapak olan İcra Kurulu Başkanımız, Hızır Global'in önümüzdeki 10 yıllık dijital entegrasyon sürecini anlattı.",
      en: "Featured on the cover of the monthly economics magazine Forbes, our CEO explained Hizir Global's 10-year digital integration process.",
      ru: "Наш генеральный директор, появившийся на обложке ежемесячного экономического журнала Forbes, объяснил 10-летний процесс цифровой интеграции компании.",
      az: "Aylıq iqtisadiyyat jurnalı Forbes-in qapağına çıxan CEO-muz Hızır Global-ın 10 illik rəqəmsal inteqrasiya prosesini izah etdi."
    },
    publishDate: "2024-01-05",
    files: [
      { url: "/mock-press/pr3-roportaj-tam-metin.pdf", type: "pdf", size: "5.1 MB" }
    ]
  }
];
