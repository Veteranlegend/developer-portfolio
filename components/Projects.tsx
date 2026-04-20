"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "Entreprisekilde",
    description:
      "Android task management app built for construction teams, featuring role-based workflows, task assignment, real-time messaging, notifications, and a Firebase-backed architecture focused on practical day-to-day operations.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Veteranlegend/Entreprisekilde",
        variant: "secondary",
      },
      {
        label: "Demo Video",
        href: "https://www.youtube.com/shorts/j0c0lWqCOR8",
        variant: "primary",
      },
    ],
  },
  {
    title: "Skrotbil Platform",
    description:
      "Modern lead-generation and car-selling platform built around scrap car workflows, structured form handling, clean UI, and a scalable Next.js architecture with Supabase integration.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Veteranlegend/skrotbil-showcase",
        variant: "secondary",
      },
      {
        label: "Live Demo",
        href: "https://skrotbil-site-7u8zkoxse-veteranlegends-projects.vercel.app/",
        variant: "primary",
      },
    ],
  },
  {
    title: "Game Hub",
    description:
      "Responsive game discovery web application with API integration, search, filtering, sorting, and a polished frontend experience built to strengthen modern React development and deployment practices.",
    tech: ["React", "TypeScript", "Vite", "Chakra UI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Veteranlegend/game-hub",
        variant: "secondary",
      },
      {
        label: "Live Demo",
        href: "https://game-hub-peach-nine.vercel.app/",
        variant: "primary",
      },
    ],
  },
  {
    title: "Weather App",
    description:
      "Weather application focused on clean UI, real-time weather data, and structured frontend development. This project will be added with repository and demo details once the final hosting and access setup is ready.",
    tech: ["React", "TypeScript", "API Integration", "Responsive UI"],
    links: [],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-full flex-col space-y-5">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-500/30 px-3 py-1 text-xs text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.links.length > 0 ? (
                    project.links.map((link) => {
                      const isPrimary = link.variant === "primary";

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            isPrimary
                              ? "inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/15 hover:text-white"
                              : "inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-emerald-500/30 hover:text-white"
                          }
                        >
                          <ArrowUpRight className="h-4 w-4" />
                          {link.label}
                        </a>
                      );
                    })
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-400">
                      Repository and demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}