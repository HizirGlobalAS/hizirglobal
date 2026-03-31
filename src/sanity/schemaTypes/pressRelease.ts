import { defineField, defineType } from 'sanity'

export const pressReleaseType = defineType({
  name: 'pressRelease',
  title: 'Basın Bültenleri & Duyurular',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Bülten / Haber Başlığı',
      type: 'localeString',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Basın Bülteni (Bulletin)', value: 'bulten' },
          { title: 'Etkinlik (Event)', value: 'etkinlik' },
          { title: 'Haber (News)', value: 'haber' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Kısa Özet',
      type: 'localeText',
    }),
    defineField({
      name: 'publishDate',
      title: 'Yayınlanma Tarihi',
      type: 'date',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString().substring(0, 10),
    }),
    defineField({
      name: 'isPinned',
      title: 'Başa Tuttur (Öne Çıkar)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'files',
      title: 'Eklenti Dosyaları (PDF, DOCX vb.)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'fileTitle', type: 'string', title: 'Dosya Adı (Örn: Finansal Rapor)' },
            { 
              name: 'lang', 
              type: 'string', 
              title: 'Dosyanın Dili',
              options: {
                list: [
                  { title: 'Genel/Bilinmiyor', value: 'all' },
                  { title: 'Türkçe', value: 'tr' },
                  { title: 'İngilizce', value: 'en' },
                  { title: 'Rusça', value: 'ru' },
                  { title: 'Azerbaycanca', value: 'az' },
                ],
              },
              initialValue: 'all'
            },
            { name: 'fileUpload', type: 'file', title: 'Dosyayı Yükle' },
          ],
          preview: {
            select: {
              title: 'fileTitle',
              subtitle: 'lang',
            },
          },
        },
      ],
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
