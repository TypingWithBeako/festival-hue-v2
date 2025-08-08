"use client";
import styles from "./Cuisine.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Wheel from "./Wheel";
import FoodInformation from "./FoodInformation";

interface FoodItem {
  id: number;
  src: any;
  alt: string;
  name: string;
  description: string;
  price?: string;
  ingredients?: string[];
}

export default function Cuisine() {
  const [currentFood, setCurrentFood] = useState<FoodItem | null>(null);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleCurrentElementChange = (element: FoodItem | null) => {
    setCurrentFood(element);
  };

  return (
    <section id="CuisineSection" className="bg-white relative overflow-hidden">
      <div
        id="Cuisine"
        className="container flex flex-col justify-center pt-24"
      >
        <h1
          data-aos="zoom-in"
          data-aos-duration="500"
          className={`text-primary self-center font-bold font-literata text-6xl text-center mb-8 ${styles.title}`}
        >
          Ẩm thực
        </h1>
      </div>
      <div className="container h-[90vh] mt-10 mb-20 overflow-hidden">
        <Wheel onCurrentElementChange={handleCurrentElementChange} />

        <div data-aos="fade-up" data-aos-duration="1000">
          <FoodInformation currentFood={currentFood} />
        </div>
      </div>
    </section>
  );
}
