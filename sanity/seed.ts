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
      'Production scrap-car marketplace (skrotbudportalen.dk) connecting sellers, dealers, and admins through four role-specific portals that share a single Next.js 16 App Router API surface. Built on Supabase Postgres with row-level security, partial unique indexes, CHECK constraints, audit trails, and pg_cron-scheduled jobs, it powers realtime auctions over authenticated channels plus automated lead and invoice/billing workflows and transactional email via Resend. Ships with a companion Expo (React Native) app and PWA web-push notifications, and deploys to Cloudflare Workers via OpenNext. Hardened with an observability layer — cron-run tracking, an /admin/crons health dashboard, and Sentry failure alerts — and covered end-to-end by Playwright.',
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudflare Workers', 'Tailwind CSS', 'React Native (Expo)', 'Resend', 'Web Push', 'Playwright'],
    featured: true,
    order: 1,
    links: [
      { _key: 'github', label: 'GitHub', href: 'https://github.com/Veteranlegend/skrotbil-showcase', variant: 'secondary' },
      { _key: 'live', label: 'Live Site', href: 'https://skrotbudportalen.dk', variant: 'primary' },
    ],
  },
  {
    _type: 'project',
    title: 'Cab service',
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
