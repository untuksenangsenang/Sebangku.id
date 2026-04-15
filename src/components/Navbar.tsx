"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog", href: "#ekosistem" },
  { label: "Cafe", href: "#kunjungi" },
  { label: "Tentang Kami", href: "#expertise" },
  { label: "Blog", href: "#blog" },
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
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="#beranda" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-blue-300 transition-shadow duration-300">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-blue-600">Sebangku</span>
              <span className="text-gray-800">.id</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-blue-600 font-semibold hover:bg-blue-50 hover:text-blue-700"
              asChild
            >
              <Link href="#masuk">Masuk</Link>
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-blue-200 transition-all duration-200 rounded-xl px-5"
              asChild
            >
              <Link href="#daftar">Daftar Gratis</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
          <ul className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
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
