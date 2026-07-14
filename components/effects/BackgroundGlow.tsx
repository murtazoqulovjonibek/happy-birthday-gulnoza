"use client";

import { motion } from "framer-motion";

interface BackgroundGlowProps {
  variant?:
    | "intro"
    | "story"
    | "gallery"
    | "letter"
    | "gift"
    | "fireworks"
    | "ending";
}

export default function BackgroundGlow({
  variant = "intro",
}: BackgroundGlowProps) {
  const colors = {
    intro: "bg-pink-500/25",
    story: "bg-violet-500/20",
    gallery: "bg-fuchsia-500/20",
    letter: "bg-amber-300/15",
    gift: "bg-pink-500/30",
    fireworks: "bg-fuchsia-500/30",
    ending: "bg-pink-500/15",
  };

  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className={`absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px] ${colors[variant]}`}
      />

      <motion.div
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className={`absolute top-0 right-0 h-62.5 w-62.5 rounded-full blur-[150px] ${colors[variant]}`}
      />
    </>
  );
}