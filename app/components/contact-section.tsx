"use client";

import { motion, useReducedMotion } from "framer-motion";

const contactLinks = [
  {
    label: "Phone",
    value: "01157168410",
    href: "tel:01157168410",
  },
  {
    label: "Email",
    value: "mabdalgelel@gmail.com",
    href: "mailto:mabdalgelel@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Mahmoud Abdalgelel",
    href: "https://www.linkedin.com/in/mahmoud-abdalgelel-640a551ab/",
  },
];

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-cyan/14 blur-[150px]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-neon-purple/16 blur-[120px]"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.16, 1], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 34, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel noise-mask mx-auto max-w-7xl overflow-hidden rounded-[2.6rem] p-6 sm:p-10 lg:p-14"
      >
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.38em] text-electric-cyan">
              Contact
            </p>
            <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.86] tracking-[-0.075em] text-white">
              Let&apos;s build something
              <span className="block text-gradient-primary">exceptional together.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              If you need a website, product interface, WordPress build, or a polished digital experience, I can help shape it from concept to launch.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="mailto:mabdalgelel@gmail.com"
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-14 items-center justify-center rounded-full border border-cyan-spark/45 bg-[#0a1220] px-7 font-display text-sm font-black uppercase tracking-[0.22em] !text-cyan-50 shadow-[0_0_34px_rgba(6,182,212,0.2)] backdrop-blur-xl"
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mahmoud-abdalgelel-640a551ab/"
                target="_blank"
                rel="noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 font-display text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl transition-colors hover:border-electric-cyan/60 hover:bg-electric-cyan/10"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>

          <div className="space-y-4">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noreferrer" : undefined}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group block rounded-[1.5rem] border border-white/10 bg-black/25 p-5 backdrop-blur-xl transition-colors hover:border-electric-cyan/45 hover:bg-electric-cyan/10"
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-electric-cyan">{item.label}</p>
                <p className="mt-2 break-words font-display text-xl font-bold tracking-[-0.04em] text-white transition-colors group-hover:text-cyan-100">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <footer className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mahmoud Abdalgelel. Crafted with design, code, and motion.</p>
        <a href="#" className="transition-colors hover:text-electric-cyan">
          Back to top
        </a>
      </footer>
    </section>
  );
}
