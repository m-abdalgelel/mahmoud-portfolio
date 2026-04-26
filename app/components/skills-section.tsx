"use client";

import { motion, useReducedMotion } from "framer-motion";

const orbitSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Flutter",
  "Figma",
  "WordPress",
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    items: ["Next.js App Router", "React", "TypeScript", "Responsive UI", "Performance-minded builds"],
  },
  {
    title: "UI/UX Design",
    items: ["Visual hierarchy", "Wireframes", "Design systems", "Prototyping", "Interaction design"],
  },
  {
    title: "Product Delivery",
    items: ["Flutter experience", "WordPress builds", "Client communication", "SEO basics", "Privacy-aware showcases"],
  },
];

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/12 blur-[150px]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.38em] text-electric-cyan">
            Skill System
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.07em] text-white">
            Where design instincts meet build discipline.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            My stack is not just a list of tools. It is a workflow for turning visual direction into fast, responsive, and polished interfaces.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel rounded-[1.7rem] p-5"
              >
                <h3 className="font-display text-xl font-bold tracking-[-0.04em] text-white">{group.title}</h3>
                <div className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm leading-6 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan shadow-[0_0_14px_var(--electric-cyan)]" />
                      {item}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[38rem]"
        >
          <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-sm" />
          <div className="absolute inset-[12%] rounded-full border border-electric-cyan/20" />
          <div className="absolute inset-[24%] rounded-full border border-neon-purple/25" />
          <div className="absolute inset-[36%] rounded-full border border-white/10" />

          <motion.div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full border border-dashed border-electric-cyan/25"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-[21%] rounded-full border border-dashed border-neon-purple/25"
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          <div className="glass-panel absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center sm:h-48 sm:w-48">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-electric-cyan">Core</p>
            <p className="mt-2 font-display text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">Design</p>
            <p className="font-display text-3xl font-bold tracking-[-0.05em] text-gradient-primary sm:text-4xl">Code</p>
          </div>

          {orbitSkills.map((skill, index) => {
            const angle = (index / orbitSkills.length) * Math.PI * 2;
            const radius = index % 2 === 0 ? 43 : 33;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
                  transition={{ duration: 3.8 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-full border border-white/10 bg-slate-950/75 px-4 py-2 text-sm text-cyan-50 shadow-[0_0_28px_rgba(125,249,255,0.14)] backdrop-blur-xl"
                >
                  {skill}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
