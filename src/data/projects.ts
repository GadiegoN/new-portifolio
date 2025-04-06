interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  previewUrl: string;
}

export const PROJECTS: ProjectProps[] = [
  {
    id: "0001",
    title: "App links",
    description:
      "Sistema de cadastro de links. Utilizei o vite para criar o site em ReactJs com Typescript e TailwindCSS.",
    image: "/app-links.png",
    url: "https://github.com/GadiegoN/app-links",
    previewUrl: "https://app-links-psi.vercel.app/",
  },
  {
    id: "0002",
    title: "Cardápio Online",
    description:
      "Landing page para comercio, onde fica disponibilizado todo o cardápio para o cliente poder fazer o pedido e receber em casa. Desenvolvido com HTML, CSS e JavaScript.",
    image: "/menu.png",
    url: "https://github.com/GadiegoN/menu",
    previewUrl: "https://gadiegon.github.io/menu/",
  },
  {
    id: "0003",
    title: "Design System",
    description:
      "Componentes criados isoladamente, criados utilizando Monorepo, Turborepo, Storybook, Typescript, entre outras...",
    image: "/design-system.png",
    url: "https://github.com/GadiegoN/05-design-system",
    previewUrl: "https://gadiegon.github.io/05-design-system/",
  },
  {
    id: "0004",
    title: "Expert Notes",
    description:
      "Sitema Web para criação de notas por texto ou audio. Desenvolvido Utilizando ReactJs com Typescript e TailwindCSS.",
    image: "/expert-notes.png",
    url: "https://github.com/GadiegoN/nlw-expert-notes",
    previewUrl: "https://nlw-expert-notes-gadiegon.vercel.app/",
  },
  {
    id: "0005",
    title: "Loja de Legumes",
    description:
      "Site de vendas de legumes criado em reactjs com typescript e tailwind.",
    image: "/vegetable-store.png",
    url: "https://github.com/GadiegoN/vegetable-store",
    previewUrl: "https://vegetable-store-hazel.vercel.app/",
  },
  {
    id: "0006",
    title: "Serviços Front-end",
    description:
      "Site de prestação de serviços, desenvolvido utilizando NextJs, typescript, tailwind e CMS para gerenciar o conteudo.",
    image: "/devfront.png",
    url: "https://github.com/GadiegoN/devfront",
    previewUrl: "https://devfront-woad.vercel.app/",
  },
  {
    id: "0007",
    title: "Fina Control",
    description:
      "Gerencie suas finanças de forma simples e eficiente. Aqui você pode adicionar e monitorar suas transações e acompanhar seu saldo. Explore o dashboard para ter uma visão detalhada de suas entradas e saídas.",
    image: "/fina-control.png",
    url: "https://github.com/GadiegoN/fina-control",
    previewUrl: "https://fina-control.vercel.app/",
  },
];
