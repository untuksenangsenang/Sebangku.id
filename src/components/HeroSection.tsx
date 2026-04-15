"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — Text ─────────────────────────────── */}
          <div className="flex flex-col gap-6 animate-fadeIn">
            <Badge className="self-start bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-4 py-1.5 text-sm font-semibold">
              🎲 Ekosistem Game-Based Learning #1 Indonesia
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-tight text-gray-900 tracking-tight">
              Transformasi{" "}
              <span className="text-blue-600">Edukasi</span>{" "}
              Melalui{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Media Permainan</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-100 rounded-full -z-0" />
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Kami percaya karakter terbaik tumbuh melalui pengalaman bermain
              yang bermakna. Sebangku.id hadir sebagai ekosistem{" "}
              <strong className="text-gray-800">Game-Based Learning</strong> —
              menggabungkan board game edukatif, pelatihan fasilitator, dan
              ruang belajar yang menyenangkan untuk semua usia.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-2">
              {[
                { icon: Layers, value: "100+", label: "Koleksi Board Game" },
                { icon: Users, value: "5.000+", label: "Pelajar Terlayani" },
                { icon: Star, value: "4.9", label: "Rating Kepuasan" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">{value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                id="hero-cta-katalog"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-blue-300/60 transition-all duration-300 rounded-xl px-7 gap-2 group"
                asChild
              >
                <Link href="#ekosistem">
                  Eksplorasi Katalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                id="hero-cta-tentang"
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 text-blue-700 font-bold hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 rounded-xl px-7"
                asChild
              >
                <Link href="#expertise">Tentang Kami</Link>
              </Button>
            </div>
          </div>

          {/* ── Right — Image + floating cards ──────────── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/40 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=700&q=80&auto=format&fit=crop"
                  alt="Aktivitas bermain board game edukatif bersama"
                  width={700}
                  height={500}
                  className="w-full h-80 lg:h-[420px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
              </div>

              {/* Floating card — collection */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-blue-100 px-5 py-3.5 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-gray-900 leading-none">100+</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">Koleksi Board Game</p>
                </div>
              </div>

              {/* Floating card — rating */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-yellow-100 px-4 py-3 flex items-center gap-2 animate-float-delay">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-md">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-gray-900 leading-none">4.9 / 5.0</p>
                  <p className="text-xs text-gray-500 mt-0.5">Rating Terbaik</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
