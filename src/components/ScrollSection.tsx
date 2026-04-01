"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationEffect =
  | "zoom-in-3d"
  | "slide-up-3d"
  | "slide-left-3d"
  | "slide-right-3d"
  | "flip-up"
  | "emerge";

const effectFromStates: Record<AnimationEffect, gsap.TweenVars> = {
  "zoom-in-3d": {
    opacity: 0,
    scale: 0.7,
    rotateX: 15,
    y: 100,
    filter: "blur(10px)",
  },
  "slide-up-3d": {
    opacity: 0,
    y: 150,
    rotateX: 12,
    scale: 0.85,
  },
  "slide-left-3d": {
    opacity: 0,
    x: -200,
    rotateY: -15,
    scale: 0.85,
  },
  "slide-right-3d": {
    opacity: 0,
    x: 200,
    rotateY: 15,
    scale: 0.85,
  },
  "flip-up": {
    opacity: 0,
    rotateX: 35,
    y: 80,
    scale: 0.85,
    transformOrigin: "center bottom",
  },
  emerge: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(16px)",
  },
};

type ScrollSectionProps = {
  children: ReactNode;
  effect?: AnimationEffect;
  className?: string;
  staggerCards?: boolean;
};

export function ScrollSection({
  children,
  effect = "zoom-in-3d",
  className = "",
  staggerCards = true,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1 });
      const cards = el.querySelectorAll("[data-scroll-card]");
      if (cards.length > 0) gsap.set(cards, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Main section 3D entrance animation
      gsap.fromTo(
        el,
        { ...effectFromStates[effect], transformPerspective: 1200 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "top 22%",
            scrub: 1.2,
          },
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          filter: "blur(0px)",
          transformPerspective: 1200,
          ease: "none",
        }
      );

      // Stagger cards within the section
      if (staggerCards) {
        const cards = el.querySelectorAll("[data-scroll-card]");
        if (cards.length > 0) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "center 35%",
              scrub: 1,
            },
          });

          tl.fromTo(
            cards,
            {
              opacity: 0,
              y: 60,
              scale: 0.88,
              rotateY: 8,
              transformPerspective: 800,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              stagger: 0.1,
              ease: "none",
            }
          );
        }
      }
    }, el);

    return () => ctx.revert();
  }, [effect, staggerCards]);

  return (
    <div ref={sectionRef} className={`scroll-section ${className}`} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
