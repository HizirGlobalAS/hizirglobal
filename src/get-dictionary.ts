
import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  tr: () => import('./dictionaries/tr.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  az: () => import('./dictionaries/az.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'tr' | 'ru' | 'az') => {
  return dictionaries[locale]?.() ?? dictionaries.tr()
}
