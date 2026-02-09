"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import UnicornScene from "unicornstudio-react";

import { Button } from "@/components/ui/button";
import { ScrollSection } from "@/components/ScrollSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HistorySection } from "@/components/sections/HistorySection";
import { MediaSection } from "@/components/sections/MediaSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const venues = [
  {
    title: "La birreria 2019",
    description: "encuentro anual de builders y tecnologias emergentes;",
    location: "Buenos Aires, Argentina",
    assistants: 150,
    m2: 200,
    icon: "</>",
    public: "crypto enthusiasts",
    year: 2019,
    prizesUsd: 22500,
  },
  {
    title: "MusicFest 2020",
    description: "festival internacional de creatividad + web3;",
    location: "Londres, UK",
    assistants: 7100,
    m2: 600,
    icon: "{}",
    public: "devs",
    year: 2020,
    prizesUsd: 22000,
  },
  {
    title: "ArtExpo 2021",
    description: "exhibicion de arte contemporaneo y nfts;",
    location: "Paris, Francia",
    assistants: 7100,
    m2: 600,
    icon: "[]",
    public: "degens",
    year: 2021,
    prizesUsd: 18000,
  },
  {
    title: "SportsSummit 2022",
    description: "cumbre global de deporte, gaming y comunidades;",
    location: "Tokyo, Japon",
    assistants: 7100,
    m2: 600,
    icon: "//",
    public: "ogs",
    year: 2022,
    prizesUsd: 21000,
  },
  {
    title: "EcoForum 2023",
    description: "foro de sostenibilidad y tecnologia abierta;",
    location: "Rio de Janeiro, Brasil",
    assistants: 7100,
    m2: 600,
    icon: "++",
    public: "communities",
    year: 2023,
    prizesUsd: 25000,
  },
  {
    title: "Devcon SEA 2024",
    description: "showcase de tecnologias emergentes web3;",
    location: "Bangkok, Tailandia",
    assistants: 7100,
    m2: 600,
    icon: ">>",
    public: "frens, ogs & newcomers",
    year: 2024,
    prizesUsd: 35000,
  },
];

const partners = [
  { name: "Consensys", href: "https://consensys.io/" },
  { name: "Aptos", href: "https://aptosfoundation.org/" },
  { name: "Scroll", href: "https://scroll.io/" },
  { name: "Ethereum Argentina", href: "https://ethereumargentina.org/" },
];

const projects = [
  {
    name: "luca.money",
    href: "https://luca.money/",
    description: "wallet con enfoque en ux para latam;",
  },
  {
    name: "beexo",
    href: "https://beexo.xyz/",
    description: "infraestructura para equipos que construyen en cadena;",
  },
  {
    name: "lendoor",
    href: "https://lendoor.xyz/",
    description: "finanzas abiertas para comunidades emergentes;",
  },
];

const benefits = [
  {
    title: "conexiones que aceleran",
    description:
      "matchmaking real entre builders, inversores, mentores y equipos;",
  },
  {
    title: "aprendizaje colectivo",
    description: "workshops, recursos y mentorias para crecer sin barreras;",
  },
  {
    title: "visibilidad global",
    description: "te acercamos a partners y escenarios internacionales;",
  },
  {
    title: "etica primero",
    description: "creamos un ecosistema sano, transparente y sostenible;",
  },
];

const testimonials = [
  {
    name: "Micaela Perez",
    role: "Founder, Lendoor",
    quote:
      "buidlers nos conecto con aliados clave y nos ayudo a validar el producto con la comunidad;",
  },
  {
    name: "Dario Rojas",
    role: "Lead Engineer, Scroll Latam",
    quote:
      "el nivel de colaboracion y apertura es unico; se siente como construir en familia;",
  },
  {
    name: "Lucia Amaya",
    role: "Ecosystem, Consensys",
    quote:
      "una comunidad con impacto real y una vision clara sobre el futuro web3;",
  },
  {
    name: "Bruno Silva",
    role: "Product, beexo",
    quote:
      "nos dieron acceso a talento y partners que hoy son parte de nuestro roadmap;",
  },
];

const faqs = [
  {
    question: "¿quien puede sumarse a buidlers?",
    answer:
      "cualquier persona que quiera construir en web3: devs, designers, founders o curiosos con ganas de aprender;",
  },
  {
    question: "¿cuanto cuesta ser parte?",
    answer:
      "somos una comunidad sin fines de lucro; participar es gratis y abierto;",
  },
  {
    question: "¿como postulo un proyecto al showcase?",
    answer:
      "completas el formulario de contacto y coordinamos una sesion de revision;",
  },
  {
    question: "¿ofrecen mentorias o workshops?",
    answer:
      "si; tenemos ciclos mensuales de mentorias, y workshops en vivo con invitados;",
  },
  {
    question: "¿puedo ser partner si no soy una empresa web3?",
    answer:
      "si; buscamos aliados con valores compatibles y ganas de apoyar builders;",
  },
];

const roadmap = [
  {
    title: "buidlers camp",
    date: "Marzo 2026",
    detail: "bootcamp intensivo con mentores globales;",
  },
  {
    title: "demo nights",
    date: "Mayo 2026",
    detail: "pitch en vivo con invitados y fondos aliados;",
  },
  {
    title: "buidlers summit",
    date: "Julio 2026",
    detail: "evento principal con 1.5k asistentes;",
  },
  {
    title: "community residency",
    date: "Septiembre 2026",
    detail: "residencia de equipos en buenos aires;",
  },
];

