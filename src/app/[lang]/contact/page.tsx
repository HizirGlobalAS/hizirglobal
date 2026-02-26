import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.contact_page?.title || "İletişim"} | ${dict.common.company_name}`,
        description: dict.contact_page?.description || "Hızır Global iletişim bilgileri.",
    };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        {dict.nav.contact}
                    </h4>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-16 leading-tight">
                        {dict.contact_page?.title || "Bizimle İletişime"} <br />
                        <span className="text-primary">{dict.contact_page?.subtitle || "Geçin"}</span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Info Section */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded h-full shadow-sm dark:shadow-none transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Genel Merkez</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="text-primary mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white mb-1">Adres</p>
                                            <p className="text-gray-600 dark:text-gray-400">Gülbahar Mahallesi Gayret Sokak No:8 Kat:2 MCG Binası 34349 Gayrettepe Şişli/İstanbul</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white mb-1">E-posta</p>
                                            <p className="text-gray-600 dark:text-gray-400">info@yetisplus.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-primary mt-1">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white mb-1">Telefon</p>
                                            <p className="text-gray-600 dark:text-gray-400">0501 321 66 63</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map or Image Placeholder */}
                        <div className="bg-white dark:bg-white/[0.05] border border-black/10 dark:border-white/10 rounded min-h-[400px] h-full flex items-center justify-center relative overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12035.031580214691!2d29.0034357!3d41.0697122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzExLjAiTiAyOcKwMDAnMTIuNCJF!5e0!3m2!1sen!2str!4v1708696800000!5m2!1sen!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
