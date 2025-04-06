import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

export const skills = [
  {
    icon: <FaReact className="text-sky-400 text-4xl" />,
    title: "React",
    description:
      "Criação de interfaces modernas, reutilizáveis e performáticas.",
  },
  {
    icon: <SiNextdotjs className="text-white text-4xl" />,
    title: "Next.js",
    description: "Renderização híbrida, otimizações e performance com SSR/SSG.",
  },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    title: "Tailwind CSS",
    description: "Estilização rápida e responsiva com design system.",
  },
  {
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
    title: "TypeScript",
    description: "Mais segurança e escalabilidade no código.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    title: "Node.js",
    description: "Criação de APIs e integração com back-end.",
  },
  {
    icon: <SiFirebase className="text-yellow-400 text-4xl" />,
    title: "Firebase",
    description: "Autenticação, banco de dados em tempo real e deploy.",
  },
];
