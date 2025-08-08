"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useLenis } from "lenis/react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    lenis?.scrollTo("#HeroSection");
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-secondary/95 text-white p-4 rounded-full shadow-lg hover:bg-secondary/80 hover:-translate-y-1 transition-all duration-300 transform ${
        isVisible
          ? "translate-y-0 opacity-100 bounce-animation"
          : "translate-y-16 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faChevronUp} className="text-xl" />
    </button>
  );
}
