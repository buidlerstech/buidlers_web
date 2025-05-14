"use client";

import React, { useEffect, useState } from "react";

import BuildText from "@/components/BuildText";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Values from "@/components/Values";
import JoinButton from "@/components/JoinButton";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="theWholeScreen" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="divHero"
          className="min-h-screen flex items-center justify-center p-4 sm:p-8 md:px-12 lg:px-24"
        >
          {/* Social Links - Hidden en móvil, visible en tablet y desktop */}
          <div className="hidden md:block fixed left-4 lg:left-12 top-1/2 -translate-y-1/2">
            <SocialLinks />
          </div>

          <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center mt-28 px-4 sm:px-8"
          >
            <span className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt] lg:text-[55pt] italic ephesis whitespace-nowrap">
              Manifiesto
            </span>

            <Values />

            <div className="flex flex-col gap-4">
              <div className="mx-auto py-4">
                <JoinButton />
              </div>
              <BuildText />
            </div>
          </section>

          {/* Social Links para móvil - Visible solo en móvil */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden">
            <div className="flex flex-row gap-6">
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>

      <div
        className="background-svg"
        style={{
          transform: `rotate3d(131, 131, 0, 21deg) translateY(${
            scrollY / -2
          }px) translateX(${scrollY / -4}px) scale(${
            1 + scrollY / 1000
          }) rotateX(${Math.min(scrollY / 10, 30)}deg) perspective(${
            800 - scrollY / 10
          }px)`,
          transformOrigin: "center center",
        }}
      ></div>
    </div>
  );
}
