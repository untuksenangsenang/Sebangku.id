"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  FileText,
} from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    instansi: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Pesan berhasil dikirim!");
      }
    } catch {
      alert("Terjadi kesalahan");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#020B2D] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-900/40 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-4">
            Legalitas & Kontak
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Informasi Resmi &{" "}
            <span className="text-blue-400">Hubungi Kami</span>
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
            Untuk kebutuhan korespondensi profesional, kerjasama, dan informasi resmi perusahaan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* LEGAL */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold">
                  Informasi Legal Perusahaan
                </h3>
              </div>

              <div className="text-sm text-slate-300 space-y-3">
                <div className="flex justify-between">
                  <span>Nama Perusahaan</span>
                  <span className="text-white">PT Sebangku Jaya Abadi</span>
                </div>
                <div className="flex justify-between">
                  <span>No. NPWP</span>
                  <span>92.060.346.1-542.000</span>
                </div>
                <div className="flex justify-between">
                  <span>No. SIUP</span>
                  <span>503/123/SIUP/2016</span>
                </div>
                <div className="flex justify-between">
                  <span>No. NIB</span>
                  <span>0206220061657</span>
                </div>
                <div className="flex justify-between">
                  <span>Notaris</span>
                  <span>Rizky S.Kom., M.Kom</span>
                </div>
              </div>

              <div className="mt-4 bg-green-500/10 text-green-400 text-xs px-4 py-2 rounded-lg">
                ✔ Perusahaan terdaftar resmi di Kementerian Hukum & HAM RI
              </div>
            </div>

            {/* KONTAK */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">
                Informasi Kontak
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <p>
                    Jl. Bakungan No.40, Sleman, Yogyakarta
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <p>0858-6951-1699</p>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <p>sebangku.games@gmail.com</p>
                </div>
              </div>
            </div>

            {/* JAM KERJA */}
            <div className="bg-blue-900/40 border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5" />
                <h3 className="font-semibold">Jam Kerja Kantor</h3>
              </div>

              <div className="text-sm text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>10.00 - 19.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span className="text-slate-400">Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="font-semibold text-lg mb-6">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm"
                />

                <input
                  name="instansi"
                  value={form.instansi}
                  onChange={handleChange}
                  placeholder="Instansi"
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="No. Telepon"
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm"
                />
              </div>

              <input
                name="topic"
                value={form.topic}
                onChange={handleChange}
                placeholder="Topik Ketertarikan"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Pesan"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>

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