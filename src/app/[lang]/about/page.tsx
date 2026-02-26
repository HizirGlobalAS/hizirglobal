import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";

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

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded shadow-sm dark:shadow-none">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-body">{dict.why_us.card_1_title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-body">{dict.why_us.card_1_desc}</p>
                            </div>
                            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded shadow-sm dark:shadow-none">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-body">{dict.why_us.card_2_title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-body">{dict.why_us.card_2_desc}</p>
                            </div>
                            <div className="md:col-span-2 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded shadow-sm dark:shadow-none">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-body">{dict.why_us.card_3_title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-body">{dict.why_us.card_3_desc}</p>
                            </div>
                        </div>

                        <div className="mt-20 border-l-4 border-primary pl-8 py-4 bg-primary/5 dark:bg-transparent p-6 dark:p-0 rounded-r dark:rounded-none">
                            <p className="text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                                &quot;{dict.why_us.quote}&quot;
                            </p>
                            <p className="text-primary font-bold tracking-widest uppercase text-sm">
                                {dict.why_us.quote_author}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
