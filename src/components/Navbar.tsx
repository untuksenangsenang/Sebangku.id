"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

        .navbar-font {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      <header
        className={`navbar-font fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/20 border-white/20 shadow-lg"
            : "bg-white/10 border-white/10"
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-10">
          <div className="h-[76px] flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-white/40 border border-white/20 overflow-hidden backdrop-blur-md">
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <span className="text-[18px] font-bold text-[#3989D6]">
                PT. Sebangku Jaya Abadi
              </span>
            </Link>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="mailto:pt.sebangku@gmail.com"
                className="px-7 py-3 rounded-full bg-[#3989D6] text-white text-[15px] font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Mulai Sekarang
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-white/30 border border-white/20 flex items-center justify-center backdrop-blur-md text-[#3989D6]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen
                ? "max-h-[200px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-2">
              <Link
                href="mailto:pt.sebangku@gmail.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full py-3 rounded-full bg-[#3989D6] text-white text-[15px] font-semibold"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}