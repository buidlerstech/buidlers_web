"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTimeline } from "@/hooks/useTimeline";
import VenueCard from "./VenueCard";

const Timeline = () => {
  const { venues, years, selectedYear, isRewinding } = useTimeline();
  const currentVenue = venues[0];

  return (
    <div className="w-full max-w-6xl overflow-hidden">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <svg className="w-full h-24" viewBox="0 0 1200 100">
          <defs>
            <linearGradient id="fade-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#34302b", stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: "#34302b", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#34302b", stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q300,100 600,50 T1200,50"
            fill="none"
            stroke="url(#fade-stroke)"
            strokeWidth="4"
          />
          {years.map((year, index) => (
            <g key={year} transform={`translate(${index * 200 + 100}, 50)`}>
              <circle
                r="8"
                fill={year === selectedYear ? "#ffd000" : "#272727"}
              />
              <text
                x="0"
                y="50"
                textAnchor="middle"
                fill={year === selectedYear ? "#ffd000" : "#272727"}
                fontSize="14"
              >
                {year}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden flex justify-center items-center h-24">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: isRewinding ? -20 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isRewinding ? 20 : -20 }}
          className="text-center"
        >
          <div className="text-4xl font-bold text-amber-400">{selectedYear}</div>
          <div className="flex gap-2 mt-2 justify-center">
            {years.map((year) => (
              <div
                key={year}
                className={`h-1.5 w-1.5 rounded-full ${
                  year === selectedYear ? "bg-amber-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, x: isRewinding ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRewinding ? 100 : -100 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          {currentVenue && <VenueCard {...currentVenue} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
