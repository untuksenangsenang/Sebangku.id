"use client";

import Link from "next/link";
import Image from "next/image";
import { GameControllerIcon, PuzzlePieceIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-section relative min-h-screen bg-white flex items-center overflow-x-hidden pt-[70px]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .hero-section * { font-family: 'Poppins', sans-serif; }

        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordSlide {
          from { opacity: 0; transform: translateY(22px) skewY(2deg); }
          to   { opacity: 1; transform: translateY(0)    skewY(0deg); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.7) translateY(6px); }
          70%  { transform: scale(1.06) translateY(-2px); }
          100% { opacity: 1; transform: scale(1)   translateY(0); }
        }
        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-7px); }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0   rgba(57,137,214,0.5); }
          50%     { box-shadow: 0 0 0 7px rgba(57,137,214,0); }
        }
        @keyframes btnShimmer {
          0%,100% { left: -100%; }
          50%     { left:  100%; }
        }
        @keyframes shimmerBar {
          0%,100% { left: -60%;  }
          50%     { left:  110%; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.5; }
          50%     { opacity: 0.9; }
        }
        @keyframes dotRise {
          0%   { opacity: 0; transform: translateY(0)      scale(0.5); }
          20%  { opacity: 0.15; }
          80%  { opacity: 0.08; }
          100% { opacity: 0; transform: translateY(-120px) scale(1); }
        }
        @keyframes progFill {
          from { width: 0%; }
          to   { width: 72%; }
        }

        /* ── Entrance animations (opacity:0 → 1) ── */
        .anim-badge  { opacity:0; animation: badgePop  0.55s cubic-bezier(.34,1.56,.64,1) 0.1s  forwards; }
        .anim-w1     { opacity:0; animation: wordSlide 0.55s cubic-bezier(.22,1,.36,1)    0.3s  forwards; }
        .anim-w2     { opacity:0; animation: wordSlide 0.55s cubic-bezier(.22,1,.36,1)    0.42s forwards; }
        .anim-w3     { opacity:0; animation: wordSlide 0.55s cubic-bezier(.22,1,.36,1)    0.54s forwards; }
        .anim-w4     { opacity:0; animation: wordSlide 0.55s cubic-bezier(.22,1,.36,1)    0.66s forwards; }
        .anim-w5     { opacity:0; animation: wordSlide 0.55s cubic-bezier(.22,1,.36,1)    0.78s forwards; }
        .anim-sub    { opacity:0; animation: fadeUp    0.6s  ease                          1.1s  forwards; }
        .anim-btn    { opacity:0; animation: fadeUp    0.6s  ease                          1.3s  forwards; }
        .anim-image  { opacity:0; animation: slideRight 0.75s cubic-bezier(.22,1,.36,1)   0.4s  forwards; }
        .anim-ftop   { animation: badgePop  0.55s cubic-bezier(.34,1.56,.64,1) 0.9s  both; }
        .anim-fbot   { animation: badgePop  0.55s cubic-bezier(.34,1.56,.64,1) 1.1s  both; }

        /* ── Looping animations ── */
        .badge-dot   { animation: pulse  2s   ease-in-out 0.7s infinite; }
        .float-top   { animation: floatA 3s   ease-in-out 1.55s infinite; }
        .float-bot   { animation: floatB 3.5s ease-in-out 1.75s infinite; }
        .glow-ring   { animation: glowPulse 3s ease-in-out   infinite; }

        /* ── Shimmer bar behind image ── */
        .shimmer-bar {
          position: absolute; top: 0; left: -60%; width: 60%; height: 3px;
          background: linear-gradient(90deg, transparent, rgba(57,137,214,0.45), transparent);
          animation: shimmerBar 3.5s ease-in-out 1.2s infinite;
        }

        /* ── CTA button ── */
        .cta-btn {
          background-color: #3989D6; position: relative; overflow: hidden;
          transition: background-color 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .cta-btn::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: btnShimmer 2.8s ease-in-out 2s infinite;
        }
        .cta-btn:hover { background-color:#2270BB; transform:translateY(-2px); box-shadow:0 8px 24px rgba(57,137,214,0.4); }
        .cta-btn:active { transform:translateY(0); }
        .cta-btn .arrow-icon { transition: transform 0.2s; }
        .cta-btn:hover .arrow-icon { transform: translateX(3px); }

        /* ── Image card ── */
        .hero-img-card {
          transition: transform 0.4s cubic-bezier(.34,1.2,.64,1), box-shadow 0.4s ease;
        }
        .hero-img-card:hover {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 28px 60px rgba(57,137,214,0.25) !important;
        }

        /* ── Progress bar ── */
        .prog-bar { animation: progFill 1.2s ease 2s forwards; }

        /* ── Stat divider ── */
        .stat-divider { width:1px; height: 32px; background: #E5E7EB; flex-shrink:0; }

        /* ── Particle dots ── */
        .particle { position:absolute; border-radius:50%; background:#3989D6; opacity:0; pointer-events:none; }
      `}</style>

      {/* ── Particles ── */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
          {Array.from({ length: 14 }).map((_, i) => {
            const size = Math.random() * 5 + 3;
            return (
              <span
                key={i}
                className="particle"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 30}%`,
                  animation: `dotRise ${Math.random() * 3 + 3}s ease-in-out ${Math.random() * 4}s infinite`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* ── Shimmer line ── */}
      <div className="shimmer-bar z-0" aria-hidden />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="flex-1 w-full text-center lg:text-left">

            {/* Badge */}
            <div className="anim-badge inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-7">
              <span className="badge-dot w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3989D6" }} />
              <span className="text-sm font-semibold" style={{ color: "#3989D6" }}>
                Creative EdTech Company
              </span>
            </div>

            {/* Headline — each line slides in individually */}
            <h1 className="font-extrabold leading-[1.08] tracking-tight mb-7">
              {[
                { text: "Transformasi",    cls: "anim-w1 block text-gray-900" },
                { text: "Pembelajaran",    cls: "anim-w2 block text-gray-900" },
                { text: "Jadi Lebih",      cls: "anim-w3 block text-gray-900" },
                { text: "Interaktif &",    cls: "anim-w4 block",               color: "#3989D6" },
                { text: "Berdampak.",      cls: "anim-w5 block",               color: "#3989D6" },
              ].map(({ text, cls, color }) => (
                <span
                  key={text}
                  className={cls}
                  style={{ fontSize: "clamp(2.2rem,5.2vw,4rem)", ...(color ? { color } : {}) }}
                >
                  {text}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className="anim-sub leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-gray-500"
              style={{ fontSize: "clamp(0.95rem,1.5vw,1.1rem)" }}
            >
              Solusi ekosistem media kreatif melalui Game, Animasi, dan Board Game
              untuk meningkatkan kompetensi SDM institusi Anda.
            </p>

            {/* CTA */}
            <div className="anim-btn flex justify-center lg:justify-start mb-10">
              <Link
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20edugame"
                target="_blank"
                className="cta-btn inline-flex items-center gap-3 text-white font-semibold rounded-full px-8 py-4"
                style={{ fontSize: "clamp(0.88rem,1.3vw,1rem)" }}
              >
                Konsultasikan Kebutuhan Edugame Anda
                <ArrowRightIcon className="arrow-icon w-5 h-5 flex-shrink-0" />
              </Link>
            </div>

          </div>

          {/* ── RIGHT ── */}
          <div className="anim-image flex-1 w-full max-w-[640px] mx-auto lg:mx-0 relative px-4 sm:px-14">

            {/* Floating Badge TOP */}
<div className="
  anim-ftop float-top
  absolute
  left-2 sm:left-4 lg:-left-10
  top-3 sm:top-6 lg:top-10
  z-30
">
  <div className="
    flex items-center gap-2 sm:gap-3
    bg-white/95
    backdrop-blur-xl
    border border-gray-100
    rounded-2xl
    px-3 py-2
    sm:px-4 sm:py-3
    shadow-[0_8px_32px_rgba(0,0,0,0.14)]
  ">

    {/* Icon */}
    <div className="
      w-9 h-9 sm:w-11 sm:h-11
      rounded-xl
      bg-gradient-to-br from-blue-500 to-sky-400
      flex items-center justify-center
      shadow-md flex-shrink-0
    ">
      <GameControllerIcon
        size={18}
        weight="fill"
        className="text-white sm:hidden"
      />

      <GameControllerIcon
        size={22}
        weight="fill"
        className="text-white hidden sm:block"
      />
    </div>

    {/* Text */}
    <div>
      <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium leading-none mb-0.5">
        Layanan
      </p>

      <p className="text-xs sm:text-sm font-bold text-gray-800 leading-none">
        Game Edukasi
      </p>
    </div>
  </div>
</div>

            {/* Main Image */}
            <div className="hero-img-card relative w-full">
              <div className="relative w-full aspect-[16/11] md:aspect-[5/4] rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.14)]">
                <Image
                  src="/assets/hero-photo.jpg"
                  alt="Anak-anak belajar dengan board game edukasi"
                  fill
                  priority
                  className="object-cover scale-[1.02]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
              </div>
            </div>

            {/* Floating Badge BOTTOM */}
<div className="
  anim-fbot float-bot
  absolute
  right-2 sm:right-4 lg:-right-10
  bottom-3 sm:bottom-6 lg:bottom-10
  z-30
">
  <div className="
    flex items-center gap-2 sm:gap-3
    bg-white/95
    backdrop-blur-xl
    border border-gray-100
    rounded-2xl
    px-3 py-2
    sm:px-4 sm:py-3
    shadow-[0_8px_32px_rgba(0,0,0,0.14)]
  ">

    {/* Icon */}
    <div className="
      w-9 h-9 sm:w-11 sm:h-11
      rounded-xl
      bg-gradient-to-br from-orange-400 to-orange-500
      flex items-center justify-center
      shadow-md flex-shrink-0
    ">
      <PuzzlePieceIcon
        size={18}
        weight="fill"
        className="text-white sm:hidden"
      />

      <PuzzlePieceIcon
        size={22}
        weight="fill"
        className="text-white hidden sm:block"
      />
    </div>

    {/* Text */}
    <div>
      <p className="text-[9px] sm:text-[10px] text-gray-400 font-medium leading-none mb-0.5">
        Format
      </p>

      <p className="text-xs sm:text-sm font-bold text-gray-800 leading-none">
        Board Game
      </p>

      <p className="text-[9px] sm:text-[10px] text-orange-500 font-semibold mt-1">
        ✦ Interactive
      </p>
    </div>
  </div>
</div>

            {/* Glow Background */}
            <div
              className="glow-ring absolute -inset-5 rounded-[42px] -z-10 opacity-30"
              style={{ background: "linear-gradient(135deg,#3989D6 0%,#93C5FD 100%)", filter: "blur(40px)" }}
              aria-hidden
            />

          </div>

        </div>
      </div>
    </section>
  );
}