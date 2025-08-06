import styles from "./Cuisine.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Cuisine() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
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

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descriptionRef.current,
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
        trigger: descriptionRef.current,
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
        <p
          ref={descriptionRef}
          className="text-xl py-8 self-center text-left md:text-center font-literata text-balance px-4 md:px-0"
        >
          Hãy cùng tôi đi một vòng Huế, không phải để thăm các cung điện hay
          lăng tẩm, mà để khám phá hương vị đặc trưng, để mỗi món ăn không chỉ
          là một bữa tiệc vị giác, mà còn là một câu chuyện về văn hóa và con
          người nơi đây.
        </p>
      </div>
      <div className="container h-[90vh] mb-20">
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
