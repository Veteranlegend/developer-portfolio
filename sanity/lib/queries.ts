import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    tech,
    links[] {
      label,
      href,
      variant
    },
    featured
  }
`)

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    name,
    role,
    tagline,
    location,
    isOpenToWork,
    githubUrl,
    bio,
    aboutParagraphs,
    aboutHighlights,
    email,
    linkedinUrl,
    contactDescription,
    skillGroups[] {
      _key,
      title,
      items
    }
  }
`)
