import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="h-[80px] inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
      <div className="bg-black/50 w-full py-10">
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 items-left text-xs font-mono text-stone-400">
            <Image
              src="/logo-dark.svg"
              alt="Buidlers Logo"
              width={120}
              height={40}
              className="object-contain filter brightness-50 contrast-100"
            />
            (C)2025 Buidlers.tech - Todos los derechos reservados
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a
              href="/showcase"
              className="text-stone-400 hover:text-white transition-colors text-sm"
            >
              Showcase
            </a>
            <a
              href="/manifest"
              className="text-stone-400 hover:text-white transition-colors text-sm"
            >
              Manifiesto
            </a>
            <a
              href="/contact"
              className="text-stone-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
