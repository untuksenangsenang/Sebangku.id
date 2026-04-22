"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const partners = [
  "SD Bopkri",
  "SD Tumbuh",
  "SD Bopkri 2",
  "SD Model",
  "SMA 2 Sewon",
  "TK ABA",
  "Universitas Sanata Dharma",
  "Universitas Islam Negeri",
  "Universitas Negeri Jogja",
  "Universitas Pendidikan Indonesia",
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-100 text-blue-600 text-xs px-4 py-1.5 rounded-full mb-4">
            Mitra dan Partnership
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Dipercaya oleh{" "}
            <span className="text-blue-600">
              Institusi Pendidikan
            </span>
          </h2>

          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
            Kami telah bermitra dengan berbagai sekolah dan organisasi
            dalam mengimplementasikan pembelajaran berbasis permainan.
          </p>
        </div>

        {/* PARTNER GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 mb-3" />
              <p className="text-xs text-slate-600">{p}</p>
            </div>
          ))}
        </div>

        {/* TESTIMONIAL + IMAGE */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* IMAGE */}
          <div className="space-y-4">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800"
                alt="anak belajar"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-28 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=500"
                  alt="workshop"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-blue-900 text-white rounded-xl flex items-center justify-center text-center p-4">
                <div>
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-xs text-blue-200">
                    Sekolah & Institusi Mitra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL */}
          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-600 text-sm mb-3">
                  “Board game yang ada sangat menarik dan mudah dimengerti,
                  recommended untuk teman-teman yang ingin belajar secara
                  menyenangkan.”
                </p>

                <p className="text-xs text-slate-400">
                  Atta Raditya
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="bg-blue-950 rounded-2xl py-8 px-6 grid grid-cols-2 md:grid-cols-4 text-center text-white gap-6">
          <div>
            <p className="text-2xl font-bold">25+</p>
            <p className="text-xs text-blue-300">Sekolah Mitra</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10.000+</p>
            <p className="text-xs text-blue-300">Siswa Aktif</p>
          </div>
          <div>
            <p className="text-2xl font-bold">200+</p>
            <p className="text-xs text-blue-300">Board Game</p>
          </div>
          <div>
            <p className="text-2xl font-bold">8 Tahun</p>
            <p className="text-xs text-blue-300">Pengalaman</p>
          </div>
        </div>

      </div>
    </section>
  );
}