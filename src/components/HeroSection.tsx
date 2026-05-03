"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Gamepad2, Blocks } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 TEXT YANG BERUBAH
const words = ["Edukasi", "Kreativitas", "Inovasi", "Kolaborasi"];

function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block ml-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020B2D] overflow-hidden">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4f4f4f 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm text-slate-300">
            Ekosistem Game-Based Learning{" "}
            <span className="text-blue-400 font-semibold">
              #1 Indonesia
            </span>
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white max-w-5xl mx-auto mb-4">
          Transformasi <AnimatedWord /> <br />
          Melalui Media Permainan

          {/* ICON */}
          <span className="inline-flex items-center ml-2 sm:ml-3 align-middle">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center -ml-2 border-2 border-[#020617]">
              <Blocks className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-lg">
          Ekosistem Game-Based Learning untuk pengembangan karakter dan
          kreativitas melalui board game edukasi
        </p>

        {/* BUTTON */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">

          <Link
            href="/#ekosistem"
            className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105 transition transform shadow-lg text-sm sm:text-base"
          >
            Lihat Katalog
          </Link>

          <Link
            href="/#expertise"
            className="px-6 sm:px-8 py-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition backdrop-blur-md text-sm sm:text-base"
          >
            Tentang Kami
          </Link>

        </div>

      </div>

      {/* FLOATING IMAGE LEFT */}
      <div className="absolute left-[-40px] sm:left-0 bottom-0 w-[180px] sm:w-[260px] md:w-[420px] pointer-events-none z-[1]">
        <Image
          src="/assets/vrasset.png"
          alt="VR"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* FLOATING IMAGE RIGHT */}
      <div className="absolute right-[-120px] sm:right-[-80px] md:right-[-200px] bottom-[-80px] sm:bottom-[-100px] md:bottom-[-150px] w-[220px] sm:w-[350px] md:w-[720px] pointer-events-none z-[2]">
        <Image
          src="/assets/rocket.png"
          alt="rocket"
          width={1000}
          height={500}
          className="w-full h-auto object-contain opacity-100 mix-blend-screen"
        />
      </div>

      {/* GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-1/2 translate-x-[10%] sm:translate-x-[15%] w-[400px] sm:w-[600px] md:w-[900px] z-[3] pointer-events-none">
        <Image
          src="/assets/gradient.png"
          alt="gradient"
          width={1000}
          height={500}
          className="w-full h-auto object-contain opacity-100 mix-blend-screen"
        />
      </div>

    </section>
  );
}