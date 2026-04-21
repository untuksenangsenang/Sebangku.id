"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Blocks } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden px-4 sm:px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.15),transparent_40%)]" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4f4f4f 1px, transparent 1px)",
            backgroundSize: "80px 100%", // lebih kecil biar mobile enak
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm text-slate-300">
            Ekosistem Game - Based Learning{" "}
            <span className="text-blue-400 font-semibold">
              #1 Indonesia
            </span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-tight tracking-tight text-white max-w-5xl mx-auto mb-4">
          Transformasi{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Edukasi
          </span>{" "}
          Melalui Media{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Permainan
          </span>

          {/* ICON */}
          <span className="inline-flex items-center ml-2 sm:ml-3 align-middle mt-2 sm:mt-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center -ml-2 border-2 border-[#020617]">
              <Blocks className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-lg">
          Ekosistem Game-Based Learning untuk pengembangan karakter dan
          kreativitas melalui board game edukasi
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="#ekosistem"
            className="px-6 sm:px-8 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition backdrop-blur-md text-sm sm:text-base"
          >
            Explorasi Katalog
          </Link>

          <Link
            href="#expertise"
            className="px-6 sm:px-8 py-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition backdrop-blur-md text-sm sm:text-base"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* TOP LEFT GRADIENT */}
      <div className="absolute top-0 left-0 w-40 sm:w-72 md:w-[450px] pointer-events-none z-[1]">
        <Image
          src="/assets/topgradient.png"
          alt="gradient"
          width={800}
          height={800}
          className="w-full h-auto object-contain opacity-80 sm:opacity-90 mix-blend-screen blur-sm"
          priority
        />
      </div>

      {/* LEFT IMAGE */}
      <div className="absolute left-[-40px] sm:left-0 bottom-0 w-32 sm:w-56 md:w-[420px] pointer-events-none animate-vr">
        <Image
          src="/assets/vrasset.png"
          alt="VR"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:translate-x-[20%] w-[300px] sm:w-[600px] md:w-[1000px] z-[3]">
        <img
          src="/assets/gradient.png"
          alt="gradient bottom"
          className="w-full h-auto object-contain opacity-100 mix-blend-screen"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-[-80px] sm:right-[-150px] md:right-[-100px] bottom-[-80px] sm:bottom-[-120px] md:bottom-[-150px] w-40 sm:w-72 md:w-[720px] pointer-events-none z-[2] animate-vr">
        <Image
          src="/assets/rocket.png"
          alt="Rocket"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}