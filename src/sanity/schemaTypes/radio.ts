import { defineField, defineType } from 'sanity'

export const radioType = defineType({
  name: 'radio',
  title: 'Radyo (Müzik Listesi)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Parça/Radyo Adı',
      description: 'Örn: Kurumsal Lofi Dinletisi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      description: 'Linkteki v= idsi. Örn: jfKfPfyJRdk (Sadece ses çalınacaktır).',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif mi?',
      description: 'Bu parçanın çalma listesinde yer alması için açık tutun.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'youtubeId',
    },
  },
})
