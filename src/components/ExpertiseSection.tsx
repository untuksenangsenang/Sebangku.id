import Image from "next/image";
import { CheckCircle2, BookOpen, Users, Trophy, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const specializations = [
  {
    icon: BookOpen,
    title: "Kurikulum Berbasis Permainan",
    desc: "Merancang modul pembelajaran yang terintegrasi dengan board game sesuai kurikulum nasional.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Users,
    title: "Pelatihan Guru & Fasilitator",
    desc: "Program sertifikasi untuk guru agar mampu memfasilitasi sesi Game-Based Learning secara efektif.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Lightbulb,
    title: "Desain Pengalaman Bermain",
    desc: "Merancang experience bermain yang menyenangkan sekaligus mengembangkan soft skills dan karakter.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Trophy,
    title: "Sistem Gamifikasi Sekolah",
    desc: "Implementasi sistem poin, badge, dan leaderboard untuk meningkatkan motivasi belajar siswa.",
    color: "text-purple-600 bg-purple-50",
  },
];

const achievements = [
  "Lebih dari 200 sesi workshop telah dilaksanakan",
  "Berpengalaman dengan sekolah SD, SMP, SMA & universitas",
  "Fasilitator bersertifikat internasional",
  "Konten kurikulum disesuaikan standar Kemendikbud",
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Workshop image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/50">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80&auto=format&fit=crop"
                alt="Sesi workshop Game-Based Learning bersama guru dan fasilitator"
                width={700}
                height={520}
                className="w-full h-[380px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl border border-blue-100 px-5 py-4">
              <p className="text-3xl font-extrabold text-blue-600">200+</p>
              <p className="text-sm text-gray-500 font-medium mt-0.5">
                Sesi Workshop
              </p>
              <p className="text-xs text-gray-400">di seluruh Indonesia</p>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10" />
            <div className="absolute top-1/3 -left-6 w-12 h-12 bg-indigo-200 rounded-full opacity-40 -z-10" />
          </div>

          {/* Right — Text content */}
          <div className="flex flex-col gap-8">
            <div>
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                🎓 Keahlian Kami
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Game-Based Learning{" "}
                <span className="text-blue-600">Expertise</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                Kami bukan sekadar toko board game. Sebangku.id adalah mitra
                strategis institusi pendidikan dalam mengimplementasikan
                metode pembelajaran berbasis permainan yang terukur dan
                berdampak nyata.
              </p>
            </div>

            {/* Specialization cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {specializations.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex flex-col gap-3">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
