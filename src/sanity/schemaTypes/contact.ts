import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'İletişim Bilgileri (Merkez)',
  type: 'document',
  // Make it a singleton approach in structure later, but document is fine for now
  fields: [
    defineField({
      name: 'title',
      title: 'İçerik Etiketi',
      type: 'string',
      description: 'Sadece panelde ayırt etmek için (Örn: "Ana Merkez Adresi")',
      validation: (Rule) => Rule.required(),
      initialValue: 'Genel Merkez İletişim',
    }),
    defineField({
      name: 'address',
      title: 'Açık Adres',
      type: 'localeText',
    }),
    defineField({
      name: 'email',
      title: 'E-Posta Adresi',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon Numarası',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps Embed Linki',
      type: 'url',
      description: 'Harita için tam link (https://www.google.com/maps/embed...)',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
