import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { GalleryClient } from "./components/GalleryClient";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {
        title: `${(dict as any).nav?.gallery || "Galeri"} | ${(dict as any).common?.company_name || "Hızır Global"}`,
        description: (dict as any).gallery?.subtitle || "Hızır Global kurumsal etkinlikleri, çalışma ortamı ve operasyonel varlığı.",
    };
}

export const revalidate = 60; // 1 minute ISR caching

async function getGalleryData() {
    return client.fetch(`*[_type == "gallery"] | order(date desc) {
        _id,
        title,
        description,
        category,
        subCategory,
        "coverImage": coverImage.asset->url,
        "images": images[].asset->url,
        youtubeId,
        date
    }`);
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);
    const galleryData = await getGalleryData();

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <div className="container mx-auto px-6">
                 {/* Reusing standard padding layout from AboutPage */}
                <GalleryClient lang={validLang} dict={dict} sanityGallery={galleryData} />
            </div>
        </main>
    );
}
