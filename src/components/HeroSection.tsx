"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Blocks } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50%       { transform: translateY(-18px) rotate(-1deg); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.8) translateY(10px); }
          70%  { transform: scale(1.05) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes iconSpin {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(8deg) scale(1.15); }
          100% { transform: rotate(0deg) scale(1); }
        }

        .anim-badge    { animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) 0.1s both; }
        .anim-title    { animation: fadeUp 0.7s ease 0.3s both; }
        .anim-subtitle { animation: fadeUp 0.7s ease 0.55s both; }
        .anim-buttons  { animation: fadeUp 0.7s ease 0.75s both; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #2E2415 0%, #2E2415 30%,
            #3A89D6 50%,
            #2E2415 70%, #2E2415 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear 1.2s infinite;
        }

        .float-left  { animation: floatLeft  4s ease-in-out infinite; }
        .float-right { animation: floatRight 4.5s ease-in-out 0.5s infinite; }

        .char-img {
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), filter 0.35s ease;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.15));
        }
        .char-img:hover {
          transform: scale(1.07) translateY(-8px) !important;
          filter: drop-shadow(0 20px 40px rgba(58,137,214,0.35));
          animation-play-state: paused;
        }

        .icon-pulse:hover { animation: iconSpin 0.5s ease; }

        /* Ukuran karakter berdasarkan viewport height agar proporsional di semua layar */
        .char-left, .char-right {
          width: clamp(120px, 18vw, 420px);
        }

        /* Tablet portrait */
        @media (max-width: 1024px) and (min-width: 768px) {
          .char-left, .char-right {
            width: clamp(140px, 20vw, 280px);
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .char-left, .char-right {
            width: clamp(100px, 28vw, 160px);
          }
        }

        /* Layar sangat lebar (>1400px) */
        @media (min-width: 1400px) {
          .char-left, .char-right {
            width: clamp(280px, 16vw, 460px);
          }
        }
      `}</style>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        {/* BADGE */}
        <div className="anim-badge inline-flex items-center border border-[#2E2415] backdrop-blur
          px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-6 shadow-sm">
          <span className="text-xs sm:text-sm text-[#2E2415]">
            Ekosistem Media Permainan{" "}
            <span className="text-[#3A89D6] font-semibold">#1 Indonesia</span>
          </span>
        </div>

        {/* TITLE */}
        <h1 className="anim-title
          text-[clamp(1.8rem,5vw,4.5rem)]
          font-extrabold leading-tight mb-4 sm:mb-6
        ">
          <span className="shimmer-text">
            Transformasi Edukasi Melalui <br />
            Media Permainan
          </span>

          {/* ICONS */}
          <span className="inline-flex items-center ml-2 sm:ml-3 align-middle">
            <div className="icon-pulse w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
              <Gamepad2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black" />
            </div>
            <div className="icon-pulse w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center -ml-1.5 border-2 border-white cursor-pointer">
              <Blocks className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
            </div>
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="anim-subtitle text-[#2E2415] max-w-xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base leading-relaxed">
          PT. Sebangku Jaya Abadi adalah game literasi anak pertama di Indonesia yang
          mempelopori media pembelajaran yang aman, nyaman, dan menyenangkan
          bagi anak-anak.
        </p>

        {/* BUTTONS */}
        <div className="anim-buttons flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Link
            href="/#ekosistem"
            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
            rounded-full border border-[#3A89D6] text-[#3A89D6] font-semibold
            hover:bg-[#3A89D6] hover:text-white
            hover:scale-105 hover:shadow-lg hover:shadow-[#3A89D6]/30
            active:scale-95 transition-all duration-200 text-xs sm:text-sm md:text-base"
          >
            Explorasi Katalog
          </Link>

          <Link
            href="/#tentang"
            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
            rounded-full border border-[#F5A30B] text-[#F5A30B] font-semibold
            hover:bg-[#F5A30B] hover:text-white
            hover:scale-105 hover:shadow-lg hover:shadow-[#F5A30B]/30
            active:scale-95 transition-all duration-200 text-xs sm:text-sm md:text-base"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* LEFT CHARACTER */}
      <div
        className="char-left absolute left-0 sm:left-4 md:left-8 lg:left-16
          bottom-0 z-[2] float-left"
      >
        <Image
          src="/assets/caca.png"
          alt="caca"
          width={1000}
          height={1200}
          className="char-img w-full h-auto object-contain"
          priority
        />
      </div>

      {/* RIGHT CHARACTER */}
      <div
        className="char-right absolute right-0 sm:right-4 md:right-8 lg:right-16
          bottom-0 z-[2] float-right"
      >
        <Image
          src="/assets/marica.png"
          alt="marica"
          width={1200}
          height={1200}
          className="char-img w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}