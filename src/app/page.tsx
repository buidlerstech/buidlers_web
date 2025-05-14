"use client";

import React, { useEffect, useState } from "react";
import BuildText from "@/components/BuildText";
import JoinButton from "@/components/JoinButton";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Timeline from "@/components/Timeline";
import ReelVenue from "@/components/ReelVenue";
import ShowcaseContents from "@/components/ShowcaseContents";
import Footer from "@/components/Footer";
import partnersData from "@/constants/partners.json";

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
          <div
            id="aa"
            className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center justify-center w-full max-w-6xl mx-auto px-4 md:px-8 md:translate-x-[10%]"
          >
            <div className="text-white text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extralight tracking-tight text-center md:text-left lg:flex-1 w-full md:w-1/2">
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
                <span className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt] lg:text-[55pt] italic ephesis whitespace-nowrap">
                  Sinergia
                </span>
                <span className="whitespace-nowrap oranienbaum text-5xl tracking-tight mb-3">
                  para llevar
                </span>
              </div>
              <div className="mt-2 oranienbaum text-5xl tracking-tight mb-3">
                descentralización
              </div>
              <div className="mt-2 oranienbaum text-5xl tracking-tight mb-3">
                al mundo
              </div>
            </div>
            <div className="w-full hidden md:w-1/2 sm:flex justify-center lg:flex-1 md:justify-end">
              <BuildText />
            </div>
          </div>

          {/* Social Links para móvil - Visible solo en móvil */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden">
            <div className="flex flex-row gap-6">
              <SocialLinks />
            </div>
          </div>

          <div className="absolute bottom-16 sm:bottom-10 w-2/3 lg:w-1/3">
            <div className="flex flex-row gap-4 items-center">
              <span
                className="text-xs sm:text-base font-mono text-stone-400 
              font-extralight tracking-tight"
              >
                Somos el hub de desarrolladores Web3 en español donde la
                descentralización, calidad y colaboración son parte de nuestra
                identidad.
              </span>
              <div>
                <JoinButton />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id="history"
          className="min-h-screen flex flex-col pt-10 items-center justify-center px-4 sm:px-8"
        >
          <div className="text-white text-2xl mb-20 font-extralight tracking-tight text-center md:text-left">
            <div
              className="mt-2 md:mt-4
            oranienbaum text-3xl tracking-tight mb-3
            "
            >
              Historia
            </div>
          </div>

          <Timeline />
        </section>

        {/* Manifest Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center w-full py-28
             max-w-6xl mx-auto px-4 md:px-8 md:translate-x-[10%]"
        >
          <div className="flex flex-row gap-4 ">
            <div className="w-1/3">
              <span className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt] lg:text-[55pt] italic ephesis whitespace-nowrap">
                Manifiesto
              </span>
            </div>
            {/* <Values /> */}
            <div className="flex flex-col gap-4 w-1/3 text-right">
              <p className="text-md font-mono text-stone-400  font-extralight tracking-tight">
                Colaboramos para emprender, crear y aportar valor al ecosistema
                Web3. <br />
                Nos guiamos por la transparencia, la inclusión y el trabajo
                colectivo, sin tantas estructuras corporativas.
              </p>
              <div className="justify-end self-end">
                <a
                  target="_blank"
                  className="bg-sky-800 text-white px-6 py-3 rounded-full whitespace-nowrap
                  transition-all duration-300 text-center text-xs"
                  href="/about"
                >
                  NUESTRO ETHOS
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section
          id="venues"
          className="flex flex-col items-center justify-center w-full py-20"
        >
          <div className="text-white text-2xl mb-10 font-extralight tracking-tight text-center md:text-left">
            <div className="mt-2 md:mt-4 oranienbaum text-3xl tracking-tight mb-3">
              Proximos Eventos
            </div>
          </div>

          {/* carousel  */}
          <ReelVenue />
        </section>

        {/* Showcase Section */}
        <section
          id="showcase"
          className="flex flex-col items-center justify-center w-full py-20"
        >
          <ShowcaseContents />
        </section>

        {/* Partners */}
        <section
          id="partnerships"
          className="flex flex-col items-center justify-center w-full py-20"
        >
          <div className="text-white text-2xl mb-20 font-extralight tracking-tight text-center md:text-left">
            <span className="mt-2 md:mt-4 oranienbaum text-3xl tracking-tight mb-3">
              Partnerships
            </span>
          </div>

          {/* Partner logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
            {partnersData.partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-black/10 rounded-xl shadow-sm"
              >
                <img
                  src={partner.url}
                  // alt={partner.name}
                  className={partner.className}
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              target="_blank"
              className="bg-sky-800 hover:bg-sky-700 hover:shadow-lg
                  w-full text-white px-4 py-3 rounded-full 
                  transition-all duration-300 text-center text-xs"
              href={"/contact"}
            >
              Interesado en colaborar? Contactanos
            </a>
          </div>
        </section>
      </main>

      <Footer />
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
