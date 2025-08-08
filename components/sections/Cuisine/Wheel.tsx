"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import Anh1 from "@/public/Cuisine/Anh1.jpg";
import Anh2 from "@/public/Cuisine/Anh2.jpg";
import Anh3 from "@/public/Cuisine/Anh3.jpg";
import Anh4 from "@/public/Cuisine/Anh4.jpg";

// Register the plugin
gsap.registerPlugin(MotionPathPlugin);

interface FoodItem {
  id: number;
  src: any;
  alt: string;
  name: string;
  description: string;
  price?: string;
  ingredients?: string[];
}

interface WheelProps {
  onCurrentElementChange: (element: FoodItem | null) => void;
}

export default function Wheel({ onCurrentElementChange }: WheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [currentElement, setCurrentElement] = useState<FoodItem | null>(null);

  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  useEffect(() => {
    // Detect screen size on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Geometry
  const outerDiameter = isMobile ? 680 : 1230;
  const outerR = outerDiameter / 2;
  const innerR = isMobile ? 150 : 300;
  const midR = (outerR + innerR) / 2;

  // Enhanced food data with descriptions
  const images: FoodItem[] = [
    {
      id: 1,
      src: Anh1,
      alt: "Dish 1",
      name: "Bánh mì Huế",
      description:
        "Bánh mì truyền thống của Huế với nhân thịt nướng thơm ngon, rau sống tươi mát và nước chấm đặc biệt.",
      price: "25.000 VNĐ",
      ingredients: ["Bánh mì", "Thịt nướng", "Rau sống", "Nước chấm"],
    },
    {
      id: 2,
      src: Anh2,
      alt: "Dish 2",
      name: "Bún bò Huế",
      description:
        "Món ăn đặc sản nổi tiếng của xứ Huế với nước dựng từ xương heo, thịt bò đậm đà hương vị.",
      price: "45.000 VNĐ",
      ingredients: ["Bún", "Thịt bò", "Chả cua", "Rau răm"],
    },
    {
      id: 3,
      src: Anh3,
      alt: "Dish 3",
      name: "Nem lụi",
      description:
        "Nem nướng trên que tre với hương vị thơm ngon, ăn kèm bánh tráng và rau sống.",
      price: "35.000 VNĐ",
      ingredients: ["Thịt heo", "Bánh tráng", "Rau sống", "Nước chấm"],
    },
    {
      id: 4,
      src: Anh4,
      alt: "Dish 4",
      name: "Cơm âm phủ",
      description:
        "Món cơm trộn đặc sắc với nhiều loại rau củ, thịt và gia vị phong phú của Huế.",
      price: "40.000 VNĐ",
      ingredients: ["Cơm", "Thịt heo", "Rau củ", "Gia vị Huế"],
    },
  ];

  // Create the SVG path
  const createPath = () => {
    const centerX = outerR;
    const centerY = outerR;
    const radius = midR;
    return `M ${centerX} ${centerY - radius} 
            A ${radius} ${radius} 0 1 1 ${centerX - 0.01} ${centerY - radius}`;
  };

  // Update parent component when current element changes
  useEffect(() => {
    onCurrentElementChange(currentElement);
  }, [currentElement, onCurrentElementChange]);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current) return;

    const path = pathRef.current;

    imagesRef.current.forEach((img, index) => {
      if (!img) return;

      const startProgress = index / images.length;

      gsap.set(img, {
        motionPath: {
          path: path,
          start: startProgress,
          autoRotate: true,
        },
        xPercent: -50,
        yPercent: -50,
      });

      gsap.to(img, {
        motionPath: {
          path: path,
          start: startProgress,
          end: startProgress + 1,
        },
        duration: 60,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          const bounds = img.getBoundingClientRect();
          const containerBounds = containerRef.current?.getBoundingClientRect();

          if (!containerBounds) return;

          const containerCenterX =
            containerBounds.left + containerBounds.width / 2;
          const containerCenterY =
            containerBounds.top + containerBounds.height / 2;

          const imgCenterX = bounds.left + bounds.width / 2;
          const imgCenterY = bounds.top + bounds.height / 2;

          const isAtLeftEdge =
            Math.abs(imgCenterY - containerCenterY) < 15 &&
            imgCenterX < containerCenterX - 50;

          if (isAtLeftEdge) {
            setCurrentElement(images[index]);
          }
        },
      });
    });
  }, [outerR, midR, images.length]);

  return (
    <div
      ref={containerRef}
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-offset="300"
      className="absolute right-0 translate-y-[30%] md:-translate-y-1/4 translate-x-[58%]"
      style={{
        width: outerDiameter,
        height: outerDiameter,
        clipPath: "inset(0 0 0 0%)",
      }}
    >
      {/* SVG, rings, arrows, and images - same as before */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={outerDiameter}
        height={outerDiameter}
      >
        <path
          ref={pathRef}
          d={createPath()}
          stroke="#CD7F32"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="absolute inset-0 rounded-full border-8 border-primary" />

      <div
        className="absolute bg-white rounded-full border-8 border-primary"
        style={{
          width: innerR * 2,
          height: innerR * 2,
          left: outerR - innerR,
          top: outerR - innerR,
        }}
      >
        {" "}
        <div className="relative w-full h-full flex justify-start items-center">
          {/* Left arrow inside the inner circle */}
          <div className="text-secondary">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-secondary z-50"
              size="6x"
            />
          </div>
        </div>
      </div>

      {/* Moving images */}
      {images.map((image, index) => (
        <div
          key={image.id}
          ref={(el) => {
            if (el) imagesRef.current[index] = el;
          }}
          className="absolute w-40 h-40 md:w-70 md:h-70 rounded-full overflow-hidden ring-6 ring-gray-300 shadow-lg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
