"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingHearts from "../effects/FloatingHearts";
import Stars from "../effects/Stars";
import BackgroundGlow from "../effects/BackgroundGlow";
import TypeWriter from "../ui/TypeWriter";
import Noise from "../effects/Noise";
import Particles from "../effects/Particles";

interface LetterProps {
  onFinish: () => void;
}

const letter = [
  {
    text: "Sevgilim Gulnoza...",
    duration: 2200,
  },
  {
    text: "Bugun seni tug'ilgan kuning. ❤️",
    duration: 2600,
  },
  {
    text: "Men senga oddiy tabrik yozishni xohlamadim.",
    duration: 2800,
  },
  {
    text: "Chunki oddiy insonlarga oddiy tabrik yoziladi.",
    duration: 3000,
  },
  {
    text: "Sen esa men uchun oddiy inson emassan.",
    duration: 3200,
  },
  {
    text: "Shu sababli sen uchun kichkina bir xotira yaratishga qaror qildim.",
    duration: 3500,
  },
  {
    text: "Bu saytdagi har bir satr...",
    duration: 2650,
  },
  {
    text: "Har bir rang...",
    duration: 2200,
  },
  {
    text: "Har bir animatsiya...",
    duration: 2200,
  },
  {
    text: "Seni o'ylab tayyorlandi.",
    duration: 3200,
  },
  {
    text: "Bugun tabassuming yanada chiroyli bo'lishini chin dildan tilayman.",
    duration: 3600,
  },
  {
    text: "Rahmat hayotimda borliging uchun... ❤️",
    duration: 4000,
  },
];

export default function Letter({ onFinish }: LetterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= letter.length) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, letter[index].duration);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  if (index >= letter.length) return null;

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-8">
      <BackgroundGlow variant="letter" />
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[170px]" />
      
        <Stars />

        <FloatingHearts />

        <Noise />

        <Particles />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute h-95 w-95 rounded-full bg-pink-500/20 blur-[150px]"
      />

      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 4,
              delay: Math.random() * 2,
            }}
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 1.05,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative z-10"
        >
          <TypeWriter
            text={letter[index].text}
            speed={35}
            className="text-center text-[34px] font-bold leading-relaxed text-white"
          />
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