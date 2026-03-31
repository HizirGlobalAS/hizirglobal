"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { GalleryCollection, SupportedLocale } from "@/types/gallery";

interface MediaModalProps {
  collection: GalleryCollection | null;
  isOpen: boolean;
  onClose: () => void;
  lang: SupportedLocale;
}

export function MediaModal({ collection, isOpen, onClose, lang }: MediaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (collection?.images && currentIndex < collection.images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [collection, currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const images = collection?.images || [];
  const isVideo = collection?.type === "youtube";

  return (
    <AnimatePresence>
      {isOpen && collection && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-7xl max-h-full flex flex-col items-center"
        >
            {/* Context Header */}
            <div className="w-full text-left mb-6 px-4 md:px-12">
               <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 line-clamp-2">
                 {collection.title[lang] || collection.title['tr']}
               </h2>
               {collection.description && (
                   <p className="text-gray-300 max-w-3xl text-sm md:text-base line-clamp-3">
                       {collection.description[lang] || collection.description['tr']}
                   </p>
               )}
            </div>

            {isVideo ? (
                <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
                    <iframe 
                      src={`https://www.youtube.com/embed/${collection.youtubeId}?autoplay=1`} 
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center group">
                    <Image 
                       src={images[currentIndex] || collection.coverImage} 
                       alt={`Image ${currentIndex + 1}`} 
                       fill
                       className="object-contain bg-black/50"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                       priority
                    />
                    
                    {images.length > 1 && (
                        <>
                           <button onClick={handlePrev} disabled={currentIndex === 0} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 disabled:opacity-0 disabled:pointer-events-none text-white p-2 md:p-3 rounded-full backdrop-blur transition-all">
                               <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                           </button>
                           <button onClick={handleNext} disabled={currentIndex === images.length - 1} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 disabled:opacity-0 disabled:pointer-events-none text-white p-2 md:p-3 rounded-full backdrop-blur transition-all">
                               <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                           </button>
                           <div className="absolute bottom-4 left-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 text-xs rounded-full backdrop-blur">
                               {currentIndex + 1} / {images.length}
                           </div>
                        </>
                    )}
                </div>
            )}
        </motion.div>
      </div>)}
    </AnimatePresence>
  );
}
