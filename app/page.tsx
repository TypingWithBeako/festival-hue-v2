"use client";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import Description from "@/components/sections/Description/Description";
import Village from "@/components/sections/Village/Village";
import Cuisine from "@/components/sections/Cuisine/Cuisine";
import Art from "./../components/sections/Art/Art";
import Footer from "./../components/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <Village />
      <Cuisine />
      <Art />
      <Footer />
    </>
  );
}
