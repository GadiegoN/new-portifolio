export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 flex flex-col items-center justify-center py-12 px-4 text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
        Sobre mim
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        Sou{" "}
        <span className="text-primary font-medium">Desenvolvedor Frontend</span>{" "}
        com mais de 4 anos de experiência criando interfaces modernas,
        responsivas e acessíveis. Tenho formação em Sistemas de Informação e já
        atuei em diversos projetos web e mobile utilizando tecnologias como{" "}
        <span className="font-semibold text-primary">
          React, React Native, Next.js, Tailwind CSS, Typescript
        </span>
        , além de integração com backends via{" "}
        <span className="font-semibold text-primary">Node.js e Firebase.</span>
      </p>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
        Meu foco é criar experiências fluidas e performáticas, combinando boas
        práticas de código com design centrado no usuário. Estou sempre em busca
        de evolução constante e novos desafios.
      </p>
    </section>
  );
}
