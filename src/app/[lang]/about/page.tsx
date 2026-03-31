import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { AboutClient } from "./components/AboutClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.about_page?.title || "Hakkımızda"} | ${dict.common.company_name}`,
        description: dict.about_page?.description || "Hızır Global kurumsal kimliği ve vizyonu.",
    };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        {dict.nav.about}
                    </h4>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-12 leading-tight">
                        {dict.about_page?.title || dict.hero.title_main} <br />
                        <span className="text-gray-500">{dict.about_page?.subtitle || dict.hero.title_highlight}</span>
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-8 font-body">
                            {dict.why_us.description}
                        </p>

                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        <AboutClient dict={dict as any} />
                    </div>
                </div>
            </div>
        </main>
    );
}
