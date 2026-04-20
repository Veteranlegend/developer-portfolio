"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] items-center bg-transparent px-6 py-24 text-white"
    >
      <div className="mx-auto w-full max-w-4xl space-y-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-bold md:text-4xl"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-gray-300"
        >
          I am open to part-time and full-time opportunities where I can
          contribute, grow, and continue building impactful software solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-sm text-gray-400"
        >
          Email:{" "}
          <a
            href="mailto:ahmad_haj_95@hotmail.com"
            className="text-emerald-300 transition hover:text-emerald-200"
          >
            ahmad_haj_95@hotmail.com
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <a
            href="mailto:ahmad_haj_95@hotmail.com"
            className="rounded-full border border-emerald-500/50 px-6 py-3 text-sm text-emerald-300 transition hover:border-emerald-400 hover:text-white"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Veteranlegend"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-gray-200 transition hover:border-white/40 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-gray-200 transition hover:border-white/40 hover:text-white"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}