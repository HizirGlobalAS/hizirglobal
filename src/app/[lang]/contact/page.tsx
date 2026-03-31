import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { ContactClient } from "./components/ContactClient";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.contact_page?.title || "İletişim"} | ${dict.common.company_name}`,
        description: dict.contact_page?.description || "Hızır Global iletişim bilgileri.",
    };
}

async function getContactData() {
    return client.fetch(`*[_type == "contact"][0] {
        _id,
        title,
        address,
        email,
        phone,
        mapUrl
    }`);
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);
    const contactData = await getContactData();

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
                    
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <ContactClient dict={dict as any} lang={validLang} sanityContact={contactData} />
                </div>
            </div>
        </main>
    );
}
