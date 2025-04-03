"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  id,
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`max-w-screen-2xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
