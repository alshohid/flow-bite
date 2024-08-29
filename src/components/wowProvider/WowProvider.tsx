
"use client";

import { useEffect, ReactNode } from "react";
import { WOW } from "wowjs";
import "animate.css/animate.min.css";

interface WowProviderProps {
  children: ReactNode;
}

export default function WowProvider({ children }: WowProviderProps) {
  useEffect(() => {
    new WOW().init();
  }, []);

  return <>{children}</>;
}
