import { defineField, defineType } from 'sanity'

export const brandAssetType = defineType({
  name: 'brandAsset',
  title: 'Kurumsal Materyaller (Logo, Rapor vs)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Materyal Adı',
      description: 'Örn: Şirket Profil Dosyası, Yönetim Kurulu Portreleri',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'localeText',
    }),
    defineField({
      name: 'iconType',
      title: 'Görsel/İkon Türü',
      type: 'string',
      options: {
        list: [
          { title: 'Döküman (PDF vb.)', value: 'document' },
          { title: 'Logo/Vektör', value: 'logo' },
          { title: 'Fotoğraf/Görsel', value: 'image' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'document',
    }),
    defineField({
      name: 'fileUpload',
      title: 'Dosyayı Yükle',
      type: 'file',
      description: 'İndirilecek olan dosya (ZIP, PDF, vb.)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.tr',
      subtitle: 'iconType',
    },
  },
})
