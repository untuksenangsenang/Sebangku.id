"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] border-t border-gray-200">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20">

          {/* ───────── LEFT SECTION ───────── */}
          <div className="space-y-7">

            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="PT Sebangku"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <h2 className="text-[22px] leading-tight font-extrabold text-[#2D2D2D]">
                PT. Sebangku Jaya Abadi
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#555] leading-8 text-[17px] max-w-md text-justify">
              Transformasi Pembelajaran Melalui Media Kreatif.
              Kami menghadirkan ekosistem media edukasi interaktif
              untuk meningkatkan kompetensi SDM institusi Anda.
            </p>
          </div>

          {/* ───────── MIDDLE SECTION ───────── */}
          <div>
            <h3 className="text-[22px] font-extrabold text-[#2D2D2D] mb-7 uppercase tracking-wide">
              Layanan
            </h3>

            <ul className="space-y-5 text-[#444] text-[17px] leading-relaxed">
              <li>• Game Edukasi Digital</li>
              <li>• Board Game Custom</li>
              <li>• Animasi & Motion Graphic</li>
              <li>• Media AR Interaktif</li>
              <li>• Konsultasi Edukasi</li>
            </ul>
          </div>

          {/* ───────── RIGHT SECTION ───────── */}
          <div>
            <h3 className="text-[22px] font-extrabold text-[#2D2D2D] mb-7 uppercase tracking-wide">
              Hubungi Kami
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#3989D6]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:pt.sebangku@gmail.com"
                    className="text-[#444] text-[17px] hover:text-black transition-colors"
                  >
                    pt.sebangku@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#3989D6]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Lokasi
                  </p>

                  <span className="text-[#444] text-[17px]">
                    Jl. Bakungan No.10A, Bakungan, Wedomartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <p className="text-[#555] text-[15px] text-center sm:text-left">
            © {currentYear} PT Sebangku Jaya Abadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}