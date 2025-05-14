"use client";

const BuildText = () => {
  return (
    <div
      className="text-[45pt] xs:text-[56pt] sm:text-[56pt] md:text-[60pt] lg:text-[110pt] 
      tracking-tighter italic font-extrabold text-transparent leading-none bg-clip-text
      hover:cursor-default transform transition-transform duration-300 text-center md:text-left w-full"
      style={{
        backgroundImage: 'url("/w.png")',
        backgroundSize: "120% 120%",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
      }}
      onMouseMove={(e) => {
        if (window.innerWidth < 768) return; // Desactivar efecto en móvil
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width - 0.5) * 10;
        const yPercent = (y / rect.height - 0.5) * 10;

        const rotateX = yPercent * 0.5;
        const rotateY = xPercent * -0.5;

        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;

        e.currentTarget.style.backgroundPosition = `
          ${50 + xPercent * 1.5}% ${50 + yPercent * 1.5}%
        `;

        e.currentTarget.style.transition = `
          transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
          background-position 0.6s cubic-bezier(0.4, 0, 0.2, 1)
        `;
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth < 768) return; // Desactivar efecto en móvil
        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
        e.currentTarget.style.backgroundPosition = "center";
        e.currentTarget.style.transition = `
          transform 1s cubic-bezier(0.4, 0, 0.2, 1),
          background-position 1s cubic-bezier(0.4, 0, 0.2, 1)
        `;
      }}
    >
      build.
    </div>
  );
};

export default BuildText;
