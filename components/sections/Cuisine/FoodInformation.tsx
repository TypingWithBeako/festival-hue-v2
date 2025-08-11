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
  literature?: string;
  literatureFoodName?: string;
  literatureSource?: string; // Add this line
}

interface FoodInformationProps {
  currentFood: FoodItem | null;
}

export default function FoodInformation({ currentFood }: FoodInformationProps) {
  const NemCongChaPhuong: FoodItem = {
    id: 5,
    src: Anh5,
    alt: "Dish 5",
    name: "Nem công - chả\u00A0phượng",
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
  };

  const [displayFood, setDisplayFood] = useState<FoodItem | null>(
    NemCongChaPhuong
  );

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

            {displayFood.literature && (
              <div className="mt-6 pt-4 border-t border-gray-200 hidden md:block">
                <h4 className="font-semibold text-primary mb-2 font-literata">
                  Thơ ca viết về {displayFood.literatureFoodName}:
                </h4>
                <pre className="whitespace-pre-line text-gray-700 font-literata text-base">
                  {displayFood.literature}
                </pre>
                {displayFood.literatureSource && (
                  <div className="mt-2 pl-3 border-l-2 border-secondary text-sm text-secondary italic font-literata text-pretty">
                    {displayFood.literatureSource}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
