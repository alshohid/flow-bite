"use client";

import { useEffect, ReactNode } from "react";
import "animate.css/animate.min.css";

interface WowProviderProps {
  children: ReactNode;
}

export default function WowProvider({ children }: WowProviderProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then(({ WOW }) => {
        const wow = new WOW();
        wow.init();
      });
    }
  }, []);

  return <>{children}</>;
}