const blogPosts = [
  {
    title: "buidlers x ethereum argentina: cronica del ultimo meetup",
    date: "12 Ene 2026",
  },
  {
    title: "open source y web3: guia practica para equipos nuevos",
    date: "29 Dic 2025",
  },
  {
    title: "3 aprendizajes sobre comunidad en latam",
    date: "18 Dic 2025",
  },
];

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
      const unicorn = (window as Window & {
        UnicornStudio?: { init?: () => void };
      }).UnicornStudio;
      if (unicorn?.init) {
        unicorn.init();
      }
    };
    document.head.appendChild(script);
  }, []);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("es-AR").format(value);
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
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
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

      <header className="sticky top-0 z-40 w-full  backdrop-blur-lg">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Buidlers" width={100} height={36} />
          </div>
          <nav className="font-pixel hidden items-center gap-6 text-xs text-foreground/70 md:flex">
            <a className="hover:text-foreground" href="#historia">
              historia
            </a>
            <a className="hover:text-foreground" href="#nosotros">
              nosotros
            </a>
            <a className="hover:text-foreground" href="#partners">
              partners
            </a>
            <a className="hover:text-foreground" href="#showcase">
              showcase
            </a>
            <a className="hover:text-foreground" href="#blog">
              blog
            </a>
          </nav>
          <Button className="rounded-md px-6 text-white">
            sumarme ahora
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full flex-col pb-24">
        <section
          id="inicio"
          className="relative overflow-hidden pb-20 pt-16"
        >
  
          <div id="text-container" className="flex ml-40 flex-col gap-12 lg:flex-row">
            <div
              id="hero-content"
              className="flex w-full flex-col gap-6 text-rights items-center content-center
               justify-center lg:w-[60%] lg:mr-[-200px] lg:z-10"
            >
              <h1 className="text-3xl font-monos tracking-tight leading-[1.2] 
               text-foreground sm:text-4xl lg:text-5xl">
                Construimos un<br/>
                ecosistema Web3{" "} <br/>
                <span className="text-nowrap text-[var(--color-primary)]">
                  abierto, inclusivo
                </span><br/>
                y con impacto real
              </h1>
              <p className="text-lg font-mono tracking-tight text-foreground/80">
                Buidlers es una comunidad que conecta devs,<br/>
                proyectos y partners para acelerar colaboraciones<br/>
                aprendizaje y oportunidades reales;
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="h-12 rounded-md px-8 text-base text-white">
                  unirme a la comunidad
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-md border-border px-8 text-foreground hover:bg-[#10100f]"
                >
                  ver proximos eventos
                </Button>
              </div>
              <div className="grid gap-6 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold text-foreground">
                    {formatNumber(totalAssistants)}+
                  </p>
                  <p className="text-sm text-foreground/60">
                    asistentes en nuestros venues;
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">
                    {yearsActive} años
                  </p>
                  <p className="text-sm text-foreground/60">
                    construyendo comunidad;
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">
                    {formatUsd(totalPrizes)}
                  </p>
                  <p className="text-sm text-foreground/60">
                    en premios y grants;
                  </p>
                </div>
              </div>
            </div>

  

            <div id="unicorn"
              className="relative hidden w-full items-start justify-end overflow-hidden lg:flex lg:w-[100%] -ml-40"
              >
              <div className="relative w-[1240px] h-[900px] overflow-hidden">
                <UnicornScene
                  projectId="iZgYHWs5h1uuw9Ux0ENB"
                  width={1240}
                  height={1000}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 22%), linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 22%), linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 22%)",
                  }}
                />
              </div>
            </div>


          </div>
        </section>

<div className="px-6">
          <ScrollSection effect="slide-up-3d" className="py-40">
            <HistorySection
              venues={venues}
              formatNumber={formatNumber}
              formatUsd={formatUsd}
            />
          </ScrollSection>

          <ScrollSection effect="zoom-in-3d" className="py-40">
            <AboutSection benefits={benefits} />
          </ScrollSection>

          <ScrollSection effect="slide-left-3d" className="py-40">
            <PartnersSection partners={partners} />
          </ScrollSection>

          <ScrollSection effect="slide-right-3d" className="py-40">
            <ShowcaseSection projects={projects} />
          </ScrollSection>

          <ScrollSection effect="emerge" className="py-40">
            <MediaSection />
          </ScrollSection>

          <ScrollSection effect="flip-up" className="py-40">
            <RoadmapSection roadmap={roadmap} />
          </ScrollSection>

          <ScrollSection effect="slide-left-3d" className="py-40">
            <BlogSection blogPosts={blogPosts} />
          </ScrollSection>

          <ScrollSection effect="zoom-in-3d" className="py-40">
            <TestimonialsSection testimonials={testimonials} />
          </ScrollSection>

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
              <Image src="/logo.svg" alt="Buidlers" width={100} height={32} />
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
              <a href="#">terminos y condiciones</a>
              <a href="#">politica de privacidad</a>
              <a href="#">codigo de conducta</a>
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
