import { GalleryCollection } from '@/types/gallery';

export const mockGalleryCategories = [
  { id: 'all', label: { tr: 'Tümü', en: 'All', ru: 'Все', az: 'Hər şey' } },
  { id: 'events', label: { tr: 'Etkinlikler', en: 'Events', ru: 'События', az: 'Tədbirlər' } },
  { id: 'office', label: { tr: 'Ofis', en: 'Office', ru: 'Офис', az: 'Ofis' } },
  { id: 'field', label: { tr: 'Saha', en: 'Field', ru: 'Поле', az: 'Sahə' } },
  { id: 'brands', label: { tr: 'Markalar', en: 'Brands', ru: 'Бренды', az: 'Markalar' } }
];

export const mockGallerySubCategories: Record<string, { id: string, label: Record<string, string> }[]> = {
  brands: [
    { id: 'hizir-lojistik', label: { tr: 'Hızır Lojistik', en: 'Hizir Logistics', ru: 'Хизир Логистика', az: 'Hızır Logistika' } },
    { id: 'hizir-tarim', label: { tr: 'Hızır Tarım', en: 'Hizir Agriculture', ru: 'Хизир Сельское хозяйство', az: 'Hızır Kənd Təsərrüfatı' } },
    { id: 'hizir-teknoloji', label: { tr: 'Hızır Teknoloji', en: 'Hizir Technology', ru: 'Хизир Технологии', az: 'Hızır Texnologiya' } }
  ],
  field: [
    { id: 'santiye', label: { tr: 'Şantiyeler', en: 'Construction Sites', ru: 'Строительные площадки', az: 'Tikinti sahələri' } },
    { id: 'tesis', label: { tr: 'Tesisler', en: 'Facilities', ru: 'Объекты', az: 'Obyektlər' } }
  ]
};

export const mockGallery: GalleryCollection[] = [
  {
    id: "g1",
    type: "photo",
    category: "events",
    title: {
      tr: "2023 Küresel Lojistik Fuarı",
      en: "2023 Global Logistics Fair",
      ru: "Глобальная Логистическая Выставка 2023",
      az: "2023 Qlobal Logistika Sərgisi"
    },
    description: {
      tr: "Küresel lojistik trendlerinin tartışıldığı ve yeni markalarımızın lansmanının yapıldığı büyük buluşma.",
      en: "The great meeting where global logistics trends were discussed and our new brands were launched.",
      ru: "Великая встреча, на которой обсуждались глобальные логистические тенденции и были запущены наши новые бренды.",
      az: "Qlobal logistika trendlərinin müzakirə edildiyi və yeni markalarımızın təqdim edildiyi böyük görüş."
    },
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=1200"
    ],
    date: "2023-10-15"
  },
  {
    id: "g2",
    type: "youtube",
    category: "brands",
    subCategory: "hizir-lojistik",
    title: {
      tr: "Hızır Lojistik Filo Tanıtımı",
      en: "Hizir Logistics Fleet Intro",
      ru: "Введение в автопарк Хизир Логистика",
      az: "Hızır Logistika Donanmasının Təqdimatı"
    },
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a54?w=800&q=80",
    youtubeId: "eVTXPUF4Oz4", // Placeholder Youtube Video ID
    date: "2024-01-20"
  },
  {
    id: "g3",
    type: "photo",
    category: "office",
    title: {
      tr: "Genel Merkez Çalışma Ortamımız",
      en: "Our HQ Workspace",
      ru: "Наше рабочее пространство",
      az: "Baş Ofis İş Mühitimiz"
    },
    description: {
      tr: "Modern, yenilikçi ve çalışan odaklı genel merkez ofis karelerimiz.",
      en: "Our modern, innovative and employee-oriented headquarters office frames.",
      ru: "Наши современные, инновационные и ориентированные на сотрудников офисные помещения штаб-квартиры.",
      az: "Müasir, yenilikçi və işçi yönümlü baş ofis ofis kadrlarımız."
    },
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200"
    ],
    date: "2023-11-05"
  },
  {
    id: "g4",
    type: "photo",
    category: "field",
    subCategory: "santiye",
    title: {
      tr: "Yeni Yaşam Kompleksi Şantiyesi",
      en: "New Life Complex Construction",
      ru: "Строительство нового жилого комплекса",
      az: "Yeni Yaşam Kompleksi Tikintisi"
    },
    coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
      "https://images.unsplash.com/photo-1541888081198-bced3167198a?w=1200"
    ],
    date: "2024-02-10"
  },
  {
    id: "g5",
    type: "youtube",
    category: "events",
    title: {
      tr: "Sürdürülebilirlik Zirvesi 2024",
      en: "Sustainability Summit 2024",
      ru: "Саммит по устойчивому развитию 2024",
      az: "Davamlılıq Zirvəsi 2024"
    },
    coverImage: "https://images.unsplash.com/photo-1475721025505-c31da16c6001?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    date: "2024-03-01"
  },
  {
    id: "g6",
    type: "photo",
    category: "brands",
    subCategory: "hizir-tarim",
    title: {
      tr: "Organik Üretim Tesislerimiz",
      en: "Organic Production Facilities",
      ru: "Наши органические производства",
      az: "Orqanik İstehsal Obyektlərimiz"
    },
    coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200",
      "https://images.unsplash.com/photo-1595841696650-6f0270a24cc6?w=1200",
      "https://images.unsplash.com/photo-1586771107445-d3afeb0de199?w=1200"
    ],
    date: "2024-03-15"
  }
];
