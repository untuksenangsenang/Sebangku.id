"use client";

import Image from "next/image";
import { Target, Eye, Heart, Lightbulb, Star, Zap } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-block border-2 border-[#3A89D6] px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-4">
            <span className="text-[#3A89D6] font-semibold text-sm md:text-base">
              Identitas & Nilai Perusahaan
            </span>
          </div>

          <p className="text-gray-600 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Sebangku.id menghadirkan pengalaman belajar yang menyenangkan
            melalui game yang mendorong interaksi antar pemain.
          </p>
        </div>

{/* TOP CONTENT */}
<div className="flex justify-center mb-16 md:mb-24">
  <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl w-full">

 {/* LEFT CARD */}
<div className="bg-[#3A89D6] text-white rounded-3xl p-6 md:p-10 md:pb-0 relative overflow-hidden text-center md:text-left md:min-h-[500px]">

  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
    Tentang PT SEBANGKU JAYA ABADI
  </h3>

  <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
    PT Sebangku Jaya Abadi adalah perusahan edutech yang menjadi pusat edukasi keluarga unggul dunia yang menyediakan pembelajaran yang aman, nyaman dan menyenangkan.
  </p>

  <div className="flex gap-3 md:gap-4 mb-6 flex-wrap justify-center md:justify-start">
    {[
      ["2016", "Didirikan"],
      ["1 Kota", "Kota Operasi"],
      ["200+", "Produk Game"],
    ].map(([num, label]) => (
      <div
        key={label}
        className="bg-blue-600 px-4 md:px-5 py-2 md:py-3 rounded-xl text-center"
      >
        <p className="font-bold text-base md:text-xl">{num}</p>
        <span className="text-[10px] md:text-xs">{label}</span>
      </div>
    ))}
  </div>

  {/* Mobile version */}
  <div className="-mx-6 -mb-6 mt-2 block md:hidden">
    <Image
      src="/assets/cacaExpertise.png"
      alt="maskot"
      width={800}
      height={800}
      className="w-full h-auto object-contain object-bottom block"
      priority
    />
  </div>

  {/* Desktop version - tengah card, besar */}
  <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%]">
    <Image
      src="/assets/cacaExpertise.png"
      alt="maskot"
      width={800}
      height={800}
      className="w-full h-auto object-contain object-bottom block"
      priority
    />
  </div>
</div>

    {/* RIGHT CARD */}
    <div className="bg-[#3A89D6] text-white rounded-3xl p-6 md:p-10 text-center md:text-left">

      {/* VISI */}
      <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-900/20 rounded-xl flex items-center justify-center">
          <Eye className="text-blue-300 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold">Visi Kami</h3>
      </div>

      <p className="text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
        Menjadi pusat edukasi keluarga unggulan dunia yang menyediakan pembelajaran yang aman, nyaman dan menyenangkan.
      </p>

      {/* MISI */}
      <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
          <Target className="text-orange-300 w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold">Misi Kami</h3>
      </div>

      <ol className="list-decimal pl-5 text-sm md:text-base space-y-2 md:space-y-3 leading-relaxed text-left">
        <li>Melakukan penelitian di bidang teknologi pendidikan dan menciptakan inovasi pembelajaran berupa game edukasi.</li>
        <li>Mengembangkan pusat sumber belajar untuk anak berbasis Story Based Learning berisi video, animasi, dan worksheet yang berkualitas.</li>
        <li>Menyelenggarakan workshop pembelajaran berstandar global melalui kemitraan dan jejaring nasional, regional maupun global.</li>
        <li>Turut serta melestarikan kebudayaan lokal dengan mengemasnya dalam bentuk modern serta mempublikasikannya kepada masyarakat skala nasional dan internasional.</li>
        <li>Mendirikan wahana – wahana rekreasi edukatif yang memperkuat bonding keluarga dan meningkatkan budaya belajar.</li>
      </ol>
    </div>

  </div>
</div>

        {/* NILAI */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block border-2 border-[#3A89D6] px-4 md:px-6 py-1.5 md:py-2 rounded-full">
            <span className="text-[#3A89D6] font-semibold text-sm md:text-base">
              Nilai-Nilai Kami
            </span>
          </div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6 md:gap-10 items-center">

          {/* MARI IMAGE */}
          <div className="hidden md:block absolute -left-10 lg:-left-80 bottom-[-80]
            w-[260px] lg:w-[620px]">
            <Image
              src="/assets/mariExpertise.png"
              alt="character"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* VALUE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:col-span-3 md:pl-[220px] lg:pl-[360px]">

            {[
              { title: "Inovasi Kurikulum", desc: "Terus berinovasi dalam merancang konten edukasi yang relevan dan menarik bagi generasi digital.", icon: Lightbulb },
              { title: "Kualitas Terjamin", desc: "Setiap produk dan layanan kami dirancang dengan standar pedagogis yang ketat bersama para ahli pendidikan.", icon: Star },
              { title: "Passion for Play", desc: "Kami percaya bahwa bermain adalah cara paling alami untuk belajar dan berkembang.", icon: Heart },
              { title: "Dampak Nyata", desc: "Fokus pada hasil terukur: peningkatan engagement siswa, karakter, dan keterampilan abad ke-21.", icon: Zap },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-[#3A89D6] text-white p-5 md:p-6 rounded-2xl shadow-md hover:scale-105 transition"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}