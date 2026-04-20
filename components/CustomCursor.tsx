"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const circleX = useSpring(mouseX, { damping: 20, stiffness: 180 });
  const circleY = useSpring(mouseY, { damping: 20, stiffness: 180 });

  const dotX = useSpring(mouseX, { damping: 28, stiffness: 260 });
  const dotY = useSpring(mouseY, { damping: 28, stiffness: 260 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      const ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 1200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[54px] w-[54px] rounded-full border border-white/60"
      />

      <motion.div
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[54px] w-[54px] rounded-full bg-emerald-400/10 blur-md"
      />

      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]"
      />

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed left-0 top-0 z-[9997]"
            style={{
              x: ripple.x,
              y: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            <motion.div
              initial={{ opacity: 0.9, scale: 0.2 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400"
            />

            <motion.div
              initial={{ opacity: 0.6, scale: 0.2 }}
              animate={{ opacity: 0, scale: 8 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
              className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/50 blur-[1px]"
            />

            <motion.div
              initial={{ opacity: 0.4, scale: 0.2 }}
              animate={{ opacity: 0, scale: 10 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-2xl"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}