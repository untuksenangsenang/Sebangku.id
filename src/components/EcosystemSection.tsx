import Image from "next/image";
import Link from "next/link";
import { Copy, BookOpen, Laptop, Users, Microchip, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const additionalFeatures = [
  {
    title: "Kurikulum Berbasis Boardgame",
    desc: "Integrasi permainan ke dalam pembelajaran untuk mengasah logika, literasi, dan keterampilan sosial anak tanpa merasa digurui.",
    icon: Copy,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Workshop & Pelatihan Guru",
    desc: "Memberdayakan fasilitator dan pendidik sekolah untuk menerapkan metode game-based learning secara efektif di dalam kelas.",
    icon: BookOpen,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Konsultasi Kurikulum",
    desc: "Pendampingan penuh dalam merancang dan mengintegrasikan game-based learning ke dalam program belajar sekolah atau lembaga.",
    icon: Laptop,
    color: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  },
  {
    title: "Penyedia Media Edugame",
    desc: "Katalog ratusan board game edukatif yang dikurasi oleh para ahli pendidikan, tersedia untuk dibeli atau disewa oleh sekolah.",
    icon: Users,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Monitoring & Evaluasi",
    desc: "Platform digital untuk memantau perkembangan belajar siswa melalui data gameplay, poin, dan laporan perkembangan karakter.",
    icon: Microchip,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "Turnamen & Event Edukasi",
    desc: "Penyelenggaraan kompetisi board game bertema pendidikan yang membangun semangat kolaborasi dan sportivitas pada siswa.",
    icon: Clock,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

const pillarsProgress = [
  { label: "Materi Pembelajaran", value: 95 },
  { label: "Pelatihan Fasilitator", value: 88 },
  { label: "Pengalaman Bermain", value: 92 },
];

export default function EcosystemSection() {
  return (
    <section id="ekosistem" className="py-20 lg:py-28 bg-[#020B2D] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Topic */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-900/40 text-blue-300 hover:bg-blue-900/50 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Expertise & Layanan
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Game-Based Learning <span className="text-blue-500">Expertise</span>
          </h2>
        </div>

        {/* Top Split Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=700&q=80&auto=format&fit=crop" 
                alt="Game Based Learning Ecosystem"
                width={700}
                height={500}
                className="w-full h-80 lg:h-[450px] object-cover mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
            </div>
            {/* Glowing borders */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur opacity-30 -z-10" />
          </div>

          {/* Right - Content & Progress Bars */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Mengapa Game-Based Learning?</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Riset menunjukkan bahwa anak-anak menyerap informasi 70% lebih efektif ketika belajar melalui permainan. Sebangku mengintegrasikan metode ini ke dalam kurikulum formal untuk menciptakan pengalaman belajar yang tak terlupakan.
            </p>

            <div className="flex flex-col gap-5">
              {pillarsProgress.map((pillar) => (
                <div key={pillar.label} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-300">{pillar.label}</span>
                    <span className="text-blue-400">{pillar.value}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-white/5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      style={{ width: `${pillar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link href="#katalog" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-400 font-semibold rounded-xl border border-blue-500/30 hover:bg-blue-600/30 transition-colors">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((item) => (
            <div 
              key={item.title}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
