"use client";

import { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  Globe,
} from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ContactSection() {
  const headerRef = useReveal();
  const legalRef  = useReveal();
  const kontakRef = useReveal();
  const jamRef    = useReveal();

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-24">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        .info-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(58,137,214,0.18);
        }
      `}</style>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div ref={headerRef} className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-[#3A89D6]/30 text-[#3A89D6] text-xs px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Phone className="w-3.5 h-3.5" /> Legalitas & Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A89D6] mb-3">
            Informasi Resmi & Hubungi Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Untuk kebutuhan korespondensi profesional, kerjasama, dan informasi resmi perusahaan, silakan hubungi kami melalui saluran berikut.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">

          {/* LEGAL */}
          <div ref={legalRef} className="reveal reveal-delay-1 info-card bg-[#3A89D6] rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-sm">Informasi Legal Perusahaan</h3>
            </div>
            <p className="text-white/60 text-xs mb-5 ml-10">Data resmi untuk kebutuhan korespondensi profesional</p>

            <div className="space-y-3">
              {[
                ["Nama Perusahaan", "PT Sebangku Jaya Abadi"],
                ["No. NPWP", "92.060.3461.542.000"],
                ["No. NIB", "0206220061657"],
                ["AHU", "00104990.AH.01.11."],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-white/15 pb-2.5">
                  <span className="text-white/65 text-xs">{label}</span>
                  <span className="text-white font-semibold text-xs text-right">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-white/15 border border-white/20 text-white text-xs px-4 py-2.5 rounded-xl flex items-center gap-2">
              <span>✔</span> Terdaftar resmi di Kementerian Hukum & HAM RI
            </div>
          </div>

          {/* KONTAK */}
          <div ref={kontakRef} className="reveal reveal-delay-2 info-card bg-[#3A89D6] rounded-2xl p-6 shadow-md">
            <h3 className="font-bold text-white text-sm mb-5">Informasi Kontak</h3>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "Alamat Kantor",
                  lines: ["Jl. Bakungan No.10A, Bakungan, Wedomartani,", "Kec. Ngemplak, Kab. Sleman, DIY 55584"],
                },
                {
                  icon: Phone,
                  label: "Telepon / WhatsApp",
                  lines: ["085869511699", "085870459329"],
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["Sebangkukuliner@gmail.com"],
                },
                {
                  icon: Globe,
                  label: "Website & Media Sosial",
                  lines: ["www.sebangku.id", "Instagram: @Sebangku.Gamecafe", "TikTok: @sebangku.gamecafe"],
                },
              ].map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs mb-0.5">{label}</p>
                    {lines.map((l, i) => (
                      <p key={i} className="text-white/65 text-xs leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JAM KERJA - full width */}
          <div ref={jamRef} className="reveal reveal-delay-3 info-card bg-[#3A89D6] rounded-2xl p-6 shadow-md sm:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-sm">Jam Kerja Kantor</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-0">
              <div className="sm:pr-8">
                <p className="text-white/60 text-xs mb-1">Senin – Sabtu</p>
                <p className="text-white font-bold text-sm">10.00 – 19.00 WIB</p>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:px-8">
                <p className="text-white/60 text-xs mb-1">Minggu</p>
                <p className="text-white font-bold text-sm">Tutup</p>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:px-8 flex items-center">
                <p className="text-white/60 text-xs">
                  Follow kami{" "}
                  <span className="text-white font-semibold">@Sebangku.Gamecafe</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}