"use client";

import { useEffect, useState } from "react";

interface Dimension {
  width: number;
  height: number;
}

export default function useWindow() {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    resize(); // Set initial dimensions
    window.addEventListener("resize", resize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", resize); // Cleanup on unmount
    };
  }, []);

  return { dimension };
}
