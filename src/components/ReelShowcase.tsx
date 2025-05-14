import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import venuesData from "@/constants/venues.json";
import Image from "next/image";

function formatLongDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const events = venuesData.upcoming;

const ReelShowcase: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = events.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 7000);

    // Limpieza del timer cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [total]); // Solo se vuelve a crear el timer si total cambia

  return (
    <div
      id="divScreen"
      className="w-full max-w-5xl flex flex-col px-auto items-center"
    >
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="gap-4 bg-black/15 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch"
          >
            <div className="flex flex-col justify-between p-6 w-full md:w-8/12">
              <div id="titles" className="flex flex-col gap-4">
                <p id="tag" className="text-xs tracking-tight mb-4">
                  {events[current].tag.toUpperCase()}
                </p>
                <p id="name" className="oranienbaum text-6xl tracking-tight">
                  {events[current].name}
                </p>
                <div id="where" className="flex flex-row gap-4 text-sm">
                  <span className="font-medium">
                    {formatLongDate(events[current].date)}
                  </span>
                  |
                  <span className="font-semibold">
                    {events[current].location}
                  </span>
                </div>
              </div>

              <div id="content">
                <p
                  id="heading"
                  className="oranienbaum italic text-3xl tracking-tight mb-3"
                >
                  {events[current].heading}
                </p>
                <p
                  id="description"
                  className="mx-2 text-md font-mono text-stone-400 
              font-extralight tracking-tight mb-3"
                >
                  {events[current].description}
                </p>
                <a
                  target="_blank"
                  className="bg-sky-800 hover:bg-sky-700 hover:shadow-lg
                  w-full text-white px-4 py-2 rounded-full 
                  transition-all duration-300 text-center text-xs"
                  href={events[current].link}
                >
                  ver evento en lu.ma
                </a>
              </div>
            </div>

            <Image
              height={600}
              width={400}
              src={events[current].image}
              alt={events[current].name}
              className="rounded-3xl shadow-xl w-4/12 h-[70dvh] "
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {events.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-6 rounded-full transition-all duration-300 ${
              idx === current ? "bg-sky-400" : "bg-white/30"
            }`}
            aria-label={`Ir al evento ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReelShowcase;
