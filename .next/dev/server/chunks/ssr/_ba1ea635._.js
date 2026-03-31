module.exports = [
"[project]/src/data/mock-gallery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockGallery",
    ()=>mockGallery,
    "mockGalleryCategories",
    ()=>mockGalleryCategories,
    "mockGallerySubCategories",
    ()=>mockGallerySubCategories
]);
const mockGalleryCategories = [
    {
        id: 'all',
        label: {
            tr: 'Tümü',
            en: 'All',
            ru: 'Все',
            az: 'Hər şey'
        }
    },
    {
        id: 'events',
        label: {
            tr: 'Etkinlikler',
            en: 'Events',
            ru: 'События',
            az: 'Tədbirlər'
        }
    },
    {
        id: 'office',
        label: {
            tr: 'Ofis',
            en: 'Office',
            ru: 'Офис',
            az: 'Ofis'
        }
    },
    {
        id: 'field',
        label: {
            tr: 'Saha',
            en: 'Field',
            ru: 'Поле',
            az: 'Sahə'
        }
    },
    {
        id: 'brands',
        label: {
            tr: 'Markalar',
            en: 'Brands',
            ru: 'Бренды',
            az: 'Markalar'
        }
    }
];
const mockGallerySubCategories = {
    brands: [
        {
            id: 'hizir-lojistik',
            label: {
                tr: 'Hızır Lojistik',
                en: 'Hizir Logistics',
                ru: 'Хизир Логистика',
                az: 'Hızır Logistika'
            }
        },
        {
            id: 'hizir-tarim',
            label: {
                tr: 'Hızır Tarım',
                en: 'Hizir Agriculture',
                ru: 'Хизир Сельское хозяйство',
                az: 'Hızır Kənd Təsərrüfatı'
            }
        },
        {
            id: 'hizir-teknoloji',
            label: {
                tr: 'Hızır Teknoloji',
                en: 'Hizir Technology',
                ru: 'Хизир Технологии',
                az: 'Hızır Texnologiya'
            }
        }
    ],
    field: [
        {
            id: 'santiye',
            label: {
                tr: 'Şantiyeler',
                en: 'Construction Sites',
                ru: 'Строительные площадки',
                az: 'Tikinti sahələri'
            }
        },
        {
            id: 'tesis',
            label: {
                tr: 'Tesisler',
                en: 'Facilities',
                ru: 'Объекты',
                az: 'Obyektlər'
            }
        }
    ]
};
const mockGallery = [
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
        youtubeId: "eVTXPUF4Oz4",
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
        youtubeId: "dQw4w9WgXcQ",
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
}),
"[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFilter",
    ()=>CategoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function CategoryFilter({ categories, subCategories, activeCategory, activeSubCategory, onCategoryChange, onSubCategoryChange, lang }) {
    const currentSubs = subCategories && subCategories[activeCategory] ? subCategories[activeCategory] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-4 mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 md:gap-4",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onCategoryChange(cat.id);
                            onSubCategoryChange(null);
                        },
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${activeCategory === cat.id ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-white/5"}`,
                        children: [
                            activeCategory === cat.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "activeCategory",
                                className: "absolute inset-0 bg-primary rounded-full -z-10",
                                transition: {
                                    type: "spring",
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: cat.label[lang] || cat.label['tr']
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            currentSubs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSubCategoryChange(null),
                        className: `px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeSubCategory === null ? "bg-gray-800 text-white dark:bg-white dark:text-black" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"}`,
                        children: lang === 'tr' ? 'Tümü' : lang === 'en' ? 'All' : lang === 'ru' ? 'Все' : 'Hər şey'
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    currentSubs.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSubCategoryChange(sub.id),
                            className: `px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeSubCategory === sub.id ? "bg-gray-800 text-white dark:bg-white dark:text-black" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"}`,
                            children: sub.label[lang] || sub.label['tr']
                        }, sub.id, false, {
                            fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                            lineNumber: 75,
                            columnNumber: 14
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/gallery/components/CollectionCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionCard",
    ()=>CollectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
"use client";
;
;
;
;
function CollectionCard({ collection, lang, onClick }) {
    const isVideo = collection.type === "youtube";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.9
        },
        transition: {
            duration: 0.4
        },
        onClick: ()=>onClick(collection.id),
        className: "group relative flex flex-col cursor-pointer bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: collection.coverImage,
                        alt: collection.title[lang] || collection.title['tr'],
                        fill: true,
                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-6 h-6 text-primary ml-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-primary uppercase tracking-wider mb-2",
                        children: new Date(collection.date).toLocaleDateString(lang, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight",
                        children: collection.title[lang] || collection.title['tr']
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    collection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2",
                        children: collection.description[lang] || collection.description['tr']
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/gallery/components/CollectionCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/gallery/components/MediaModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaModal",
    ()=>MediaModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MediaModal({ collection, isOpen, onClose, lang }) {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentIndex(0);
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        isOpen
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (collection?.images && currentIndex < collection.images.length - 1) {
            setCurrentIndex((prev)=>prev + 1);
        }
    }, [
        collection,
        currentIndex
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentIndex > 0) {
            setCurrentIndex((prev)=>prev - 1);
        }
    }, [
        currentIndex
    ]);
    const images = collection?.images || [];
    const isVideo = collection?.type === "youtube";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && collection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    className: "relative w-full max-w-7xl max-h-full flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full text-left mb-6 px-4 md:px-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-display font-bold text-white mb-2 line-clamp-2",
                                    children: collection.title[lang] || collection.title['tr']
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                    lineNumber: 67,
                                    columnNumber: 16
                                }, this),
                                collection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 max-w-3xl text-sm md:text-base line-clamp-3",
                                    children: collection.description[lang] || collection.description['tr']
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: `https://www.youtube.com/embed/${collection.youtubeId}?autoplay=1`,
                                className: "w-full h-full border-0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                            lineNumber: 78,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: images[currentIndex] || collection.coverImage,
                                    alt: `Image ${currentIndex + 1}`,
                                    fill: true,
                                    className: "object-contain bg-black/50",
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 21
                                }, this),
                                images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handlePrev,
                                            disabled: currentIndex === 0,
                                            className: "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 disabled:opacity-0 disabled:pointer-events-none text-white p-2 md:p-3 rounded-full backdrop-blur transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-6 h-6 md:w-8 md:h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                                lineNumber: 100,
                                                columnNumber: 32
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 28
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleNext,
                                            disabled: currentIndex === images.length - 1,
                                            className: "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 disabled:opacity-0 disabled:pointer-events-none text-white p-2 md:p-3 rounded-full backdrop-blur transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-6 h-6 md:w-8 md:h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                                lineNumber: 103,
                                                columnNumber: 32
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 28
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 text-xs rounded-full backdrop-blur",
                                            children: [
                                                currentIndex + 1,
                                                " / ",
                                                images.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                            lineNumber: 87,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/gallery/components/MediaModal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/gallery/components/GalleryClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryClient",
    ()=>GalleryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock-gallery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$gallery$2f$components$2f$CategoryFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/gallery/components/CategoryFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$gallery$2f$components$2f$CollectionCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/gallery/components/CollectionCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$gallery$2f$components$2f$MediaModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[lang]/gallery/components/MediaModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
"use client";
;
;
;
;
;
;
;
function GalleryClient({ lang, dict }) {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [activeSubCategory, setActiveSubCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCollectionId, setSelectedCollectionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredCollections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockGallery"].filter((col)=>{
            const matchCategory = activeCategory === "all" || col.category === activeCategory;
            const matchSubCategory = !activeSubCategory || col.subCategory === activeSubCategory;
            return matchCategory && matchSubCategory;
        });
    }, [
        activeCategory,
        activeSubCategory
    ]);
    const selectedCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedCollectionId) return null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockGallery"].find((c)=>c.id === selectedCollectionId) || null;
    }, [
        selectedCollectionId
    ]);
    const strings = {
        title: lang === 'tr' ? 'Galeri' : lang === 'en' ? 'Gallery' : lang === 'ru' ? 'Галерея' : 'Qalereya',
        subtitle: lang === 'tr' ? 'Tüm etkinliklerimiz ve operasyonel varlığımız.' : lang === 'en' ? 'All our events and operational presence.' : lang === 'ru' ? 'Все наши мероприятия и операционное присутствие.' : 'Bütün tədbirlərimiz və əməliyyat iştirakımız.',
        pressKit: lang === 'tr' ? 'Basın Kitini İndir' : lang === 'en' ? 'Download Press Kit' : lang === 'ru' ? 'Скачать пресс-кит' : 'Mətbuat Kitini Yükləyin',
        empty: lang === 'tr' ? 'Bu kategoride henüz bir içerik bulunmuyor.' : lang === 'en' ? 'No content found in this category yet.' : lang === 'ru' ? 'В этой категории пока нет контента.' : 'Bu kateqoriyada hələ heç bir məzmun yoxdur.'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-[1px] bg-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                dict?.nav?.gallery || strings.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight",
                            children: dict?.gallery?.title || strings.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                            lineNumber: 51,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-gray-500 max-w-xl text-lg",
                            children: dict?.gallery?.subtitle || strings.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                            lineNumber: 54,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                    lineNumber: 46,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$gallery$2f$components$2f$CategoryFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryFilter"], {
                categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockGalleryCategories"],
                subCategories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2d$gallery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockGallerySubCategories"],
                activeCategory: activeCategory,
                activeSubCategory: activeSubCategory,
                onCategoryChange: setActiveCategory,
                onSubCategoryChange: setActiveSubCategory,
                lang: lang
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            filteredCollections.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: filteredCollections.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$gallery$2f$components$2f$CollectionCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CollectionCard"], {
                        collection: col,
                        lang: lang,
                        onClick: setSelectedCollectionId
                    }, col.id, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full py-20 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-white/[0.02] border border-dashed border-gray-300 dark:border-white/10 rounded-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                        className: "w-12 h-12 text-gray-400 mb-4 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium",
                        children: strings.empty
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$gallery$2f$components$2f$MediaModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaModal"], {
                collection: selectedCollection,
                isOpen: !!selectedCollectionId,
                onClose: ()=>setSelectedCollectionId(null),
                lang: lang
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/gallery/components/GalleryClient.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LayoutGrid
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1",
            key: "6d4xhi"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1",
            key: "nxv5o0"
        }
    ],
    [
        "rect",
        {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }
    ]
];
const LayoutGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("layout-grid", __iconNode);
;
 //# sourceMappingURL=layout-grid.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutGrid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_ba1ea635._.js.map