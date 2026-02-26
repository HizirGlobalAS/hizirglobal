import { Rocket, Truck, Box, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BrandPreview({ dict, lang }: { dict: any, lang: string }) {
    const brands = [
        {
            name: "Yetiş",
            suffix: "+ Çarşı",
            description: dict.brands.yetis_carsi.desc,
            icon: Rocket,
            color: "text-primary",
            href: "https://yetisplus.com",
        },
        {
            name: "Yetiş",
            suffix: "+ Yemek",
            description: dict.brands.yetis_yemek.desc,
            icon: Rocket,
            color: "text-primary",
            href: "https://yemek.yetisplus.com/",
        },
        {
            name: "Yetiş",
            suffix: " E-Depo",
            description: dict.brands.yetis_edepo.desc,
            icon: Rocket,
            color: "text-primary",
            href: null,
        },
    ];

    return (
        <section className="py-32 bg-gray-50 dark:bg-[#0F0F0F] relative overflow-hidden transition-colors duration-300" id="markalar">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200 dark:from-[#1a1a1a] to-transparent pointer-events-none transition-colors duration-300"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-body">
                            {dict.brands.badge}
                        </span>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
                            {dict.brands.title_main} <span className="text-gray-500 dark:text-gray-600">{dict.brands.title_highlight}</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm leading-relaxed font-body">
                        {dict.brands.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-[#141414] p-10 rounded border border-black/5 dark:border-white/5 hover:border-primary/50 transition-all duration-500 glow-hover cursor-pointer h-full flex flex-col shadow-sm dark:shadow-none"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                <brand.icon size={48} className="text-primary" />
                            </div>
                            <div className="h-24 mb-8 flex items-end border-b border-black/5 dark:border-white/5 pb-4">
                                <h3 className="text-4xl font-display font-bold text-gray-900 dark:text-white tracking-tighter">
                                    {brand.name}
                                    <span className="text-primary">
                                        {brand.suffix}
                                    </span>
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed flex-grow font-body">
                                {brand.description}
                            </p>
                            <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                                {brand.href ? (
                                    <div className="flex items-center justify-between text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        <a href={brand.href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest font-body flex items-center justify-between w-full">
                                            <span>{dict.common.go_to_site}</span>
                                            <Rocket className="text-sm transform group-hover:translate-x-2 transition-transform" size={16} />
                                        </a>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between text-gray-400 dark:text-gray-500 transition-colors">
                                        <span className="text-xs font-bold uppercase tracking-widest font-body flex items-center justify-between w-full">
                                            <span>{dict.common.coming_soon}</span>
                                            <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        href={`/${lang}/brands`}
                        className="group inline-flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-sm hover:text-primary-hover transition-colors duration-300 font-body"
                    >
                        <span>{dict.common.other_brands}</span>
                        <ArrowRight className="text-primary group-hover:text-primary-hover transition-colors transform group-hover:translate-x-1" size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
