"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Ekosistem", href: "#ekosistem" },
  { label: "Partner", href: "#partner" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020B2D]/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-blue-900/10"
          : "bg-[#020B2D]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* LOGO */}
          <Link href="#beranda" className="flex items-center gap-2 group">
            <Image
              src="/assets/logo.png"
              alt="Sebangku Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-semibold text-white">
              Sebangku.id
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-6">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
            >
              <Link href="#kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 pt-4 border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* CTA MOBILE */}
            <li className="pt-3 px-4">
              <Button
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Link href="#kontak" onClick={() => setIsOpen(false)}>
                  Hubungi Kami
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}