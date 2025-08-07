"use client";
import styles from "./Village.module.scss";
import ImageSlider from "./ImageSlider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Village() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sliderRef = useRef(null);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        end: "bottom 60%",
      },
    });

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 80%",
        end: "bottom 80%",
      },
    });

    gsap.from(sliderRef.current, {
      opacity: 0,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  });

  return (
    <section className="w-full" id="VillageSection">
      <div className={`${styles.image}`}></div>
      <div id="Village" className="flex justify-center pt-20  ">
        <h1
          ref={titleRef}
          className={`text-white font-bold font-literata text-5xl text-center ${styles.title}`}
        >
          Làng nghề
        </h1>
      </div>

      <p
        ref={descriptionRef}
        className="text-white container font-literata text-lg md:text-2xl text-pretty text-left pl-4 md:ml-auto md:text-center pt-12 "
      >
        Khi nhắc đến Huế – mảnh đất Cố đô thơ mộng – ta không chỉ nhớ đến sông
        Hương, núi Ngự, hay những tà áo dài tím thướt tha, mà còn không thể
        không nhắc đến những làng nghề truyền thống – nơi lưu giữ tinh hoa văn
        hoá dân tộc qua bao đời.
      </p>
      <div ref={sliderRef}>
        <ImageSlider></ImageSlider>
      </div>
    </section>
  );
}
