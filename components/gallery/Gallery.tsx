"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Stars from "../effects/Stars";
import FloatingHearts from "../effects/FloatingHearts";
import BackgroundGlow from "../effects/BackgroundGlow";
import Particles from "../effects/Particles";

interface GalleryProps {
  onFinish: () => void;
}

const photos = [
  {
    src: "/images/photo1.jpg",
    title: "Ba'zi tabassumlar...",
    text: "Hech qachon unutilmaydi. ❤️",
    duration: 2800,
  },
  {
    src: "/images/photo2.jpg",
    title: "Sening samimiyliging...",
    text: "Eng chiroyli fazilatlaringdan biri.",
    duration: 2800,
  },
  {
    src: "/images/photo3.jpg",
    title: "Shunday insonlar bo'ladiki...",
    text: "Ularni ko'rganingizda beixtiyor kulging keladi.",
    duration: 3000,
  },
  {
    src: "/images/photo4.jpg",
    title: "Gulim...",
    text: "Bugungi kun faqat seniki. ✨",
    duration: 3200,
  },
];

export default function Gallery({ onFinish }: GalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= photos.length) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setIndex((p) => p + 1);
    }, photos[index].duration);

    return () => clearTimeout(timer);
  }, [index]);

  if (index >= photos.length) return null;

  const photo = photos[index];

  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-black">
      <BackgroundGlow variant="gallery" />
      <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[170px]" />

        <Stars />

        <FloatingHearts />

        <Particles />

      <AnimatePresence mode="wait">

        <motion.div
            key={index}
            initial={{
                opacity: 0,
                scale: 1.2,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}

            exit={{
                opacity: 0,
                scale: 0.96,
                filter: "blur(8px)",
            }}
                transition={{
                duration: 0.8,
            }}
            className="absolute inset-0"
        >

        <motion.div
        initial={{
            scale: 1.08,
        }}
        animate={{
            scale: 1,
        }}
        transition={{
            duration: photo.duration / 1000,
            ease: "easeOut",
        }}
        className="absolute inset-0"
        >

            <Image
              src={photo.src}
              alt=""
              fill
              priority
              className="object-cover"
            />

          </motion.div>

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/45" />

          {/* Bottom Gradient */}

          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black via-black/60 to-transparent" />

          {/* Text */}

          <div className="absolute bottom-20 left-0 right-0 px-8">

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="premium-text text-4xl font-bold leading-tight text-white"
            >
              {photo.title}
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-5 text-xl leading-9 text-white/80"
            >
              {photo.text}
            </motion.p>

          </div>

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