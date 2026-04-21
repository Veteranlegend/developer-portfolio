import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Hero
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'tagline', title: 'Hero Tagline', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'isOpenToWork', title: 'Open to Work', type: 'boolean', initialValue: true }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
    defineField({
      name: 'bio',
      title: 'Hero Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Each item is one paragraph shown in the hero section',
    }),

    // About
    defineField({
      name: 'aboutParagraphs',
      title: 'About Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'aboutHighlights',
      title: 'About Highlight Cards',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short labels shown in the grid on the right side of the About section',
    }),

    // Contact
    defineField({ name: 'email', title: 'Email', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'text',
      rows: 3,
    }),

    // Skills
    defineField({
      name: 'skillGroups',
      title: 'Skill Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Group Title', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'items', title: 'Skills', type: 'array', of: [{ type: 'string' }] }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
})
