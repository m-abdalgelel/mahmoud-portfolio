"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const headlineWords = ["Designing", "interfaces", "that", "feel", "engineered."];

const stats = [
  { value: "UI/UX", label: "Design mindset" },
  { value: "Next.js", label: "Frontend craft" },
  { value: "Flutter", label: "Mobile fluency" },
];

const roles = ["Frontend Developer", "UI/UX Designer", "Flutter Experience"];
const techStack = ["Next.js", "TypeScript", "Figma", "Flutter"];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 92]);
  const visualY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -76]);
  const gridY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 140]);
  const lensX = useSpring(useMotionValue(50), { stiffness: 90, damping: 24 });
  const lensY = useSpring(useMotionValue(28), { stiffness: 90, damping: 24 });
  const lensBackground = useMotionTemplate`radial-gradient(520px circle at ${lensX}% ${lensY}%, rgba(6,182,212,0.18), transparent 42%)`;

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <main
      id="home"
      ref={heroRef}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();
        lensX.set(((event.clientX - rect.left) / rect.width) * 100);
        lensY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      className="relative isolate min-h-screen overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36"
    >
      <motion.div aria-hidden="true" style={{ background: lensBackground }} className="pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        aria-hidden="true"
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35 [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_68%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-electric-cyan/20 blur-[140px] transform-gpu"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.16, 0.96, 1],
                x: [0, 52, -34, 0],
                opacity: [0.42, 0.72, 0.5, 0.42],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-8 -z-10 h-[28rem] w-[28rem] rounded-full bg-neon-purple/25 blur-[130px] transform-gpu"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [0.9, 1.12, 0.9],
                opacity: [0.34, 0.64, 0.34],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <section className="mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-7xl items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-8">
        <motion.div
          style={{ y: textY }}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.18 }}
          className="relative z-10 transform-gpu"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 shadow-glow-cyan backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-electric-cyan shadow-[0_0_18px_var(--electric-cyan)]" />
            Available for premium digital products
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 grid max-w-xl grid-cols-2 gap-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-zinc-500 sm:flex sm:flex-wrap sm:gap-4"
          >
            <span>EST. 2026</span>
            <span>31.2001° N</span>
            <span>Hybrid Lab</span>
            <span>Design x Code</span>
          </motion.div>

          <h1 className="mb-8 max-w-5xl font-display text-[clamp(3rem,15vw,8.8rem)] font-bold leading-[0.86] tracking-[-0.075em] text-white sm:text-[clamp(4.2rem,10vw,8.8rem)]">
            {headlineWords.map((word, index) => (
              <motion.span
                key={word}
                className={index === 4 ? "mr-3 inline-block text-gradient-primary sm:mr-4" : "mr-3 inline-block sm:mr-4"}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${word}-${charIndex}`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 58,
                        rotateX: shouldReduceMotion ? 0 : -65,
                        filter: "blur(16px)",
                      },
                      visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                      duration: 0.78,
                      delay: index * 0.08 + charIndex * 0.018,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block transform-gpu"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            I design emotion into digital products and engineer them into fast,
            responsive, production-ready experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#work"
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 items-center justify-center rounded-full border border-cyan-spark/45 bg-[#0a1220] px-7 font-display text-sm font-black uppercase tracking-[0.22em] !text-cyan-50 shadow-[0_0_34px_rgba(6,182,212,0.2)] backdrop-blur-xl"
            >
              Explore Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 font-display text-sm font-bold uppercase tracking-[0.22em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
            >
              Start a Project
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], opacity: [0.68, 1, 0.68] }}
                transition={{ duration: 3.2 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-cyan-50 backdrop-blur-xl"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-3"
          >
            {stats.map((item) => (
              <div key={item.value} className="glass-panel rounded-3xl px-4 py-4">
                <p className="font-display text-lg font-bold text-white sm:text-2xl">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, filter: "blur(24px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[34rem] transform-gpu lg:mr-0"
        >
          <motion.div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-electric-cyan/30 via-neon-purple/20 to-hot-pink/20 blur-3xl transform-gpu"
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.45, 0.8, 0.45], rotate: [0, 4, 0] }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="glass-panel noise-mask relative overflow-hidden rounded-[2.5rem] p-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60">
              <Image
                src="/profile.jpg"
                alt="Mahmoud Abdalgelel portrait"
                width={760}
                height={920}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/35 p-4 backdrop-blur-2xl">
                <p className="font-display text-xl font-bold text-white">Mahmoud Abdalgelel</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-cyan-200/15 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-50"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            className="absolute -left-5 top-12 hidden h-28 w-28 rounded-full border border-electric-cyan/40 bg-electric-cyan/10 backdrop-blur-xl sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-7 top-1/3 h-24 w-1 rotate-12 rounded-full bg-cyan-spark/80 blur-sm"
            animate={shouldReduceMotion ? undefined : { opacity: [0.15, 0.75, 0.15], scaleY: [0.8, 1.5, 0.8] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-4 bottom-24 hidden h-20 w-20 rounded-3xl border border-neon-purple/40 bg-neon-purple/10 backdrop-blur-xl sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], rotate: [0, -18, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </main>
  );
}
