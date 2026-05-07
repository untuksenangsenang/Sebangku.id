"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  FileText,
  Globe,
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
      if (data.success) alert("Pesan berhasil dikirim!");
    } catch {
      alert("Terjadi kesalahan");
    }
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-[#3A89D6]/30 text-[#3A89D6] text-xs px-4 py-1.5 rounded-full mb-4">
            <Phone className="w-4 h-4" /> Legalitas & Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A89D6] mb-3">
            Informasi Resmi & Hubungi Kami
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Untuk kebutuhan korespondensi profesional, kerjasama, dan informasi resmi perusahaan, silakan hubungi kami melalui saluran berikut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">

            {/* LEGAL */}
            <div className="bg-[#3A89D6] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm">Informasi Legal Perusahaan</h3>
              </div>
              <p className="text-white/60 text-xs mb-4 ml-9">Data resmi untuk kebutuhan korespondensi profesional</p>

              <div className="text-sm space-y-3">
                {[
                  ["Nama Perusahaan", "PT Sebangku Jaya Abadi"],
                  ["No. NPWP", "92.060.3461.542.000"],
                  ["No. NIB", "0206220061657"],
                  ["AHU", "00104990.AH.01.11."],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">{label}</span>
                    <span className="text-white font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-green-500/20 text-green-300 text-xs px-4 py-2 rounded-lg flex items-center gap-2">
                <span>✔</span> Perusahaan terdaftar resmi di Kementerian Hukum & HAM RI
              </div>
            </div>

            {/* KONTAK */}
            <div className="bg-[#3A89D6] rounded-2xl p-6">
              <h3 className="font-bold text-white text-sm mb-4">Informasi Kontak</h3>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs mb-0.5">Alamat Kantor</p>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Jl. Bakungan No.10A, Bakungan, Wedomartani,<br />
                      Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs mb-0.5">Telepon / WhatsApp</p>
                    <p className="text-white/70 text-xs">085869511699</p>
                    <p className="text-white/70 text-xs">085870459329</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs mb-0.5">Email</p>
                    <p className="text-white/70 text-xs">Sebangkukuliner@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs mb-0.5">Website & Media Sosial</p>
                    <p className="text-white/70 text-xs">www.sebangku.id</p>
                    <p className="text-white/70 text-xs">Instagram: @Sebangku.Gamecafe</p>
                    <p className="text-white/70 text-xs">TikTok: @sebangku.gamecafe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* JAM KERJA */}
            <div className="bg-[#3A89D6] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm">Jam Kerja Kantor</h3>
              </div>

              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Senin – Jumat</span>
                  <span className="text-white font-medium">10.00 – 19.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sabtu – Minggu & Hari Libur</span>
                  <span className="text-white font-medium">Tutup</span>
                </div>
              </div>

              <p className="text-white/50 text-xs mt-4">○ Follow kami @Sebangku.cafe</p>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-[#3A89D6] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white">Kirim Pesan</h3>
            </div>
            <p className="text-white/60 text-xs mb-6 ml-9">Kami akan merespons dalam 1×24 jam kerja</p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-white text-xs font-medium mb-1 block">Nama Lengkap *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="w-full bg-white/90 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <label className="text-white text-xs font-medium mb-1 block">Instansi / Sekolah *</label>
                  <input
                    name="instansi"
                    value={form.instansi}
                    onChange={handleChange}
                    placeholder="Nama Instansi Anda"
                    className="w-full bg-white/90 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-white text-xs font-medium mb-1 block">Email *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@instansi.com"
                    className="w-full bg-white/90 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <label className="text-white text-xs font-medium mb-1 block">No. Telepon</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+62 8xx-xxxx-xxxx"
                    className="w-full bg-white/90 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-xs font-medium mb-1 block">Topik Ketertarikan *</label>
                <input
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  placeholder="Topik Ketertarikan"
                  className="w-full bg-white/90 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="text-white text-xs font-medium mb-1 block">Pesan *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Ceritakan kebutuhan Anda atau pertanyaan yang ingin disampaikan..."
                  className="w-full bg-white/90 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white hover:bg-white/90 text-[#3A89D6] font-bold rounded-xl py-3 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>

              <p className="text-xs text-white/50 text-center">
                Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi kami.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}