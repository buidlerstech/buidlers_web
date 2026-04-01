"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import UnicornScene from "unicornstudio-react";

import { PartnersSection } from "@/components/sections/PartnersSection";
import { Button } from "@/components/ui/button";
import { ScrollSection } from "@/components/ScrollSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { venues, partners, benefits, faqs } from "@/constants";
// import { BlogSection } from "@/components/sections/BlogSection";
// import { HistorySection } from "@/components/sections/HistorySection";
// import { MediaSection } from "@/components/sections/MediaSection";
// import { RoadmapSection } from "@/components/sections/RoadmapSection";
// import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
// import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  // Aesthetic direction: Editorial & bold tech craft
  // Display font: Syne | Body font: Manrope
  // Palette: Charcoal background, gold primary, mint accent
  // Motion: Staggered load, scroll reveals, subtle ambient gradients
  // Layout: Asymmetric grids, layered surfaces, generous spacing
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [blinkOn, setBlinkOn] = useState(true);

  const { totalAssistants, totalPrizes, yearsActive } = useMemo(() => {
    const assistants = venues.reduce((sum, v) => sum + v.assistants, 0);
    const prizes = venues.reduce((sum, v) => sum + v.prizesUsd, 0);
    const years = [...new Set(venues.map((venue) => venue.year))].length;
    return {
      totalAssistants: assistants,
      totalPrizes: prizes,
      yearsActive: years,
    };
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 4000);
    const hideTimer = setTimeout(() => setShowSplash(false), 5200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkOn((prev) => !prev);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-unicornstudio="true"]'
    );
    if (existingScript) {
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
    script.async = true;
    script.dataset.unicornstudio = "true";
    script.onload = () => {
      const unicorn = (
        window as Window & {
          UnicornStudio?: { init?: () => void };
        }
      ).UnicornStudio;
      if (unicorn?.init) {
        unicorn.init();
      }
    };
    document.head.appendChild(script);
  }, []);

  const formatNumber = (value: number) => new Intl.NumberFormat("es-AR").format(value);
  const formatUsd = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="relative min-h-screen">
      {showSplash && (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center bg-black transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src="/cursor-intro.png"
            alt="Buidlers intro"
            width={720}
            height={160}
            priority
            className={`transition-opacity ${blinkOn ? "opacity-100" : "opacity-20"}`}
            style={{ transitionDuration: "1600ms" }}
          />
        </div>
      )}

      <header className="fixed top-0 z-50 w-full backdrop-blur-lg">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="buidlers" width={100} height={36} />
          </div>
          <nav className="font-pixel hidden items-center gap-6 text-xs text-foreground/70 md:flex">
            {/* <a className="hover:text-foreground" href="#historia">
              historia
            </a> */}
            <a className="hover:text-foreground" href="#nosotros">
              nosotros
            </a>
            <a className="hover:text-foreground" href="#partners">
              partners
            </a>
            {/* <a className="hover:text-foreground" href="#showcase">
              showcase
            </a>
            <a className="hover:text-foreground" href="#blog">
              blog
            </a> */}
            <a className="hover:text-foreground" href="#contacto">
              contacto
            </a>
          </nav>
          <div></div>
          {/* <Button className="rounded-md px-6 text-white">construir con nosotros</Button>*/}
        </div>
      </header>

      <main className="mx-auto flex w-full flex-col pb-24">
        <section
          id="inicio"
          className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
        >
          {/* Vertical video: mobile portrait only */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden portrait:block md:hidden w-full h-full object-contain"
            src="/animacion_vertical.mp4"
          />
          {/* Horizontal video: landscape mobile + desktop */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block portrait:hidden md:block w-full h-full object-cover"
            src="/animacion.mp4"
          />
        </section>

        <ScrollSection effect="slide-up-3d">
          <HeroSection />
        </ScrollSection>

        <div className="px-6">
          {/* <ScrollSection effect="slide-up-3d" className="py-40">
            <HistorySection
              venues={venues}
              formatNumber={formatNumber}
              formatUsd={formatUsd}
            />
          </ScrollSection> */}

          <ScrollSection effect="zoom-in-3d" className="py-40">
            <AboutSection benefits={benefits} />
          </ScrollSection>

          <ScrollSection effect="slide-left-3d" className="py-40">
            <PartnersSection partners={partners} />
          </ScrollSection>

          {/* <ScrollSection effect="slide-right-3d" className="py-40">
            <ShowcaseSection projects={projects} />
          </ScrollSection> */}

          {/* <ScrollSection effect="emerge" className="py-40">
            <MediaSection />
          </ScrollSection> */}

          {/* <ScrollSection effect="flip-up" className="py-40">
            <RoadmapSection roadmap={roadmap} />
          </ScrollSection> */}

          {/* <ScrollSection effect="slide-left-3d" className="py-40">
            <BlogSection blogPosts={blogPosts} />
          </ScrollSection> */}

          {/* <ScrollSection effect="zoom-in-3d" className="py-40">
            <TestimonialsSection testimonials={testimonials} />
          </ScrollSection> */}

          <ScrollSection effect="slide-up-3d" className="py-40">
            <FAQSection faqs={faqs} />
          </ScrollSection>
        </div>

        <ScrollSection effect="emerge" className="px-6 py-40">
          <FinalCTASection />
        </ScrollSection>
      </main>

      <footer className="border-t border-border/70 bg-[#10100f]/90">
        <div className="mx-auto grid w-full max-w-6xxl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="buidlers" width={100} height={32} />
            </div>
            <p className="mt-4 text-sm text-foreground/60">
              somos la infraestructura humana para el ecosistema web3;
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">contacto</p>
            <p className="mt-3 text-sm text-foreground/60">hola@buidlers.tech</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">legal</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/60">
              <a href="#">términos y condiciones</a>
              <a href="#">política de privacidad</a>
              <a href="#">código de conducta</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/70 py-6 text-center text-xs text-foreground/50">
          © 2026 buidlers.tech; todos los derechos reservados;
        </div>
      </footer>
    </div>
  );
}
