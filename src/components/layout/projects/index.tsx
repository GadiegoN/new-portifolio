"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GROUP_SIZE = 3;
const INTERVAL_TIME = 10000; // 10 segundos

export function ProjectsSection() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const totalGroups = Math.ceil(PROJECTS.length / GROUP_SIZE);

  useEffect(() => {
    if (showAll) return; // não roda o timer se estiver mostrando todos

    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [showAll, totalGroups]);

  const visibleProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(
        currentGroup * GROUP_SIZE,
        currentGroup * GROUP_SIZE + GROUP_SIZE
      );

  return (
    <section
      id="projetos"
      className="relative z-10 py-24 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-background/60 border border-border rounded-2xl shadow-lg backdrop-blur-md overflow-hidden group transition-all hover:scale-[1.02]"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between min-h-44">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <Link
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline text-sm"
                  >
                    <ExternalLink size={16} />
                    Ver demo
                  </Link>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:underline text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-primary hover:underline transition cursor-pointer"
        >
          {showAll ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>
    </section>
  );
}
