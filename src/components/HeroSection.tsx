"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Blocks } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        {/* BADGE (diperkecil di mobile) */}
        <div className="inline-flex items-center border border-[#2E2415] backdrop-blur 
        px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-6 shadow-sm">
          <span className="text-xs sm:text-sm text-[#2E2415]">
            Ekosistem Media Permainan{" "}
            <span className="text-[#3A89D6] font-semibold">
              #1 Indonesia
            </span>
          </span>
        </div>

        {/* TITLE (dibesarkan di mobile) */}
        <h1 className="
          text-[clamp(2.6rem,7vw,4.5rem)] 
          sm:text-[clamp(3rem,6vw,4.5rem)]
          font-extrabold leading-tight text-[#2E2415] mb-4 sm:mb-6
        ">
          Transformasi Edukasi Melalui <br />
          Media Permainan

          {/* ICON */}
          <span className="inline-flex items-center ml-2 sm:ml-3 align-middle">
            <div className="w-7 h-7 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            </div>
            <div className="w-7 h-7 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center -ml-2 border-2 border-white">
              <Blocks className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-[#2E2415] max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Sebangku.id adalah game literasi anak pertama di Indonesia yang
          mempelopori media pembelajaran yang aman, nyaman, dan menyenangkan
          bagi anak-anak.
        </p>

        {/* BUTTON */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Link
            href="/#ekosistem"
            className="px-5 py-2.5 sm:px-6 sm:py-3 
            rounded-full 
            border border-[#3A89D6] 
            text-[#3A89D6] 
            font-semibold 
            hover:bg-[#3A89D6] hover:text-white
            transition text-sm sm:text-base"
          >
            Explorasi Katalog
          </Link>

          <Link
            href="/#expertise"
            className="px-5 py-2.5 sm:px-6 sm:py-3 
            rounded-full 
            border border-[#F5A30B] 
            text-[#F5A30B] 
            font-semibold 
            hover:bg-[#F5A30B] hover:text-white
            transition text-sm sm:text-base"
          >
            Tentang Kami
          </Link>
        </div>
      </div>

      <div className="
  absolute left-[-20px] sm:left-20 
  bottom-[10px] sm:bottom-0 md:bottom-10
  w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px]
  z-[2]
">
        <Image
          src="/assets/caca.png"
          alt="caca"
          width={1000}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* RIGHT IMAGE (dibesarkan) */}
      <div className="
        absolute right-[-20px] sm:right-0 bottom-0 
        w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px]
        z-[2]
      ">
        <Image
          src="/assets/marica.png"
          alt="marica"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}