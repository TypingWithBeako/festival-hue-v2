"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [displayFood, setDisplayFood] = useState<FoodItem | null>(null);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-primary/20 w-150"
          >
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {displayFood.name}
              </h3>
              {displayFood.price && (
                <span className="text-xl font-semibold text-secondary">
                  {displayFood.price}
                </span>
              )}
            </div>
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed text-pretty">
                {displayFood.description}
              </p>
            </div>
            {displayFood.ingredients && (
              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Nguyên liệu:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {displayFood.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-500">
                ID: {displayFood.id} • {displayFood.alt}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
