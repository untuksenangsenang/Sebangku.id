
import { Target, Eye, Lightbulb, Users, Globe, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Inovatif",
    desc: "Terus mengembangkan metodologi dan produk belajar yang relevan.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Kolaboratif",
    desc: "Membangun ekosistem bersama sekolah, guru, dan pakar.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Globe,
    title: "Berkelanjutan",
    desc: "Menciptakan dampak jangka panjang bagi dunia pendidikan.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: BookOpen,
    title: "Edukatif",
    desc: "Mengedepankan nilai pembelajaran dalam setiap produk.",
    color: "from-purple-500 to-pink-600",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="identitas"
      className="py-20 lg:py-28 bg-[#020617] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-24">
          
          {/* Top Level: Identitas & Visi Misi */}
          <div>
            <div className="text-center mb-16">
              <Badge className="bg-blue-900/40 text-blue-300 hover:bg-blue-900/50 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                Identitas Kami
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Identitas & Nilai{" "}
                <span className="text-blue-500">Perusahaan</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                Sebangku.id tidak hanya sekedar portal pembelajaran, tapi sebuah gerakan untuk merevolusi cara belajar.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Logo Representation */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                {/* Simulated Puzzle Logo using CSS */}
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[3rem] bg-[#070d24] border border-white/10 shadow-2xl shadow-blue-900/20 flex flex-wrap p-8 gap-4 justify-center items-center">
                   {/* Simplified visual representation of the colorful 'S' puzzle */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[3rem] pointer-events-none" />
                   
                   <div className="w-full h-full relative">
                      <div className="absolute top-0 left-0 w-[45%] h-[45%] bg-teal-500 rounded-tl-[2rem] rounded-br-[1.5rem] shadow-lg shadow-teal-500/30 border border-white/10" />
                      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-pink-500 rounded-tr-[2rem] rounded-bl-[1.5rem] shadow-lg shadow-pink-500/30 border border-white/10" />
                      <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-indigo-600 rounded-bl-[2rem] rounded-tr-[1.5rem] flex items-center justify-center shadow-lg shadow-indigo-600/30 border border-white/10 z-10" />
                      <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-yellow-500 rounded-br-[2rem] rounded-tl-[1.5rem] shadow-lg shadow-yellow-500/30 border border-white/10" />
                      
                      {/* Center overlapping piece to form 'S' shape feeling */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] bg-[#070d24] rounded-full z-20 flex items-center justify-center shadow-inner">
                         <span className="text-4xl font-extrabold text-white">S</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Right Column: Visi & Misi */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Description Card */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-xl">
                  <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
                    <strong className="text-white text-xl block mb-2">Sebangku merupakan...</strong>
                    Ekosistem Game-Based Learning terintegrasi yang berfokus pada pengembangan produk edukatif, layanan pelatihan, dan pengalaman bermain yang menyenangkan. Kami bertujuan untuk menciptakan pembelajaran yang interaktif, menumbuhkan kreativitas, dan membangun kolaborasi di antara peserta didik dan tenaga pendidik.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Visi */}
                  <div className="bg-gradient-to-br from-blue-900/20 to-[#020617] border border-blue-500/20 backdrop-blur-md rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-blue-500/40 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Eye className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                      <Eye className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Visi Kami</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Menjadi pionir dan pemimpin dalam ekosistem pembelajaran berbasis permainan di Indonesia yang menginspirasi dan berdampak bagi generasi masa depan.
                    </p>
                  </div>

                  {/* Misi */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-[#020617] border border-purple-500/20 backdrop-blur-md rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Target className="w-16 h-16 text-purple-400" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30">
                      <Target className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Misi Kami</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Menyediakan media belajar yang inovatif, memfasilitasi peningkatan kualitas guru, dan membangun ruang kolaborasi kompilatif yang positif.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Level: Nilai Inti */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Nilai Inti <span className="text-blue-500">Kami</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
