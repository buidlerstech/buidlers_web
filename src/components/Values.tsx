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
      icon: <SparklesIcon height={140} width={140} strokeWidth="0.5px" />,
    },
    {
      title: "Visión",
      description:
        "Ser un faro de colaboración, innovación y ética en el espacio Web3, liderando el camino hacia un ecosistema digital más inclusivo y equitativo.",
      icon: <ScanEye height={140} width={140} strokeWidth="0.5px" />,
    },
    {
      title: "Valores",
      items: [
        "Autenticidad y transparencia",
        "Claridad de propósito",
        "Integridad y principios",
        "Inclusión y colaboración",
      ],
      icon: <HeartHandshakeIcon height={140} width={140} strokeWidth="0.5px" />,
    },
  ];

  const ethos = [
    {
      title: "Autenticidad",
      description:
        "Somos un colectivo auténtico que rechaza las estructuras corporativas tradicionales y promueve la transparencia en todas nuestras acciones.",
      icon: <IdCardIcon height={140} width={140} strokeWidth="0.5px" />,
    },
    {
      title: "Propósito",
      description:
        "Construimos un ecosistema sano para los que estamos y para los que vienen, enfocándonos en el valor real más allá del precio.",
      icon: <ShieldCheckIcon height={140} width={140} strokeWidth="0.5px" />,
    },
    {
      title: "Inteligencia Colectiva",
      description:
        "Trabajamos juntos para dar valor al ecosistema, promoviendo el conocimiento y el desarrollo de soluciones Web3 innovadoras.",
      icon: <BrainIcon height={140} width={140} strokeWidth="0.5px" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 md:px-8">
      {/* Valores principales */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Pilares Fundamentales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br  from-amber-100/30 to-amber-900/20 py-8 
              rounded-2xl backdrop-blur-sm transform transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                {value.title}
              </h3>

              <div className="flex gap-5 items-center pl-4 pr-6">
                <div>{value.icon}</div>
                <div className="flex flex-col  text-left tracking-tight">
                  {value.description ? (
                    <p className="text-gray-300">{value.description}</p>
                  ) : (
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {value.items?.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethos */}
        <h2 className="text-4xl font-bold text-center mb-16"> Ethos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ethos.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br  from-amber-100/30 to-amber-900/20 py-8 
              rounded-2xl backdrop-blur-sm transform transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">
                {item.title}
              </h3>

              <div className="flex gap-5 items-center pl-4 pr-6">
                <div>{item.icon}</div>

                <div className="flex flex-col text-left tracking-tight">
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
