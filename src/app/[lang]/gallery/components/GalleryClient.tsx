"use client";

import { useState, useMemo } from "react";
import { SupportedLocale } from "@/types/gallery";
import { mockGallery, mockGalleryCategories, mockGallerySubCategories } from "@/data/mock-gallery";
import { CategoryFilter } from "./CategoryFilter";
import { CollectionCard } from "./CollectionCard";
import { MediaModal } from "./MediaModal";
import { LayoutGrid } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface GalleryClientProps {
  lang: SupportedLocale;
  dict: Record<string, any>;
  sanityGallery?: any[];
}

export function GalleryClient({ lang, dict, sanityGallery }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);

  const hasSanityGallery = sanityGallery && sanityGallery.length > 0;
  const galleryItems = hasSanityGallery ? sanityGallery.map((g: any) => ({
      id: g._id,
      type: g.youtubeId ? "youtube" : "photo",
      category: g.category || "events",
      subCategory: g.subCategory || undefined,
      title: { tr: g.title?.tr || "Koleksiyon", en: g.title?.en || "", ru: g.title?.ru || "", az: g.title?.az || "" },
      description: { tr: g.description?.tr || "", en: g.description?.en || "", ru: g.description?.ru || "", az: g.description?.az || "" },
      coverImage: g.coverImage || "",
      images: Array.isArray(g.images) ? g.images : [],
      youtubeId: g.youtubeId || undefined,
      date: g.date || new Date().toISOString()
  })) : mockGallery;

  const filteredCollections = useMemo(() => {
    return galleryItems.filter((col: any) => {
      const matchCategory = activeCategory === "all" || col.category === activeCategory;
      const matchSubCategory = !activeSubCategory || col.subCategory === activeSubCategory;
      return matchCategory && matchSubCategory;
    });
  }, [activeCategory, activeSubCategory, galleryItems]);

  const selectedCollection = useMemo(() => {
    if (!selectedCollectionId) return null;
    return galleryItems.find((c: any) => c.id === selectedCollectionId) || null;
  }, [selectedCollectionId, galleryItems]);

  const strings = {
    title: lang === 'tr' ? 'Galeri' : lang === 'en' ? 'Gallery' : lang === 'ru' ? 'Галерея' : 'Qalereya',
    subtitle: lang === 'tr' ? 'Tüm etkinliklerimiz ve operasyonel varlığımız.' : lang === 'en' ? 'All our events and operational presence.' : lang === 'ru' ? 'Все наши мероприятия и операционное присутствие.' : 'Bütün tədbirlərimiz və əməliyyat iştirakımız.',
    pressKit: lang === 'tr' ? 'Basın Kitini İndir' : lang === 'en' ? 'Download Press Kit' : lang === 'ru' ? 'Скачать пресс-кит' : 'Mətbuat Kitini Yükləyin',
    empty: lang === 'tr' ? 'Bu kategoride henüz bir içerik bulunmuyor.' : lang === 'en' ? 'No content found in this category yet.' : lang === 'ru' ? 'В этой категории пока нет контента.' : 'Bu kateqoriyada hələ heç bir məzmun yoxdur.'
  };

  return (
    <div className="w-full">
      {/* Page Header (can be extracted to page.tsx, but good here to connect to Download button) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
         <div>
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs flex items-center gap-3 font-body">
              <span className="w-8 h-[1px] bg-primary"></span>
               {dict?.nav?.gallery || strings.title}
             </h4>
             <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight">
               {dict?.gallery?.title || strings.title}
             </h1>
             <p className="mt-4 text-gray-500 max-w-xl text-lg">
                {dict?.gallery?.subtitle || strings.subtitle}
             </p>
         </div>
      </div>

      <CategoryFilter
        categories={mockGalleryCategories}
        subCategories={mockGallerySubCategories}
        activeCategory={activeCategory}
        activeSubCategory={activeSubCategory}
        onCategoryChange={setActiveCategory}
        onSubCategoryChange={setActiveSubCategory}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lang={lang as any}
      />

      {filteredCollections.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCollections.map((col: any) => (
            <CollectionCard
              key={col.id}
              collection={col}
              lang={lang}
              onClick={setSelectedCollectionId}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-white/[0.02] border border-dashed border-gray-300 dark:border-white/10 rounded-2xl">
          <LayoutGrid className="w-12 h-12 text-gray-400 mb-4 opacity-50" />
          <p className="text-gray-500 font-medium">{strings.empty}</p>
        </div>
      )}

      <MediaModal
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        collection={selectedCollection as any}
        isOpen={!!selectedCollectionId}
        onClose={() => setSelectedCollectionId(null)}
        lang={lang}
      />
    </div>
  );
}
