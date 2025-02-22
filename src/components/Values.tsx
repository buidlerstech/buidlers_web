"use client";

import { motion } from "framer-motion";

export default function Values() {
  const values = [
    {
      title: "Misión",
      description:
        "Unir y potenciar una comunidad de desarrolladores Web3, impulsando la colaboración y el aprendizaje colectivo sin buscar beneficio económico de nuestros miembros.",
      icon: "🎯",
    },
    {
      title: "Visión",
      description:
        "Ser un faro de colaboración, innovación y ética en el espacio Web3, liderando el camino hacia un ecosistema digital más inclusivo y equitativo.",
      icon: "👁️",
    },
    {
      title: "Valores",
      items: [
        "Autenticidad y transparencia",
        "Claridad de propósito",
        "Integridad y principios",
        "Inclusión y colaboración",
      ],
      icon: "💫",
    },
  ];

  const ethos = [
    {
      title: "Autenticidad",
      description:
        "Somos un colectivo auténtico que rechaza las estructuras corporativas tradicionales y promueve la transparencia en todas nuestras acciones.",
      icon: "🌟",
    },
    {
      title: "Propósito",
      description:
        "Construimos un ecosistema sano para los que estamos y para los que vienen, enfocándonos en el valor real más allá del precio.",
      icon: "⚖️",
    },
    {
      title: "Inteligencia Colectiva",
      description:
        "Trabajamos juntos para dar valor al ecosistema, promoviendo el conocimiento y el desarrollo de soluciones Web3 innovadoras.",
      icon: "🔓",
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
              className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              {value.description ? (
                <p className="text-gray-300">{value.description}</p>
              ) : (
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {value.items?.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
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
              className="bg-gradient-to-br from-amber-950/30 to-amber-900/20 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <pre>
          {`
  
  `}
        </pre>
      </div>
    </div>
  );
}
