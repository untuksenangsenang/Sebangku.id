"use client";

import Image from "next/image";
import { Gamepad} from "lucide-react";
import { Badge } from "./ui/badge";

const items = [
  {
    title: "Toko Edugame",
    desc: "Katalog cerdas yang memudahkan guru & orang tua menemukan media belajar terbaik untuk anak berdasarkan aspek perkembangan.",
    image: "/assets/coming.jpg",
    features: [
      "Katalog Berbasis Kategori",
      "Spesifikasi Produk",
      "Tutorial Bermain & Rules PDF",
    ],
    button: "Lihat Katalog Produk",
  },
  {
    title: "Loyalty & Poin",
    desc: "Kumpulkan Experience Points (XP) dari setiap interaksi Anda. Naiki peringkat dan tukarkan poin dengan beragam reward.",
    image: "/assets/coming.jpg",
    features: [
      "Earn XP di setiap Level Aktivitas",
      "Leaderboard & Sertifikat",
      "Reward dari Activity Kreasi",
    ],
    button: "Sebangku Mainkan!",
  },
  {
    title: "Sebangku Cafe",
    desc: "Rasakan pengalaman bermain langsung! Nikmati hidangan lezat sambil ditemani ahlinya dalam memandu ratusan board game.",
    image: "/assets/coming.jpg",
    features: [
      "Library Board Game",
      "Game Master Service",
      "Lokasi & Reservasi",
    ],
    button: "Reservasi Meja",
  },
];

export default function EcosystemFeatureSection() {
  return (
    <section className="py-24 bg-[#F5F7FA] text-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#3A89D6]/30 text-[#3A89D6] rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>
              <Gamepad className="w-4 h-4"/></span> Ekosistem Sebangku
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A89D6] mb-4">
            Ekosistem Sebangku
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Dari memilih game edukasi yang tepat, memainkannya langsung bersama para ahli, hingga mendapatkan reward dari setiap aktivitas pembelajaran Anda.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-[#3A89D6]/0 group-hover:bg-[#3A89D6]/10 transition-all duration-300" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* LIST */}
                <ul className="text-sm text-gray-600 space-y-1.5 flex-1">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3A89D6] inline-block shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button className="mt-4 w-full py-2.5 rounded-xl bg-[#3A89D6] group-hover:bg-[#2e72b8] text-white font-semibold text-sm transition-colors duration-300">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}