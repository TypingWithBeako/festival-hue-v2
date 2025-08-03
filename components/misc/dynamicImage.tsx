import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Village() {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      ease: "power3.out", // Smooth easing
      width: "160vh",
      height: "80vh",
      scrollTrigger: {
        trigger: imageRef.current, // Element to trigger the animation
        start: "top 30%", // Start animation when the top of the element hits the center of the viewport
        end: "bottom 20%", // End animation when the bottom of the element hits the top of the viewport
        scrub: true, // Smoothly animate as the user scrolls
      },
    });
  });
  return (
    <div className=" h-[2000px] my-40 flex justify-center">
      <div
        className="w-[25vw] h-[25vw] rounded-full background-gsap"
        ref={imageRef}
      ></div>
    </div>
  );
}
