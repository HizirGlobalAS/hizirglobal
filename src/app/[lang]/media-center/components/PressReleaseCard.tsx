"use client";

import { PressRelease, SupportedLocale } from "@/types/media-center";
import { FileText, File, FileArchive } from "lucide-react";
import Image from "next/image";

const getFileIcon = (type: string) => {
  if (type === 'pdf') return <FileText className="w-4 h-4" />;
  if (type === 'zip') return <FileArchive className="w-4 h-4" />;
  return <File className="w-4 h-4" />;
};

export function PressReleaseCard({ pr, lang }: { pr: PressRelease, lang: SupportedLocale }) {
  const validFiles = pr.files.filter(f => !f.lang || f.lang === lang);

  return (
    <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col md:flex-row gap-6">
      {pr.isPinned && (
        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg z-10 shadow-sm">
          {lang === 'tr' ? 'Öne Çıkan' : lang === 'en' ? 'Featured' : lang === 'ru' ? 'Рекомендуемые' : 'Önə Çıxan'}
        </div>
      )}

      {pr.coverImage && (
        <div className="w-full md:w-56 h-48 md:h-auto shrink-0 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
           <Image src={pr.coverImage} alt={pr.title[lang] || pr.title['tr']} fill className="object-cover" sizes="(max-width: 768px) 100vw, 224px" />
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wider">
          <span className="text-gray-500 dark:text-gray-400">
            {new Date(pr.publishDate).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">
             {pr.category === 'etkinlik' ? (lang === 'en' ? 'Event' : lang === 'ru' ? 'Мероприятие' : 'Etkinlik') : (lang === 'en' ? 'Press Release' : lang === 'ru' ? 'Пресс-релиз' : 'Bülten')}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {pr.title[lang] || pr.title['tr']}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
          {pr.excerpt[lang] || pr.excerpt['tr']}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto">
          {validFiles.map((file, idx) => (
            <a
              key={idx}
              href={file.url}
              download
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors"
            >
              {getFileIcon(file.type)}
              <span className="uppercase">{file.type}</span>
              <span className="opacity-50 font-normal ml-1 border-l border-gray-300 dark:border-white/20 pl-2">({file.size})</span>
            </a>
          ))}
          {validFiles.length === 0 && (
             <span className="text-sm text-gray-400 italic">
               {lang === 'tr' ? 'Bu dil için dosya bulunmuyor' : lang === 'en' ? 'No file for this language' : 'Bu dil üçün fayl yoxdur'}
             </span>
          )}
        </div>
      </div>
    </div>
  );
}
