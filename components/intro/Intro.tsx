"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Stars from "../effects/Stars";
import FloatingHearts from "../effects/FloatingHearts";
import BackgroundGlow from "../effects/BackgroundGlow";
import Noise from "../effects/Noise";
import Particles from "../effects/Particles";

interface IntroProps {
  onFinish: () => void;
}

const scenes = [
  {
    id: 1,
    text: "Har yili millionlab insonlarning tug'ilgan kuni bo'ladi...",
    duration: 4500,
  },
  {
    id: 2,
    text: "Ammo...",
    duration: 2000,
  },
  {
    id: 3,
    text: "Ba'zi tug'ilgan kunlar boshqalarnikidan mutlaqo boshqacha bo'ladi.",
    duration: 4500,
  },
  {
    id: 4,
    text: "Chunki bugun...",
    duration: 2500,
  },
  {
    id: 5,
    text: "Bugun sening kuning.",
    duration: 3500,
  },
];

export default function Intro({ onFinish }: IntroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === scenes.length) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, scenes[index].duration);

    return () => clearTimeout(timer);
  }, [index]);

  if (index === scenes.length) return null;

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-8">
      <BackgroundGlow variant="intro" />

        <Stars />

        <FloatingHearts />

        <Particles />

        <Noise />

      {/* Glow */}

      <AnimatePresence mode="wait">

        <motion.h1
          key={scenes[index].id}
          initial={{
            opacity: 0,
            scale: .85,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(15px)",
          }}
          transition={{
            duration: 1,
          }}
          className={`relative z-10 premium-text text-center leading-relaxed ${
            index === 4
              ? "text-6xl font-bold text-pink-400"
              : "text-4xl font-semibold text-white"
          }`}
        >
          {scenes[index].text}
        </motion.h1>

      </AnimatePresence>

    </section>
  );
}