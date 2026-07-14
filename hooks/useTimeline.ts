"use client";

import { useState } from "react";
import { STEP_ORDER, Step } from "@/lib/timeline";

export default function useTimeline() {
  const [step, setStep] = useState<Step>("loading");

  const next = () => {
    const index = STEP_ORDER.indexOf(step);

    if (index < STEP_ORDER.length - 1) {
      setStep(STEP_ORDER[index + 1]);
    }
  };

  return {
    step,
    next,
    setStep,
  };
}