"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 35 });

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "120%",
            x: Math.random() * 430,
            opacity: 0,
            scale: Math.random() * .5 + .5,
          }}
          animate={{
            y: "-20%",
            opacity: [0, .7, .7, 0],
            x: Math.random() * 430,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear",
          }}
          className="absolute"
        >
          <div className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_20px_#ff4da6]" />
        </motion.div>
      ))}

    </div>
  );
}