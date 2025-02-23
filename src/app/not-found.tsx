"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/30 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <h2 className="text-[80pt] md:text-[100pt] font-bold">404</h2>
          <div className="h-24 w-px bg-white/20 hidden md:block" />
          <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-tight text-center md:text-left">
            <span className="text-[36pt] sm:text-[42pt] lg:text-[48pt] italic ephesis block mb-2 md:mb-4">
              Oops!&nbsp;
            </span>
            <div className="mt-2">El recurso buscado</div>
            <div className="mt-2">no está disponible</div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 text-xl border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
