import { ParticlesComponent } from "@/components/animation/particles";
import { SectionAnimada } from "@/components/animation/scroll";
import {
  fadeUp,
  zoomIn,
  fadeRight,
  staggerChildrenLeft,
  staggerChildrenRight,
  staggerChildrenScaleUp,
} from "@/components/animation/variants";
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
    <div className="relative w-full flex flex-col justify-between">
      <ParticlesComponent />

      <HeroSection />

      <SectionAnimada variants={fadeUp}>
        <AboutSection />
      </SectionAnimada>

      <SectionAnimada variants={zoomIn}>
        <ProjectsSection />
      </SectionAnimada>

      <SectionAnimada variants={fadeRight}>
        <SkillsSection />
      </SectionAnimada>

      <SectionAnimada variants={staggerChildrenScaleUp}>
        <DifferentialsSection />
      </SectionAnimada>

      <SectionAnimada variants={staggerChildrenRight}>
        <CertificatesSection />
      </SectionAnimada>

      <SectionAnimada variants={staggerChildrenLeft}>
        <ContactSection />
      </SectionAnimada>
    </div>
  );
}
