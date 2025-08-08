"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Anh5 from "@/public/Cuisine/Anh5.jpg";

interface FoodItem {
  id: number;
  src: any;
  alt: string;
  name: string;
  description: string;
  price?: string;
  ingredients?: string[];
}

interface FoodInformationProps {
  currentFood: FoodItem | null;
}

export default function FoodInformation({ currentFood }: FoodInformationProps) {
  const BunBo: FoodItem = {
    id: 5,
    src: Anh5,
    alt: "Dish 5",
    name: "Nem công - chả phượng",
    description:
      "Là món ăn cung đình biểu tượng cho sự cao quý, được chế biến công phu, trình bày như hình chim công, chim phượng, thường xuất hiện trong yến tiệc vua chúa.",
    price: "200.000 - 500.000+ VNĐ",
    ingredients: ["Thịt heo", "Da heo", "Rau củ"],
  };

  const [displayFood, setDisplayFood] = useState<FoodItem | null>(BunBo);

  useEffect(() => {
    if (currentFood) {
      setDisplayFood(currentFood);
    }
  }, [currentFood]);

  return (
    <div className="flex justify-center">
      <AnimatePresence mode="wait">
        {displayFood && (
          <motion.div
            key={displayFood.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-primary/20 w-150"
          >
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-primary mb-2 font-literata text-pretty">
                {displayFood.name}
              </h3>
              {displayFood.price && (
                <span className="text-xl font-semibold text-secondary font-literata">
                  {displayFood.price}
                </span>
              )}
            </div>
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed text-pretty font-literata">
                {displayFood.description}
              </p>
            </div>
            {displayFood.ingredients && (
              <div>
                <h4 className="font-semibold text-primary mb-2 font-literata">
                  Nguyên liệu:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {displayFood.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-literata"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
