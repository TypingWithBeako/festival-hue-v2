import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Literata as FontLiterata,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLiterata = FontLiterata({
  subsets: ["latin"],
  variable: "--font-literata",
});
