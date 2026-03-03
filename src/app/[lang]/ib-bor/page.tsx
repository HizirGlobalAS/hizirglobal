import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { Sprout, CheckCircle2, Factory, Truck, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict: any = await getDictionary(validLang);

    return {
        title: `${dict.ib_bor_page.title} | ${dict.common.company_name}`,
        description: dict.ib_bor_page.desc,
    };
}

export default async function IBBorPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict: any = await getDictionary(validLang);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-20 transition-colors duration-300">
            {/* Header Section */}
            <div className="relative pt-20 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 dark:bg-[#0F0F0F] -z-10 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 mb-8 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Sprout size={48} className="sm:w-16 sm:h-16" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        {dict.ib_bor_page.title}
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-primary mb-6 font-display uppercase tracking-widest">
                        {dict.ib_bor_page.subtitle}
                    </p>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed font-body px-4">
                        {dict.ib_bor_page.desc}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Benefits List */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                            {dict.ib_bor_page.benefits.title}
                        </h2>
                        <div className="space-y-6">
                            {dict.ib_bor_page.benefits.items.map((item: string, index: number) => {
                                const parts = item.split(':');
                                const boldPart = parts.length > 1 ? parts[0] + ':' : '';
                                const restPart = parts.length > 1 ? parts[1] : item;

                                return (
                                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/50 transition-colors shadow-sm dark:shadow-none">
                                        <div className="flex-shrink-0 mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            {boldPart && (
                                                <span className="font-bold text-gray-900 dark:text-white block sm:inline mr-2">
                                                    {boldPart}
                                                </span>
                                            )}
                                            <span className="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                                                {restPart}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Infographic / Visuals */}
                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full">
                        <div className="space-y-4">
                            <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square shadow-sm dark:shadow-none hover:-translate-y-1 transition-transform">
                                <Factory size={40} className="text-primary mb-4" />
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 font-display text-lg">Milli Üretim</h3>
                                <p className="text-xs text-gray-500 font-body">Yerli kaynaklarla sürdürülebilir kalite</p>
                            </div>
                            <div className="bg-primary hover:bg-primary-hover transition-colors rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square text-white shadow-lg shadow-primary/20 hover:-translate-y-1">
                                <Globe size={40} className="mb-4 opacity-90" />
                                <h3 className="font-bold mb-2 font-display text-lg">Tek Yetkili</h3>
                                <p className="text-xs text-white/80 font-body">Hızır Global Güvencesiyle</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square text-white shadow-lg hover:-translate-y-1 transition-transform">
                                <Truck size={40} className="text-primary mb-4" />
                                <h3 className="font-bold mb-2 font-display text-lg">Hızlı Lojistik</h3>
                                <p className="text-xs text-gray-400 font-body">Tüm Türkiye\'ye kesintisiz erişim</p>
                            </div>
                            <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square shadow-sm dark:shadow-none hover:-translate-y-1 transition-transform">
                                <Sprout size={40} className="text-primary mb-4" />
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 font-display text-lg">Yüksek Verim</h3>
                                <p className="text-xs text-gray-500 font-body">Özel formülasyon ile maksimum etki</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
                <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-10 sm:p-14 border border-black/5 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-none">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">
                        Bizimle Çalışmak İster misiniz?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href={`/${lang}/contact`}
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-widest text-sm rounded shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
                        >
                            {dict.ib_bor_page.cta}
                        </Link>
                        <a
                            href="https://ib-bor.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-gray-900 dark:text-white border border-gray-900 dark:border-white font-bold uppercase tracking-widest text-sm rounded transition-all hover:-translate-y-0.5"
                        >
                            {dict.ib_bor_page.website}
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
