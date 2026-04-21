import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
})

const projects = [
  {
    _type: 'project',
    title: 'Skrotbil Platform',
    description:
      'Modern lead-generation and car-selling platform built around scrap car workflows, structured form handling, clean UI, and a scalable Next.js architecture with Supabase integration.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    featured: true,
    order: 1,
    links: [
      { _key: 'github', label: 'GitHub', href: 'https://github.com/Veteranlegend/skrotbil-showcase', variant: 'secondary' },
      { _key: 'live', label: 'Live Demo', href: 'https://skrotbil-site.vercel.app', variant: 'primary' },
    ],
  },
  {
    _type: 'project',
    title: 'Direct Taxi Lebanon',
    description:
      'Production taxi lead-generation system built for a live business in Lebanon. Features a WhatsApp booking flow, distance-based price estimator, full Arabic/English bilingual support with RTL layout, zone-based routing, and Google Ads conversion tracking. Scores 95/100 Performance and 100/100 SEO on PageSpeed Insights.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'i18n', 'RTL'],
    featured: false,
    order: 2,
    links: [
      { _key: 'github', label: 'GitHub', href: 'https://github.com/Veteranlegend/taxi-system', variant: 'secondary' },
      { _key: 'live', label: 'Live Site', href: 'https://www.directtaxilebanon.com', variant: 'primary' },
    ],
  },
  {
    _type: 'project',
    title: 'Entreprisekilde',
    description:
      'Android task management app built for construction teams, featuring role-based workflows, task assignment, real-time messaging, notifications, and a Firebase-backed architecture focused on practical day-to-day operations.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
    featured: false,
    order: 3,
    links: [
      { _key: 'github', label: 'GitHub', href: 'https://github.com/Veteranlegend/Entreprisekilde', variant: 'secondary' },
      { _key: 'demo', label: 'Demo Video', href: 'https://www.youtube.com/shorts/j0c0lWqCOR8', variant: 'primary' },
    ],
  },
  {
    _type: 'project',
    title: 'Game Hub',
    description:
      'Responsive game discovery web application with API integration, search, filtering, sorting, and a polished frontend experience built to strengthen modern React development and deployment practices.',
    tech: ['React', 'TypeScript', 'Vite', 'Chakra UI'],
    featured: false,
    order: 4,
    links: [
      { _key: 'github', label: 'GitHub', href: 'https://github.com/Veteranlegend/game-hub', variant: 'secondary' },
      { _key: 'live', label: 'Live Demo', href: 'https://game-hub-peach-nine.vercel.app/', variant: 'primary' },
    ],
  },
  {
    _type: 'project',
    title: 'Android Weather App',
    description:
      'Modern Android weather application built with Kotlin and Jetpack Compose, following MVVM and Clean Architecture. Features real-time UI updates, scalable state management using StateFlow, and a structured multi-layer architecture.',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'StateFlow'],
    featured: false,
    order: 5,
    links: [
      { _key: 'github', label: 'GitHub', href: 'https://github.com/Veteranlegend/Android-weather-app', variant: 'secondary' },
      { _key: 'demo', label: 'Demo Video', href: 'https://www.youtube.com/watch?v=EKoiY_iMXPE', variant: 'primary' },
    ],
  },
]

async function seed() {
  console.log(`Seeding ${projects.length} projects to dataset "${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}"...`)

  for (const project of projects) {
    const result = await client.create(project)
    console.log(`  Created: ${result.title} (${result._id})`)
  }

  console.log('Done.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
