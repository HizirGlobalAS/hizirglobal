export type SupportedLocale = 'tr' | 'en' | 'ru' | 'az';

export type LocalizedString = {
  [key in SupportedLocale]?: string;
} & { tr: string };

export type FileType = 'pdf' | 'docx' | 'zip' | 'jpg' | 'png' | 'svg';

export interface MediaFile {
  url: string;
  type: FileType;
  size: string; // e.g., "2.4 MB"
  lang?: SupportedLocale; // If specific to a language, else all languages
}

export interface PressRelease {
  id: string;
  category: 'bulten' | 'etkinlik';
  title: LocalizedString;
  excerpt: LocalizedString;
  publishDate: string; // YYYY-MM-DD
  coverImage?: string;
  files: MediaFile[];
  isPinned?: boolean; // Show at the top / emphasized
}

export interface BrandAsset {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  file: MediaFile;
  iconType: 'logo' | 'document' | 'image';
}
