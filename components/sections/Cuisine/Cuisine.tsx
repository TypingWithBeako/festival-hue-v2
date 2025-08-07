import styles from "./Cuisine.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Cuisine() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <section id="CuisineSection" className="bg-white">
      <div
        id="Cuisine"
        className="container flex flex-col justify-center pt-24"
      >
        <h1
          data-aos="zoom-in"
          data-aos-duration="500"
          className={`text-primary self-center font-bold font-literata text-5xl text-center mb-8 ${styles.title}`}
        >
          Ẩm thực
        </h1>
      </div>
      <div className="container h-[90vh] mt-10 mb-20">
        <iframe
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
