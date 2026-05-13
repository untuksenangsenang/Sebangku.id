"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    question:
      "Media apa saja yang bisa dikembangkan oleh PT Sebangku untuk kebutuhan edukasi?",
    answer:
      "Kami menyediakan ekosistem media kreatif yang lengkap, mulai dari pengembangan game (digital dan board game), produksi animasi, hingga media interaktif berbasis teknologi seperti Augmented Reality (AR).",
  },
  {
    question:
      "Apakah konten edukasi di dalamnya bisa disesuaikan dengan kurikulum tertentu?",
    answer:
      "Tentu saja. Kami berfokus pada transformasi pembelajaran melalui media yang siap diimplementasikan untuk meningkatkan kompetensi SDM, sehingga setiap konten dapat dikustomisasi sesuai materi pendidikan atau kebutuhan pelatihan spesifik instansi Anda.",
  },
  {
    question:
      "Siapa saja yang bisa menggunakan layanan dari PT Sebangku?",
    answer:
      "Layanan kami dirancang untuk Institusi Pendidikan (Sekolah/Universitas), Departemen Learning & Development (L&D) Perusahaan, Instansi Pemerintah, hingga Organisasi Non-Profit yang memiliki fokus pada bidang edukasi.",
  },
  {
    question:
      "Bagaimana cara memulai proyek kolaborasi dengan Sebangku?",
    answer:
      'Anda dapat memulai dengan menekan tombol "Konsultasikan Kebutuhan Edugame Anda" untuk berdiskusi mengenai poin kesulitan (pain points) yang dihadapi, sehingga kami dapat merancang solusi media yang paling efektif.',
  },
  {
    question:
      "Mengapa harus menggunakan media interaktif seperti game dan animasi?",
    answer:
      "Media interaktif terbukti meningkatkan keterlibatan pengguna secara signifikan. Melalui visual yang modern dan playful, pesan yang kompleks menjadi lebih mudah dipahami, berdampak, dan mampu meningkatkan retensi informasi peserta.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number>(0);

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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .faq-section * {
          font-family: 'Poppins', sans-serif;
        }

        /* =========================
           ANIMATIONS
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

        @keyframes floatBlob {
          0%,100% {
            transform: translate(0px,0px) scale(1);
          }

          50% {
            transform: translate(16px,-16px) scale(1.06);
          }
        }

        .show .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .blob-a {
          animation: floatBlob 12s ease-in-out infinite;
        }

        .blob-b {
          animation: floatBlob 15s ease-in-out infinite reverse;
        }

        /* =========================
           FAQ CARD
        ========================== */

        .faq-card {
          transition:
            all .35s ease,
            transform .25s ease;
        }

        .faq-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 38px rgba(15,23,42,.08);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s ease;
        }

        .faq-answer.open {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        /* =========================
           BUTTON
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
          inset: 0;
          left: -100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.22),
            transparent
          );

          animation: shimmer 2.8s ease-in-out infinite;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          background: #2270BB;
          box-shadow: 0 14px 34px rgba(57,137,214,.3);
        }

      `}</style>

      {/* =========================
          BG DECORATION
      ========================== */}

      <div
        className="blob-a absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, #DBEAFE 0%, #EFF6FF 60%, transparent 100%)",
        }}
      />

      <div
        className="blob-b absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, #E0F2FE 0%, #F0FAFE 60%, transparent 100%)",
        }}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className={`faq-section relative z-10 max-w-7xl mx-auto px-5 sm:px-8 ${
          visible ? "show" : ""
        }`}
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">

          {/* =========================
              LEFT
          ========================== */}

          <div>
            <div
              className="fade-up inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-6 opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-sm font-semibold text-[#3989D6]">
                FAQ
              </span>
            </div>

            <h2
              className="fade-up font-extrabold text-gray-900 leading-tight mb-5 opacity-0"
              style={{
                fontSize: "clamp(2rem,5vw,3.4rem)",
                animationDelay: "0.2s",
              }}
            >
              Pertanyaan yang Sering Diajukan
            </h2>

            <p
              className="fade-up text-gray-500 leading-relaxed mb-10 opacity-0"
              style={{
                fontSize: "clamp(1rem,1.4vw,1.1rem)",
                animationDelay: "0.3s",
              }}
            >
              Temukan jawaban dari pertanyaan umum tentang layanan
              dan proses kerja kami.
            </p>

            {/* CTA BOX */}

            <div
              className="fade-up rounded-[28px] border border-blue-100 p-5 sm:p-6 opacity-0"
              style={{
                animationDelay: "0.4s",
                background:
                  "linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 45%, #E0F2FE 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-gray-600 font-medium">
                  Masih ada pertanyaan lain?
                </p>

                <Link
                  href="mailto:pt.sebangku@gmail.com"
                  target="_blank"
                  className="cta-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold"
                >
                  Hubungi Tim Kami
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT FAQ
          ========================== */}

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className="fade-up faq-card rounded-[24px] border border-gray-100 bg-white shadow-sm overflow-hidden opacity-0"
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                    boxShadow: isOpen
                      ? "0 12px 34px rgba(57,137,214,.12)"
                      : "",
                  }}
                >
                  {/* QUESTION */}

                  <button
                    onClick={() =>
                      setActive(isOpen ? -1 : index)
                    }
                    className="w-full flex items-start gap-4 text-left p-5 sm:p-6"
                  >
                    {/* Number */}

                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#3989D6] text-white"
                          : "bg-blue-50 text-[#3989D6]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Text */}

                    <div className="flex-1 pr-2">
                      <h3 className="font-bold text-gray-900 leading-snug text-[1rem] sm:text-[1.08rem]">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Icon */}

                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#3989D6] text-white rotate-180"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* ANSWER */}

                  <div
                    className={`faq-answer ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    <div className="faq-answer-inner">
                      <div className="px-5 sm:px-6 pb-6 pl-[4.7rem]">
                        <p className="text-gray-500 leading-relaxed text-[0.96rem]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}