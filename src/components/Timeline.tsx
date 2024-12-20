"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import VenueCard from "./VenueCard";

const years = [2019, 2020, 2021, 2022, 2023, 2024];

const venues = [
  {
    title: "La birreria 2019",
    description: "Annual technology conference",
    location: "Buenos Aires, Argentina",
    assistants: 150,
    m2: 200,
    icon: "🍻🌱",
    public: "crypto enthusiasts",
  },
  {
    title: "MusicFest 2020",
    description: "International music festival",
    location: "London, UK",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "devs",
  },
  {
    title: "ArtExpo 2021",
    description: "Contemporary art exhibition",
    location: "Paris, France",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "degens",
  },
  {
    title: "SportsSummit 2022",
    description: "Global sports industry meeting",
    location: "Tokyo, Japan",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "OGs",
  },
  {
    title: "EcoForum 2023",
    description: "Environmental sustainability conference",
    location: "Rio de Janeiro, Brazil",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "communities",
  },
  {
    title: "Devcon SEA 2024",
    description: "Emerging technologies showcase",
    location: "Bangkok, Thailand",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "frens, OGs & newcomers",
  },
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRewinding, setIsRewinding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex === years.length - 1) {
          setIsRewinding(true);
          return prevIndex - 1;
        } else if (isRewinding) {
          if (prevIndex === 0) {
            setIsRewinding(false);
            return 1;
          }
          return prevIndex - 1;
        } else {
          return prevIndex + 1;
        }
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isRewinding]);

  return (
    <div className="w-full max-w-6xl overflow-hidden">
      <svg className="w-full h-24" viewBox="0 0 1200 100">
        <defs>
          <linearGradient id="fade-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#34302b", stopOpacity: 0 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#34302b", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#34302b", stopOpacity: 0 }}
            />
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
              fill={index === currentIndex ? "#ffd000" : "#272727"}
            />
            <text
              x="0"
              y="50"
              textAnchor="middle"
              fill={index === currentIndex ? "#ffd000" : "#272727"}
              fontSize="14"
            >
              {year}
            </text>
          </g>
        ))}
      </svg>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: isRewinding ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRewinding ? 100 : -100 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <VenueCard venue={venues[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
