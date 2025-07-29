"use client";

import { useLenis } from "lenis/react";
import { useRef } from "react";
import gsap from "gsap";

import localFont from "next/font/local";
const fontThuPhap1 = localFont({ src: "../fonts/Vntfap01.ttf" });

import { useGSAP } from "@gsap/react";
import { Link, Button } from "@heroui/react";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SplitText } from "gsap/all";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null); // Ref for the text container
  const siteRef = useRef<HTMLDivElement>(null); // Ref for the entire site container
  const buttonRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP, SplitText);
  const lenis = useLenis();
  useGSAP(() => {
    const timeline = gsap.timeline();
    // GSAP animation for the navigation bar
    timeline.from(siteRef.current, {
      opacity: 0.1,
      scale: 1,
      duration: 2.5,
      ease: "power3.out",
    });

    const split = new SplitText(textRef.current, { type: "chars" });
    timeline.from(
      split.chars,
      {
        opacity: 0.07,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.07,
      },
      "-=1.5"
    ); // Overlap with the previous animation

    // Animate the description
    timeline.from(
      descriptionRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=0.25"
    ); // Overlap with the previous animation
    // Animate the button
    timeline.from(
      buttonRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=0.25"
    ); // Overlap with the previous animation

    // Split the text into words and animate them
  }, [textRef]);

  return (
    <div id="HeroSection" ref={siteRef}>
      <div className={styles["sliced-background"]}></div>

      <div>
        <div className="w-full h-[102vh] md:h-[100vh] flex items-top justify-center items-center leading-8">
          <div className="container xl:max-w-[1024px] mt-44">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col w-[72%]  md:px-6 mt-2">
                <h1
                  ref={textRef}
                  className={`highlight text-6xl/20 md:text-8xl/20 text-primary my-8 text-center font-extrabold tracking-wide text-shadow md:text-nowrap font-literata antialiased z-100 ${fontThuPhap1.className}`}
                >
                  Festival Hueá <span className={`text-secondary`}> 2025</span>
                </h1>
                <p
                  ref={descriptionRef}
                  className="text-pretty text-xl w-full text-secondary font-light leading-relaxed relative pl-5 before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-secondary"
                >
                  Khám phá những câu chuyện ngàn năm, trải nghiệm không gian văn
                  hóa độc đáo và hòa mình vào sắc màu lễ hội bất tận!
                </p>

                <div
                  className="flex justify-center md:justify-start"
                  ref={buttonRef}
                >
                  <Button
                    as={Link}
                    className="bg-secondary w-40 mt-6 text-white hover:bg-secondary/80 hover:shadow-lg hover:scale-103 transition-all duration-400"
                    onPress={() => {
                      lenis?.scrollTo("#Description");
                    }}
                    variant="flat"
                  >
                    Tìm hiểu thêm
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-xs"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator self-center absolute bottom-0 hidden sm:block">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-primary text-2xl animate-bounce mb-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
