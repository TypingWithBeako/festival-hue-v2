"use client";
import styles from "./Village.module.scss";
import ImageSlider from "./ImageSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Village() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <section className="w-full" id="VillageSection">
      <div className={`${styles.image}`}></div>
      <div id="Village" className="flex justify-center pt-20  ">
        <h1
          data-aos="zoom-in"
          data-aos-duration="500"
          className={`text-white font-bold font-literata text-5xl md:text-6xl text-center ${styles.title}`}
        >
          Làng nghề
        </h1>
      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-white container font-literata text-lg md:text-2xl text-pretty text-left pl-4 md:ml-auto md:text-center pt-12 "
      >
        Khi nhắc đến Huế – mảnh đất Cố đô thơ mộng – ta không chỉ nhớ đến sông
        Hương, núi Ngự, hay những tà áo dài tím thướt tha, mà còn không thể
        không nhắc đến những làng nghề truyền thống – nơi lưu giữ tinh hoa văn
        hoá dân tộc qua bao đời.
      </p>
      <div data-aos="fade-up" data-aos-duration="1000">
        <ImageSlider></ImageSlider>
      </div>
    </section>
  );
}
