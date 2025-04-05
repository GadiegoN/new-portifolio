"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function WhileHoverComponent() {
  return (
    <motion.div
      whileHover={{ rotateY: 10, rotateX: 5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="mt-4"
    >
      <Image
        src="/profile-icon.png"
        alt="Avatar de Gadiego"
        width={240}
        height={240}
        className="rounded-full border-2 border-primary shadow-[0_0_20px_#6366f1]"
      />
    </motion.div>
  );
}
