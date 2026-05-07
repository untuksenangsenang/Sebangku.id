"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Coffee } from "lucide-react";

export default function VisitCafeSection() {
  const waMessage = encodeURIComponent(
    "Halo Sebangku! Saya ingin membuat reservasi untuk bermain board game. Boleh saya tahu ketersediaan jadwal?"
  );
  const waLink = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <section className="py-12 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* CARD WRAPPER - blue left, image right, no gap */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[320px]">

          {/* LEFT - Blue content */}
          <div className="bg-[#3A89D6] p-8 sm:p-10 flex flex-col justify-center gap-5 lg:w-[45%]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-3 py-1 text-xs font-semibold w-fit">
              <span><Coffee className="w-4 h-4" /></span> Kunjungi Kami
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Kunjungi Sebangku Cafe
            </h2>

            {/* Desc */}
            <p className="text-white/85 text-sm leading-relaxed">
              Nikmati suasana belajar yang menyenangkan! Datang langsung ke cafe kami, temukan ratusan board game, dan rasakan pengalaman game-based learning bersama fasilitator profesional kami.
            </p>

            {/* Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">Jam Operasional</p>
                  <p className="text-white/75 text-xs mt-0.5">
                    Senin – Sabtu: 10.00 - 19.00<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">Lokasi Strategis</p>
                  <p className="text-white/75 text-xs mt-0.5">
                    Jl. Bakungan No.10A, Bakungan, Wedomartani,<br />
                    Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <Link
                href={waLink}
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                Kunjungi via WhatsApp &rsaquo;
              </Link>
            </div>
          </div>

          {/* RIGHT - Image flush, no padding */}
          <div className="relative lg:w-[55%] h-64 lg:h-auto min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80"
              alt="Sebangku Cafe"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}