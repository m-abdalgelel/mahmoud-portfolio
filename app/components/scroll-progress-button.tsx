"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressButton() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      style={{ x: shouldReduceMotion ? 0 : x, y: shouldReduceMotion ? 0 : y }}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })}
      className="glass-island fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-white transition-colors hover:border-cyan-spark/55 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <motion.circle
          cx="32"
          cy="32"
          r="27"
          fill="none"
          stroke="url(#scrollProgressGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength="1"
          style={{ pathLength: progress }}
        />
        <defs>
          <linearGradient id="scrollProgressGradient" x1="12" y1="12" x2="52" y2="52">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="relative text-lg leading-none">↑</span>
    </motion.button>
  );
}
