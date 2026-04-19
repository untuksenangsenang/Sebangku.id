"use client";

import { ShieldCheck } from "lucide-react";

const partners = [
  { name: "SMA Negeri 1 Yogyakarta", abbr: "SMAN 1 YK" },
  { name: "Universitas Ahmad Dahlan", abbr: "UAD" },
  { name: "SD Muhammadiyah Sapen", abbr: "SD Sapen" },
  { name: "SMP Negeri 5 Yogyakarta", abbr: "SMPN 5 YK" },
  { name: "Dinas Pendidikan DIY", abbr: "Dinas P&K" },
  { name: "SMA Bopkri 1", abbr: "Bopkri 1" },
  { name: "TK ABA Karangkajen", abbr: "TK ABA" },
  { name: "Universitas Gadjah Mada", abbr: "UGM" },
];

function PartnerLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5 mx-8 group"
      title={name}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
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

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="py-16 bg-[#020617] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Mitra Terpercaya
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Dipercaya oleh Institusi Pendidikan
        </h2>
        <p className="mt-2 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Bergabung bersama ratusan sekolah, universitas, dan lembaga pendidikan
          di Indonesia yang telah menggunakan platform Sebangku.id.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <PartnerLogo key={`${p.abbr}-${i}`} name={p.name} abbr={p.abbr} />
          ))}
        </div>
      </div>


    </section>
  );
}
