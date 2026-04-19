"use client";

import { useState, useMemo } from "react";
import { SupportedLocale } from "@/types/media-center";
import { mockPressReleases, mockBrandAssets } from "@/data/mock-media-center";
import { BrandAssetCard } from "./BrandAssetCard";
import { PressReleaseCard } from "./PressReleaseCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MediaClient({ lang, dict, sanityPressReleases, sanityBrandAssets }: { lang: SupportedLocale, dict: Record<string, any>, sanityPressReleases?: any[], sanityBrandAssets?: any[] }) {
  const [activeTab, setActiveTab] = useState<'all' | 'bulten' | 'etkinlik'>('all');

  // Convert Sanity Data to the component's expected format, fallback to mock data if empty
  const hasSanityPr = sanityPressReleases && sanityPressReleases.length > 0;
  const pressReleases = hasSanityPr ? sanityPressReleases.map((pr: any) => ({
    id: pr._id,
    category: pr.category as 'bulten' | 'etkinlik',
    title: { tr: pr.title?.tr || "Başlıksız", en: pr.title?.en || "", ru: pr.title?.ru || "", az: pr.title?.az || "" },
    excerpt: { tr: pr.excerpt?.tr || "Açıklama yok", en: pr.excerpt?.en || "", ru: pr.excerpt?.ru || "", az: pr.excerpt?.az || "" },
    publishDate: pr.publishDate,
    coverImage: pr.coverImage,
    isPinned: pr.isPinned || false,
    files: Array.isArray(pr.files) ? pr.files.map((f: any) => {
      // Basic type inference based on URL extension
      const urlLower = (f.url || "").toLowerCase();
      let type = "pdf";
      if (urlLower.endsWith(".zip")) type = "zip";
      else if (urlLower.endsWith(".docx") || urlLower.endsWith(".doc")) type = "docx";
      else if (urlLower.endsWith(".jpg") || urlLower.endsWith(".jpeg") || urlLower.endsWith(".png")) type = "jpg";

      return {
        url: f.url || "",
        type,
        size: "Indir", // Can be dynamic if we parsed the asset metadata from Sanity
        lang: f.lang === "all" ? undefined : f.lang,
      };
    }) : []
  })) : mockPressReleases;

  const hasSanityAssets = sanityBrandAssets && sanityBrandAssets.length > 0;
  const brandAssets = hasSanityAssets ? sanityBrandAssets.map((asset: any) => ({
    id: asset._id,
    title: { tr: asset.title?.tr || "Materyal", en: asset.title?.en || "", ru: asset.title?.ru || "", az: asset.title?.az || "" },
    description: { tr: asset.description?.tr || "", en: asset.description?.en || "", ru: asset.description?.ru || "", az: asset.description?.az || "" },
    iconType: asset.iconType || "document",
    file: { url: asset.url || "", type: "pdf", size: "Indir" }
  })) : mockBrandAssets;


  const filteredReleases = useMemo(() => {
    return pressReleases
      .filter((pr: any) => activeTab === 'all' || pr.category === activeTab)
      .sort((a: any, b: any) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [activeTab, pressReleases]);

  const strings = {
    title: lang === 'tr' ? 'Medya Merkezi' : lang === 'en' ? 'Media Center' : lang === 'ru' ? 'Медиа-центр' : 'Media Mərkəzi',
    subtitle: lang === 'tr' ? 'Hızır Global kurumsal duyuruları, basın bültenleri ve marka materyalleri.' : lang === 'en' ? 'Hizir Global corporate announcements, press releases and brand assets.' : lang === 'ru' ? 'Корпоративные объявления, пресс-релизы и материалы бренда.' : 'Hızır Global korporativ elanları, mətbuat relizləri və marka materialları.',
    pressContactTitle: lang === 'tr' ? 'Medya İletişimi' : lang === 'en' ? 'Media Contact' : lang === 'ru' ? 'Контакт для СМИ' : 'Media Əlaqə',
    pressContactDesc: lang === 'tr' ? 'Basın ve PR talepleriniz için:' : lang === 'en' ? 'For press and PR inquiries:' : lang === 'ru' ? 'Для запросов прессы и PR:' : 'Mətbuat və PR tələbləri üçün:',
    tabAll: lang === 'tr' ? 'Tümü' : lang === 'en' ? 'All' : lang === 'ru' ? 'Все' : 'Hər şey',
    tabBulten: lang === 'tr' ? 'Basın Bültenleri' : lang === 'en' ? 'Press Releases' : lang === 'ru' ? 'Пресс-релизы' : 'Mətbuat Relizləri',
    tabEvent: lang === 'tr' ? 'Etkinlik Medya Kitleri' : lang === 'en' ? 'Event Media Kits' : lang === 'ru' ? 'Медиа-киты мероприятий' : 'Tədbir Media Kitləri',
    assetsTitle: lang === 'tr' ? 'Kurumsal Dosyalar' : lang === 'en' ? 'Corporate Assets' : lang === 'ru' ? 'Корпоративные файлы' : 'Korporativ Fayllar'
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
         <div>
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body">
              <span className="w-8 h-[1px] bg-primary"></span>
               {dict?.nav?.media || strings.title}
             </h4>
             <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight">
               {dict?.media?.title || strings.title}
             </h1>
             <p className="mt-4 text-gray-500 max-w-xl text-lg">
                {dict?.media?.subtitle || strings.subtitle}
             </p>
         </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-12">
        {/* Left Column: Main Content (Tabs and List) */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
            {[
              { id: 'all', label: strings.tabAll },
              { id: 'bulten', label: strings.tabBulten },
              { id: 'etkinlik', label: strings.tabEvent },
            ].map((tab) => (
              <button
                key={tab.id}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {filteredReleases.map((pr: any) => (
              <PressReleaseCard key={pr.id} pr={pr} lang={lang} />
            ))}
            {filteredReleases.length === 0 && (
               <p className="text-gray-500 py-10 text-center">İçerik bulunamadı.</p>
            )}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="w-full lg:w-[340px] shrink-0 order-1 lg:order-2">
          <div className="sticky top-32 flex flex-col gap-8">
            
            {/* Contact Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 relative overflow-hidden group hover:bg-primary/10 transition-colors">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 relative z-10">{strings.pressContactTitle}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 relative z-10">{strings.pressContactDesc}</p>
              <a href="mailto:social@hizirglobal.com.tr" className="font-semibold text-primary text-lg hover:underline decoration-primary/50 underline-offset-4 relative z-10 inline-block">
                social@hizirglobal.com.tr
              </a>
            </div>

            {/* Brand Assets */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                 <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                   <span className="w-2 h-2 rounded-full bg-primary"></span>
                 </span>
                 {strings.assetsTitle}
              </h3>
              <div className="flex flex-col gap-4">
                {brandAssets.map((asset: any) => (
                  <BrandAssetCard key={asset.id} asset={asset} lang={lang} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
