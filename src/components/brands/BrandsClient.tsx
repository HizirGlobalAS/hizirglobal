"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Store,
    Utensils,
    Warehouse,
    Truck,
    Globe,
    Zap,
    Gem,
    Rocket,
    Sprout
} from "lucide-react";
import Link from "next/link";

type CategoryKey = "all" | "logistics" | "ecommerce" | "food" | "retail" | "agriculture";

const categoryKeys: CategoryKey[] = ["all", "logistics", "ecommerce", "food", "retail", "agriculture"];

// Internal category values mapping to keys for filtering
const categoryValueToKey: Record<string, CategoryKey> = {
    "Tümü": "all",
    "Lojistik": "logistics",
    "E-Ticaret": "ecommerce",
    "Gıda": "food",
    "Perakende": "retail",
    "Tarım": "agriculture"
};

export default function BrandsClient({ dict, lang }: { dict: any, lang: string }) {
    const brands = [
        {
            id: 1,
            name: "Yetiş+ Çarşı",
            categoryKey: "ecommerce" as CategoryKey,
            icon: Store,
            description: dict.brands_page.brands.yetis_carsi.desc,
            stats: [
                { label: dict.brands_page.brands.yetis_carsi.stats.region, value: dict.brands_page.brands.yetis_carsi.stats.shops },
            ],
            href: "https://yetisplus.com",
        },
        {
            id: 2,
            name: "Yetiş+ Yemek",
            categoryKey: "ecommerce" as CategoryKey,
            icon: Utensils,
            description: dict.brands_page.brands.yetis_yemek.desc,
            stats: [
                { label: dict.brands_page.brands.yetis_yemek.stats.restaurants, value: dict.brands_page.brands.yetis_yemek.stats.delivery_time },
            ],
            href: "https://yemek.yetisplus.com/",
        },
        {
            id: 3,
            name: "Yetiş E-Depo",
            categoryKey: "logistics" as CategoryKey,
            icon: Warehouse,
            description: dict.brands_page.brands.yetis_edepo.desc,
            stats: [
                { label: dict.brands_page.brands.yetis_edepo.stats.area, value: dict.brands_page.brands.yetis_edepo.stats.daily_output },
            ],
            href: null,
        },
        {
            id: 4,
            name: "Hızır+ Kurye",
            categoryKey: "logistics" as CategoryKey,
            icon: Truck,
            description: dict.brands_page.brands.hizir_kurye.desc,
            stats: [
                { label: dict.brands_page.brands.hizir_kurye.stats.fleet, value: dict.brands_page.brands.hizir_kurye.stats.service },
            ],
            href: null,
        },
        {
            id: 5,
            name: "YTE Express",
            categoryKey: "logistics" as CategoryKey,
            icon: Globe,
            description: dict.brands_page.brands.yte_express.desc,
            stats: [
                { label: dict.brands_page.brands.yte_express.stats.network, value: dict.brands_page.brands.yte_express.stats.satisfaction },
            ],
            href: null,
        },
        {
            id: 6,
            name: "Yeton",
            categoryKey: "retail" as CategoryKey,
            icon: Gem,
            description: dict.brands_page.brands.yeton.desc,
            stats: [
                { label: dict.brands_page.brands.yeton.stats.stations, value: dict.brands_page.brands.yeton.stats.energy },
            ],
            href: null,
        },
        {
            id: 7,
            name: "HG Collection",
            categoryKey: "retail" as CategoryKey,
            icon: Gem,
            description: dict.brands_page.brands.hg_collection.desc,
            stats: [
                { label: dict.brands_page.brands.hg_collection.stats.collection, value: dict.brands_page.brands.hg_collection.stats.store },
            ],
            href: null,
        },
        {
            id: 8,
            name: "İB BOR",
            categoryKey: "agriculture" as CategoryKey,
            icon: Sprout,
            description: dict.brands_page.brands.ib_bor.desc,
            stats: [
                { label: dict.brands_page.brands.ib_bor.stats.region, value: dict.brands_page.brands.ib_bor.stats.shops },
            ],
            href: "https://ib-bor.com/",
        },
    ];

    const [activeCategoryKey, setActiveCategoryKey] = useState<CategoryKey>("all");
    const [activeBrand, setActiveBrand] = useState(0);

    const filteredBrands =
        activeCategoryKey === "all"
            ? brands
            : brands.filter((brand) => brand.categoryKey === activeCategoryKey);

    const ActiveIcon = brands[activeBrand].icon;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-20 transition-colors duration-300">
            {/* Header */}
            <div className="relative pt-20 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 dark:bg-[#0F0F0F] -z-10 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        {dict.brands_page.title}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed font-body">
                        {dict.brands_page.description}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16">
                    <div className="flex flex-wrap items-center justify-center gap-4 border-b border-black/10 dark:border-white/10 pb-8">
                        {brands.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveBrand(index)}
                                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all font-body ${activeBrand === index
                                    ? "bg-primary text-white"
                                    : "bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10"
                                    }`}
                            >
                                {brand.name}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded p-8 md:p-12 shadow-sm dark:shadow-none transition-colors duration-300">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                                    {brands[activeBrand].name}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-body mt-4">
                                    {brands[activeBrand].description}
                                </p>
                                <div className="mt-8 grid grid-cols-2 gap-6">
                                    {brands[activeBrand].stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mb-1 font-medium uppercase font-body">
                                                {stat.label}
                                            </p>
                                            <p className="text-lg font-semibold text-gray-900 dark:text-white font-body">
                                                {stat.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                {brands[activeBrand].href ? (
                                    <a
                                        href={brands[activeBrand].href as string}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:text-primary-hover transition-colors font-body hidden md:inline-flex items-center"
                                    >
                                        {dict.brands_page.go_to_site} <Rocket className="ml-2 w-4 h-4 inline-block" />
                                    </a>
                                ) : (
                                    <span className="inline-block mt-8 text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest text-sm font-body hidden md:inline-flex items-center">
                                        {dict.common.coming_soon} <span className="ml-2 w-2 h-2 rounded-full bg-primary/50 animate-pulse inline-block"></span>
                                    </span>
                                )}
                            </div>
                            <div className="order-1 md:order-2 flex justify-center items-center">
                                <div className="h-40 w-40 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 relative">
                                    <ActiveIcon size={64} />
                                    {brands[activeBrand].href && (
                                        <a
                                            href={brands[activeBrand].href as string}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-0 right-0 bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform md:hidden"
                                        >
                                            <Rocket size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 mt-20">
                    {categoryKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategoryKey(key)}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all border font-body ${activeCategoryKey === key
                                ? "bg-primary text-white border-primary shadow-lg"
                                : "bg-gray-100 dark:bg-[#1A1A1A] border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-400 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {dict.brands_page.filters[key]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    <AnimatePresence>
                        {filteredBrands.map((brand) => (
                            <motion.div
                                layout
                                key={brand.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-[0_10px_40px_-10px_rgba(30,171,127,0.3)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="h-14 w-14 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                                        <brand.icon size={28} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded font-body">
                                        {dict.brands_page.filters[brand.categoryKey]}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {brand.name}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed min-h-[60px] font-body flex-grow">
                                    {brand.description}
                                </p>

                                <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mb-8 mt-auto">
                                    <div className="grid grid-cols-2 gap-6">
                                        {brand.stats.map((stat, idx) => (
                                            <div key={idx}>
                                                <p className="text-xs text-gray-500 dark:text-gray-500 mb-1 font-medium uppercase font-body">
                                                    {stat.label}
                                                </p>
                                                <p className="text-lg font-semibold text-gray-900 dark:text-white font-body">
                                                    {stat.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {brand.href ? (
                                    <a
                                        href={brand.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out inline-flex items-center font-medium text-sm text-primary font-body"
                                    >
                                        {dict.brands_page.go_to_site} <Rocket className="ml-2 w-4 h-4" />
                                    </a>
                                ) : (
                                    <span className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out inline-flex items-center font-medium text-sm text-gray-400 dark:text-gray-500 font-body">
                                        {dict.common.coming_soon} <span className="ml-2 w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse"></span>
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* New Ventures Placeholder */}
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center bg-[#1A1A1A]/50 rounded-2xl border border-dashed border-gray-800 p-8 min-h-[400px] hover:border-primary hover:bg-[#1A1A1A] transition-all duration-300 cursor-default group"
                    >
                        <div className="h-20 w-20 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                            <Rocket size={32} className="text-gray-600 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-2xl font-display font-medium text-gray-500 text-center group-hover:text-white transition-colors">
                            {dict.brands_page.new_ventures.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-center mt-3 max-w-xs group-hover:text-gray-400 transition-colors font-body">
                            {dict.brands_page.new_ventures.desc}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
