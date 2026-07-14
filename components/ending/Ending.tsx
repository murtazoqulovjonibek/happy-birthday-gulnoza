"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingHearts from "../effects/FloatingHearts";
import Stars from "../effects/Stars";
import ShootingStars from "../effects/ShootingStars";
import BackgroundGlow from "../effects/BackgroundGlow";
import TypeWriter from "../ui/TypeWriter";
import Heartbeat from "../effects/Heartbeat";
import Noise from "../effects/Noise";
import Particles from "../effects/Particles";

const messages = [
  {
    text: "Va nihoyat...",
    duration: 2000,
  },
  {
    text: "Sayt shu yerda tugaydi.",
    duration: 2500,
  },
  {
    text: "Ammo...",
    duration: 1800,
  },
  {
    text: "Senga bo'lgan yaxshi tilaklarim...",
    duration: 2800,
  },
  {
    text: "Hech qachon tugamaydi.",
    duration: 2500,
  },
  {
    text: "❤️",
    duration: 1800,
  },
  {
    text: "Yaxshi hamki...",
    duration: 2200,
  },
  {
    text: "Hayotimda borsan.",
    duration: 2400,
  },
  {
    text: "Tug'ilgan kuning muborak bo'lsin!",
    duration: 3000,
  },
  {
    text: "Hayotim ❤️",
    duration: 4000,
  },
];

export default function Ending() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, messages[index].duration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black px-8">
      <BackgroundGlow variant="ending" />
      <FloatingHearts />
      <Stars />
      <ShootingStars />
      <Particles />
      <Noise />
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[170px]" />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [.2, .45, .2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute h-87.5 w-87.5 rounded-full bg-pink-500/25 blur-[180px]"
      />

      {/* Stars */}

      <div className="absolute inset-0">

        {Array.from({ length: 50 }).map((_, i) => (

          <motion.span
            key={i}

            animate={{
              opacity: [.2, 1, .2],
            }}

            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 3,
            }}

            className="absolute h-0.5 w-0.5 rounded-full bg-white"

            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />

        ))}

      </div>

      <AnimatePresence mode="wait">

        <motion.div

          key={index}

          initial={{
            opacity: 0,
            y: 40,
            scale: .92,
            filter: "blur(15px)",
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
            filter: "blur(12px)",
          }}

          transition={{
            duration: .9,
          }}

          className="relative z-10"
        >

          <Heartbeat>
            <TypeWriter
              text={messages[index].text}
              speed={45}
              className={`text-center font-bold leading-relaxed ${
                index === 9
                  ? "text-6xl text-pink-400"
                  : index === 5
                  ? "text-7xl"
                  : "text-4xl text-white"
              }`}
            />
          </Heartbeat>

          {index === 9 && (

            <motion.p

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 1,
              }}

              className="mt-10 text-center text-lg text-white/60"
            >
              — Jonibek
            </motion.p>

          )}

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