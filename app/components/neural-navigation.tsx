"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function NeuralNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    let frame = 0;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.2;
      const currentSection = sections.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - viewportAnchor);

        return distance < closest.distance ? { id: section.id, distance } : closest;
      }, { id: "home", distance: Number.POSITIVE_INFINITY });

      setActiveSection(currentSection.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          updateActiveSection();
          return;
        }

        const viewportAnchor = window.innerHeight * 0.2;
        const activeEntry = visibleEntries.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top - viewportAnchor) -
            Math.abs(b.boundingClientRect.top - viewportAnchor),
        )[0];

        if (activeEntry?.target.id) {
          setActiveSection(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -79% 0px",
        threshold: [0, 1],
      },
    );

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -18, scale: shouldReduceMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 sm:top-5 sm:w-auto"
      aria-label="Primary navigation"
    >
      <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/15 bg-[#050507]/92 p-1.5 shadow-[0_18px_70px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors sm:px-5 ${
                isActive ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-deep-indigo via-indigo-500 to-cyan-spark shadow-[0_0_34px_rgba(6,182,212,0.38)]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              ) : null}
              <span className="relative z-10">{link.label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
