"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "03/2025 - Present",
    title: "Ansary Villa",
    role: "Frontend Developer",
    description:
      "Building a complete product ecosystem from the ground up: brand identity, web UI/UX, web development, mobile UI/UX, and Flutter app development.",
    tags: ["Brand Identity", "Web UI/UX", "Web Dev", "Mobile UI/UX", "Flutter"],
    journey: ["Brand Identity", "Web UI/UX", "Web Development", "Mobile UI/UX", "Flutter App"],
  },
  {
    period: "Freelance",
    title: "Professional Client Collaborations",
    role: "Software Engineer & UI/UX Designer",
    description:
      "Delivering focused digital work for Egypt Times, Ocean Breeze, Manara, and Lasirena across web redesign, WordPress optimization, mobile UI, and product presentation.",
    tags: ["Egypt Times", "Ocean Breeze", "Manara", "Lasirena"],
    journey: ["Discovery", "Design Direction", "Implementation", "Optimization"],
  },
  {
    period: "WordPress + SEO",
    title: "Custom Web Experiences",
    role: "Redesign, Content Architecture & SEO",
    description:
      "Restructuring websites for stronger storytelling, cleaner content hierarchy, Rank Math SEO foundations, and custom coding inside WordPress themes.",
    tags: ["Rank Math", "Custom Coding", "Content Architecture", "Performance"],
    journey: ["Audit", "Architecture", "Custom UI", "SEO Optimization"],
  },
  {
    period: "Mobile Interfaces",
    title: "Premium Real Estate App UI",
    role: "Mobile UI/UX Designer",
    description:
      "Designing mobile interfaces for luxury residential communities with a focus on clarity, trust, service access, and premium user experience.",
    tags: ["Real Estate", "Mobile UI", "Figma", "Client Privacy"],
    journey: ["User Flow", "Wireframe", "Visual UI", "Prototype"],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={sectionRef} className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-neon-purple/55 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-24 -z-10 h-[32rem] w-[32rem] -translate-x-1/3 rounded-full bg-neon-blue/10 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-4xl"
        >
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.38em] text-electric-cyan">
            Experience Timeline
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.07em] text-white">
            Product journeys, not job labels.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            A timeline shaped around full-cycle delivery: identity, UX, development, optimization, and mobile product thinking.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: shouldReduceMotion ? 1 : lineScale, transformOrigin: "top" }}
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric-cyan via-neon-purple to-hot-pink md:left-1/2"
          />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.article
                  key={`${item.period}-${item.title}`}
                  layout
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : isRight ? 36 : -36, y: shouldReduceMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0 ${isRight ? "md:[&>div]:col-start-2 md:[&>div]:ml-12" : "md:[&>div]:mr-12"}`}
                >
                  <div className="glass-panel group rounded-[2rem] p-6 transition-transform duration-500 hover:-translate-y-2">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                      <span className="rounded-full border border-electric-cyan/25 bg-electric-cyan/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-cyan-50">
                        {item.period}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                        {item.role}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {item.journey.map((step, stepIndex) => (
                        <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-spark/10 font-mono text-[0.68rem] text-cyan-50">
                            {stepIndex + 1}
                          </span>
                          <span className="text-xs text-zinc-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: shouldReduceMotion ? 1 : 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border border-electric-cyan bg-slate-950 shadow-[0_0_28px_rgba(6,182,212,0.75)] md:left-1/2"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
