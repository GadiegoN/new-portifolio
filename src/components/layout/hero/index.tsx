import { WhileHoverComponent } from "@/components/animation/while-hover";
import Link from "next/link";

export function HeroSection() {
  return (
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
  );
}
