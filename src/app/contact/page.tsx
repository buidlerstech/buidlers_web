"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  type SystemData,
} from "@/types/contact";

import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const [systemData, setSystemData] = useState<SystemData>({
    timestamp: new Date().toISOString(),
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const collectSystemData = () => {
      const data: SystemData = {
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent,
        language: window.navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screenResolution: {
          width: window.screen.width,
          height: window.screen.height,
        },
        referrer: document.referrer,
      };
      setSystemData(data);
    };

    collectSystemData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: ContactFormData) => {
    setIsLoading(true);
    try {
      const submissionData = {
        ...formData,
        systemData,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setIsSubmitted(true);
      console.log("Formulario enviado exitosamente");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24">
          <div className="hidden md:block fixed left-4 lg:left-12 top-1/2 -translate-y-1/2">
            <SocialLinks />
          </div>
          <section className="min-h-screen flex flex-col items-center justify-center">
            <span className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt] lg:text-[55pt] italic ephesis whitespace-nowrap">
              Contactanos
            </span>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md mx-auto mt-8 space-y-6"
              noValidate
            >
              <div className="space-y-4">
                <div>
                  <input
                    {...register("nombre")}
                    type="text"
                    placeholder="Nombre"
                    className={`w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2 ${
                      errors.nombre ? "border-red-500" : ""
                    }`}
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("empresa")}
                    type="text"
                    placeholder="Empresa"
                    className={`w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2 ${
                      errors.empresa ? "border-red-500" : ""
                    }`}
                  />
                  {errors.empresa && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.empresa.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className={`w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("mensaje")}
                    rows={4}
                    placeholder="Mensaje"
                    className={`w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-sky-500 focus:ring-sky-500 px-4 py-2 ${
                      errors.mensaje ? "border-red-500" : ""
                    }`}
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitted || isLoading}
                className={`w-full text-white px-4 py-3 rounded-full transition-all duration-300 text-xs ${
                  isValid && !isSubmitted && !isLoading
                    ? "bg-sky-800 hover:bg-sky-700 hover:shadow-lg"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  </div>
                ) : isSubmitted ? (
                  "✓ ENVIADO"
                ) : (
                  "ENVIAR"
                )}
              </button>
              {isSubmitted && (
                <p className="text-center text-green-500 text-sm mt-2">
                  Gracias! Nos pondremos en contacto pronto.
                </p>
              )}
            </form>
          </section>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden">
            <SocialLinks />
          </div>
        </section>
      </main>
    </div>
  );
}
