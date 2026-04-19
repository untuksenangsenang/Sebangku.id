"use client";

import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Blocks } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020617]"
    >
      {/* Background radial gradient layers to match screenshot vibes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020617] to-[#020617] pointer-events-none" />
      
      {/* Optional faint vertical grid lines matching screenshot */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #4f4f4f 1px, transparent 1px)',
          backgroundSize: '100px 100%'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center mt-12">
        
        {/* Badge Center */}
        <div className="animate-fadeIn opacity-0 [animation-delay:100ms] flex items-center gap-2 border border-blue-500/30 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <span className="text-sm font-medium text-slate-300">
            Ekosistem Game - Based Learning <span className="text-blue-400 font-bold tracking-wide">#1 Indonesia</span>
          </span>
        </div>

        {/* Main Heading Center */}
        <h1 className="animate-fadeIn opacity-0 [animation-delay:200ms] text-4xl sm:text-3xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mb-8">
          Transformasi <span className="text-blue-400">Edukasi</span> Melalui <br />
          Media <span className="text-blue-400">Permainan</span>
          <span className="inline-flex items-center align-middle ml-3 -mt-2">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative z-10">
                <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 text-[#020617] fill-[#020617]" />
             </div>
             <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform -ml-3 relative z-0 border-2 border-[#020617]">
                <Blocks className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
             </div>
          </span>
        </h1>

        {/* Subtitle Center */}
        <p className="animate-fadeIn opacity-0 [animation-delay:300ms] text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Ekosistem Game-Based Learning untuk pengembangan karakter <br className="hidden md:block" />
          dan kreativitas melalui board game edukasi
        </p>

        {/* Custom Buttons Center */}
        <div className="animate-fadeIn opacity-0 [animation-delay:400ms] flex flex-wrap justify-center gap-4">
          <Link 
            href="#ekosistem" 
            className="px-8 py-3.5 rounded-full border border-slate-700 bg-white/5 text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
          >
            Explorasi Katalog
          </Link>
          <Link 
            href="#expertise" 
            className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
          >
            Tentang Kami
          </Link>
        </div>

      </div>

      
      {/* VR Headset Image on the LEFT */}
      <div className="absolute left-0 bottom-0 md:bottom-[5%] w-64 md:w-80 lg:w-[450px] -translate-x-[20%] translate-y-1/4 pointer-events-none drop-shadow-[0_0_40px_rgba(37,99,235,0.4)] animate-float-slow z-20">
        <Image
          src="/assets/vrasset.png"
          alt="Virtual Reality Asset"
          width={600}
          height={600}
          className="w-full h-auto object-contain drop-shadow-2xl opacity-90"
          priority
        />
      </div>

      {/* Rocket Image on the RIGHT */}
      <div className="absolute right-0 bottom-0 md:bottom-[5%] w-64 md:w-80 lg:w-[420px] translate-x-[20%] translate-y-1/4 pointer-events-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-float z-20">
        <Image
          src="/assets/rocket.png"
          alt="Rocket"
          width={600}
          height={600}
          className="w-full h-auto object-contain drop-shadow-2xl opacity-90"
        />
      </div>

    </section>
  );
}
