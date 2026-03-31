(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/sanity/schemaTypes/localeHelper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localeString",
    ()=>localeString,
    "localeText",
    ()=>localeText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const supportedLanguages = [
    {
        id: 'tr',
        title: 'Türkçe',
        isDefault: true
    },
    {
        id: 'en',
        title: 'English'
    },
    {
        id: 'ru',
        title: 'Русский'
    },
    {
        id: 'az',
        title: 'Azərbaycanca'
    }
];
const localeString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'localeString',
    title: 'Çoklu Dil (Metin)',
    type: 'object',
    fields: supportedLanguages.map((lang)=>({
            title: lang.title,
            name: lang.id,
            type: 'string'
        }))
});
const localeText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'localeText',
    title: 'Çoklu Dil (Uzun Metin)',
    type: 'object',
    fields: supportedLanguages.map((lang)=>({
            title: lang.title,
            name: lang.id,
            type: 'text',
            rows: 3
        }))
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/brand.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandType",
    ()=>brandType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const brandType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'brand',
    title: 'Şirketlerimiz & Markalarımız',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Marka Adı',
            type: 'string',
            description: 'Örn: Yetiş+ Çarşı',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'categoryKey',
            title: 'Kategori / Bölüm',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Lojistik (Logistics)',
                        value: 'logistics'
                    },
                    {
                        title: 'E-Ticaret (E-commerce)',
                        value: 'ecommerce'
                    },
                    {
                        title: 'Gıda (Food)',
                        value: 'food'
                    },
                    {
                        title: 'Perakende (Retail)',
                        value: 'retail'
                    },
                    {
                        title: 'Tarım (Agriculture)',
                        value: 'agriculture'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'icon',
            title: 'Kullanılacak İkon',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Market/Dükkan (Store)',
                        value: 'Store'
                    },
                    {
                        title: 'Yemek/Çatal Bıçak (Utensils)',
                        value: 'Utensils'
                    },
                    {
                        title: 'Depo/Antrepo (Warehouse)',
                        value: 'Warehouse'
                    },
                    {
                        title: 'Kamyon/Filo (Truck)',
                        value: 'Truck'
                    },
                    {
                        title: 'Global/Küresel (Globe)',
                        value: 'Globe'
                    },
                    {
                        title: 'Enerji (Zap)',
                        value: 'Zap'
                    },
                    {
                        title: 'Değer/Pırlanta (Gem)',
                        value: 'Gem'
                    },
                    {
                        title: 'Tarım/Filiz (Sprout)',
                        value: 'Sprout'
                    },
                    {
                        title: 'Yatırım/Gelecek (Rocket)',
                        value: 'Rocket'
                    }
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Marka Açıklaması',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'stats',
            title: 'İstatistik & Metrikleri',
            type: 'array',
            description: 'Örn: Etiket: Bölge Sayısı / Değer: 81 İl',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            type: 'localeString',
                            title: 'İstatistik Etiketi'
                        },
                        {
                            name: 'value',
                            type: 'localeString',
                            title: 'İstatistik Değeri'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'label.tr',
                            subtitle: 'value.tr'
                        }
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'href',
            title: 'Web Sitesi (Opsiyonel)',
            type: 'url',
            description: 'Dış bağlantı varsa (https://...) yazın, yoksa boş bırakın'
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'categoryKey'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/pressRelease.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pressReleaseType",
    ()=>pressReleaseType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const pressReleaseType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'pressRelease',
    title: 'Basın Bültenleri & Duyurular',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Bülten / Haber Başlığı',
            type: 'localeString'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Basın Bülteni (Bulletin)',
                        value: 'bulten'
                    },
                    {
                        title: 'Etkinlik (Event)',
                        value: 'etkinlik'
                    },
                    {
                        title: 'Haber (News)',
                        value: 'haber'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'excerpt',
            title: 'Kısa Özet',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publishDate',
            title: 'Yayınlanma Tarihi',
            type: 'date',
            validation: (Rule)=>Rule.required(),
            initialValue: ()=>new Date().toISOString().substring(0, 10)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'isPinned',
            title: 'Başa Tuttur (Öne Çıkar)',
            type: 'boolean',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coverImage',
            title: 'Kapak Görseli',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'files',
            title: 'Eklenti Dosyaları (PDF, DOCX vb.)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'fileTitle',
                            type: 'string',
                            title: 'Dosya Adı (Örn: Finansal Rapor)'
                        },
                        {
                            name: 'lang',
                            type: 'string',
                            title: 'Dosyanın Dili',
                            options: {
                                list: [
                                    {
                                        title: 'Genel/Bilinmiyor',
                                        value: 'all'
                                    },
                                    {
                                        title: 'Türkçe',
                                        value: 'tr'
                                    },
                                    {
                                        title: 'İngilizce',
                                        value: 'en'
                                    },
                                    {
                                        title: 'Rusça',
                                        value: 'ru'
                                    },
                                    {
                                        title: 'Azerbaycanca',
                                        value: 'az'
                                    }
                                ]
                            },
                            initialValue: 'all'
                        },
                        {
                            name: 'fileUpload',
                            type: 'file',
                            title: 'Dosyayı Yükle'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'fileTitle',
                            subtitle: 'lang'
                        }
                    }
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title.tr',
            subtitle: 'category',
            media: 'coverImage'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/brandAsset.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandAssetType",
    ()=>brandAssetType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const brandAssetType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'brandAsset',
    title: 'Kurumsal Materyaller (Logo, Rapor vs)',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Materyal Adı',
            description: 'Örn: Şirket Profil Dosyası, Yönetim Kurulu Portreleri',
            type: 'localeString'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Açıklama',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'iconType',
            title: 'Görsel/İkon Türü',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Döküman (PDF vb.)',
                        value: 'document'
                    },
                    {
                        title: 'Logo/Vektör',
                        value: 'logo'
                    },
                    {
                        title: 'Fotoğraf/Görsel',
                        value: 'image'
                    }
                ]
            },
            validation: (Rule)=>Rule.required(),
            initialValue: 'document'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fileUpload',
            title: 'Dosyayı Yükle',
            type: 'file',
            description: 'İndirilecek olan dosya (ZIP, PDF, vb.)',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title.tr',
            subtitle: 'iconType'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryType",
    ()=>galleryType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const galleryType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'gallery',
    title: 'Galeri & Medya Koleksiyonu',
    type: 'document',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Koleksiyon Adı',
            description: 'Örn: 2024 Tarım Tesisleri İncelenmesi',
            type: 'localeString',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Açıklama (Opsiyonel)',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Etkinlikler (events)',
                        value: 'events'
                    },
                    {
                        title: 'Ofis (office)',
                        value: 'office'
                    },
                    {
                        title: 'Saha (field)',
                        value: 'field'
                    },
                    {
                        title: 'Markalar (brands)',
                        value: 'brands'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'subCategory',
            title: 'Alt Kategori (Opsiyonel)',
            description: 'Markalar veya Saha gibi özel alanların ID si (Örn: hizir-lojistik)',
            type: 'string'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'date',
            title: 'Tarih',
            type: 'date',
            initialValue: ()=>new Date().toISOString().substring(0, 10)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coverImage',
            title: 'Kapak Görseli',
            description: 'Kartlarda ve listelerde görünecek ana resim',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'images',
            title: 'Koleksiyon Görselleri',
            description: 'Bu koleksiyona ait birden fazla resim ekleyebilirsiniz',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'youtubeId',
            title: 'YouTube Video ID (Opsiyonel)',
            description: 'Eğer bir video koleksiyonuysa, linkin v= kısmındaki ID. Örn: eVTXPUF4Oz4',
            type: 'string'
        })
    ],
    preview: {
        select: {
            title: 'title.tr',
            subtitle: 'category',
            media: 'coverImage'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/contact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactType",
    ()=>contactType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const contactType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'contact',
    title: 'İletişim Bilgileri (Merkez)',
    type: 'document',
    // Make it a singleton approach in structure later, but document is fine for now
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'İçerik Etiketi',
            type: 'string',
            description: 'Sadece panelde ayırt etmek için (Örn: "Ana Merkez Adresi")',
            validation: (Rule)=>Rule.required(),
            initialValue: 'Genel Merkez İletişim'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'address',
            title: 'Açık Adres',
            type: 'localeText'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'email',
            title: 'E-Posta Adresi',
            type: 'string',
            validation: (Rule)=>Rule.required().email()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'phone',
            title: 'Telefon Numarası',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mapUrl',
            title: 'Google Maps Embed Linki',
            type: 'url',
            description: 'Harita için tam link (https://www.google.com/maps/embed...)',
            validation: (Rule)=>Rule.required()
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$localeHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/localeHelper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/brand.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pressRelease$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/pressRelease.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$brandAsset$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/brandAsset.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/gallery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/contact.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$localeHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeString"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$localeHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brandType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$pressRelease$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressReleaseType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$brandAsset$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brandAssetType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactType"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$structureTool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/structureTool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/index.ts [app-client] (ecmascript)");
;
;
;
const projectId = ("TURBOPACK compile-time value", "4b7tqjuq");
const dataset = ("TURBOPACK compile-time value", "production") || 'production';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/admin',
    projectId,
    dataset,
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$structureTool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].types
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(studio)/admin/[[...index]]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity.config.ts [app-client] (ecmascript)");
'use client';
;
;
;
function StudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/src/app/(studio)/admin/[[...index]]/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = StudioPage;
var _c;
__turbopack_context__.k.register(_c, "StudioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_56bbdf69._.js.map