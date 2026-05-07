"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Ekosistem", href: "#ekosistem" },
  { label: "Partner", href: "#partner" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/logo.png"
              alt="Sebangku Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain group-hover:scale-105 transition"
            />
            <span className="text-lg font-bold text-[#3A89D6] tracking-tight">
              PT. Sebangku Jaya Abadi
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold transition relative ${
                      isActive
                        ? "text-[#3A89D6]"
                        : "text-blue-500 hover:text-[#2E2415]"
                    }`}
                  >
                    {link.label}

                    {/* ACTIVE UNDERLINE */}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F35E92] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-[#3A89D6] hover:bg-blue-600 text-white rounded-full px-6 font-semibold"
            >
              <Link
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20Sebangku"
                target="_blank"
              >
                Hubungi Kami
              </Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#2E2415]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 border-t pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-semibold transition ${
                      isActive
                        ? "bg-pink-500 text-white"
                        : "text-[#2E2415] hover:bg-gray-100"
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
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold"
              >
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
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