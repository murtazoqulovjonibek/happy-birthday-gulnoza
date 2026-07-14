"use client";

import { motion } from "framer-motion";

export default function ShootingStars() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: -150,
            y: -150,
            opacity: 0,
          }}
          animate={{
            x: 500,
            y: 700,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 4,
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="absolute h-[2px] w-28 rotate-45 rounded-full bg-gradient-to-r from-white to-transparent"
        />
      ))}
    </>
  );
}