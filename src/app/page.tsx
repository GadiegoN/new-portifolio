import { ParticlesComponent } from "@/components/animation/particles";
import {
  AboutSection,
  CertificatesSection,
  ContactSection,
  DifferentialsSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/layout";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col justify-between z-50">
      <ParticlesComponent />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <DifferentialsSection />

      <CertificatesSection />

      <ContactSection />
    </div>
  );
}
