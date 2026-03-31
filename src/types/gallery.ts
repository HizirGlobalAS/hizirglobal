export type SupportedLocale = 'tr' | 'en' | 'ru' | 'az';

export type LocalizedString = {
  [key in SupportedLocale]?: string;
} & { tr: string }; // Fallback to 'tr' is guaranteed

export type GalleryItemType = 'photo' | 'youtube';

export interface GalleryCollection {
  id: string;
  type: GalleryItemType;
  category: string;
  subCategory?: string;
  title: LocalizedString;
  description?: LocalizedString;
  coverImage: string;
  youtubeId?: string; // used if type === 'youtube'
  images?: string[]; // used if type === 'photo'
  date: string; // YYYY-MM-DD
}
