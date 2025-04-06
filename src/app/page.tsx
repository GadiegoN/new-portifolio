import { ParticlesComponent } from "@/components/animation/particles";
import {
  AboutSection,
  DifferentialsSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/layout";

export default function Home() {
  return (
    <div className="relative w-full">
      <ParticlesComponent />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <DifferentialsSection />
    </div>
  );
}
