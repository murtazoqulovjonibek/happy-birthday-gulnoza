"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Stars from "../effects/Stars";
import FloatingHearts from "../effects/FloatingHearts";
import BackgroundGlow from "../effects/BackgroundGlow";
import Noise from "../effects/Noise";
import Particles from "../effects/Particles";

interface StoryProps {
  onFinish: () => void;
}

const scenes = [
  {
    text: "Gulim...",
    color: "text-pink-400",
    size: "text-5xl",
    duration: 2500,
  },
  {
    text: "Bugun oddiy kun emas.",
    color: "text-white",
    size: "text-4xl",
    duration: 3500,
  },
  {
    text: "Bugun dunyoga juda ham go'zal,nmehribon va samimiy inson kelgan kun.",
    color: "text-white",
    size: "text-3xl",
    duration: 5000,
  },
  {
    text: "Va men...",
    color: "text-white",
    size: "text-4xl",
    duration: 2500,
  },
  {
    text: "Sen uchun oddiy tabrik emas...",
    color: "text-pink-300",
    size: "text-4xl",
    duration: 3500,
  },
  {
    text: "Yodingda qoladigan xotira tayyorladim.",
    color: "text-white",
    size: "text-3xl",
    duration: 5000,
  },
  {
    text: "Shuning uchun... Saytni oxirigacha ko'r. ❤️",
    color: "text-pink-400",
    size: "text-4xl",
    duration: 4500,
  },
];

export default function Story({ onFinish }: StoryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= scenes.length) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, scenes[index].duration);

    return () => clearTimeout(timer);
  }, [index]);

  if (index >= scenes.length) return null;

  const scene = scenes[index];

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-8">
      <BackgroundGlow variant="story" />
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[170px]" />

        <Stars />

        <FloatingHearts />

        <Noise />

        <Particles />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [.2, .45, .2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute h-105 w-105 rounded-full bg-pink-500/20 blur-[170px]"
      />

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
            scale: .92,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -30,
            scale: 1.08,
            filter: "blur(20px)",
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10"
        >
          <h1
            className={`premium-text whitespace-pre-line text-center font-bold leading-relaxed ${scene.color} ${scene.size}`}
          >
            {scene.text}
          </h1>
        </motion.div>

      </AnimatePresence>

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:1}}

className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"

>

✦

</motion.div>

    </section>
  );
}