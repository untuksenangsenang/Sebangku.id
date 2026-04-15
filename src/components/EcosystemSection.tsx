import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Coffee, Award, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    id: "toko",
    icon: ShoppingBag,
    color: "from-blue-500 to-blue-700",
    badgeColor: "bg-blue-100 text-blue-700",
    accent: "border-blue-200 hover:border-blue-400",
    shadow: "hover:shadow-blue-100",
    title: "Toko Boardgame",
    subtitle: "Katalog Media Belajar",
    description:
      "Temukan lebih dari 100+ board game edukatif yang dikurasi untuk berbagai usia dan mata pelajaran. Dari STEM, bahasa, hingga pengembangan karakter.",
    image:
      "https://images.unsplash.com/photo-1606503153255-59d5b6ca1a8e?w=500&q=80&auto=format&fit=crop",
    imageAlt: "Koleksi board game edukatif di Toko Sebangku",
    features: [
      "Kategorisasi usia 4–17 tahun",
      "Filter berdasarkan mata pelajaran",
      "Panduan facilitator inklusif",
    ],
    cta: "Lihat Katalog",
    href: "#katalog",
  },
  {
    id: "cafe",
    icon: Coffee,
    color: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700",
    accent: "border-emerald-200 hover:border-emerald-400",
    shadow: "hover:shadow-emerald-100",
    title: "Sebangku Cafe",
    subtitle: "Pengalaman Bermain Langsung",
    description:
      "Rasakan pengalaman bermain board game yang dipandu Game Master profesional. Ruang nyaman untuk keluarga, komunitas, dan tim kerja.",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&q=80&auto=format&fit=crop",
    imageAlt: "Suasana Sebangku Cafe yang nyaman untuk bermain board game",
    features: [
      "Game Master berpengalaman",
      "50+ judul tersedia di cafe",
      "Paket grup & privat tersedia",
    ],
    cta: "Reservasi Sekarang",
    href: "#kunjungi",
  },
  {
    id: "loyalty",
    icon: Award,
    color: "from-amber-400 to-orange-500",
    badgeColor: "bg-amber-100 text-amber-700",
    accent: "border-amber-200 hover:border-amber-400",
    shadow: "hover:shadow-amber-100",
    title: "Loyalty & Point",
    subtitle: "Sistem XP, Badges & Leaderboard",
    description:
      "Setiap pembelian, reservasi, dan aktivitas belajar menghasilkan XP. Kumpulkan badge eksklusif dan bersaing di leaderboard komunitas Sebangku.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&q=80&auto=format&fit=crop",
    imageAlt: "Sistem loyalitas XP, badge, dan leaderboard Sebangku",
    features: [
      "Sistem XP & level member",
      "Badge koleksi eksklusif",
      "Diskon & reward spesial",
    ],
    cta: "Ikuti Sekarang",
    href: "#loyalty",
  },
];

export default function EcosystemSection() {
  return (
    <section id="ekosistem" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            🌐 Ekosistem Kami
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Ekosistem{" "}
            <span className="text-blue-600">Sebangku</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Tiga pilar utama yang saling bersinergi untuk menciptakan pengalaman
            belajar berbasis permainan yang menyeluruh, menyenangkan, dan
            berdampak.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative flex flex-col rounded-3xl border-2 bg-white overflow-hidden shadow-md ${pillar.shadow} ${pillar.accent} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Icon badge */}
                  <div
                    className={`absolute top-4 left-4 w-11 h-11 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${pillar.badgeColor}`}
                    >
                      {pillar.subtitle}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold text-gray-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-1.5">
                    {pillar.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <Button
                      id={`ecosystem-cta-${pillar.id}`}
                      variant="outline"
                      className={`w-full font-bold gap-2 group/btn rounded-xl border-2 ${pillar.accent} transition-all duration-200`}
                      asChild
                    >
                      <Link href={pillar.href}>
                        {pillar.cta}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
