"use client";

import { motion } from "framer-motion";

interface HeartbeatProps {
  children: React.ReactNode;
}

export default function Heartbeat({
  children,
}: HeartbeatProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.02, 1, 1.04, 1],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}