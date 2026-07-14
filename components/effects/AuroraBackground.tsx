"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-pink-500/25 blur-[120px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -100, 0],
          scale: [1, 1.2, 1.35, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <div className="absolute inset-0 bg-[#050816]/70" />
    </div>
  );
}