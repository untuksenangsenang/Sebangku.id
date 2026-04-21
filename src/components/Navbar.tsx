"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Toko Game", href: "#toko-game" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? "bg-[#020617] backdrop-blur-lg shadow-lg shadow-blue-900/10 border-b border-white/10"
    : "bg-[#020617]"
}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="#beranda" className="flex items-center gap-2 group">
            <Image
              src="/assets/logo.png"
              alt="Sebangku Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold">
              <span className="text-white">Sebangku.id</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="#kontak" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Hubungi Kami
            </Link>
            <Button
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium shadow-none rounded-full px-6"
              asChild
            >
              <Link href="#mulai">Mulai Sekarang</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2 border-t border-white/10 p-4 lg:p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 font-semibold"
                asChild
              >
                <Link href="#masuk" onClick={() => setIsOpen(false)}>
                  Masuk
                </Link>
              </Button>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                asChild
              >
                <Link href="#daftar" onClick={() => setIsOpen(false)}>
                  Daftar Gratis
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
