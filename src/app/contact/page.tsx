"use client";

import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
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
            className="min-h-screen flex flex-col items-center justify-center"
          >
            <span className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt] lg:text-[55pt] italic ephesis whitespace-nowrap">
              Contactanos
            </span>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md mx-auto mt-8 space-y-6 font-mono
              text-stone-400 tracking-tight text-sm
              "
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Nombre"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder="Empresa"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2"
                  />
                </div>

                <div>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Mensaje"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2"
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="bg-sky-800 hover:bg-sky-700 hover:shadow-lg mt-10
                w-full text-white px-4 py-3 rounded-full 
                transition-all duration-300 text-center text-xs"
            >
              Enviar Mensaje
            </button>
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
