"use client";

import { motion } from "framer-motion";

export type ContactData = {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  contactDescription?: string;
};

export default function Contact({ data }: { data: ContactData }) {
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

        {data.contactDescription && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-gray-300"
          >
            {data.contactDescription}
          </motion.p>
        )}

        {data.email && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-sm text-gray-400"
          >
            Email:{" "}
            <a
              href={`mailto:${data.email}`}
              className="text-emerald-300 transition hover:text-emerald-200"
            >
              {data.email}
            </a>
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          {data.email && (
            <a
              href={`mailto:${data.email}`}
              className="rounded-full border border-emerald-500/50 px-6 py-3 text-sm text-emerald-300 transition hover:border-emerald-400 hover:text-white"
            >
              Email Me
            </a>
          )}

          {data.githubUrl && (
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-gray-200 transition hover:border-white/40 hover:text-white"
            >
              GitHub
            </a>
          )}

          {data.linkedinUrl && (
            <a
              href={data.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-gray-200 transition hover:border-white/40 hover:text-white"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
