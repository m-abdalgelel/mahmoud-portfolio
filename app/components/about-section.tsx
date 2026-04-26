"use client";

import { motion, useReducedMotion } from "framer-motion";

const focusPoints = [
  "Interface Architecture",
  "Visual Systems",
  "Motion Design",
  "Responsive Frontend",
  "Flutter Thinking",
  "Client Privacy",
];

const principles = [
  {
    title: "Designer Eye",
    body: "I shape products with hierarchy, spacing, contrast, and visual rhythm before a single line of code becomes permanent.",
  },
  {
    title: "Engineer Logic",
    body: "I translate ideas into maintainable interfaces with performance, accessibility, and responsive behavior in mind.",
  },
  {
    title: "Product Taste",
    body: "The goal is not decoration. It is a premium experience that feels clear, memorable, and commercially useful.",
  },
];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-24 -z-10 h-[24rem] w-[24rem] translate-x-1/3 rounded-full bg-hot-pink/10 blur-[110px]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-12 lg:h-fit"
        >
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.38em] text-electric-cyan">
            About Mahmoud
          </p>
          <h2 className="fluid-heading font-display font-bold text-white">
            Creative by taste. Technical by discipline.
          </h2>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-electric-cyan via-neon-purple to-transparent" />
        </motion.div>

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.12 }}
            className="space-y-7 text-xl leading-9 text-muted sm:text-2xl sm:leading-10"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              I am a frontend developer and UI/UX designer who builds digital interfaces with a balance of
              <span className="text-gradient-primary"> artistic direction</span> and
              <span className="text-white"> engineering precision</span>.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              My work lives between visual storytelling, clean implementation, and product clarity. I care about how a screen looks,
              how it moves, how it responds, and how fast it feels.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {focusPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors hover:border-electric-cyan/40 hover:bg-electric-cyan/10"
              >
                {point}
              </span>
            ))}
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel group rounded-[2rem] p-6 transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-cyan/20 to-neon-purple/20 font-display text-lg font-bold text-white ring-1 ring-white/10">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
