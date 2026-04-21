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
