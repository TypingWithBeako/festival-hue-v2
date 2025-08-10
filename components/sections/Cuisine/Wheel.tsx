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
import Anh5 from "@/public/Cuisine/Anh5.jpg";

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
  literature?: string;
  literatureFoodName?: string;
  literatureSource?: string; // Add this line
}

interface WheelProps {
  onCurrentElementChange: (element: FoodItem | null) => void;
}

export default function Wheel({ onCurrentElementChange }: WheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [currentElement, setCurrentElement] = useState<FoodItem | null>(null);
  const [flashId, setFlashId] = useState<number | null>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);
  const [isPaused, setIsPaused] = useState(false);
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
      name: "Bún bò Huế",
      description:
        "Bún bò Huế là món ăn nổi tiếng nhất xứ Huế, gây ấn tượng với hương vị đậm đà, cay nhẹ, thơm nồng mùi sả và mắm ruốc đặc trưng.",
      price: "25.000 - 45.000 VNĐ",
      ingredients: [
        "Bún",
        "Thịt bò",
        "Rau sống",
        "Giò heo",
        "Huyết",
        "Chả",
        "Xương hầm",
      ],
      literature: `"Nhìn xem... Kìa những miếng thịt bò
Thấp thoáng trong tô những cục giò.
Giò sống, hành trần vài miếng huyết.
Ớt tươi, mắm ruốc rải tí ngò."`,
      literatureFoodName: "Bún bò Huế",
      literatureSource: `Trích trong bài thơ “Bún bò xứ Huế” - Tác giả: Nguyễn Thị Thêm`,
    },
    {
      id: 2,
      src: Anh2,
      alt: "Dish 2",
      name: "Cơm hến",
      description:
        "Cơm hến dân dã mà đậm đà, với vị cay, mặn, ngọt, giòn, mềm hòa quyện, ăn kèm nước hến nóng như canh.",
      price: "10.000 - 20.000 VNĐ",
      ingredients: ["Cơm", "Hến xào", "Mắm ruốc", "Rau sống", "Tóp mỡ"],
      literature: `"Đã nghe ớt đỏ cay nồng
        Tìm trong vị Hến một dòng Hương xanh
        Ruốc thơm, cơm nguội, rau lành
        Mời anh buổi sáng chân thành món quê."`,
      literatureFoodName: "Cơm hến",
      literatureSource: `Trích trong bài thơ "Cơm Hến" - Tác giả: Võ Quê`,
    },
    {
      id: 3,
      src: Anh3,
      alt: "Dish 3",
      name: "Bánh bèo - nậm - lọc ",
      description:
        "Bánh bèo - nậm - lọc là bộ ba bánh truyền thống Huế, nhẹ bụng, tinh tế, thường dùng đãi khách hoặc làm quà quê.",
      price: "10.000 - 30.000 VNĐ",
      ingredients: ["Bột gạo", "Tôm", "Da heo", "Nước chấm"],
      literature: `"Tôm chấy hồng thắm cánh bèo
Dẻo thơm bột gạo quê nghèo nên thương
Hẹn em ngồi quán ven đường
Bánh bèo kết mối tơ duyên đôi lòng"`,
      literatureFoodName: "Bánh bèo",
      literatureSource: `Trích trong "Bánh bèo" - Tác giả: Võ Quê`,
    },
    {
      id: 4,
      src: Anh4,
      alt: "Dish 4",
      name: "Chè bột lọc heo quay",
      description:
        "Chè bột lọc heo quay là món chè đặc sản nổi tiếng của Huế, kết hợp độc đáo giữa vị ngọt thanh của nước đường và vị mặn béo của nhân thịt heo quay được bọc trong lớp bột lọc dai mềm.",
      price: "10.000 - 15.000 VNĐ",
      ingredients: ["Thịt heo quay", "Bột lọc", "Gừng", "Đường phèn", "Lá dừa"],
      literature: `"Ngọt ngào bùi béo tìm nhau
Thịt quay nằm giữa trắng phau bột mềm
Quen nhau tình đã nên duyên
Chè ngon xứ Huế ngỡ quên đường về."`,
      literatureFoodName: "Chè bột lọc heo quay",
      literatureSource: `Trích trong “Chè bột lọc bọc thịt quay” - Tác giả: Võ Quê`,
    },
    {
      id: 5,
      src: Anh5,
      alt: "Dish 5",
      name: "Nem công - chả phượng",
      description:
        "Là món ăn cung đình biểu tượng cho sự cao quý, được chế biến công phu, trình bày như hình chim công, chim phượng, thường xuất hiện trong yến tiệc vua chúa.",
      price: "200.000 - 500.000+ VNĐ",
      ingredients: [
        "Thịt heo",
        "Tôm tươi",
        "Trứng gà",
        "Nấm mèo",
        "Giò sống",
        "Rau củ",
      ],
      literature: `"Mời anh thử miếng chả này,
        Nâng ly hào sảng, hương say tận lòng.
        Cung đình chả phụng, nem công,
        Đôi ta nem chả vốn dòng dân gian."`,
      literatureFoodName: "Nem công - chả phượng",
      literatureSource: `Trích trong bài thơ “Chả Huế” - Tác giả: Võ Quê`,
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
    const tweens: gsap.core.Tween[] = []; // Store all tweens for cleanup

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

      const tween = gsap.to(img, {
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
            setFlashId(images[index].id);
            setTimeout(() => setFlashId(null), 300); // 0.3 seconds flash
          }
        },
      });
      tweens.push(tween); // Store the tween for cleanup
    });

    tweensRef.current = tweens; // Save tweens for later access

    // Cleanup function
    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [outerR, midR, images.length, isMobile]);

  const handleWheelClick = () => {
    setIsPaused((prev) => {
      tweensRef.current.forEach((tween) => tween.paused(!prev));
      return !prev;
    });
  };

  return (
    <div
      title={isPaused ? "Nhấn để tiếp tục" : "Nhấn để dừng"}
      onPointerDown={handleWheelClick} // Use this instead of onClick/onTouchStart
      ref={containerRef}
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-offset="300"
      className={`absolute right-0 translate-y-[30%] md:-translate-y-1/4 translate-x-[58%] md:translate-x-[73%] 2xl:translate-x-[63%] cursor-pointer`}
      style={{
        width: outerDiameter,
        height: outerDiameter,
        clipPath: "inset(0 0 0 0%)",
      }}
    >
      {/* SVG, rings, arrows, and images - same as before */}
      <svg
        className="absolute inset-0 pointer-events-none "
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

      <div className="absolute inset-0 rounded-full border-8 border-[#6B3F1A] bg-[#B97A57]" />

      <div
        className="absolute bg-white rounded-full border-8 border-[#6B3F1A]"
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
          className={`absolute w-40 h-40 md:w-70 md:h-70 rounded-full overflow-hidden ring-6 shadow-lg transition-shadow duration-600
            ${flashId === image.id ? " ring-[#FFD700]" : " ring-[#F8F6F2]"}`}
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
