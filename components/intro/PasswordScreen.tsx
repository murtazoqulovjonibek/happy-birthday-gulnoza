"use client";

import { motion } from "framer-motion";
import { Heart, Lock } from "lucide-react";
import { useState } from "react";

interface PasswordScreenProps {
  onSuccess: () => void;
}

export default function PasswordScreen({
  onSuccess,
}: PasswordScreenProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

    const handleContinue = () => {
    if (name.trim().toLowerCase() === "gulnoza") {
        setError("");
        onSuccess();
    } else {
        setError("Bu sovg'a faqat Gulim uchun ❤️");
    }
    };

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">

      {/* Blur Background */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[120px]" />
      <div className="absolute bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className="relative w-full max-w-sm rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl"
      >

        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/20">
            <Heart
              size={40}
              className="fill-pink-400 text-pink-400"
            />
          </div>
        </div>

        <h1 className="premium-text mt-8 text-center text-3xl font-bold text-white">
          Maxsus Sovg'a
        </h1>

        <p className="mt-3 text-center text-sm leading-6 text-white/60">
          Bu sahifa faqat bitta inson uchun
          tayyorlangan.
        </p>

        <div className="mt-8">

          <label className="mb-3 block text-sm text-white/70">
            Parol
          </label>

          <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4">

            <Lock
              size={18}
              className="text-pink-400"
            />

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleContinue();
                }
              }}
              placeholder="Parolni kiriting..."
              className="h-14 w-full bg-transparent px-3 text-white outline-none placeholder:text-white/30"
            />
          </div>

          {error && (
            <p className="mt-3 text-center text-sm text-red-400">
              {error}
            </p>
          )}

          <motion.button
            whileTap={{ scale: .96 }}
            onClick={handleContinue}
            className="mt-8 h-14 w-full rounded-2xl bg-linear-to-r from-pink-500 to-fuchsia-500 text-lg font-semibold text-white shadow-[0_0_40px_rgba(236,72,153,.35)]"
          >
            Sovg'ani ochish ❤️
          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}