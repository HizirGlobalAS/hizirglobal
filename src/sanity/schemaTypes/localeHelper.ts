import { defineType } from 'sanity'

const supportedLanguages = [
  { id: 'tr', title: 'Türkçe', isDefault: true },
  { id: 'en', title: 'English' },
  { id: 'ru', title: 'Русский' },
  { id: 'az', title: 'Azərbaycanca' },
]

export const localeString = defineType({
  name: 'localeString',
  title: 'Çoklu Dil (Metin)',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
  })),
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Çoklu Dil (Uzun Metin)',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    rows: 3,
  })),
})
