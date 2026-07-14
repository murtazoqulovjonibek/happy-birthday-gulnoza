"use client";

import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 });

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110%",
            x: Math.random() * 400,
            opacity: 0,
            scale: .5,
          }}
          animate={{
            y: "-20%",
            x: Math.random() * 400,
            opacity: [0, .7, .7, 0],
            rotate: Math.random() * 180,
            scale: [.5, 1, .8],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-pink-400 text-xl"
        >
          ❤️
        </motion.div>
      ))}

    </div>
  );
}