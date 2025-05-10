"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";
import boliviaData from "@/constants/bolivia.json";

export default function Bolivia() {
  const [currentVenue, setCurrentVenue] = useState(0);
  const data = boliviaData;

  const nextVenue = () => {
    setCurrentVenue((prev) => (prev + 1) % data.venues.length);
  };

  const prevVenue = () => {
    setCurrentVenue(
      (prev) => (prev - 1 + data.venues.length) % data.venues.length
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="flex flex-col md:flex-row h-dvh">
          {/* Left Side - Country Info */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <div className="absolute inset-0">
              <Image
                src={data.hero_image}
                alt={data.country}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 p-8 md:p-12 text-white h-full flex flex-col justify-center">
              <div className="mb-8">
                <Image
                  src={data.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <div className="flex flex-row items-baseline gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-8 md:h-10 w-auto"
                  />
                  <span className="text-5xl text-stone-400 tracking-tighter font-bold">
                    {data.country}
                  </span>
                </div>
                <p className="textsm md:text-sm italic mb-6">{data.motto}</p>
                <p className="text-lg">{data.about_us}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Venues Carousel */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black relative">
            <div className="h-full flex items-center justify-center p-8">
              <div className="relative w-full max-w-2xl">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={data.venues[currentVenue].image}
                    alt={data.venues[currentVenue].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {data.venues[currentVenue].name}
                    </h3>
                    <p>{data.venues[currentVenue].description}</p>
                  </div>
                </div>
                <button
                  onClick={prevVenue}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                >
                  ←
                </button>
                <button
                  onClick={nextVenue}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Social Links Section */}
        <div className=" absolute bottom-0 z-0 w-full py-2 bg-black/25">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-8">
              <a
                href={data.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={data.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={data.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href={data.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={data.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition-colors"
              >
                <FaTelegram />
              </a>
              <a
                href={data.links.email}
                className="text-2xl hover:text-red-600 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
