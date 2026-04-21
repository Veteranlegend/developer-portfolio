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
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Direct Taxi Lebanon",
    description:
      "Production taxi lead-generation system built for a live business in Lebanon. Features a WhatsApp booking flow, distance-based price estimator, full Arabic/English bilingual support with RTL layout, zone-based routing, and Google Ads conversion tracking. Scores 95/100 Performance and 100/100 SEO on PageSpeed Insights.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "i18n", "RTL"],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Veteranlegend/taxi-system",
        variant: "secondary",
      },
      {
        label: "Live Site",
        href: "https://www.directtaxilebanon.com",
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
        href: "https://skrotbil-site.vercel.app",
        variant: "primary",
      },
    ],
  },
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
    title: "Android Weather App",
    description:
      "Modern Android weather application built with Kotlin and Jetpack Compose, following MVVM and Clean Architecture. Features real-time UI updates, scalable state management using StateFlow, and a structured multi-layer architecture.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "StateFlow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Veteranlegend/Android-weather-app",
        variant: "secondary",
      },
      {
        label: "Demo Video",
        href: "https://www.youtube.com/watch?v=EKoiY_iMXPE",
        variant: "primary",
      },
    ],
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
              className={`group rounded-2xl p-6 backdrop-blur transition ${
                project.featured
                  ? "border border-emerald-400/60 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                  : "border border-white/10 bg-white/5 hover:border-emerald-400/40 hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex h-full flex-col space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300">
                        Featured
                      </span>
                    )}
                  </div>

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
                  {project.links.map((link) => {
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
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}