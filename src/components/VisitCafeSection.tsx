"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const operationalHours = [
  { day: "Senin – Jumat", hours: "10.00 – 21.00 WIB" },
  { day: "Sabtu", hours: "09.00 – 22.00 WIB" },
  { day: "Minggu & Libur Nasional", hours: "09.00 – 21.00 WIB" },
];

export default function VisitCafeSection() {
  const waMessage = encodeURIComponent(
    "Halo Sebangku! Saya ingin membuat reservasi untuk bermain board game. Boleh saya tahu ketersediaan jadwal?"
  );
  const waLink = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <section
      id="kunjungi"
      className="py-20 lg:py-28 bg-[#020617] relative overflow-hidden border-t border-white/5"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-600/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-900/40 text-blue-300 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 backdrop-blur-sm">
            📍 Kunjungi Kami
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Kunjungi Sebangku Cafe
          </h2>

          <p className="mt-3 text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
            Nikmati pengalaman bermain board game langsung bersama Game Master
            kami. Cocok untuk keluarga, komunitas, dan acara tim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* ADDRESS */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Alamat Lengkap
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Jl. Prof. Dr. Soepomo No. 24,
                    <br />
                    Warungboto, Umbulharjo,
                    <br />
                    Kota Yogyakarta, DIY 55164
                  </p>

                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Buka di Google Maps
                  </Link>
                </div>
              </div>
            </div>

            {/* HOURS */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg">
                  Jam Operasional
                </h3>
              </div>

              {operationalHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-slate-300 text-sm">
                    {item.day}
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* CONTACT */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
              <h3 className="font-bold text-white text-lg mb-2">Kontak</h3>
              <p className="text-slate-300 text-sm mb-4">
                +62 812-3456-7890 | hello@sebangku.id
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-green-500 hover:bg-green-600">
                  <Link href={waLink} target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link href={waLink} target="_blank">
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservasi
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            {/* MAP */}
            <div className="relative h-72 lg:h-80 rounded-3xl overflow-hidden border border-white/10 bg-slate-800/50 flex items-center justify-center text-center">
              <p className="text-slate-400 text-sm">
                Google Maps placeholder
              </p>
            </div>

            {/* IMAGE (FIX DI SINI) */}
            <div className="relative h-52 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80&auto=format&fit=crop"
                alt="Sebangku Cafe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold">Sebangku Cafe</p>
                <p className="text-slate-300 text-sm">
                  Nyaman & inspiratif
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}