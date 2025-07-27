import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        literata: ["var(--font-literata)"],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      colors: {
        error: {
          DEFAULT: "#E34234", // Vermilion Red
        },
        success: {
          DEFAULT: "#6B8E23", // Bamboo Green
        },
        warning: {
          DEFAULT: "#FF4500", // Sunset Orange
        },
        accent: {
          DEFAULT: "#00A86B", // Jade Green
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "myapp",
      themes: {
        light: {
          colors: {
            background: "#F5F5DC", // Antique Beige
            foreground: "#333333", // Deep Charcoal
            primary: {
              DEFAULT: "#6A0DAD", // Dark Imperial Purple
            },
            secondary: {
              DEFAULT: "#CD7F32", // Dark Golden Yellow
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
