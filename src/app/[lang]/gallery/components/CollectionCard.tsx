"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { GalleryCollection, SupportedLocale } from "@/types/gallery";

interface CollectionCardProps {
  collection: GalleryCollection;
  lang: SupportedLocale;
  onClick: (id: string) => void;
}

export function CollectionCard({ collection, lang, onClick }: CollectionCardProps) {
  const isVideo = collection.type === "youtube";
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(collection.id)}
      className="group relative flex flex-col cursor-pointer bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={collection.coverImage}
          alt={collection.title[lang] || collection.title['tr']}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Play Button Overlay */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-primary ml-1" />
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
          {new Date(collection.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">
          {collection.title[lang] || collection.title['tr']}
        </h3>
        {collection.description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {collection.description[lang] || collection.description['tr']}
          </p>
        )}
      </div>
    </motion.div>
  );
}
