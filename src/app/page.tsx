import Link from "next/link";
import { ParticlesComponent } from "@/components/animation/particles";
import { WhileHoverComponent } from "@/components/animation/while-hover";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-150px)] w-full overflow-hidden">
      <ParticlesComponent />
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          Olá, eu sou Gadiego 👋
        </h1>
        <p className="text-lg md:text-xl text-accent-foreground max-w-2xl mb-6">
          Desenvolvedor Frontend focado em criar experiências modernas e
          performáticas com React, Next.js e Tailwind CSS.
        </p>
        <Link
          href="#projetos"
          className="bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-6"
        >
          Ver projetos
        </Link>

        <WhileHoverComponent />
      </section>
    </div>
  );
}
