import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
})

const settings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  name: 'Ahmad El Haj',
  role: 'Software Engineering Student',
  tagline: 'Building software that solves real problems.',
  location: 'Copenhagen',
  isOpenToWork: true,
  githubUrl: 'https://github.com/Veteranlegend',
  bio: [
    'Final-year Software Engineering student at DTU, focused on building real-world applications with clean architecture, scalable systems, and strong development practices.',
    'My work spans both web and mobile development, with hands-on experience in React, Next.js, Kotlin, Firebase, Supabase, and modern frontend and backend workflows.',
    'I care deeply about clean code, separation of concerns, reusable components, and turning complex ideas into structured and maintainable software solutions.',
  ],
  aboutParagraphs: [
    'I am a final-year Software Engineering student at DTU with a strong focus on building real-world applications that combine clean design, scalable architecture, and practical business value.',
    'My experience spans both web and mobile development, working with technologies such as React, Next.js, Kotlin, Firebase, and Supabase. I focus on turning complex ideas into structured and maintainable solutions.',
    'I prioritize clean architecture, separation of concerns, and reusable components. My goal is not just to make software work, but to build systems that are robust, scalable, and easy to evolve over time.',
    'I also leverage modern AI tools to accelerate development, research, and iteration, while maintaining full ownership of architecture, code quality, and final implementation.',
    'I am persistent, solution-oriented, and highly motivated to grow into a professional software engineer through challenging, real-world projects.',
  ],
  aboutHighlights: [
    'Clean Architecture',
    'Real-World Projects',
    'Mobile & Web',
    'Scalable Systems',
    'Problem Solving',
    'Continuous Learning',
  ],
  email: 'ahmad_haj_95@hotmail.com',
  linkedinUrl: 'https://www.linkedin.com',
  contactDescription:
    'I am open to part-time and full-time opportunities where I can contribute, grow, and continue building impactful software solutions.',
  skillGroups: [
    { _key: 'languages', title: 'Languages', items: ['Java', 'Kotlin', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'R'] },
    { _key: 'frontend', title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Chakra UI', 'HTML', 'CSS'] },
    { _key: 'mobile', title: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Android Development'] },
    { _key: 'backend', title: 'Backend & Databases', items: ['Firebase', 'Supabase', 'Firestore', 'Authentication', 'Storage', 'Relational Databases'] },
    { _key: 'tools', title: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Android Studio', 'VS Code', 'IntelliJ IDEA'] },
    { _key: 'concepts', title: 'Concepts & Architecture', items: ['Clean Architecture', 'MVVM', 'MVC', 'Repository Pattern', 'REST APIs', 'Object-Oriented Programming', 'Data Structures & Algorithms', 'Design Patterns', 'UML', 'Agile', 'Scrum'] },
    { _key: 'other', title: 'Other', items: ['Power BI', 'Tableau', 'Wireshark', 'Kali Linux'] },
  ],
}

async function seed() {
  console.log('Seeding siteSettings...')
  const result = await client.createOrReplace(settings)
  console.log(`Done: ${result._id}`)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
