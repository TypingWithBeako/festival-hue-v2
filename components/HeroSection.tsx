"use client";
import { useRef } from "react";
import NavigationBar from "@/components/navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function HeroSection() {
  const navRef = useRef<HTMLDivElement>(null); // Ref for the navigation bar
  const textRef = useRef<HTMLDivElement>(null); // Ref for the text container
  const siteRef = useRef<HTMLDivElement>(null); // Ref for the entire site container

  useGSAP(() => {
    siteRef.current?.classList.remove("hidden");
    // GSAP animation for the navigation bar
    gsap.from(siteRef.current, {
      opacity: 0.25, // Start with opacity 0
      scale: 1, // Slightly scaled down
      duration: 2.5, // Animation duration
      ease: "power3.out", // Smooth easing
    });

    gsap.from(navRef.current, {
      y: -50, // Move from -100px (top)
      opacity: 0, // Start with opacity 0
      duration: 1.75, // Animation duration
      ease: "power3.out", // Smooth easing
      delay: 0.75,
    });

    // GSAP animation for the text
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0, // Start with opacity 0
      duration: 1.75, // Animation duration
      ease: "power4.out", // Smooth easing\
      delay: 0.25,
    });
  }, [navRef, textRef]);

  return (
    <div ref={siteRef} className="hidden">
      <div className="fixed top-0 left-0 w-full z-10" ref={navRef}>
        <NavigationBar />
      </div>
      <div className="gradient-background"></div>
      <div ref={textRef}>
        <div className="w-full h-screen flex items-top justify-center items-center leading-8">
          <div className="container">
            <div className="flex flex-row justify-center md:justify-start">
              <div className="flex flex-col w-[72%] md:px-6">
                <h1 className="text-7xl/20 text-primary my-8 text-center font-extrabold tracking-wide text-shadow-md/25 md:text-nowrap font-literata">
                  Festival Huế 2025
                </h1>
                <p className="text-xl w-full text-secondary font-light leading-relaxed relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-secondary">
                  Khám phá những câu chuyện ngàn năm, trải nghiệm không gian văn
                  hóa độc đáo và hòa mình vào sắc màu lễ hội bất tận!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
