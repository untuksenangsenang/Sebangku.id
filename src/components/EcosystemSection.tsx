"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Handshake, Sparkles, Rocket } from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */

const services = [
  {
    badge: "Digital & Mobile",
    badgeBg: "bg-blue-500/90",
    title: "Pengembangan Game Edukasi",
    desc: "Digital & mobile game untuk pembelajaran interaktif yang meningkatkan engagement dan retensi peserta.",
    link: "#kontak",
    image:
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=700&q=80&auto=format&fit=crop",
    alt: "Digital & Mobile Game",
  },
  {
    badge: "Fisik & Interaktif",
    badgeBg: "bg-teal-500/90",
    title: "Produksi Board Game Custom",
    desc: "Permainan fisik yang dirancang khusus sesuai kurikulum dan kebutuhan spesifik institusi Anda.",
    link: "#kontak",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=700&q=80&auto=format&fit=crop",
    alt: "Board Game Custom",
  },
  {
    badge: "Visual & Kreatif",
    badgeBg: "bg-gray-800/90",
    title: "Animasi & Motion Graphic",
    desc: "Visual storytelling yang memperjelas konsep abstrak dan meningkatkan daya tarik materi pembelajaran.",
    link: "#kontak",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&q=80&auto=format&fit=crop",
    alt: "Animasi & Motion Graphic",
  },
];

const benefits = [
  {
    icon: Handshake,
    iconColor: "text-orange-500",
    title: "Meningkatkan Keterlibatan",
    desc: "Peserta lebih aktif dan antusias mengikuti proses pembelajaran.",
  },
  {
    icon: Sparkles,
    iconColor: "text-blue-500",
    title: "Memudahkan Pemahaman",
    desc: "Konsep abstrak menjadi lebih mudah dipahami melalui visual interaktif.",
  },
  {
    icon: Rocket,
    iconColor: "text-red-500",
    title: "Siap Diimplementasikan",
    desc: "Alat bantu ajar yang langsung bisa digunakan oleh institusi Anda.",
  },
];

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

/* ──────────────────────────────────────────────
   COMPONENT
────────────────────────────────────────────── */

export default function EcosystemSection() {
  return (
    <section
      id="ekosistem"
      className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════
            PART 1 — LAYANAN MEDIA KREATIF
        ════════════════════════════════════════ */}
        <div className="mb-20 lg:mb-28">

          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 border border-[#3A89D6] text-[#3A89D6] text-sm font-semibold px-5 py-1.5 rounded-full">
              ✦ Solusi Kami
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={1}
          >
            Layanan Media Kreatif{" "}
            <span className="text-[#3A89D6]">Sebangku</span>
          </motion.h2>

          {/* Service Cards */}
          <div className="bg-white rounded-3xl shadow-sm p-6 lg:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  className="flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 lg:h-52">
                    <Image
                      src={svc.image}
                      alt={svc.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Badge overlay */}
                    <span
                      className={`absolute top-3 left-3 ${svc.badgeBg} text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm`}
                    >
                      {svc.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-500 leading-relaxed flex-1">
                      {svc.desc}
                    </p>
                    <Link
                      href={svc.link}
                      className="inline-flex items-center gap-1.5 text-[#3A89D6] font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      Pelajari lebih lanjut
                      <span className="text-base">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            PART 2 — MANFAAT DARI LAYANAN
        ════════════════════════════════════════ */}
        <div className="text-center flex flex-col items-center">
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
          >
            Manfaat Dari Layanan{" "}
            <span className="text-[#3989D6]">Sebangku</span>
          </motion.h2>

          <motion.p
            className="text-gray-500 text-base lg:text-lg mb-10 max-w-xl leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={1}
          >
            Meningkatkan minat belajar, kreativitas, kerja sama tim, dan
            pemahaman materi melalui media interaktif yang menarik dan mudah
            dipahami.
          </motion.p>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i * 0.8}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center"
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <b.icon className={`w-7 h-7 ${b.iconColor}`} strokeWidth={1.8} />
                </motion.div>

                <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}