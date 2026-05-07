"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Camera,
  Video,
  MessageCircle,
  Globe,
} from "lucide-react";

const footerLinks = {
  layanan: [
    { label: "Toko Board Game", href: "#ekosistem" },
    { label: "Sebangku Cafe", href: "#kunjungi" },
    { label: "Pelatihan Guru", href: "#expertise" },
    { label: "Program Sekolah", href: "#expertise" },
    { label: "Corporate Event", href: "#" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "#expertise" },
    { label: "Visi & Misi", href: "#" },
    { label: "Tim Kami", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Blog & Artikel", href: "#blog" },
  ],
  komunitas: [
    { label: "Program Loyalitas", href: "#ekosistem" },
    { label: "Leaderboard", href: "#" },
    { label: "Forum Diskusi", href: "#" },
    { label: "Referral Program", href: "#" },
    { label: "Partner Sekolah", href: "#trust" },
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

  return (
    <footer className="bg-[#3A89D6] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Logo */}
            <Link href="#beranda" className="flex items-center gap-2">
              {/* Ganti src dengan path logo Anda, misal: /assets/logo.png */}
              <Image
                src="/assets/logo.png"
                alt="Sebangku Logo"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-white">
                Sebangku.id
              </span>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              PT Sebangku Edukasi Indonesia adalah toko game literasi anak pertama di Indonesia yang mempelopori media pembelajaran yang aman, nyaman, dan menyenangkan bagi anak-anak.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Jl. Bakungan No.10A, Bakungan, Wedomartani,
                  Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                <span className="text-white/80 text-sm">085869511699</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                <span className="text-white/80 text-sm">sebangku.games@gmail.com</span>
              </div>
            </div>

            {/* Social media */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center border border-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">
              Layanan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/75 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/75 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Komunitas */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">
              Komunitas
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.komunitas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/70 text-xs text-center sm:text-left">
              © {currentYear} <strong className="text-white">PT Sebangku Jaya Abadi</strong>. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/70 text-xs hover:text-white transition-colors"
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