"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Gift as GiftIcon, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Stars from "../effects/Stars";
import FloatingHearts from "../effects/FloatingHearts";
import BackgroundGlow from "../effects/BackgroundGlow";
import Noise from "../effects/Noise";

interface GiftProps {
  onFinish: () => void;
}

export default function Gift({ onFinish }: GiftProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpened(true);
    }, 1800);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 5500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816]">
      <BackgroundGlow variant="gift" />
      {/* Glow */}

      <Stars />

      <FloatingHearts />

      <Noise />

      <AnimatePresence mode="wait">

        {!opened ? (
          <motion.div
            key="gift"

            animate={{
              rotate: [-2, 2, -2],
              y: [0, -8, 0],
            }}

            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}

            className="relative z-10 flex flex-col items-center"
          >

            <GiftIcon
              size={140}
              className="text-pink-400"
            />

            <p className="mt-10 text-center text-2xl text-white">
              Sen uchun kichkina sovg'a...
            </p>

          </motion.div>

        ) : (
          <motion.div
            key="opened"

            initial={{
              opacity: 0,
              scale: .7,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration:.8,
              ease:[0.22,1,0.36,1]
            }}

            className="relative z-10 flex flex-col items-center"
          >

            {/* Hearts */}

            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={i}

                initial={{
                  y: 50,
                  opacity: 0,
                  scale: .5,
                }}

                animate={{
                  y: -250,
                  opacity: [1, 1, 0],
                  x: Math.random() * 160 - 80,
                  scale: 1,
                }}

                transition={{
                  duration: 3,
                  delay: i * .08,
                }}

                className="absolute"
              >
                <Heart
                  size={100}
                  className="fill-pink-500 text-pink-500"
                />
              </motion.div>
            ))}


            <Heart
              size={120}
              className="fill-pink-500 text-pink-500"
            />

            <motion.h2

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: .5,
              }}

              className="premium-text mt-10 px-8 text-center text-[34px] font-bold text-white leading-relaxed"
            >
Har doim
baxtli bo'l.

Har doim
kulib yur.

Va bugungi
tabassuming...

Hech qachon
yo'qolmasin.

❤️
            </motion.h2>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}