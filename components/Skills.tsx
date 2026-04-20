"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: [
      "Java",
      "Kotlin",
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "SQL",
      "R",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "HTML", "CSS"],
  },
  {
    title: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Android Development"],
  },
  {
    title: "Backend & Databases",
    items: [
      "Firebase",
      "Supabase",
      "Firestore",
      "Authentication",
      "Storage",
      "Relational Databases",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Android Studio",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
  {
    title: "Concepts & Architecture",
    items: [
      "Clean Architecture",
      "MVVM",
      "MVC",
      "Repository Pattern",
      "REST APIs",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Design Patterns",
      "UML",
      "Agile",
      "Scrum",
    ],
  },
  {
    title: "Other",
    items: ["Power BI", "Tableau", "Wireshark", "Kali Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-transparent px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-emerald-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur transition hover:border-emerald-400/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
