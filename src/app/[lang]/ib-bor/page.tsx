import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { 
    Sprout, CheckCircle2, Factory, Truck, ShieldCheck, 
    Leaf, Sun, Droplets, ShoppingCart, MessageCircle, ArrowRight,
    Quote, ChevronDown, Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict: any = await getDictionary(validLang);

    return {
        title: `${dict.ib_bor_page.hero.title} | ${dict.common.company_name}`,
        description: dict.ib_bor_page.hero.desc,
    };
}

export default async function IBBorPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict: any = await getDictionary(validLang);
    const content = dict.ib_bor_page;

    const WA_MESSAGE = encodeURIComponent(content.hero.title);
    const WA_LINK = `https://wa.me/905013216663?text=${WA_MESSAGE}`;
    const BUY_LINK = "https://yetisplus.com/yapi-market-ve-bahce/bahce-ve-cicek/cicek-ve-bitki/gubre";

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-0 transition-colors duration-300">
            {/* 1. HERO SECTION */}
            <div className="relative pt-12 lg:pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 dark:bg-[#0F0F0F] -z-10 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 mb-8 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Sprout size={48} className="sm:w-16 sm:h-16" />
                    </div>
                    <p className="text-xl sm:text-2xl font-medium text-primary mb-4 font-display uppercase tracking-widest">
                        {content.hero.subtitle}
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        {content.hero.title}
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed font-body mb-10 px-4">
                        {content.hero.desc}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href={BUY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-action="click_buy_now"
                            data-location="hero"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-widest text-sm rounded shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={18} />
                            {content.hero.buy_now}
                        </a>
                        <a 
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-action="click_whatsapp"
                            data-location="hero"
                            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold uppercase tracking-widest text-sm rounded shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            {content.hero.whatsapp}
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. PRODUCT OVERVIEW & TRUST BADGES */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none mb-12 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                                {content.overview.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                                {content.overview.desc}
                            </p>
                            <div className="inline-flex items-start sm:items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-medium rounded-xl border border-green-200 dark:border-green-500/20">
                                <Leaf className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                                <span>{content.roi_anchor}</span>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 flex items-center justify-center group">
                            <Image 
                                src="/gallery/bor-gubresi.jpg" 
                                alt="İB BOR Gübresi" 
                                fill
                                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center justify-center gap-4 p-6 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:-translate-y-1 transition-transform shadow-sm">
                        <Factory className="text-primary w-8 h-8" />
                        <span className="font-bold font-display text-lg dark:text-white text-gray-900 text-center">{content.trust.local}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 p-6 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:-translate-y-1 transition-transform shadow-sm">
                        <ShieldCheck className="text-primary w-8 h-8 flex-shrink-0" />
                        <span className="font-bold font-display text-lg dark:text-white text-gray-900 text-center">{content.trust.distributor}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 p-6 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:-translate-y-1 transition-transform shadow-sm">
                        <Truck className="text-primary w-8 h-8 flex-shrink-0" />
                        <span className="font-bold font-display text-lg dark:text-white text-gray-900 text-center">{content.trust.logistics}</span>
                    </div>
                </div>
            </div>

            {/* 3. USAGE AREAS */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
                    {content.usage_areas.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Field Crops */}
                    <div className="bg-white dark:bg-[#1A1A1A] p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center group">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Sprout size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 dark:text-white">{content.usage_areas.items.field.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                            {content.usage_areas.items.field.desc}
                        </p>
                    </div>
                    {/* Veg & Fruit */}
                    <div className="bg-white dark:bg-[#1A1A1A] p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center group">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Leaf size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 dark:text-white">{content.usage_areas.items.veg_fruit.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                            {content.usage_areas.items.veg_fruit.desc}
                        </p>
                    </div>
                    {/* Greenhouse */}
                    <div className="bg-white dark:bg-[#1A1A1A] p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center group">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Sun size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 dark:text-white">{content.usage_areas.items.greenhouse.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
                            {content.usage_areas.items.greenhouse.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* 3.5. SOCIAL PROOF (Testimonial) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16">
                <div className="relative bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-16 border border-primary/10 dark:border-primary/20 text-center overflow-hidden">
                    <Quote className="absolute top-8 left-8 w-24 h-24 text-primary/10 dark:text-primary/20 -z-10 rotate-180" />
                    <Quote className="absolute bottom-8 right-8 w-24 h-24 text-primary/10 dark:text-primary/20 -z-10" />
                    
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">
                        {content.social_proof.title}
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-3xl font-display italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            "{content.social_proof.quote_1}"
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                {content.social_proof.author_1.charAt(0)}
                            </div>
                            <span className="font-bold font-body text-gray-900 dark:text-white">
                                {content.social_proof.author_1}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. KEY BENEFITS & 5. HOW TO USE */}
            <div className="bg-white dark:bg-[#151515] border-y border-black/5 dark:border-white/5 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        
                        {/* Benefits */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                                {content.benefits.title}
                            </h2>
                            <div className="space-y-4">
                                {content.benefits.items.map((item: string, index: number) => {
                                    const parts = item.split(':');
                                    const boldPart = parts.length > 1 ? parts[0] + ':' : '';
                                    const restPart = parts.length > 1 ? parts.slice(1).join(':') : item;

                                    return (
                                        <div key={index} className="flex gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors">
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

                        {/* How To Use */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                                {content.how_to_use.title}
                            </h2>
                            <div className="grid gap-6">
                                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-full bg-primary text-white">
                                            <Leaf size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                                            {content.how_to_use.leaves.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                                        {content.how_to_use.leaves.desc}
                                    </p>
                                </div>
                                
                                <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-full bg-primary text-white">
                                            <Droplets size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                                            {content.how_to_use.soil.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                                        {content.how_to_use.soil.desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 5.5. FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-10">
                    {content.faq.title}
                </h2>
                <div className="space-y-4">
                    <details className="group [&_summary::-webkit-details-marker]:hidden bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 rounded-2xl shadow-sm">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-bold text-gray-900 dark:text-white">
                            <h3 className="text-lg md:text-xl font-display">{content.faq.q1}</h3>
                            <span className="shrink-0 rounded-full bg-gray-100 dark:bg-white/5 p-1.5 text-gray-900 dark:text-white sm:p-3 group-open:-rotate-180 transition-transform">
                                <ChevronDown className="h-5 w-5" />
                            </span>
                        </summary>
                        <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 font-body leading-relaxed border-t border-black/5 dark:border-white/5 pt-4 mt-2">
                            {content.faq.a1}
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 rounded-2xl shadow-sm">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-bold text-gray-900 dark:text-white">
                            <h3 className="text-lg md:text-xl font-display">{content.faq.q2}</h3>
                            <span className="shrink-0 rounded-full bg-gray-100 dark:bg-white/5 p-1.5 text-gray-900 dark:text-white sm:p-3 group-open:-rotate-180 transition-transform">
                                <ChevronDown className="h-5 w-5" />
                            </span>
                        </summary>
                        <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 font-body leading-relaxed border-t border-black/5 dark:border-white/5 pt-4 mt-2">
                            {content.faq.a2}
                        </p>
                    </details>
                </div>
            </div>

            {/* 6. B2B DEALERSHIP SECTION */}
            <div className="bg-gray-900 dark:bg-[#111] text-white py-20 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <span className="text-gray-300">B2B / Kurumsal Çözümler</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                                {content.b2b.title}
                            </h2>
                            <p className="text-gray-400 font-body text-lg leading-relaxed">
                                {content.b2b.desc}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-auto">
                            <Link 
                                href={`/${lang}/contact`}
                                data-action="click_b2b_dealer"
                                data-location="b2b_block"
                                className="w-full sm:w-auto px-8 py-5 bg-white text-gray-900 hover:bg-gray-100 font-bold uppercase tracking-widest text-sm rounded transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-xl"
                            >
                                {content.b2b.cta}
                                <ArrowRight className="w-5 h-5 text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. BOTTOM CTA SECTION */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center">
                <div className="bg-primary rounded-3xl p-10 sm:p-14 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none group-hover:bg-white/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black/10 blur-3xl pointer-events-none group-hover:bg-black/20 transition-colors duration-500"></div>
                    
                    <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-10 relative z-10">
                        {content.ctas.title}
                    </h2>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
                        <a 
                            href={BUY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-action="click_buy_now"
                            data-location="bottom_cta"
                            className="w-full md:w-auto px-8 py-5 bg-white text-primary font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:shadow-white/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={20} />
                            {content.ctas.buy_now}
                        </a>
                        <a 
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-action="click_whatsapp"
                            data-location="bottom_cta"
                            className="w-full md:w-auto px-8 py-5 bg-green-500 hover:bg-green-400 text-white border border-transparent font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:shadow-green-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            {content.ctas.whatsapp}
                        </a>
                        <Link
                            href={`/${lang}/contact`}
                            data-action="click_contact"
                            data-location="bottom_cta"
                            className="w-full md:w-auto px-8 py-5 bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-white font-bold uppercase tracking-widest text-sm rounded transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            {content.ctas.contact}
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
