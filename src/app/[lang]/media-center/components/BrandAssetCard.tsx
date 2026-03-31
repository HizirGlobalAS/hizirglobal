"use client";

import { BrandAsset, SupportedLocale } from "@/types/media-center";
import { Download, FileText, Image as ImageIcon, Briefcase } from "lucide-react";

export function BrandAssetCard({ asset, lang }: { asset: BrandAsset, lang: SupportedLocale }) {
  const Icon = asset.iconType === 'document' ? FileText : asset.iconType === 'logo' ? Briefcase : ImageIcon;

  return (
    <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 dark:text-white mb-1">
            {asset.title[lang] || asset.title['tr']}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {asset.description[lang] || asset.description['tr']}
          </p>
          <a
            href={asset.file.url}
            download
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            <Download className="w-4 h-4" />
            {lang === 'tr' ? 'İndir' : lang === 'en' ? 'Download' : lang === 'ru' ? 'Скачать' : 'Yüklə'} ({asset.file.size})
          </a>
        </div>
      </div>
    </div>
  );
}
