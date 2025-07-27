"use client";

import { useRef } from "react";
import NavigationBar from "@/components/navbar";
import gsap from "gsap";

import localFont from "next/font/local";
const fontThuPhap = localFont({ src: "../fonts/Vntfap01.ttf" });

import { useGSAP } from "@gsap/react";
import { Link, Button } from "@heroui/react";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="fallback-background"></div>
      <div className="gradient-background"></div>
      <div className="sticky top-0 left-0 w-full z-10" ref={navRef}>
        <NavigationBar />
      </div>

      <div ref={textRef}>
        <div
          style={{
            height: `calc(100vh - 5.5rem)`, // Subtract navbar height from 100vh
          }}
          className="w-full flex items-top justify-center items-center leading-8"
        >
          <div className="container xl:max-w-[1024px]">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col w-[72%]  md:px-6 mt-2">
                <h1
                  className={`highlight text-6xl/20 md:text-8xl/20 text-primary my-8 text-center font-extrabold tracking-wide text-shadow md:text-nowrap font-literata antialiased z-100 ${fontThuPhap.className}`}
                >
                  Festival Hueá 2025
                </h1>
                <p className="text-pretty text-xl w-full text-secondary font-light leading-relaxed relative pl-5 before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-secondary">
                  Khám phá những câu chuyện ngàn năm, trải nghiệm không gian văn
                  hóa độc đáo và hòa mình vào sắc màu lễ hội bất tận!
                </p>
                <Button
                  as={Link}
                  className="mx-auto md:mx-0 bg-secondary w-40 mt-6 text-white hover:bg-secondary/80 hover:shadow-lg hover:scale-103 transition-all duration-400"
                  href="#"
                  variant="flat"
                >
                  Tìm hiểu thêm
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </Button>
              </div>
            </div>
          </div>
          <div className="scroll-indicator self-center absolute bottom-0 hidden sm:block">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-primary text-2xl animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
