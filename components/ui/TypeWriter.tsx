"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypeWriter({
  text,
  speed = 45,
  className,
  onComplete,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayed("");

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete?.();
        }, 600);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className={className}>
      {displayed}
      <span className="animate-pulse text-pink-400">|</span>
    </h1>
  );
}