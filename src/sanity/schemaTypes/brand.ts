import { defineField, defineType } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Şirketlerimiz & Markalarımız',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Marka Adı',
      type: 'string',
      description: 'Örn: Yetiş+ Çarşı',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryKey',
      title: 'Kategori / Bölüm',
      type: 'string',
      options: {
        list: [
          { title: 'Lojistik (Logistics)', value: 'logistics' },
          { title: 'E-Ticaret (E-commerce)', value: 'ecommerce' },
          { title: 'Gıda (Food)', value: 'food' },
          { title: 'Perakende (Retail)', value: 'retail' },
          { title: 'Tarım (Agriculture)', value: 'agriculture' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Kullanılacak İkon',
      type: 'string',
      options: {
        list: [
          { title: 'Market/Dükkan (Store)', value: 'Store' },
          { title: 'Yemek/Çatal Bıçak (Utensils)', value: 'Utensils' },
          { title: 'Depo/Antrepo (Warehouse)', value: 'Warehouse' },
          { title: 'Kamyon/Filo (Truck)', value: 'Truck' },
          { title: 'Global/Küresel (Globe)', value: 'Globe' },
          { title: 'Enerji (Zap)', value: 'Zap' },
          { title: 'Değer/Pırlanta (Gem)', value: 'Gem' },
          { title: 'Tarım/Filiz (Sprout)', value: 'Sprout' },
          { title: 'Yatırım/Gelecek (Rocket)', value: 'Rocket' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Marka Açıklaması',
      type: 'localeText',
    }),
    defineField({
      name: 'stats',
      title: 'İstatistik & Metrikleri',
      type: 'array',
      description: 'Örn: Etiket: Bölge Sayısı / Değer: 81 İl',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'localeString', title: 'İstatistik Etiketi' },
            { name: 'value', type: 'localeString', title: 'İstatistik Değeri' },
          ],
          preview: {
            select: {
              title: 'label.tr',
              subtitle: 'value.tr',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'href',
      title: 'Web Sitesi (Opsiyonel)',
      type: 'url',
      description: 'Dış bağlantı varsa (https://...) yazın, yoksa boş bırakın',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'categoryKey',
    },
  },
})
