import Image from "next/image";
import Link from "next/link";
import { Copy, BookOpen, Laptop, Users, Microchip, Clock } from "lucide-react";

const additionalFeatures = [
  {
    title: "Kurikulum Berbasis Boardgame",
    desc: "Integrasi permainan ke dalam pembelajaran untuk mengasah logika, literasi, dan keterampilan sosial anak tanpa merasa digurui.",
    icon: Copy,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/20",
    tagColor: "bg-amber-400/20 text-amber-200 border-amber-400/30",
    tags: ["Game Design", "Kurikulum", "Karakter"],
  },
  {
    title: "Workshop & Pelatihan Guru",
    desc: "Memberdayakan fasilitator dan pendidik sekolah untuk menerapkan metode game-based learning secara efektif di dalam kelas.",
    icon: BookOpen,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/20",
    tagColor: "bg-emerald-400/20 text-emerald-200 border-emerald-400/30",
    tags: ["Training", "Sertifikasi", "Fasilitator"],
  },
  {
    title: "Konsultasi Kurikulum",
    desc: "Pendampingan penuh dalam merancang dan mengintegrasikan game-based learning ke dalam program belajar sekolah atau lembaga.",
    icon: Laptop,
    iconColor: "text-sky-300",
    iconBg: "bg-sky-300/20",
    tagColor: "bg-sky-300/20 text-sky-200 border-sky-300/30",
    tags: ["Konsultasi", "Desain Program", "Evaluasi"],
  },
  {
    title: "Penyediaan Media Edugame",
    desc: "Katalog ratusan board game edukatif yang dikurasi oleh para ahli pendidikan, tersedia untuk dibeli atau disewa oleh sekolah.",
    icon: Users,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/20",
    tagColor: "bg-violet-400/20 text-violet-200 border-violet-400/30",
    tags: ["Katalog", "Board Game", "Edugame"],
  },
  {
    title: "Monitoring & Evaluasi",
    desc: "Platform digital untuk memantau perkembangan belajar siswa melalui data gameplay, poin, dan laporan perkembangan karakter.",
    icon: Microchip,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/20",
    tagColor: "bg-rose-400/20 text-rose-200 border-rose-400/30",
    tags: ["Data", "Analytics", "Reporting"],
  },
  {
    title: "Turnamen & Event Edukasi",
    desc: "Penyelenggaraan kompetisi board game bertema pendidikan yang membangun semangat kolaborasi dan sportivitas pada siswa.",
    icon: Clock,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/20",
    tagColor: "bg-orange-400/20 text-orange-200 border-orange-400/30",
    tags: ["Event", "Kompetisi", "Play-Day"],
  },
];

const pillarsProgress = [
  { label: "Peningkatan engagement siswa", value: 85 },
  { label: "Guru merasa lebih efektif mengajar", value: 78 },
  { label: "Sekolah puas dengan program kami", value: 92 },
];

export default function EcosystemSection() {
  return (
    <section id="ekosistem" className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-[#3A89D6] rounded-full px-8 py-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A89D6]">
              Edugame
            </h2>
          </div>
        </div>

        {/* Top Split Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=700&q=80&auto=format&fit=crop"
              alt="Game Based Learning Ecosystem"
              width={700}
              height={500}
              className="w-full h-72 lg:h-[320px] object-cover"
            />
          </div>

          {/* Right - Content & Progress Bars */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              Mengapa Edugame?
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Riset menunjukkan bahwa anak-anak menyerap informasi 70% lebih efektif ketika belajar melalui permainan. Sebangku mengintegrasikan metode ini ke dalam kurikulum formal untuk menciptakan pengalaman belajar yang tak terlupakan.
            </p>

            <div className="flex flex-col gap-4">
              {pillarsProgress.map((pillar) => (
                <div key={pillar.label} className="flex flex-col gap-1.5">
                  <span className="text-sm text-gray-700 font-medium">{pillar.label}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#3A89D6] h-2 rounded-full"
                      style={{ width: `${pillar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Link
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3A89D6] text-white font-semibold rounded-xl hover:bg-[#2e72b8] transition-colors text-sm"
              >
                Jadwalkan Konsultasi →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {additionalFeatures.map((item) => (
            <div
              key={item.title}
              className="bg-[#3A89D6] rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#2e72b8] transition-colors duration-300"
            >
              {/* Icon - left aligned, colored */}
              <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center self-start`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              {/* Title */}
              <h4 className="text-base font-bold text-white">{item.title}</h4>

              {/* Desc */}
              <p className="text-sm text-white/80 leading-relaxed flex-1">{item.desc}</p>

              {/* Tags - colored per card */}
              <div className="flex flex-wrap gap-2 mt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border ${item.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}