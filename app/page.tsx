"use client";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import Description from "@/components/sections/Description/Description";
import Village from "@/components/sections/Village/Village";
import Cuisine from "@/components/sections/Cuisine/Cuisine";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <Village />
      <Cuisine />
    </>
  );
}
