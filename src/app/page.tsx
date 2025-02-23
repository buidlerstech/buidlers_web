"use client";

import React, { useEffect, useState } from "react";

import BuildText from "@/components/BuildText";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Timeline from "@/components/Timeline";
import Values from "@/components/Values";

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

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center justify-center w-full max-w-6xl mx-auto px-4 md:px-8 md:translate-x-[10%]">
            <div className="text-white text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extralight tracking-tight text-center md:text-left lg:flex-1 w-full md:w-1/2">
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
                <span className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt] lg:text-[55pt] italic ephesis whitespace-nowrap">
                  Sinergia
                </span>
                <span className="whitespace-nowrap">para llevar</span>
              </div>
              <div className="mt-2">
                descentralización
              </div>
              <div className="mt-2">
                al mundo
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center lg:flex-1 md:justify-end">
              <BuildText />
            </div>
          </div>

          {/* Social Links para móvil - Visible solo en móvil */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden">
            <div className="flex flex-row gap-6">
              <SocialLinks />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id="divTimeline"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8"
        >
          <div className="text-white text-2xl mb-20 sm:text-4xl lg:text-5xl font-extralight tracking-tight text-center md:text-left">
            <div className="mt-2 md:mt-4">Un poco de historia</div>
          </div>

          <Timeline />
        </section>

        {/* Values Section */}
        <section
          id="divValues"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8"
        >
          <div className="text-white text-2xl mb-20 sm:text-4xl lg:text-5xl font-extralight tracking-tight text-center md:text-left">
            <div className="mt-2 md:mt-4">Sobre nosotros</div>
          </div>
          <Values />
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
