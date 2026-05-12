"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Partner", href: "#partner" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Import Poppins font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .navbar-font {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <header
        className={`navbar-font fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px]">

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.png"
                  alt="Sebangku Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span
                className="text-[17px] font-bold tracking-tight leading-tight"
                style={{ color: "#3989D6" }}
              >
                PT. Sebangku Jaya Abadi
              </span>
            </Link>

            {/* ── DESKTOP MENU ── */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-[15.5px] font-semibold transition-colors duration-200 rounded-md ${
                        isActive
                          ? "text-[#3989D6]"
                          : "text-gray-600 hover:text-[#3989D6] hover:bg-blue-50"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-5 h-[3px] rounded-full"
                          style={{ backgroundColor: "#3989D6" }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── CTA BUTTON ── */}
            <div className="hidden lg:flex items-center">
              <Link
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20Sebangku"
                target="_blank"
                className="inline-flex items-center justify-center px-7 py-[10px] text-[15px] font-semibold text-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-100"
                style={{ backgroundColor: "#3989D6" }}
              >
                Mulai Sekarang
              </Link>
            </div>

            {/* ── HAMBURGER (mobile) ── */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#3989D6" }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* ── MOBILE MENU ── */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-1 border-t border-gray-100 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-150 ${
                        isActive
                          ? "text-white"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#3989D6]"
                      }`}
                      style={
                        isActive
                          ? { backgroundColor: "#3989D6" }
                          : {}
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              {/* CTA Mobile */}
              <li className="pt-3 px-1">
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-full text-white text-[15px] font-semibold shadow transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#3989D6" }}
                >
                  Mulai Sekarang
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}