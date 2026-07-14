"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Stars from "./Stars";
import FloatingHearts from "./FloatingHearts";
import BackgroundGlow from "./BackgroundGlow";
import Particles from "./Particles";
import Noise from "./Noise";

interface FireworksProps {
  onFinish: () => void;
}

export default function Fireworks({
  onFinish,
}: FireworksProps) {
  useEffect(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 1200);

        return;
      }

      confetti({
        particleCount: 3,
        startVelocity: 30,
        spread: 360,
        ticks: 80,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5,
        },
      });

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
      });

    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816]">
      <BackgroundGlow variant="fireworks" />
      <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[170px]" />

        <Stars />

        <FloatingHearts />

        <Noise />

        <Particles />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [.25, .5, .25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute h-100 w-100 rounded-full bg-pink-500/20 blur-[180px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: .8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 px-8 text-center"
      >

        <motion.h1
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="premium-text text-5xl font-bold text-white leading-tight"
        >
          🎉
          <br />
          Tug'ilgan
          <br />
          kuning
          <br />
          muborak
          <br />
          bo'lsin!
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="premium-text mt-8 text-4xl font-bold text-pink-400"
        >
          Sevgilim ❤️
        </motion.h2>

      </motion.div>

    </section>
  );
}