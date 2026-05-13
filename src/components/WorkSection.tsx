"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CaraKerjaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Konsultasi",
      desc: "Diskusi kebutuhan edukasi dan tantangan spesifik institusi Anda bersama tim ahli kami.",
    },
    {
      num: "02",
      title: "Pengembangan",
      desc: "Kami merancang dan memproduksi aset kreatif (Game, Board Game, atau Animasi) yang disesuaikan.",
    },
    {
      num: "03",
      title: "Implementasi",
      desc: "Media edukasi siap digunakan untuk meningkatkan kompetensi dan engagement peserta.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .cara-section * {
          font-family: 'Poppins', sans-serif;
        }

        /* =========================
           SCROLL ANIMATION
        ========================== */

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0%;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        .show .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .show .animate-scale {
          animation: scaleIn 0.8s cubic-bezier(.34,1.56,.64,1) forwards;
        }

        .show .animate-line {
          animation: lineGrow 1s ease forwards;
        }

        /* =========================
           FLOATING CIRCLE
        ========================== */

        @keyframes floatA {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatB {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes floatC {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .float-a {
          animation: floatA 3.2s ease-in-out infinite;
        }

        .float-b {
          animation: floatB 4s ease-in-out infinite;
        }

        .float-c {
          animation: floatC 3.4s ease-in-out infinite;
        }

        /* =========================
           BACKGROUND BLOBS
        ========================== */

        @keyframes blobMove {
          0%,100% {
            transform: translate(0px,0px) scale(1);
          }

          50% {
            transform: translate(18px,-18px) scale(1.06);
          }
        }

        .blob-a {
          animation: blobMove 10s ease-in-out infinite;
        }

        .blob-b {
          animation: blobMove 14s ease-in-out infinite reverse;
        }

        /* =========================
           CTA BUTTON
        ========================== */

        @keyframes shimmer {
          0%,100% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: all .25s ease;
          background: #3989D6;
        }

        .cta-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.22),
            transparent
          );

          animation: shimmer 2.8s ease-in-out infinite;
        }

        .cta-btn:hover {
          transform: translateY(-4px);
          background: #2270BB;
          box-shadow: 0 16px 36px rgba(57,137,214,.35);
        }

      `}</style>

      {/* =========================
          BG DECORATION
      ========================== */}

      <div
        className="blob-a absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, #DBEAFE 0%, #EFF6FF 60%, transparent 100%)",
        }}
      />

      <div
        className="blob-b absolute -bottom-28 -left-28 w-96 h-96 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, #E0F2FE 0%, #F0FAFE 60%, transparent 100%)",
        }}
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div
        className={`cara-section relative z-10 max-w-6xl mx-auto px-5 sm:px-8 ${
          visible ? "show" : ""
        }`}
      >
        {/* =========================
            HEADER
        ========================== */}

        <div className="text-center mb-16 sm:mb-24">
          <div
            className="animate-fade-up inline-flex items-center justify-center border border-blue-300 rounded-full px-6 py-2 mb-6 opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-semibold text-gray-700">
              Mudah & Cepat
            </span>
          </div>

          <h2
            className="animate-fade-up font-extrabold text-gray-900 leading-tight opacity-0"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              animationDelay: "0.2s",
            }}
          >
            Cara Kerja{" "}
            <span className="text-[#1D9BF0]">
              sebangku.id
            </span>
          </h2>
        </div>

        {/* =========================
            STEPS
        ========================== */}

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-6 mb-20">

          {/* Desktop Dashed Line */}
          <div className="hidden md:block absolute top-[58px] left-[17%] right-[17%] z-0">
            <div className="animate-line border-t-2 border-dashed border-[#D6E8FB] w-0 opacity-0" />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Mobile line */}
              {i !== steps.length - 1 && (
                <div className="md:hidden w-[2px] h-10 bg-blue-200 mb-5" />
              )}

              {/* Circle */}
              <div
                className={`animate-scale opacity-0 mb-7 ${
                  i === 0
                    ? "float-a"
                    : i === 1
                    ? "float-b"
                    : "float-c"
                }`}
                style={{
                  animationDelay: `${0.25 + i * 0.2}s`,
                }}
              >
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: i === 1 ? 130 : 115,
                    height: i === 1 ? 130 : 115,
                    background:
                      "linear-gradient(135deg, #1DA1F2 0%, #3989D6 100%)",
                    boxShadow:
                      "0 14px 34px rgba(57,137,214,0.28)",
                  }}
                >
                  <span
                    className="font-black text-white leading-none"
                    style={{
                      fontSize:
                        i === 1
                          ? "2.5rem"
                          : "2.2rem",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className="animate-fade-up opacity-0"
                style={{
                  animationDelay: `${0.35 + i * 0.2}s`,
                }}
              >
                <h3 className="font-bold text-gray-800 text-[1.8rem] mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-500 leading-relaxed max-w-[310px] text-[0.97rem]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            CTA BANNER
        ========================== */}

        <div
          className="animate-fade-up relative overflow-hidden rounded-[34px] border border-blue-100 px-6 py-12 sm:py-14 text-center opacity-0"
          style={{
            animationDelay: "0.8s",
            background:
              "linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 45%, #E0F2FE 100%)",
          }}
        >
          {/* TOP BAR */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3989D6] via-[#52A8FF] to-[#3989D6]" />

          {/* Glow */}
          <div
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30"
            style={{
              background: "#3989D6",
              filter: "blur(40px)",
            }}
          />

          <div
            className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-20"
            style={{
              background: "#60A5FA",
              filter: "blur(55px)",
            }}
          />

          <h3
            className="relative z-10 font-extrabold text-gray-900 mb-8 leading-tight"
            style={{
              fontSize: "clamp(1.5rem,4vw,2.4rem)",
            }}
          >
            Siap mencoba? Mulai perjalanan belajar
            yang menyenangkan!
          </h3>

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            className="cta-btn relative z-10 inline-flex items-center gap-2 rounded-full px-10 py-4 text-white font-bold"
          >
            Mulai Sekarang →
          </Link>
        </div>
      </div>
    </section>
  );
}