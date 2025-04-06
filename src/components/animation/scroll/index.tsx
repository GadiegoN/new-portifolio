"use client";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function SectionAnimada({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants: Variants;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="mb-20"
    >
      {children}
    </motion.section>
  );
}
