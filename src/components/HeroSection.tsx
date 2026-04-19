"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Blocks } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-visible">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_60%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.2),transparent_40%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4f4f4f 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 mb-8">
          <span className="text-sm text-slate-300">
            Ekosistem Game - Based Learning{" "}
            <span className="text-blue-400 font-semibold">
              #1 Indonesia
            </span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white max-w-5xl mx-auto mb-6">
          Transformasi{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Edukasi
          </span>{" "}
          Melalui Media{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Permainan
          </span>

          <span className="inline-flex items-center ml-3 align-middle">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-5 h-5 text-black" />
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center -ml-3 border-2 border-[#020617]">
              <Blocks className="w-5 h-5 text-white" />
            </div>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          Ekosistem Game-Based Learning untuk pengembangan karakter dan
          kreativitas melalui board game edukasi
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#ekosistem"
            className="px-8 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition backdrop-blur-md"
          >
            Explorasi Katalog
          </Link>

          <Link
            href="#expertise"
            className="px-8 py-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition backdrop-blur-md"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* LEFT IMAGE */}
      <div className="absolute left-0 bottom-0 w-72 md:w-[420px] opacity-80 pointer-events-none">
        <Image
          src="/assets/vrasset.png"
          alt="VR"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 bottom-0 w-72 md:w-[420px] opacity-90 pointer-events-none">
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