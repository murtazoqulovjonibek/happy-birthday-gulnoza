"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string;
}

export default function PageTransition({
  children,
  pageKey,
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{
          opacity: 0,
          scale: 1.04,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          filter: "blur(20px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}