"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#020B2D] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-4 py-1.5 rounded-full mb-4">
            Legalitas & Kontak
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Informasi Resmi &{" "}
            <span className="text-blue-400">Hubungi Kami</span>
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
            Untuk kebutuhan korespondensi profesional, kerjasama, dan informasi
            resmi perusahaan, silakan hubungi kami melalui saluran berikut.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT ================= */}
          <div className="space-y-6">

            {/* LEGAL */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">
                Informasi Legal Perusahaan
              </h3>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Nama Perusahaan</span>
                  <span className="text-white font-medium">
                    PT Sebangku Edukasi Indonesia
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>No. NPWP</span>
                  <span>12.345.678.9-012.000</span>
                </div>

                <div className="flex justify-between">
                  <span>No. SIUP</span>
                  <span>503/123/SIUP/2016</span>
                </div>

                <div className="flex justify-between">
                  <span>No. TDP</span>
                  <span>09.051.1712345</span>
                </div>

                <div className="flex justify-between">
                  <span>Akta</span>
                  <span>No. 42, 15 Maret 2016</span>
                </div>
              </div>

              <div className="mt-4 text-green-400 text-xs">
                ✔ Perusahaan terdaftar resmi di Kementerian Hukum & HAM
              </div>
            </div>

            {/* CONTACT */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">
                Informasi Kontak
              </h3>

              <div className="space-y-4 text-sm text-slate-300">

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <p>
                    Jl. Edukasi No. 21, Jakarta Selatan
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <p>+62 812-3456-7890</p>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <p>hello@sebangku.id</p>
                </div>

              </div>
            </div>

            {/* HOURS */}
            <div className="bg-blue-900/40 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Jam Kerja
              </h3>

              <div className="text-sm text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08.00 - 17.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>09.00 - 14.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT (FORM) ================= */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            <h3 className="font-semibold text-lg mb-4">
              Kirim Pesan
            </h3>

            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Nama Lengkap"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm"
                />
                <input
                  placeholder="Instansi"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Email"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm"
                />
                <input
                  placeholder="No. Telepon"
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm"
                />
              </div>

              <input
                placeholder="Topik"
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm"
              />

              <textarea
                rows={4}
                placeholder="Pesan"
                className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm"
              />

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pesan
              </Button>

              <p className="text-xs text-slate-400 text-center">
                Dengan mengirimkan form ini, Anda menyetujui kebijakan privasi kami.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}