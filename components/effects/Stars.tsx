"use client";

import { motion } from "framer-motion";

export default function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {Array.from({ length: 80 }).map((_, i) => (

        <motion.span
          key={i}

          animate={{
            opacity: [.2, 1, .2],
            scale: [1, 1.6, 1],
          }}

          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 4,
            delay: Math.random() * 3,
          }}

          className="absolute h-[2px] w-[2px] rounded-full bg-white"

          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

    </div>
  );
}