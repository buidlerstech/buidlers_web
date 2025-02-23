"use client";

import {
  BrainIcon,
  HeartHandshakeIcon,
  IdCardIcon,
  ScanEye,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Values() {
  const values = [
    {
      title: "Misión",
      description:
        "Unir y potenciar una comunidad de desarrolladores Web3, impulsando la colaboración y el aprendizaje colectivo sin buscar beneficio económico de nuestros miembros.",
      icon: <SparklesIcon height={80} width={80} strokeWidth="1px" className="text-white/80" />,
    },
    {
      title: "Visión",
      description:
        "Ser un faro de colaboración, innovación y ética en el espacio Web3, liderando el camino hacia un ecosistema digital más inclusivo y equitativo.",
      icon: <ScanEye height={80} width={80} strokeWidth="1px" className="text-white/80" />,
    },
    {
      title: "Valores",
      items: [
        "Autenticidad y transparencia",
        "Claridad de propósito",
        "Integridad y principios",
        "Inclusión y colaboración",
      ],
      icon: <HeartHandshakeIcon height={80} width={80} strokeWidth="1px" className="text-white/80" />,
    },
  ];

  const ethos = [
    {
      title: "Autenticidad",
      description:
        "Somos un colectivo auténtico que rechaza las estructuras corporativas tradicionales y promueve la transparencia en todas nuestras acciones.",
      icon: <IdCardIcon height={80} width={80} strokeWidth="1px" className="text-white/80" />,
    },
    {
      title: "Propósito",
      description:
        "Construimos un ecosistema sano para los que estamos y para los que vienen, enfocándonos en el valor real más allá del precio.",
      icon: <ShieldCheckIcon height={80} width={80} strokeWidth="1px" className="text-white/80" />,
    },
    {
      title: "Inteligencia Colectiva",
      description:
        "Trabajamos juntos para dar valor al ecosistema, promoviendo el conocimiento y el desarrollo de soluciones Web3 innovadoras.",
      icon: <BrainIcon height={80} width={80} strokeWidth="1px" className="text-white/80" />,
    },
  ];

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    },
    hover: { 
      transform: "perspective(1000px) rotateX(8deg) rotateY(8deg) scale(1.05)",
      boxShadow: "5px 5px 20px rgba(255, 255, 255, 0.1)",
      transition: { 
        duration: 0.4, 
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-32">
        {/* Pilares Fundamentales */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-16">
            Pilares Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                initial="initial"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-4 lg:p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
              >
                <div className="flex flex-col items-center text-center gap-4 md:gap-3">
                  <div className="mb-2">{value.icon}</div>
                  <h3 className="text-2xl md:text-xl lg:text-2xl font-light mb-3">{value.title}</h3>
                  {value.description ? (
                    <p className="text-sm text-white/70 leading-relaxed">{value.description}</p>
                  ) : (
                    <ul className="text-sm text-white/70 space-y-2">
                      {value.items?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ethos */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-16">Ethos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
            {ethos.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="initial"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-4 lg:p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
              >
                <div className="flex flex-col items-center text-center gap-4 md:gap-3">
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="text-2xl md:text-xl lg:text-2xl font-light mb-3">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
