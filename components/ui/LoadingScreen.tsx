"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 800);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#050816]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-text text-4xl font-bold text-white"
        >
          Gulnoza ❤️
        </motion.h1>

        <p className="mt-4 text-white/60">
          Maxsus sovg'a tayyorlanmoqda...
        </p>

        <div className="mt-10 h-1 w-72 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            className="h-full rounded-full bg-pink-500"
          />
        </div>

        <p className="mt-4 text-sm text-pink-300">
          {progress}%
        </p>
      </motion.div>
    </AnimatePresence>
  );
}