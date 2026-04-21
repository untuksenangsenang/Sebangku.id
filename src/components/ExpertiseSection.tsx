"use client";

import { Target, Eye, Heart, Lightbulb, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExpertiseSection() {
  return (
    <section className="py-28 bg-[#020B2D] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-5 py-2 rounded-full text-sm mb-6">
            Company Profile
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Identitas &{" "}
            <span className="text-blue-400">Nilai Perusahaan</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sebangku.id hadir sebagai pionir ekosistem game-based learning di Indonesia, membangun generasi yang berkarakter melalui kekuatan bermain.
          </p>
        </div>

        {/* VISI MISI */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">

          {/* VISI */}
          <div className="group rounded-2xl p-8 bg-gradient-to-br from-blue-900/60 to-[#020617] border border-blue-500/20 hover:border-blue-400 transition hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-5">
              <Eye className="text-blue-400 w-6 h-6" />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Visi Kami
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              Menjadi ekosistem Game-Based Learning terdepan di Indonesia yang mengintegrasikan pembelajaran karakter dan akademik melalui media permainan interaktif, sehingga setiap anak belajar dengan penuh kegembiraan.
            </p>
          </div>

          {/* MISI */}
<div className="group rounded-2xl p-8 bg-gradient-to-br from-orange-900/40 to-[#020617] border border-orange-500/20 hover:border-orange-400 transition hover:shadow-[0_0_40px_rgba(251,146,60,0.4)]">
  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
    <Target className="text-orange-400 w-6 h-6" />
  </div>

  <h3 className="text-2xl font-semibold mb-3">
    Misi Kami
  </h3>

  <ul className="text-slate-300 text-lg leading-relaxed list-decimal pl-5 space-y-2">
    <li>Merancang dan mendistribusikan board game edukatif berkualitas</li>
    <li>Membangun pusat sumber belajar berbasis Story Based Learning.</li>
    <li>Menyelenggarakan workshop pembelajaran berstandar global.</li>
    <li>Melestarikan budaya lokal melalui kemasan modern.</li>
    <li>Menghadirkan wahana rekreasi edukatif untuk memperkuat bonding keluarga.</li>
  </ul>
          </div>

        </div>

        {/* CORE VALUES */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">
            Nilai-Nilai Kami
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">

          {[
            {
              icon: Heart,
              title: "Passion for Play",
              desc: "Kami percaya bahwa bermain adalah cara paling alami untuk belajar dan berkembang.",
              color: "text-pink-400",
              glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]"
            },
            {
              icon: Lightbulb,
              title: "Inovasi Kurikulum",
              desc: "Terus berinovasi dalam merancang konten edukasi yang relevan dan menarik bagi generasi digital.",
              color: "text-yellow-400",
              glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
            },
            {
              icon: Star,
              title: "Kualitas Terjamin",
              desc: "Setiap produk dan layanan kami dirancang dengan standar pedagogis yang ketat bersama para ahli pendidikan.",
              color: "text-blue-400",
              glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            },
            {
              icon: Zap,
              title: "Dampak Nyata",
              desc: "Fokus pada hasil terukur: peningkatan engagement siswa, karakter, dan keterampilan abad ke-21.",
              color: "text-green-400",
              glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
            },
          ].map(({ icon: Icon, title, desc, color, glow }) => (
            <div
              key={title}
              className={`group bg-[#060F3B] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-[#0A164F] ${glow}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                <Icon className={`w-6 h-6 ${color}`} />
              </div>

              <h4 className="font-semibold text-lg mb-2">
                {title}
              </h4>

              <p className="text-sm text-slate-400 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}

        </div>

        {/* ABOUT */}
        <div className="bg-gradient-to-br from-blue-900/40 to-[#020617] border border-white/10 rounded-3xl p-10 text-center hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition">

          <h3 className="text-2xl font-bold mb-4">
            Tentang Sebangku.id
          </h3>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
            Sebangku.id didirikan oleh pendidik dan desainer game yang memiliki
            visi menghadirkan pembelajaran menyenangkan melalui board game edukatif,
            workshop guru, dan ekosistem digital.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              ["2016", "Didirikan"],
              ["12 Kota", "Kota Operasi"],
              ["45+ Orang", "Tim Kami"],
              ["200+", "Produk Game"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="bg-white/5 px-6 py-4 rounded-xl border border-white/10"
              >
                <p className="text-blue-400 font-bold text-xl">
                  {num}
                </p>
                <span className="text-sm text-slate-400">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}