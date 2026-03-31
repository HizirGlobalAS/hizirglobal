import BrandsClient from "@/components/brands/BrandsClient";
import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: dict.meta.brands.title,
        description: dict.meta.brands.desc,
    };
}

// Fetch from Sanity
async function getBrands() {
    return client.fetch(
        `*[_type == "brand"] | order(_createdAt asc) {
            _id,
            name,
            categoryKey,
            icon,
            description,
            stats,
            href
        }`
    );
}

export default async function BrandsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);
    
    // Fetch Sanity brands on server-side
    const initialBrands = await getBrands();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <BrandsClient dict={dict} lang={validLang} sanityBrands={initialBrands} />
        </main>
    );
}
