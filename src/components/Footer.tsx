"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Camera, Video, Globe } from "lucide-react";

const footerLinks = {
  navigasi: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Ekosistem", href: "#ekosistem" },
    { label: "Fitur & Layanan", href: "#fitur" },
    { label: "Kunjungi Cafe", href: "#kunjungi" },
    { label: "Hubungi Kami", href: "#kontak" },
  ],
  layanan: [
    { label: "Toko Edugame", href: "#ekosistem" },
    { label: "Sebangku Cafe", href: "#kunjungi" },
    { label: "Loyalty & Poin", href: "#ekosistem" },
    { label: "Pelatihan Guru", href: "#fitur" },
    { label: "Konsultasi Kurikulum", href: "#fitur" },
  ],
};

const socials = [
  {
    icon: Camera,
    href: "https://www.instagram.com/sebangku.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
  },
  {
    icon: Video,
    href: "https://youtube.com/@sebangku.eduplay?si=12gkqOHZsStqFNgc",
    label: "YouTube",
  },
  {
    icon: Globe,
    href: "https://www.facebook.com/GameLiterasiAnak?locale=id_ID",
    label: "Facebook",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-[#3A89D6] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Logo */}
            <Link
              href="#beranda"
              onClick={(e) => handleScroll(e, "#beranda")}
              className="flex items-center gap-2 w-fit"
            >
              <Image
                src="/assets/logo.png"
                alt="Sebangku Logo"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-white">Sebangku.id</span>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              PT Sebangku Jaya Abadi — ekosistem edukasi berbasis permainan pertama di Indonesia. Belajar yang aman, nyaman, dan menyenangkan untuk keluarga.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <span className="text-white/75 text-xs leading-relaxed">
                  Jl. Bakungan No.10A, Wedomartani, Kec. Ngemplak, Sleman, DIY 55584
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/70 shrink-0" />
                <a href="tel:085869511699" className="text-white/75 text-xs hover:text-white transition-colors">
                  085869511699
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/70 shrink-0" />
                <a href="mailto:sebangku.games@gmail.com" className="text-white/75 text-xs hover:text-white transition-colors">
                  sebangku.games@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center border border-white/20 hover:bg-white/35 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">Navigasi</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.navigasi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-white/75 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide">Layanan</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-white/75 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/65 text-xs text-center sm:text-left">
              © {currentYear}{" "}
              <strong className="text-white">PT Sebangku Jaya Abadi</strong>. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4">
              {["Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/65 text-xs hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}