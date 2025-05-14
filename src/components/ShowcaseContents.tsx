import React from "react";
import Image from "next/image";

export default function ShowcaseContents() {
  return (
    <div
      id="showcaseContents"
      className="w-full max-w-5xl flex flex-col px-auto items-center"
    >
      <div className="gap-4 bg-black/15s rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch">
        <div className="flex flex-col justify-between p-6 w-full md:w-6/12">
          <div id="titles" className="flex flex-col gap-4">
            <p id="name" className="oranienbaum text-6xl tracking-tight">
              Projects Showcase
            </p>
          </div>

          <div id="content">
            <p
              id="name"
              className="oranienbaum italic text-3xl tracking-tight mb-4"
            >
              Todo evento tiene una vidriera <br /> para los destacados
            </p>

            <p className="text-md font-mono text-stone-400 font-extralight tracking-tight mb-3">
              Conoce los proyectos creados por la
              <br />
              comunidad en eventos anteriores
            </p>
            <a
              target="_blank"
              className="bg-sky-800 hover:bg-sky-700 hover:shadow-lg
                  w-full text-white px-4 py-2 rounded-full 
                  transition-all duration-300 text-center text-xs"
              href={"/showcase"}
            >
              VER PROYECTOS
            </a>
          </div>
        </div>

        <Image
          height={600}
          width={400}
          src={"/image.png"}
          alt={"soft"}
          className="rounded-3xl shadow-xl w-6/12 h-[70dvh] "
        />
      </div>
    </div>
  );
}
