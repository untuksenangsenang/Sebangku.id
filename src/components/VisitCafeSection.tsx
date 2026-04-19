import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
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
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-900/40 text-blue-300 hover:bg-blue-900/50 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 backdrop-blur-sm">
            📍 Kunjungi Kami
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Kunjungi Sebangku Cafe
          </h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto text-base sm:text-lg">
            Nikmati pengalaman bermain board game langsung bersama Game Master
            kami. Cocok untuk keluarga, komunitas, dan acara tim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — Info */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
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
                    className="inline-flex items-center gap-1.5 mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Buka di Google Maps
                  </Link>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg">
                  Jam Operasional
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {operationalHours.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-slate-300 text-sm">{day}</span>
                    <span className="font-semibold text-white text-sm">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-lg">Kontak</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                +62 812-3456-7890 &nbsp;|&nbsp; hello@sebangku.id
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  id="visit-cta-wa"
                  size="lg"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold gap-2 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                  asChild
                >
                  <Link href={waLink} target="_blank">
                    <MessageCircle className="w-5 h-5" />
                    Chat WhatsApp
                  </Link>
                </Button>
                <Button
                  id="visit-cta-reservasi"
                  size="lg"
                  variant="outline"
                  className="flex-1 border-white/40 text-white hover:bg-white/20 font-bold gap-2 rounded-xl backdrop-blur-sm"
                  asChild
                >
                  <Link href={waLink} target="_blank">
                    <Calendar className="w-5 h-5" />
                    Buat Reservasi
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right — Map + Cafe Photo */}
          <div className="flex flex-col gap-5">
            {/* Google Maps placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10 h-72 lg:h-80 bg-slate-800/50">
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <MapPin className="w-10 h-10 text-slate-400" />
                <p className="text-slate-300 font-semibold text-sm">
                  Integrasi Google Maps
                </p>
                <p className="text-slate-500 text-xs text-center max-w-xs px-4">
                  Ganti dengan iframe Google Maps aktual menggunakan
                  Maps Embed API atau kode embed dari Google Maps
                </p>
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  className="mt-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Buka Google Maps →
                </Link>
              </div>
              {/* To integrate real map, replace this div with:
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              */}
            </div>

            {/* Cafe image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-52 border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80&auto=format&fit=crop"
                alt="Suasana Sebangku Cafe yang cozy dan nyaman"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent via-[#020617]/50" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg">Sebangku Cafe</p>
                <p className="text-slate-300 text-sm">
                  Ruang bermain yang nyaman & inspiratif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
