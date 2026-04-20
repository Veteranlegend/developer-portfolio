"use client";

import { motion } from "framer-motion";

const dots = [
  { top: "8%", left: "10%", size: 4, delay: 0 },
  { top: "14%", left: "32%", size: 3, delay: 0.8 },
  { top: "10%", left: "58%", size: 2, delay: 1.1 },
  { top: "18%", left: "74%", size: 4, delay: 0.4 },
  { top: "26%", left: "22%", size: 3, delay: 1.4 },
  { top: "32%", left: "46%", size: 2, delay: 0.7 },
  { top: "40%", left: "68%", size: 4, delay: 1.2 },
  { top: "48%", left: "14%", size: 3, delay: 0.3 },
  { top: "56%", left: "36%", size: 2, delay: 1.7 },
  { top: "62%", left: "82%", size: 3, delay: 0.6 },
  { top: "72%", left: "18%", size: 4, delay: 1.5 },
  { top: "80%", left: "52%", size: 2, delay: 0.9 },
  { top: "86%", left: "72%", size: 3, delay: 1.9 },
];

const lines = [
  { top: "28%", left: "16%", width: 90, rotate: 36 },
  { top: "34%", left: "22%", width: 110, rotate: -18 },
  { top: "47%", left: "20%", width: 80, rotate: 12 },
  { top: "60%", left: "24%", width: 120, rotate: -28 },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_30%)]" />

      {dots.map((dot, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-emerald-400/70 shadow-[0_0_10px_rgba(16,185,129,0.45)]"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            opacity: [0.25, 0.9, 0.25],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {lines.map((line, index) => (
        <motion.span
          key={index}
          className="absolute h-px origin-left bg-emerald-400/20"
          style={{
            top: line.top,
            left: line.left,
            width: `${line.width}px`,
            rotate: `${line.rotate}deg`,
          }}
          animate={{
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}