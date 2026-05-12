"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── Scroll-triggered visibility hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Problem card data ─── */
const PROBLEMS = [
  {
    id: "boring-training",
    title: "Pelatihan yang Membosankan",
    desc: "Metode pelatihan konvensional yang membosankan dan tidak engaging membuat peserta sulit fokus dan termotivasi.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "low-retention",
    title: "Retensi Informasi Rendah",
    desc: "Rendahnya retensi informasi peserta didik setelah pelatihan selesai, sehingga ilmu sulit diterapkan di lapangan.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "hard-implementation",
    title: "Implementasi yang Sulit",
    desc: "Sulitnya mengimplementasikan materi kompleks ke dalam praktik nyata karena kurangnya media belajar yang relevan.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExpertiseSection() {
  const header = useInView(0.2);
  const cards  = useInView(0.1);

  return (
    <section className="expertise-section py-20 md:py-28 lg:py-32 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        .expertise-section * { font-family: 'Poppins', sans-serif; }

        /* ── Keyframes ── */
        @keyframes ex-fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ex-popIn {
          0%   { opacity: 0; transform: scale(0.88) translateY(20px); }
          70%  { transform: scale(1.02) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ex-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* ── Header animations ── */
        .ex-pill-anim  { opacity: 0; }
        .ex-h2-anim    { opacity: 0; }
        .ex-sub-anim   { opacity: 0; }
        .ex-header-visible .ex-pill-anim { animation: ex-fadeUp 0.55s ease 0.05s both; }
        .ex-header-visible .ex-h2-anim  { animation: ex-fadeUp 0.6s  ease 0.18s both; }
        .ex-header-visible .ex-sub-anim { animation: ex-fadeUp 0.6s  ease 0.32s both; }

        /* ── Card animations ── */
        .ex-card { opacity: 0; }
        .ex-cards-visible .ex-card-0 { animation: ex-popIn 0.65s cubic-bezier(.34,1.3,.64,1) 0ms   both; }
        .ex-cards-visible .ex-card-1 { animation: ex-popIn 0.65s cubic-bezier(.34,1.3,.64,1) 120ms both; }
        .ex-cards-visible .ex-card-2 { animation: ex-popIn 0.65s cubic-bezier(.34,1.3,.64,1) 240ms both; }

        /* ── Card hover ── */
        .ex-card-inner {
          transition: transform 0.38s cubic-bezier(.34,1.2,.64,1), box-shadow 0.38s ease;
        }
        .ex-card-inner:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 32px 64px rgba(0,0,0,0.28);
        }
        .ex-card-inner:hover .ex-bar {
          width: 56px;
        }

        /* ── Bottom accent bar ── */
        .ex-bar {
          width: 32px;
          height: 3px;
          background: white;
          border-radius: 9px;
          margin-top: 20px;
          transition: width 0.35s ease;
        }

        /* ── Shimmer on image ── */
        .ex-img-shimmer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        .ex-img-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.08) 50%,
            transparent 70%
          );
          animation: ex-shimmer 3.5s ease-in-out 2s infinite;
          pointer-events: none;
        }

        /* ── Pill badge ── */
        .ex-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFF7ED;
          border: 1.5px solid #FF4040;
          border-radius: 999px;
          padding: 6px 18px;
          color: #FF4040;
          font-size: 0.85rem;
          font-weight: 600;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

        {/* ── HEADER ── */}
        <div
          ref={header.ref}
          className={`text-center mb-14 md:mb-20 ${header.visible ? "ex-header-visible" : ""}`}
        >
          {/* Pill */}
          <div className="ex-pill-anim flex justify-center mb-5">
            <span className="ex-pill">
              <span>⚠️</span>
              Identifikasi Masalah
            </span>
          </div>

          {/* Heading */}
          <h2
  className="ex-h2-anim font-extrabold text-gray-900 tracking-tight leading-tight mb-5"
  style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
>
  Apakah Anda Menghadapi{" "}
  <span style={{ color: "#FF4040" }}>Masalah</span> Ini?
</h2>

          {/* Sub */}
          <p
            className="ex-sub-anim text-gray-500 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            Banyak institusi mengalami tantangan serupa dalam proses
            pembelajaran dan pelatihan SDM mereka.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div
          ref={cards.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${cards.visible ? "ex-cards-visible" : ""}`}
        >
          {PROBLEMS.map((p, i) => (
            <div key={p.id} className={`ex-card ex-card-${i}`}>
              <div className="ex-card-inner rounded-[28px] overflow-hidden relative h-[400px] sm:h-[440px] lg:h-[480px] shadow-[0_16px_48px_rgba(0,0,0,0.18)] cursor-pointer">

                {/* Photo background with shimmer */}
                <div className="ex-img-shimmer">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center scale-[1.04]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    priority={i === 0}
                  />
                </div>

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    zIndex: 1,
                    background:
                      "linear-gradient(to top, rgba(10,10,15,0.88) 0%, rgba(10,10,15,0.55) 45%, rgba(10,10,15,0.18) 100%)",
                  }}
                />

                {/* Text content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8" style={{ zIndex: 2 }}>
                  <h3
                    className="font-bold text-white leading-snug mb-3"
                    style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-white/75 leading-relaxed"
                    style={{ fontSize: "clamp(0.82rem, 1.2vw, 0.95rem)" }}
                  >
                    {p.desc}
                  </p>
                  {/* Accent bar */}
                  <div className="ex-bar" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}