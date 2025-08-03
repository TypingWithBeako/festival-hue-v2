"use client";

import { useEffect } from "react";

export function ScrollRestorationManager() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null; // This component doesn't need to render any UI
}
