"use client";

import Link from "next/link";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .cta-section * {
          font-family: 'Poppins', sans-serif;
        }

        .cta-bg {
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,255,255,0.12), transparent 35%),
            linear-gradient(135deg, #1D4F91 0%, #1E63B8 45%, #2B8CE8 100%);
        }

        @keyframes floatBlur {
          0%,100% {
            transform: translate(0px,0px) scale(1);
          }
          50% {
            transform: translate(20px,-18px) scale(1.08);
          }
        }

        .blur-orb {
          animation: floatBlur 8s ease-in-out infinite;
        }

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

        @keyframes badgePop {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          70% {
            transform: scale(1.06);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseGlow {
          0%,100% {
            box-shadow: 0 0 0 rgba(255,255,255,0);
          }
          50% {
            box-shadow: 0 12px 40px rgba(255,255,255,0.18);
          }
        }

        @keyframes shimmer {
          0% {
            left: -120%;
          }
          100% {
            left: 120%;
          }
        }

        .vis .badge-anim {
          animation: badgePop 0.6s cubic-bezier(.34,1.56,.64,1) both;
        }

        .vis .title-anim {
          animation: fadeUp 0.8s ease 0.15s both;
        }

        .vis .desc-anim {
          animation: fadeUp 0.8s ease 0.3s both;
        }

        .vis .btn-anim {
          animation: fadeUp 0.8s ease 0.45s both;
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          animation: pulseGlow 3s ease-in-out infinite;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          animation: shimmer 2.8s ease-in-out infinite;
        }

        .cta-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 45px rgba(255,255,255,0.2);
        }

        .cta-button:active {
          transform: scale(1);
        }
      `}</style>

      {/* Background */}
      <div className="cta-bg absolute inset-0" />

      {/* Decorative Blur */}
      <div className="blur-orb absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="blur-orb absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-sky-300/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center ${
          visible ? "vis" : ""
        }`}
      >
        {/* Badge */}
        <div className="badge-anim inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-6 py-2 mb-8 opacity-0">
          <span className="text-sm sm:text-base font-semibold text-white">
            Mulai Sekarang
          </span>
        </div>

        {/* Title */}
        <h2
          className="title-anim opacity-0 text-white font-extrabold leading-tight mx-auto max-w-4xl"
          style={{
            fontSize: "clamp(2.3rem, 6vw, 5rem)",
          }}
        >
          Siap Menciptakan
          <br />
          Pengalaman Belajar yang
          <br />
          Berbeda?
        </h2>

        {/* Description */}
        <p
          className="desc-anim opacity-0 text-white/85 leading-relaxed mx-auto mt-8 max-w-3xl"
          style={{
            fontSize: "clamp(1rem, 1.7vw, 1.35rem)",
          }}
        >
          Bergabunglah bersama institusi-institusi terkemuka yang telah
          mempercayai Sebangku sebagai mitra transformasi pembelajaran mereka.
        </p>

        {/* Button */}
        <div className="btn-anim opacity-0 mt-12">
          <Link
            href="mailto:pt.sebangku@gmail.com"
            className="cta-button inline-flex items-center gap-3 bg-white text-[#2B7DDA] font-bold rounded-2xl px-8 sm:px-10 py-5 text-lg"
          >
            <EnvelopeSimpleIcon
              size={30}
              weight="fill"
              className="text-[#2B7DDA]"
            />

            <span>Hubungi Kami Sekarang</span>
          </Link>
        </div>
      </div>
    </section>
  );
}