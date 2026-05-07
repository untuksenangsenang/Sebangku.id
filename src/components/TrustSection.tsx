"use client";

import { useEffect, useState } from "react";
import { User2Icon} from "lucide-react";
import Image from "next/image";

type Partner = {
  id: string;
  name: string;
  logo?: string;
};

export default function TrustSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/partners")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-[#3A89D6]/30 text-[#3A89D6] rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>
              <User2Icon className="w-4 h-4" /></span> Mitra dan Partnership
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Dipercaya oleh{" "}
            <span className="text-[#3A89D6]">
              Institusi Pendidikan
            </span>
          </h2>

          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
            Kami telah bermitra dengan berbagai sekolah dan organisasi
            dalam mengimplementasikan pembelajaran berbasis permainan.
          </p>
        </div>

        {/* PARTNER GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">

          {loading ? (
            <p className="text-center col-span-full text-slate-400">
              Loading partner...
            </p>
          ) : (
            partners.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition"
              >
                {p.logo ? (
                  <div className="relative w-12 h-12 mb-3">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 200px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 mb-3" />
                )}

                <p className="text-xs text-slate-600">{p.name}</p>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
}