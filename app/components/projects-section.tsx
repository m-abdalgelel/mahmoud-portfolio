"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const blurPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIHZpZXdCb3g9JzAgMCAxMjAwIDgwMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9JyMwMjAyMDInLz48Y2lyY2xlIGN4PSczMDAJIGN5PScxNjAnIHI9JzM2MCcgZmlsbD0nIzRGNDZFScnIG9wYWNpdHk9Jy4yNScvPjxjaXJjbGUgY3g9Jzk2MCcgY3k9JzI2MCcgcj0nMzIwJyBmaWxsPScjMDZCNkQ0JyBvcGFjaXR5PScuMTgnLz48L3N2Zz4=";

const projects = [
  {
    title: "Egypt Times Media Production",
    type: "Website",
    description: "A traditional media presence reimagined as a cinematic digital identity.",
    role: "Redesign + Content Architecture + SEO",
    status: "Refining",
    image: "/projects/egypt-times/cover.png",
    gallery: [
      "/projects/egypt-times/detail-1.png",
      "/projects/egypt-times/detail-2.png",
      "/projects/egypt-times/detail-3.png",
    ],
    imageAlt: "Egypt Times Media Production website preview",
    gradient: "from-electric-cyan/35 via-neon-blue/20 to-slate-950",
    size: "lg:col-span-7",
    privacy: false,
    highlights: ["Rank Math SEO", "WordPress custom coding", "Under development"],
  },
  {
    title: "Ocean Breeze Liveaboards",
    type: "Website",
    description: "Luxury Red Sea diving journeys shaped into a faster, cleaner brand experience.",
    role: "Performance + Rebranding + UI Redesign",
    status: "Ongoing",
    image: "/projects/ocean-breeze/cover.jpg",
    gallery: [
      "/projects/ocean-breeze/detail-1.jpg",
      "/projects/ocean-breeze/detail-2.jpg",
      "/projects/ocean-breeze/detail-3.jpg",
    ],
    imageAlt: "Ocean Breeze Liveaboards website preview",
    gradient: "from-neon-purple/35 via-hot-pink/15 to-slate-950",
    size: "lg:col-span-5",
    privacy: false,
    highlights: ["Performance tuning", "Luxury travel UI", "Ongoing redesign"],
  },
  {
    title: "Camera Shop",
    type: "UI/UX Concept",
    description: "A visual shopping concept built around precision, glass, and lens detail.",
    role: "UI/UX Design",
    status: "Concept",
    image: "/projects/camera-shop/cover.jpg",
    gallery: ["/projects/camera-shop/detail-1.jpg"],
    imageAlt: "Camera Shop UI UX concept preview",
    gradient: "from-cyan-300/25 via-slate-800 to-slate-950",
    size: "lg:col-span-4",
    privacy: false,
    highlights: ["Product UI", "E-commerce flow", "Visual concept"],
  },
  {
    title: "Manara",
    type: "Mobile App",
    description: "A refined mobile interface for premium residential community living.",
    role: "Mobile UI/UX Design",
    status: "Client UI",
    image: "/projects/manara/cover.jpg",
    gallery: ["/projects/manara/detail-1.jpg", "/projects/manara/detail-2.jpg", "/projects/manara/detail-3.jpg"],
    imageAlt: "Manara mobile app interface preview",
    gradient: "from-slate-700 via-neon-purple/20 to-slate-950",
    size: "lg:col-span-4",
    privacy: true,
    highlights: ["Real estate app", "Resident experience", "Private client"],
  },
  {
    title: "Lasirena",
    type: "Mobile App",
    description: "A coastal real estate app interface designed for clarity, calm, and premium service.",
    role: "Mobile UI/UX Design",
    status: "Client UI",
    image: "/projects/lasirena/cover.jpg",
    gallery: [
      "/projects/lasirena/detail-1.jpg",
      "/projects/lasirena/detail-2.jpg",
      "/projects/lasirena/detail-3.jpg",
    ],
    imageAlt: "Lasirena mobile app interface preview",
    gradient: "from-neon-blue/30 via-electric-cyan/15 to-slate-950",
    size: "lg:col-span-4",
    privacy: true,
    highlights: ["Real estate app", "Mobile interface", "Restricted visuals"],
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [hasImage, setHasImage] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const projectImages = [project.image, ...project.gallery];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(6,182,212,0.18), transparent 42%)`;

  useEffect(() => {
    if (shouldReduceMotion || projectImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % projectImages.length);
    }, 2800 + index * 220);

    return () => window.clearInterval(interval);
  }, [index, projectImages.length, shouldReduceMotion]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: shouldReduceMotion ? 0 : rotateX, rotateY: shouldReduceMotion ? 0 : rotateY }}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);
        rotateX.set((y / rect.height - 0.5) * -6);
        rotateY.set((x / rect.width - 0.5) * 6);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className={`group perspective-distant relative min-h-[30rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-1 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl ${project.size}`}
    >
      <motion.div aria-hidden="true" style={{ background: spotlight }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full min-h-[29.5rem] flex-col overflow-hidden rounded-[1.9rem] bg-slate-950">
        <div className={`relative min-h-[18rem] flex-1 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          {hasImage ? (
            projectImages.map((image, imageIndex) => (
              <Image
                key={image}
                src={image}
                alt={imageIndex === 0 ? project.imageAlt : `${project.title} detail ${imageIndex}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
                className={`object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.045] ${
                  activeImageIndex === imageIndex ? "opacity-95" : "opacity-0"
                }`}
                onError={() => setHasImage(false)}
              />
            ))
          ) : (
            <div className="absolute inset-6 overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20 backdrop-blur-md transition-transform duration-700 group-hover:scale-[1.035]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-hot-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-electric-cyan" />
              </div>
              <div className="grid h-[calc(100%-3rem)] grid-cols-5 gap-3 p-4">
                <div className="col-span-3 space-y-3">
                  <div className="h-8 w-10/12 rounded-xl bg-white/80" />
                  <div className="h-8 w-7/12 rounded-xl bg-electric-cyan/50" />
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                  </div>
                </div>
                <div className="col-span-2 rounded-2xl bg-gradient-to-b from-white/20 to-white/5" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
          {hasImage && project.gallery.length > 0 ? (
            <div className="absolute bottom-5 right-5 hidden max-w-[72%] gap-2 sm:flex">
              {projectImages.slice(0, 4).map((image, galleryIndex) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 14, rotate: galleryIndex === 1 ? 2 : -2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: galleryIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative h-20 w-16 overflow-hidden rounded-2xl border bg-black/30 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 ${
                    activeImageIndex === galleryIndex ? "border-cyan-spark/80 opacity-100" : "border-white/15 opacity-60"
                  }`}
                >
                  <Image
                    src={image}
                    alt={galleryIndex === 0 ? project.imageAlt : `${project.title} detail ${galleryIndex}`}
                    fill
                    sizes="64px"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder}
                    className="object-cover object-top"
                  />
                </motion.div>
              ))}
            </div>
          ) : null}
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-cyan-50 backdrop-blur-xl">
              {project.status}
            </span>
            {project.privacy ? (
              <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-cyan-50 backdrop-blur-xl">
                Restricted Access
              </span>
            ) : null}
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/35 p-6">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-electric-cyan/25 bg-electric-cyan/10 px-3 py-1 text-xs text-cyan-50">
              {project.type}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
              {project.role}
            </span>
          </div>
          <h3 className="font-display text-3xl font-bold tracking-[-0.05em] text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative isolate overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 -z-10 h-[34rem] w-[34rem] translate-x-1/3 rounded-full bg-electric-cyan/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.38em] text-electric-cyan">
              Interactive Showcase
            </p>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.88] tracking-[-0.07em] text-white">
              Selected work, engineered for impact.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
            Web, WordPress, and mobile UI collaborations with SEO-aware structure. Some projects are partially hidden to respect client privacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
