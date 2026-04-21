"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export type HeroData = {
  name: string;
  role: string;
  tagline: string;
  location?: string;
  isOpenToWork?: boolean;
  githubUrl?: string;
  bio?: string[];
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent px-6 py-16 text-white md:px-8 xl:px-10"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-16 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-24">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.18)]">
              <Image
                src="/profile.jpg"
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {data.name}
              </h1>
              <p className="mt-2 text-lg text-emerald-300">{data.role}</p>
            </div>

            {data.isOpenToWork && (
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/40 px-4 py-2 text-sm font-medium text-emerald-300">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                Open to work
              </div>
            )}

            {data.location && (
              <div className="flex items-center gap-2 text-lg text-gray-400">
                <MapPin className="h-5 w-5 text-emerald-300" />
                <span>{data.location}</span>
              </div>
            )}
          </div>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-2 xl:pt-20"
        >
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight md:text-6xl 2xl:text-7xl">
                {data.tagline}
              </h2>
            </div>

            {data.bio && data.bio.length > 0 && (
              <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
                {data.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/15 hover:text-white"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>

              {data.githubUrl && (
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
