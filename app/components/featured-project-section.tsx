"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const websiteImage = "/ansary-villa-website.png";
const mobileImage = "/ansary-villa-mobile.png";

const features = [
  "Co-working reservations",
  "In-app purchasing flow",
  "Cafeteria ordering experience",
  "QR-based entry access",
  "Website + mobile ecosystem",
];

const productSteps = [
  {
    eyebrow: "01 / Platform",
    title: "A digital front door for a premium co-working space.",
    body: "Ansary Villa needed a presence that feels polished before the user ever books a seat, places an order, or scans into the space.",
  },
  {
    eyebrow: "02 / Experience",
    title: "Booking, buying, ordering, and access in one connected journey.",
    body: "The product connects core customer actions without exposing private business logic or operational details.",
  },
  {
    eyebrow: "03 / Role",
    title: "Design and development from visual system to usable product.",
    body: "My role covered the interface direction, user experience decisions, responsive frontend, and implementation across the digital experience.",
  },
];

function WebsiteMockup() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-hot-pink" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-electric-cyan" />
        <span className="ml-4 rounded-full border border-white/10 bg-black/30 px-4 py-1 text-xs text-muted">
          ansaryvilla.com
        </span>
      </div>
      <div className="relative min-h-[25rem] overflow-hidden bg-slate-950">
        {hasImage ? (
          <Image
            src={websiteImage}
            alt="Ansary Villa website preview"
            width={1200}
            height={760}
            className="h-full min-h-[25rem] w-full object-cover object-top"
            sizes="(min-width: 1024px) 48vw, 100vw"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="relative min-h-[25rem] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(125,249,255,0.18),transparent_28rem),radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.2),transparent_22rem)]" />
            <div className="relative grid gap-6 md:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-5">
                <div className="h-5 w-32 rounded-full bg-electric-cyan/30" />
                <div className="space-y-3">
                  <div className="h-12 w-11/12 rounded-2xl bg-white/90" />
                  <div className="h-12 w-8/12 rounded-2xl bg-gradient-to-r from-electric-cyan to-neon-purple" />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
                      <div className="mb-3 h-8 w-8 rounded-xl bg-electric-cyan/20" />
                      <p className="text-xs leading-5 text-cyan-50">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                <div className="aspect-[4/5] rounded-[1.3rem] bg-[linear-gradient(145deg,rgba(125,249,255,0.22),rgba(168,85,247,0.12)),radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.3),transparent_12rem)]" />
              </div>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function MobileMockup() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-[18rem] rounded-[2.8rem] border border-white/15 bg-slate-950 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
      <div className="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#080D1E]">
        {hasImage ? (
          <Image
            src={mobileImage}
            alt="Ansary Villa mobile app preview"
            width={540}
            height={1080}
            className="min-h-[35rem] w-full object-cover object-top"
            sizes="18rem"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="min-h-[35rem] bg-[radial-gradient(circle_at_50%_0%,rgba(125,249,255,0.24),transparent_16rem)] p-5 pt-12">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="mb-2 h-3 w-20 rounded-full bg-electric-cyan/40" />
                <div className="h-7 w-32 rounded-xl bg-white/90" />
              </div>
              <div className="h-11 w-11 rounded-2xl bg-neon-purple/30" />
            </div>
            <div className="mb-5 rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
              <div className="mb-4 h-28 rounded-[1.2rem] bg-gradient-to-br from-electric-cyan/40 to-neon-purple/30" />
              <div className="mb-2 h-4 w-8/12 rounded-full bg-white/80" />
              <div className="h-3 w-10/12 rounded-full bg-white/20" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {features.slice(1, 5).map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-black/25 p-3">
                  <div className="mb-3 h-7 w-7 rounded-xl bg-cyan-200/20" />
                  <p className="text-[0.68rem] leading-4 text-cyan-50">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.4rem] border border-electric-cyan/20 bg-electric-cyan/10 p-4">
              <div className="mx-auto grid h-24 w-24 grid-cols-4 gap-1 rounded-xl bg-white p-2">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index % 3 === 0 || index === 5 || index === 10
                        ? "rounded-sm bg-slate-950"
                        : "rounded-sm bg-slate-300"
                    }
                  />
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-cyan-50">QR Access</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function FeaturedProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [80, -80]);
  const phoneY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 80]);

  return (
    <section id="work" ref={sectionRef} className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-electric-cyan/60 to-transparent" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-40 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-neon-purple/14 blur-[150px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.38em] text-electric-cyan">
            Featured Project
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,7.4rem)] font-bold leading-[0.88] tracking-[-0.07em] text-white">
            Ansary Villa
            <span className="block text-gradient-primary">product ecosystem.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            A premium co-working space ecosystem presented inside this portfolio&apos;s dark cinematic interface, covering the website and mobile app journey while keeping client-sensitive details private.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="space-y-5 lg:sticky lg:top-10 lg:h-fit">
            {productSteps.map((step, index) => (
              <motion.article
                key={step.eyebrow}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel rounded-[2rem] p-6"
              >
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-electric-cyan">{step.eyebrow}</p>
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.body}</p>
              </motion.article>
            ))}

            <motion.a
              href="https://www.ansaryvilla.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-14 items-center justify-center rounded-full border border-electric-cyan/35 bg-electric-cyan/10 px-7 font-display text-sm font-bold uppercase tracking-[0.22em] text-cyan-50 backdrop-blur-xl transition-colors hover:bg-electric-cyan/20"
            >
              Visit Website
            </motion.a>
          </div>

          <div className="relative min-h-[48rem] lg:min-h-[58rem]">
            <motion.div style={{ y: visualY }} className="relative z-10 lg:pr-10">
              <WebsiteMockup />
            </motion.div>
            <motion.div style={{ y: phoneY }} className="relative z-20 -mt-24 ml-auto w-[70%] max-w-[20rem] sm:-mt-36 lg:absolute lg:bottom-4 lg:right-0 lg:mt-0">
              <MobileMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel absolute bottom-0 left-0 z-30 max-w-sm rounded-[2rem] p-5 lg:bottom-16"
            >
              <p className="font-display text-xl font-bold text-white">Design + Development</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Built as a connected website and mobile app experience for a real client. Some implementation and business details remain intentionally abstract.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
