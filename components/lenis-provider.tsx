// src/app/providers/lenis-provider.tsx
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { FC } from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
