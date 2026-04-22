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
    <section className="py-24 bg-[#020B2D]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-8 items-center">

      {/* LEFT CONTENT */}
      <div className="bg-gradient-to-br from-blue-900/60 to-[#020617] border border-white/10 rounded-3xl p-10">

        <Badge className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm mb-6">
          📍 Kunjungi Kami
        </Badge>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Kunjungi Sebangku Cafe
        </h2>

        <p className="text-slate-300 mb-6 leading-relaxed">
          Nikmati suasana belajar yang menyenangkan! Datang langsung ke cafe kami,
          temukan ratusan board game, dan rasakan pengalaman game-based learning
          bersama fasilitator profesional kami.
        </p>

        {/* INFO */}
        <div className="space-y-5 mb-8">

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-white font-semibold text-sm">Jam Operasional</p>
              <p className="text-slate-400 text-sm">
                Senin - Jumat: 10.00 - 19.00 <br />
                Sabtu - Minggu: Tutup
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-white font-semibold text-sm">Lokasi Strategis</p>
              <p className="text-slate-400 text-sm">
                Jl. Bakungan No.10A, Wedomartani,<br />
                Ngemplak, Sleman, DIY
              </p>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <Button
          asChild
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full"
        >
          <Link href={waLink} target="_blank">
            Kunjungi via WhatsApp →
          </Link>
        </Button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80"
          alt="Sebangku Cafe"
          fill
          className="object-cover"
        />

        {/* overlay biar mirip desain */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020B2D]/80" />
      </div>

    </div>
  </div>
</section>
  );
}