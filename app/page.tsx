"use client";

import LoadingScreen from "@/components/ui/LoadingScreen";
import PasswordScreen from "@/components/intro/PasswordScreen";
import Intro from "@/components/intro/Intro";
import Story from "@/components/story/Story";
import Gallery from "@/components/gallery/Gallery";
import Letter from "@/components/letter/Letter";
import Gift from "@/components/gift/Gift";
import Fireworks from "@/components/effects/Fireworks";
import Ending from "@/components/ending/Ending";
import PageTransition from "@/components/ui/PageTransition";
import useTimeline from "@/hooks/useTimeline";

type Step =
  | "loading"
  | "password"
  | "intro"
  | "story"
  | "gallery"
  | "letter"
  | "gift"
  | "fireworks"
  | "ending"

export default function Home() {
  const { step, next, setStep } = useTimeline();

  switch (step) {
    case "loading":
      return (
        <PageTransition pageKey="loading">
          <LoadingScreen
            onFinish={next}
          />
        </PageTransition>
      );

    case "password":
      return (
        <PageTransition pageKey="password">
          <PasswordScreen
              onSuccess={()=>{
                  next();
              }}
          />
        </PageTransition>
      );

    case "intro":
      return (
        <PageTransition pageKey="intro">
          <Intro
              onFinish={next}
          />
        </PageTransition>
      );

    case "story":
      return (
        <PageTransition pageKey="story">
          <Story
            onFinish={next}
          />
        </PageTransition>
      );

    case "gallery":
      return (
        <PageTransition pageKey="gallery">
          <Gallery
            onFinish={next}
          />
        </PageTransition>
      );

    case "letter":
      return (
        <PageTransition pageKey="letter">
          <Letter
            onFinish={next}
          />
        </PageTransition>
      );

    case "gift":
      return (
        <PageTransition pageKey="gift">
          <Gift
            onFinish={next}
          />
        </PageTransition>
      );

    case "fireworks":
      return (
        <PageTransition pageKey="fireworks">
          <Fireworks
            onFinish={next}
          />
        </PageTransition>
      );

    case "ending":
      return (
        <PageTransition pageKey="ending">
          <Ending />
        </PageTransition>
      );
  }
};