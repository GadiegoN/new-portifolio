import Link from "next/link";
import { ParticlesComponent } from "@/components/animation/particles";
import { WhileHoverComponent } from "@/components/animation/while-hover";
import { SkillsSection } from "@/components/layout/skills";
import { ProjectsSection } from "@/components/layout/projects";

export default function Home() {
  return (
    <div className="relative w-full">
      <ParticlesComponent />
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center h-[calc(100vh-150px)] px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          Olá, eu sou Gadiego 👋
        </h1>
        <p className="text-lg md:text-xl text-accent-foreground max-w-2xl mb-6">
          Desenvolvedor Frontend focado em criar experiências modernas e
          performáticas com React, Next.js e Tailwind CSS.
        </p>

        <WhileHoverComponent />
        <Link
          href="#projetos"
          className="bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mt-12"
        >
          Ver projetos
        </Link>
      </section>

      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center py-12 px-4 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Sobre mim
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Sou{" "}
          <span className="text-primary font-medium">
            Desenvolvedor Frontend
          </span>{" "}
          com mais de 4 anos de experiência criando interfaces modernas,
          responsivas e acessíveis. Tenho formação em Sistemas de Informação e
          já atuei em diversos projetos web e mobile utilizando tecnologias como{" "}
          <span className="font-semibold text-primary">
            React, React Native, Next.js, Tailwind CSS, Typescript
          </span>
          , além de integração com backends via{" "}
          <span className="font-semibold text-primary">
            Node.js e Firebase.
          </span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
          Meu foco é criar experiências fluidas e performáticas, combinando boas
          práticas de código com design centrado no usuário. Estou sempre em
          busca de evolução constante e novos desafios.
        </p>
      </section>

      <SkillsSection />

      <ProjectsSection />
    </div>
  );
}
