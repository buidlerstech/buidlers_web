"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Control de suavidad (0.1 = muy suave)
        duration: 1.2, // Duración de animaciones programáticas
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
        orientation: "vertical", // Dirección del scroll
        gestureOrientation: "vertical", // Orientación de gestos
        smoothWheel: true, // Smooth scroll para rueda del mouse
        wheelMultiplier: 1, // Multiplicador de velocidad de rueda
        touchMultiplier: 2, // Multiplicador de velocidad táctil
        infinite: false, // Scroll infinito desactivado
        autoResize: true, // Auto-redimensionamiento
        __experimental__naiveDimensions: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
