"use client";

import { DIFFERENTIALS } from "@/data/differentials";
import { motion } from "framer-motion";

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="relative z-10 py-24 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
        Meus Diferenciais
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {DIFFERENTIALS.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/50 border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
