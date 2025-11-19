"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      {showSplash && (
        <div
          id="splash"
          className="absolute inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="flex flex-col items-center animate-pulse">
            <Image
              src="/cursor-intro.png"
              alt="intro"
              width={640}
              height={128}
              priority
            />
          </div>
        </div>
      )}

      <main
        id="divMain"
        className={`flex h-screen w-full flex-col items-center  bg-black 
          transition-opacity duration-700 ease-out ${
            showSplash
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
      >
        <div className="w-full flex flex-row items-stretch justify-between  h-[100vh]">
          <div className="w-2/4 flex items-stretch">
            <div
              id="div66left"
              className="w-full relative h-full flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src="/18.jpg"
                alt="hero"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div id="div50" className="w-2/4 flex flex-col  items-stretch">
            <div className="w-full h-1/2  bg-[#f3e855] p-8">
              <Image
                src="/14.svg"
                alt="what we do"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
            <div className="w-full h-1/2 content-end rounded-b-2xla bg-[#C8C26F] p-8">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl      
               font-mono font-semibold text-right text-stone-700 text-wrap xl:text-nowrap"
              >
                <span className="text-nowrap">./build_freedom</span>{" "}
                <span className="text-nowrap">--with community</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="flexsflex-row h-[25vh] w-full hidden">
          <div className="w-6/12 relative pr-8 py-6">
            <div className="absolute text-4xl text-[#9D9A72] gap-y-3 flex flex-col top-24 ml-14">
              <p> mision y vision;</p>
              <p> acerca de nosotros;</p>
              <p> blog;</p>
              <p> partnerships;</p>
              <p> eventos;</p>
            </div>

            <Image
              src="/74.svg"
              alt="intro"
              height={300}
              width={1000}
              priority
            />
          </div>

          <div className="w-6/12 pl-6  py-6">
            <Image
              src="/75.svg"
              alt="intro"
              height={300}
              width={1000}
              priority
            />
          </div>
          {/* <div className="w-3/12 bg-[#9D9A72]">dfsf</div>
          <div className="w-3/12 bg-[#484736]">fsdfsdf</div> */}
        </div>
      </main>

      {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <small>&copy; 202a5 Buidlers.tech</small>
      </div> */}
    </div>
  );
}
