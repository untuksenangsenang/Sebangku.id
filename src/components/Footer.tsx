"use client";

import Link from "next/link";
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Camera,
  Video,
  MessageCircle,
  Globe,
  ArrowRight,
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
    href: "https://instagram.com/sebangku.id",
    label: "Instagram",
    color: "hover:bg-pink-500",
  },
  {
    icon: Video,
    href: "https://youtube.com/@sebangku",
    label: "YouTube",
    color: "hover:bg-red-500",
  },
  {
    icon: MessageCircle,
    href: "https://twitter.com/sebangku_id",
    label: "Twitter/X",
    color: "hover:bg-sky-500",
  },
  {
    icon: Globe,
    href: "https://facebook.com/sebangku.id",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <Link href="#beranda" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-blue-400">Sebangku</span>
                <span className="text-white">.id</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              PT Sebangku Edukasi Indonesia adalah toko game literasi anak pertama di Indonesia yang mempelopori media pembelajaran yang aman, nyaman, dan menyenangkan bagi anak-anak.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Jl. Bakungan No.10A, Bakungan, Wedomartani,
 Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">085869511699</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">sebangku.games@gmail.com</span>
              </div>
            </div>

            {/* Social media */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${color} transition-colors duration-200 group`}
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Komunitas
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.komunitas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
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
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              © {currentYear} <strong className="text-slate-400">PT Sebangku Digital Nusantara</strong>. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-slate-500 text-xs hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
