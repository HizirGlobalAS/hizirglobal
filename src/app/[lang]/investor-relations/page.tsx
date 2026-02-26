import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.nav.investor_relations} | ${dict.common.company_name}`,
        description: dict.investor_page?.description || `${dict.nav.investor_relations} sayfası`,
    };
}

export default async function InvestorRelationsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        {dict.nav.investor_relations}
                    </h4>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                        {dict.investor_page?.title || "Yatırımcı"} <br />
                        <span className="text-primary">{dict.investor_page?.subtitle || "İlişkileri"}</span>
                    </h1>

                    <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-lg p-12 text-center mt-12 shadow-sm dark:shadow-none transition-colors duration-300">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {dict.investor_page?.coming_soon_title || "Çok Yakında"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                            {dict.investor_page?.coming_soon_desc || "Şeffaf, güvenilir ve güncel yatırımcı ilişkileri portalımız yapım aşamasındadır."}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
