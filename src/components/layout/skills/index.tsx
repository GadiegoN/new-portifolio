import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
        Habilidades
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-background/50 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-border flex flex-col items-center justify-center text-center hover:scale-[1.03]"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {skill.title}
            </h3>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
