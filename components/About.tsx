"use client";

import { motion } from "framer-motion";

export type AboutData = {
  aboutParagraphs?: string[];
  aboutHighlights?: string[];
};

export default function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="bg-transparent px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Professional Profile
        </motion.h2>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 leading-8 text-gray-300"
          >
            {(data.aboutParagraphs ?? []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {(data.aboutHighlights ?? []).map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-gray-200 backdrop-blur transition hover:border-emerald-400/40 hover:text-white"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
