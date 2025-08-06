import styles from "./Cuisine.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Cuisine() {
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 80%",
      },
    });

    gsap.from(mapRef.current, {
      opacity: 0,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  });
  return (
    <section id="CuisineSection" className="bg-white">
      <div
        id="Cuisine"
        className="container flex flex-col justify-center pt-24"
      >
        <h1
          ref={titleRef}
          className={`text-primary self-center font-bold font-literata text-5xl text-center mb-8 ${styles.title}`}
        >
          Ẩm thực
        </h1>
      </div>
      <div className="container h-[90vh] mt-10 mb-20">
        <iframe
          ref={mapRef}
          src="/story/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Hue Food Story"
        />
      </div>
    </section>
  );
}
