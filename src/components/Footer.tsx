"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Left Section */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="PT Sebangku"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl font-extrabold text-[#2D2D2D]">
                PT . Sebangku Jaya Abadi
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#555] leading-9 text-[17px] max-w-md">
              Transformasi Pembelajaran Melalui Media Kreatif. Kami menghadirkan ekosistem media edukasi interaktif untuk meningkatkan kompetensi SDM institusi Anda.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-[22px] font-extrabold text-[#2D2D2D] mb-5 uppercase tracking-wide">
              Layanan
            </h3>

            <ul className="space-y-4 text-[#444] text-[18px]">
              <li>• Game Edukasi Digital</li>
              <li>• Board Game Custom</li>
              <li>• Animasi & Motion Graphic</li>
              <li>• Media AR Interaktif</li>
              <li>• Konsultasi Edukasi</li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-[22px] font-extrabold text-[#2D2D2D] mb-5 uppercase tracking-wide">
              Hubungi Kami
            </h3>

            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#444]" />
                <a
                  href="mailto:sebangkukuliner@gmail.com"
                  className="text-[#444] text-[18px] hover:text-black transition-colors"
                >
                  pt.sebangku@gmail.com
                </a>
              </div>

              

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#444]" />
                <span className="text-[#444] text-[18px]">
                  Yogyakarta, Indonesia
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <p className="text-[#444] text-[17px]">
            © {currentYear} PT Sebangku Jaya Abadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}