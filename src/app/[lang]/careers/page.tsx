import CareerForm from "@/components/careers/CareerForm";
import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.careers_page?.title || "Kariyer"} | ${dict.common.company_name}`,
        description: dict.careers_page?.description || "Hızır Global kariyer fırsatları ve iş başvurusu formu.",
    };
}

export default async function CareersPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-16">
                        <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            {dict.careers_page.title}
                        </h4>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {dict.careers_page.subtitle} <br />
                            <span className="text-primary">{dict.careers_page.title}</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
                            {dict.careers_page.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
                        {/* Information Sidebar */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded shadow-sm dark:shadow-none transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Neden Hızır Global?</h3>
                                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <div className="text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span>Prestijli projelere liderlik etme fırsatı</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span>Sürekli gelişim ve yatırım destek sistemi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="text-primary mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span>Küresel ekosistemde kariyer yolu</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 p-8 rounded">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Başvuru Süreci</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                    Özgeçmişiniz insan kaynakları uzmanlarımız tarafından detaylıca incelenir. Size uygun bir pozisyon açıldığında bizimle belirttiğiniz iletişim kanalları üzerinden irtibata geçilir.
                                </p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="lg:col-span-3">
                            <CareerForm dict={dict} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
