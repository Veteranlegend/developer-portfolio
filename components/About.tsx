"use client";

import { motion } from "framer-motion";

export default function About() {
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
            <p>
              I am a final-year Software Engineering student at DTU with a strong
              focus on building real-world applications that combine clean
              design, scalable architecture, and practical business value.
            </p>

            <p>
              My experience spans both web and mobile development, working with
              technologies such as React, Next.js, Kotlin, Firebase, and
              Supabase. I focus on turning complex ideas into structured and
              maintainable solutions.
            </p>

            <p>
              I prioritize clean architecture, separation of concerns, and
              reusable components. My goal is not just to make software work,
              but to build systems that are robust, scalable, and easy to evolve
              over time.
            </p>

            <p>
              I also leverage modern AI tools to accelerate development,
              research, and iteration, while maintaining full ownership of
              architecture, code quality, and final implementation.
            </p>

            <p>
              I am persistent, solution-oriented, and highly motivated to grow
              into a professional software engineer through challenging,
              real-world projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              "Clean Architecture",
              "Real-World Projects",
              "Mobile & Web",
              "Scalable Systems",
              "Problem Solving",
              "Continuous Learning",
            ].map((item) => (
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