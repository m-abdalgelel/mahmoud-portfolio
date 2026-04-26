import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { ExperienceSection } from "./components/experience-section";
import { FeaturedProjectSection } from "./components/featured-project-section";
import { HeroSection } from "./components/hero-section";
import { NeuralNavigation } from "./components/neural-navigation";
import { ProjectsSection } from "./components/projects-section";
import { ScrollProgressButton } from "./components/scroll-progress-button";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <>
      <NeuralNavigation />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <ScrollProgressButton />
    </>
  );
}
