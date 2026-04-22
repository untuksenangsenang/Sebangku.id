"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

const items = [
  {
    title: "Toko Edugame",
    desc: "Katalog cerdas yang memudahkan guru & orang tua menemukan media belajar terbaik.",
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
    desc: "Kumpulkan XP dari setiap interaksi dan tukarkan reward menarik.",
    image: "/assets/coming.jpg",
    features: [
      "Earn XP di setiap aktivitas",
      "Leaderboard & Sertifikat",
      "Reward dari Aktivitas",
    ],
    button: "Sebangku Mainkan!",
  },
  {
    title: "Sebangku Cafe",
    desc: "Nikmati pengalaman bermain langsung dengan ratusan board game.",
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
    <section className="py-24 bg-[#020B2D] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-900/40 text-blue-300 hover:bg-blue-900/50 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Ekosistem Sebangku
          </Badge>

          <h2 className="text-4xl font-bold mb-4">
            Ekosistem <span className="text-blue-400">Sebangku</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Dari memilih game edukasi hingga mendapatkan reward dari aktivitas belajar.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card
              key={i}
              className="bg-[#060F3B] border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              {/* IMAGE */}
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.desc}
                </p>

                {/* LIST */}
                <ul className="text-sm text-slate-300 space-y-1">
                  {item.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                {/* BUTTON */}
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
                  {item.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}