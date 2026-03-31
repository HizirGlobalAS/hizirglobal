import { getDictionary } from "@/get-dictionary";
import { Metadata } from "next";
import { MediaClient } from "./components/MediaClient";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = dict as any;
    return {
        title: `${d.nav?.media || "Medya Merkezi"} | ${d.common?.company_name || "Hızır Global"}`,
        description: d.media?.subtitle || "Hızır Global kurumsal duyuruları, basın bültenleri ve marka materyalleri.",
    };
}

async function getMediaData() {
    const pressReleases = await client.fetch(`*[_type == "pressRelease"] | order(publishDate desc) {
        _id,
        title,
        category,
        excerpt,
        publishDate,
        isPinned,
        "coverImage": coverImage.asset->url,
        files[]{
            fileTitle, 
            lang, 
            "url": fileUpload.asset->url
        }
    }`);

    const brandAssets = await client.fetch(`*[_type == "brandAsset"] | order(_createdAt asc) {
        _id,
        title,
        description,
        iconType,
        "url": fileUpload.asset->url
    }`);

    return { pressReleases, brandAssets };
}

export default async function MediaCenterPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);
    const { pressReleases, brandAssets } = await getMediaData();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = dict as any;
    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <MediaClient lang={validLang} dict={d} sanityPressReleases={pressReleases} sanityBrandAssets={brandAssets} />
            </div>
        </main>
    );
}
