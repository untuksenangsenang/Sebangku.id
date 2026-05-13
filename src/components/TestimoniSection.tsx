"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */

const testimonials = [
  {
    accent: "from-purple-500 via-pink-500 to-red-400",
    quote:
      '"Kolaborasi dalam pengembangan Game AMIGO dan Nazma membuktikan bahwa digitalisasi literasi bisa dilakukan dengan sangat menyenangkan. Tim Sebangku berhasil menerjemahkan metodologi pendidikan ke dalam mekanisme permainan yang mampu meningkatkan minat baca mahasiswa kami secara signifikan."',
    name: "Dosen Universitas Pendidikan Indonesia (UPI)",
    org: "",
    rating: 5,
    avatar: "",
    initials: "SB",
    bgColor: "bg-purple-600",
  },
  {
    accent: "from-blue-500 via-cyan-400 to-yellow-400",
    quote:
      '"Membangun pemahaman ekonomi melalui Game Literasi Finansial Muara Kuin adalah langkah cerdas. Sebangku tidak hanya membuat permainan, tapi juga melestarikan kearifan lokal dalam balutan media interaktif yang sangat relevan untuk kebutuhan edukasi masyarakat saat ini."',
    name: "Mitra Proyek Literasi Finansial",
    org: "",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80&auto=format&fit=crop&crop=face",
    initials: "UP",
    bgColor: "bg-blue-700",
  },
  {
    accent: "from-blue-500 via-indigo-500 to-yellow-400",
    quote:
      '"Pembelajaran kalkulus dan aritmatika sering dianggap menakutkan, namun Game Wortelmatika mengubah stigma tersebut. Inovasi ini membantu mahasiswa kami memahami logika matematika dengan lebih intuitif melalui visual yang profesional namun tetap playful."',
    name: "Dosen Universitas Sebelas Maret",
    org: "",
    rating: 5,
    avatar: "",
    initials: "M",
    bgColor: "bg-indigo-600",
  },
  {
    accent: "from-blue-500 via-blue-400 to-yellow-300",
    quote:
      '"Pemanfaatan Poster Digital AR untuk Kesehatan Ibu Menyusui memberikan pengalaman edukasi yang revolusioner. Pasien saya jauh lebih mudah memahami instruksi medis saat informasi tersebut tersaji secara visual dan interaktif melalui teknologi Augmented Reality."',
    name: "Dokter Spesialis Kandungan & Kebidanan",
    org: "",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80&auto=format&fit=crop&crop=face",
    initials: "DW",
    bgColor: "bg-blue-600",
  },
  {
    accent: "from-teal-500 via-green-400 to-blue-400",
    quote:
      '"Animasi motion graphic tentang rekonstruksi Kerajaan Sriwijaya yang digarap Sebangku adalah sebuah karya seni yang akurat secara historis. Visualnya yang megah mampu menjembatani perbedaan budaya dan menghidupkan kembali kejayaan masa lalu untuk dipelajari generasi global."',
    name: "Peneliti Kebudayaan & Sejarah dari Jepang",
    org: "",
    rating: 5,
    avatar: "",
    initials: "KS",
    bgColor: "bg-teal-600",
  },
];

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

/* ──────────────────────────────────────────────
   STAR RATING
────────────────────────────────────────────── */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   CARD
────────────────────────────────────────────── */

type Testimonial = (typeof testimonials)[number];

function TestimoniCard({
  t,
  isActive,
}: {
  t: Testimonial;
  isActive: boolean;
}) {
  return (
    <motion.div
      className={`relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 select-none h-full transition-all duration-500 ${
        isActive
          ? "scale-100 opacity-100"
          : "scale-[0.98] md:scale-95 opacity-100 md:opacity-60"
      }`}
    >
      {/* Top Accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${t.accent}`} />

      <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
        {/* Quote */}
        <span className="text-4xl font-serif text-[#3A89D6] leading-none">
          "
        </span>

        {/* Text */}
        <p className="text-gray-600 text-[14px] md:text-sm leading-relaxed italic flex-1 break-words">
          {t.quote}
        </p>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
          {/* Avatar */}
          {t.avatar ? (
            <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-white shadow">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
          ) : (
            <div
              className={`w-11 h-11 rounded-full ${t.bgColor} flex items-center justify-center shrink-0 ring-2 ring-white shadow`}
            >
              <span className="text-white text-sm font-bold">
                {t.initials}
              </span>
            </div>
          )}

          {/* Info */}
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-gray-900 leading-tight break-words">
              {t.name}
            </span>

            {t.org && (
              <span className="text-xs text-gray-500">
                {t.org}
              </span>
            )}

            <StarRating count={t.rating} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────── */

export default function TestimoniSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  /* Responsive visible cards */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = testimonials.length;

  const prev = () =>
    setCurrent((c) => (c - 1 + total) % total);

  const next = () =>
    setCurrent((c) => (c + 1) % total);

  /* Auto Slide */
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      next();
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, current]);

  /* Visible Cards */
  const visibleIndices = Array.from(
    { length: visibleCount },
    (_, i) => (current + i) % total
  );

  return (
    <section
      ref={sectionRef}
      id="testimoni"
      className="py-16 md:py-20 lg:py-28 bg-[#F5F7FA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex justify-center mb-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-500 bg-yellow-50 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 rounded-full">
            ⭐ Testimoni
          </span>
        </motion.div>

        <motion.h2
          className="text-center text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          Dipercaya oleh Institusi Terkemuka
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 text-sm sm:text-base lg:text-lg mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          Dengarkan langsung dari para mitra kami bagaimana Sebangku
          mengubah cara mereka belajar dan mengajar.
        </motion.p>

        {/* Slider */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
            {visibleIndices.map((idx, pos) => (
              <motion.div
                key={`${current}-${pos}`}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: pos * 0.08,
                  ease: "easeOut",
                }}
              >
                <TestimoniCard
                  t={testimonials[idx]}
                  isActive={visibleCount === 1 ? true : pos === 1}
                />
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#3A89D6] hover:border-[#3A89D6] hover:text-white text-gray-500 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-[#3A89D6]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#3A89D6] hover:border-[#3A89D6] hover:text-white text-gray-500 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}