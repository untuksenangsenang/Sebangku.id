"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Coffee, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Putri Sukma",
    avatar: "PS",
    color: "#e97b5c",
    rating: 5,
    time: "9 bulan lalu",
    text: "Rekomendasi media edukasi yang menarik dan mudah dipahami untuk anak. Terutama anak usia dini yang masih belajar calistung, karena didampingi oleh mentor yang menyenangkan dan sabar.",
  },
  {
    name: "Gandhi",
    avatar: "G",
    color: "#3A89D6",
    rating: 5,
    time: "9 bulan lalu",
    text: "Marica tempat privat anak yang rekomended dan bagus. Disini banyak pembelajaran yang dikemas dengan menyenangkan dan game-game interaktif yang menarik.",
  },
  {
    name: "Alfina Mardiani",
    avatar: "AM",
    color: "#7c6fe0",
    rating: 5,
    time: "9 bulan lalu",
    text: "Rekomendasi keren untuk anak ayah dan bunda yang ingin belajar matematika dengan cara yang lebih seru dan mudah!",
  },
  {
    name: "Nabila Sri Mulyanti",
    avatar: "NM",
    color: "#e85f7a",
    rating: 5,
    time: "9 bulan lalu",
    text: "Tempat les matematika yang membuat matematika terasa menyenangkan, pelajaran yang bermakna, terimakasih marica.",
    badge: "Local Guide",
  },
  {
    name: "Sindi Purbawati",
    avatar: "SP",
    color: "#2cb67d",
    rating: 5,
    time: "5 tahun lalu",
    text: "Maasyaa Allaah game nya seru banget, pokoknya betah deh ngabisin waktu buat main game disini. Selain tambah ilmunya tambah teman juga. Cocok buat di mainin di kalangan anak-anak sampai lansia.",
  },
];

export default function VisitCafeSection() {
  const waMessage = encodeURIComponent(
    "Halo Sebangku! Saya ingin membuat reservasi untuk bermain board game. Boleh saya tahu ketersediaan jadwal?"
  );
  const waLink = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <section className="py-12 bg-[#F5F7FA] overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-up {
          animation: fadeUp 0.5s ease both;
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(58,137,214,0.15);
        }
        .scroll-track {
          display: flex;
          width: max-content;
          animation: scrollX 32s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* CAFE CARD */}
        <div
          className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[320px] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* LEFT */}
          <div className="bg-[#3A89D6] p-8 sm:p-10 flex flex-col justify-center gap-5 lg:w-[45%]">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-3 py-1 text-xs font-semibold w-fit">
              <Coffee className="w-4 h-4" /> Kunjungi Kami
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Kunjungi Sebangku Cafe
            </h2>
            <p className="text-white/85 text-sm leading-relaxed">
              Nikmati suasana belajar yang menyenangkan! Datang langsung ke cafe kami, temukan ratusan board game, dan rasakan pengalaman game-based learning bersama fasilitator profesional kami.
            </p>
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
                    Kec. Ngemplak, Kabupaten Sleman, DIY 55584
                  </p>
                </div>
              </div>
            </div>
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

          {/* RIGHT */}
          <div className="relative lg:w-[55%] h-64 lg:h-auto min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80"
              alt="Sebangku Cafe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* REVIEWS HEADER */}
        <div
          className="mt-14 mb-8 text-center animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-block border-2 border-[#3A89D6] px-5 py-1.5 rounded-full mb-3">
            <span className="text-[#3A89D6] font-semibold text-sm">
              Ulasan Pelanggan
            </span>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Apa kata mereka yang sudah merasakan pengalaman belajar bersama Sebangku
          </p>
          {/* Star summary */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-gray-700 font-bold text-sm">4.7</span>
            <span className="text-gray-400 text-sm">· 60+ ulasan Google</span>
          </div>
        </div>

        {/* MARQUEE REVIEWS */}
        <div
          className="overflow-hidden animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="scroll-track gap-5 py-2">
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-5 shadow-sm border border-gray-100 w-[280px] sm:w-[300px] mx-2.5 flex-shrink-0 flex flex-col gap-3"
              >
                {/* Quote icon */}
                <Quote className="w-5 h-5 text-[#3A89D6]/30" />

                {/* Text */}
                <p className="text-gray-600 text-xs leading-relaxed flex-1 line-clamp-4">
                  {r.text}
                </p>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-2.5 pt-1 border-t border-gray-100">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-gray-800 text-xs font-semibold leading-none">{r.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {r.badge && (
                        <span className="text-[9px] bg-blue-50 text-blue-500 px-1.5 py-0.5 rounded-full font-medium">
                          {r.badge}
                        </span>
                      )}
                      <p className="text-gray-400 text-[10px]">{r.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google CTA */}
        <div
          className="text-center mt-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="https://maps.app.goo.gl/eTzJRK8Vv5dyKS8L7"
            target="_blank"
            className="inline-flex items-center gap-2 text-[#3A89D6] hover:text-[#2a70b8] text-sm font-medium transition-colors duration-200 group"
          >
            <span>Lihat semua ulasan di Google Maps</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}