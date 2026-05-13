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
    <section className="hero-section relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* ── Mobile background image ── */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src="/assets/hero-photo.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

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
          from { opacity: 0; transform: translateX(60px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0)    scale(1); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.7) translateY(6px); }
          70%  { transform: scale(1.06) translateY(-2px); }
          100% { opacity: 1; transform: scale(1)   translateY(0); }
        }
        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0   rgba(57,137,214,0.5); }
          50%     { box-shadow: 0 0 0 8px rgba(57,137,214,0); }
        }
        @keyframes btnShimmer {
          0%,100% { left: -100%; }
          50%     { left:  100%; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.4; }
          50%     { opacity: 0.75; }
        }
        @keyframes dotRise {
          0%   { opacity: 0; transform: translateY(0)      scale(0.5); }
          20%  { opacity: 0.18; }
          80%  { opacity: 0.06; }
          100% { opacity: 0; transform: translateY(-130px) scale(1.2); }
        }

        /* ── Entrance animations ── */
        .anim-badge  { opacity:0; animation: badgePop   0.55s cubic-bezier(.34,1.56,.64,1) 0.1s  forwards; }
        .anim-w1     { opacity:0; animation: wordSlide  0.55s cubic-bezier(.22,1,.36,1)    0.3s  forwards; }
        .anim-w2     { opacity:0; animation: wordSlide  0.55s cubic-bezier(.22,1,.36,1)    0.42s forwards; }
        .anim-w3     { opacity:0; animation: wordSlide  0.55s cubic-bezier(.22,1,.36,1)    0.54s forwards; }
        .anim-w4     { opacity:0; animation: wordSlide  0.55s cubic-bezier(.22,1,.36,1)    0.66s forwards; }
        .anim-w5     { opacity:0; animation: wordSlide  0.55s cubic-bezier(.22,1,.36,1)    0.78s forwards; }
        .anim-sub    { opacity:0; animation: fadeUp     0.6s  ease                         1.1s  forwards; }
        .anim-btn    { opacity:0; animation: fadeUp     0.6s  ease                         1.3s  forwards; }
        .anim-image  { opacity:0; animation: slideRight 0.8s  cubic-bezier(.22,1,.36,1)    0.4s  forwards; }
        .anim-fbadge1{ opacity:0; animation: badgePop   0.55s cubic-bezier(.34,1.56,.64,1) 1.0s  forwards; }
        .anim-fbadge2{ opacity:0; animation: badgePop   0.55s cubic-bezier(.34,1.56,.64,1) 1.2s  forwards; }

        /* ── Looping ── */
        .badge-dot  { animation: pulse  2s   ease-in-out 0.7s infinite; }
        .float-top  { animation: floatA 3s   ease-in-out 1.55s infinite; }
        .float-bot  { animation: floatB 3.5s ease-in-out 1.75s infinite; }
        .glow-ring  { animation: glowPulse 3s ease-in-out infinite; }

        /* ── CTA button ── */
        .cta-btn {
          background-color: #3989D6;
          position: relative;
          overflow: hidden;
          transition: background-color 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .cta-btn::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          animation: btnShimmer 2.8s ease-in-out 2s infinite;
        }
        .cta-btn:hover {
          background-color: #2270BB;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(57,137,214,0.4);
        }
        .cta-btn:active { transform: translateY(0); }
        .cta-btn .arrow-icon { transition: transform 0.2s; }
        .cta-btn:hover .arrow-icon { transform: translateX(4px); }

        /* ── Hero image card hover ── */
        .hero-img-card {
          transition: transform 0.45s cubic-bezier(.34,1.2,.64,1), box-shadow 0.4s ease;
        }
        .hero-img-card:hover {
          transform: scale(1.015) translateY(-4px);
          box-shadow: 0 32px 72px rgba(57,137,214,0.22) !important;
        }

        /* ── Particle dots ── */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: #3989D6;
          opacity: 0;
          pointer-events: none;
        }

        /* ── Right panel: full-height image fill ── */
        .right-panel {
          position: relative;
          height: 100%;
          min-height: 100vh;
        }
        .right-panel-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        /* Subtle left-edge fade so image bleeds into white left column */
        .right-panel-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.55) 0%, transparent 22%);
          pointer-events: none;
        }

        /* ── Mobile: stack layout ── */
        @media (max-width: 1023px) {
          .right-panel {
            min-height: 300px;
            height: 340px;
            border-radius: 24px;
            overflow: hidden;
          }
        }
      `}</style>

      {/* ── Particles (left side only) ── */}
      {mounted && (
        <div
          className="absolute inset-y-0 left-0 w-1/2 overflow-hidden pointer-events-none z-0"
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const size = Math.random() * 5 + 3;
            return (
              <span
                key={i}
                className="particle"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 40}%`,
                  animation: `dotRise ${Math.random() * 3 + 3}s ease-in-out ${Math.random() * 4}s infinite`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* ── Mobile Floating Badges (over bg image, bottom of section) ── */}
      <div className="lg:hidden absolute bottom-8 left-4 right-4 z-20 flex justify-between items-end pointer-events-none">
        {/* Game Edukasi */}
        <div className="anim-fbadge1 float-top pointer-events-auto">
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-md flex-shrink-0">
              <GameControllerIcon size={16} weight="fill" className="text-white" />
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-medium leading-none mb-0.5">Layanan</p>
              <p className="text-xs font-bold text-gray-800 leading-none">Game Edukasi</p>
            </div>
          </div>
        </div>
        {/* Board Game */}
        <div className="anim-fbadge2 float-bot pointer-events-auto">
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
              <PuzzlePieceIcon size={16} weight="fill" className="text-white" />
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-medium leading-none mb-0.5">Format</p>
              <p className="text-xs font-bold text-gray-800 leading-none">Board Game</p>
              <p className="text-[9px] text-orange-500 font-semibold mt-0.5">✦ Interactive</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Layout ── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row min-h-screen">

        {/* ════ LEFT COLUMN ════ */}
        <div className="
          flex-1 flex flex-col justify-center
          px-8 sm:px-12 lg:px-16 xl:px-20
          py-24 lg:py-0
          bg-transparent lg:bg-white
          lg:max-w-[52%]
          relative z-10
        ">

          {/* Badge */}
          <div className="anim-badge inline-flex items-center gap-2 bg-white/20 lg:bg-blue-50 border border-white/30 lg:border-blue-100 rounded-full px-4 py-1.5 mb-8 self-start backdrop-blur-sm lg:backdrop-blur-none">
            <span
              className="badge-dot w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#3989D6" }}
            />
            <span className="text-xs sm:text-sm font-semibold text-white lg:text-[#3989D6]">
              Creative EdTech Company
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.1] tracking-tight mb-7">
            {[
              { text: "Transformasi",  cls: "anim-w1 block" },
              { text: "Pembelajaran", cls: "anim-w2 block" },
              { text: "Jadi Lebih",   cls: "anim-w3 block" },
              { text: "Interaktif &", cls: "anim-w4 block", blue: true },
              { text: "Berdampak.",   cls: "anim-w5 block", blue: true },
            ].map(({ text, cls, blue }) => (
              <span
                key={text}
                className={cls}
                style={{
                  fontSize: "clamp(2rem, 4.6vw, 3.75rem)",
                  color: blue ? "#3989D6" : undefined,
                }}
              >
                {/* On mobile: white for non-blue lines; on desktop: gray-900 */}
                {!blue ? (
                  <>
                    <span className="lg:hidden text-white">{text}</span>
                    <span className="hidden lg:inline text-gray-900">{text}</span>
                  </>
                ) : text}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="anim-sub leading-relaxed mb-10 max-w-md text-white/80 lg:text-gray-500"
            style={{ fontSize: "clamp(0.88rem, 1.3vw, 1rem)" }}
          >
            Solusi ekosistem media kreatif melalui Game, Animasi, dan Board Game
            untuk meningkatkan kompetensi SDM institusi Anda.
          </p>

          {/* CTA */}
          <div className="anim-btn">
            <Link
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20edugame"
              target="_blank"
              className="cta-btn inline-flex items-center gap-3 text-white font-semibold rounded-full px-7 py-3.5"
              style={{ fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)" }}
            >
              Konsultasikan Kebutuhan Edugame Anda
              <ArrowRightIcon className="arrow-icon w-5 h-5 flex-shrink-0" />
            </Link>
          </div>
        </div>

        {/* ════ RIGHT COLUMN – full height image (desktop only) ════ */}
        <div className="
          anim-image
          hidden lg:block
          flex-1
          relative
          lg:min-h-screen
        ">
          {/* Hero image fills entire right panel */}
          <Image
            src="/assets/hero-photo.jpg"
            alt="Anak-anak belajar dengan board game edukasi"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />

          {/* Gradient: white on the left edge fading to transparent — seamless blend with left column */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0) 40%)",
            }}
            aria-hidden
          />

          {/* ── Floating Badge: Game Edukasi (bottom-left) ── */}
          <div
            className="anim-fbadge1 float-top absolute z-20"
            style={{ left: "clamp(12px, 4%, 28px)", bottom: "clamp(16px, 5%, 40px)" }}
          >
            <div className="
              flex items-center gap-2 sm:gap-3
              bg-white/95 backdrop-blur-xl
              border border-gray-100
              rounded-2xl
              px-3 py-2 sm:px-4 sm:py-3
              shadow-[0_8px_32px_rgba(0,0,0,0.16)]
            ">
              <div className="
                w-9 h-9 sm:w-11 sm:h-11
                rounded-xl
                bg-gradient-to-br from-blue-500 to-sky-400
                flex items-center justify-center
                shadow-md flex-shrink-0
              ">
                <GameControllerIcon size={20} weight="fill" className="text-white hidden sm:block" />
                <GameControllerIcon size={16} weight="fill" className="text-white sm:hidden" />
              </div>
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

          {/* ── Floating Badge: Board Game (bottom-right) ── */}
          <div
            className="anim-fbadge2 float-bot absolute z-20"
            style={{ right: "clamp(12px, 4%, 28px)", bottom: "clamp(16px, 5%, 40px)" }}
          >
            <div className="
              flex items-center gap-2 sm:gap-3
              bg-white/95 backdrop-blur-xl
              border border-gray-100
              rounded-2xl
              px-3 py-2 sm:px-4 sm:py-3
              shadow-[0_8px_32px_rgba(0,0,0,0.16)]
            ">
              <div className="
                w-9 h-9 sm:w-11 sm:h-11
                rounded-xl
                bg-gradient-to-br from-orange-400 to-orange-500
                flex items-center justify-center
                shadow-md flex-shrink-0
              ">
                <PuzzlePieceIcon size={20} weight="fill" className="text-white hidden sm:block" />
                <PuzzlePieceIcon size={16} weight="fill" className="text-white sm:hidden" />
              </div>
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

          {/* Subtle glow ring behind image panel on desktop */}
          <div
            className="glow-ring hidden lg:block absolute -inset-4 -z-10 rounded-none"
            style={{
              background: "linear-gradient(135deg,#3989D6 0%,#93C5FD 100%)",
              filter: "blur(50px)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}