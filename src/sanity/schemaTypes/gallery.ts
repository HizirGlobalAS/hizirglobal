import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galeri & Medya Koleksiyonu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Koleksiyon Adı',
      description: 'Örn: 2024 Tarım Tesisleri İncelenmesi',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama (Opsiyonel)',
      type: 'localeText',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Etkinlikler (events)', value: 'events' },
          { title: 'Ofis (office)', value: 'office' },
          { title: 'Saha (field)', value: 'field' },
          { title: 'Markalar (brands)', value: 'brands' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subCategory',
      title: 'Alt Kategori (Opsiyonel)',
      description: 'Markalar veya Saha gibi özel alanların ID si (Örn: hizir-lojistik)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Tarih',
      type: 'date',
      initialValue: () => new Date().toISOString().substring(0, 10),
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      description: 'Kartlarda ve listelerde görünecek ana resim',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Koleksiyon Görselleri (Toplu Yükleme)',
      description: 'TOPLU YÜKLEME: Bilgisayarınızdan 10-20 resmi aynı anda seçip farenizle sürükleyerek direkt bu alanın üzerine bırakabilirsiniz. HEPSİ OTOMATİK YÜKLENİR.',
      type: 'array',
      options: { layout: 'grid' },
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID (Opsiyonel)',
      description: 'Eğer bir video koleksiyonuysa, linkin v= kısmındaki ID. Örn: eVTXPUF4Oz4',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title.tr',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})
