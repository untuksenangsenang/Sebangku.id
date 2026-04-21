"use client";

import { ShieldCheck } from "lucide-react";

type Partner = {
  name: string;
  abbr: string;
};

const partners: Partner[] = [
  { name: "SMA Negeri 1 Yogyakarta", abbr: "SMAN 1 YK" },
  { name: "Universitas Ahmad Dahlan", abbr: "UAD" },
  { name: "SD Muhammadiyah Sapen", abbr: "SD Sapen" },
  { name: "SMP Negeri 5 Yogyakarta", abbr: "SMPN 5 YK" },
  { name: "Dinas Pendidikan DIY", abbr: "Dinas P&K" },
  { name: "SMA Bopkri 1", abbr: "Bopkri 1" },
  { name: "TK ABA Karangkajen", abbr: "TK ABA" },
  { name: "Universitas Gadjah Mada", abbr: "UGM" },
];

type PartnerLogoProps = {
  name: string;
  abbr: string;
};

function PartnerLogo({ name, abbr }: PartnerLogoProps): JSX.Element {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5 mx-8 group transition-transform duration-300 hover:-translate-y-1"
      title={name}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/[0.04] backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300">
        <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-400 text-center leading-tight px-1 transition-colors">
          {abbr}
        </span>
      </div>
      <span className="text-xs text-gray-400 font-medium whitespace-nowrap max-w-[100px] text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function TrustSection(): JSX.Element {
  return (
    <section
      id="trust"
      className="relative py-20 bg-[#020617] overflow-hidden"
    >
      {/* ================= BACKGROUND (CONSISTENT WITH HERO) ================= */}
      <div className="absolute inset-0 z-0">
        
        {/* radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_50%)]" />

        {/* subtle gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08),transparent_40%)]" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4f4f4f 1px, transparent 1px)",
            backgroundSize: "120px 100%",
          }}
        />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-blue-500" />
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
            Mitra Terpercaya
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Dipercaya oleh Institusi Pendidikan
        </h2>

        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Bergabung bersama ratusan sekolah, universitas, dan lembaga pendidikan
          di Indonesia yang telah menggunakan platform Sebangku.id.
        </p>
      </div>

      {/* ================= MARQUEE ================= */}
      <div className="relative">
        
        {/* Fade kiri */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10 pointer-events-none" />
        
        {/* Fade kanan */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <PartnerLogo key={`${p.abbr}-${i}`} name={p.name} abbr={p.abbr} />
          ))}
        </div>
      </div>
    </section>
  );
}