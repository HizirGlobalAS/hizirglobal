"use client";

import { motion } from "framer-motion";
import { SupportedLocale } from "@/types/gallery";

interface CategoryFilterProps {
  categories: { id: string; label: Record<string, string> }[];
  subCategories?: Record<string, { id: string; label: Record<string, string> }[]>;
  activeCategory: string;
  activeSubCategory: string | null;
  onCategoryChange: (id: string) => void;
  onSubCategoryChange: (id: string | null) => void;
  lang: SupportedLocale;
}

export function CategoryFilter({
  categories,
  subCategories,
  activeCategory,
  activeSubCategory,
  onCategoryChange,
  onSubCategoryChange,
  lang,
}: CategoryFilterProps) {
  const currentSubs = subCategories && subCategories[activeCategory] ? subCategories[activeCategory] : [];

  return (
    <div className="w-full flex flex-col gap-4 mb-12">
      {/* Main Categories */}
      <div className="flex flex-nowrap md:flex-wrap overflow-x-auto pb-4 md:pb-0 gap-2 md:gap-4 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              onCategoryChange(cat.id);
              onSubCategoryChange(null);
            }}
            className={`whitespace-nowrap shrink-0 snap-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
              activeCategory === cat.id
                ? "text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-white/5"
            }`}
          >
            {activeCategory === cat.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{cat.label[lang] || cat.label['tr']}</span>
          </button>
        ))}
      </div>

      {/* Sub Categories (if any) */}
      {currentSubs.length > 0 && (
        <motion.div
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex flex-nowrap md:flex-wrap overflow-x-auto pb-4 md:pb-0 gap-2 pt-2 border-t border-gray-200 dark:border-white/10 snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          <button
            onClick={() => onSubCategoryChange(null)}
            className={`whitespace-nowrap shrink-0 snap-center px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeSubCategory === null
                ? "bg-gray-800 text-white dark:bg-white dark:text-black"
                : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
            }`}
          >
            {lang === 'tr' ? 'Tümü' : lang === 'en' ? 'All' : lang === 'ru' ? 'Все' : 'Hər şey'}
          </button>
          
          {currentSubs.map((sub) => (
             <button
             key={sub.id}
             onClick={() => onSubCategoryChange(sub.id)}
             className={`whitespace-nowrap shrink-0 snap-center px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
               activeSubCategory === sub.id
                 ? "bg-gray-800 text-white dark:bg-white dark:text-black"
                 : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
             }`}
           >
             {sub.label[lang] || sub.label['tr']}
           </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
