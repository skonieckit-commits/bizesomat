"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const automaty = [
  {
    id: "kwiatomaty",
    emoji: "🌸",
    name: "Kwiatomaty",
    tagline: "Kwiaty cięte 24/7",
    desc: "Automat chłodniczy (3–8°C) do sprzedaży świeżych bukietów. Działa całą dobę — wieczorami, w niedziele niehandlowe i święta, kiedy kwiaciarnia jest zamknięta.",
    roi: "18–30 mies.",
    marza: "40–60%",
    rynek: "CAGR 16% globalnie",
    href: "/modele-biznesowe/kwiatomaty",
    featured: true,
  },
  {
    id: "ciastomaty",
    emoji: "🎂",
    name: "Ciastomaty",
    tagline: "Rzemieślnicze słodkości",
    desc: "Automat z wypiekami od lokalnych cukierni. Model spontaniczny lub zamówieniowy z kodem PIN — minimalne marnowanie towaru, wysoka marża.",
    roi: "18–30 mies.",
    marza: "40–65%",
    rynek: "Stały popyt cały rok",
    href: "/modele-biznesowe/ciastomaty",
  },
  {
    id: "chlebomaty",
    emoji: "🍞",
    name: "Chlebomaty",
    tagline: "Świeże pieczywo bez kolejki",
    desc: "Rzemieślnicze pieczywo od lokalnej piekarni dostępne całą dobę. Produkt pierwszej potrzeby — lojalna, wracająca klientela.",
    roi: "18–30 mies.",
    marza: "25–45%",
    rynek: "Codzienny popyt",
    href: "/modele-biznesowe/chlebomaty",
  },
  {
    id: "miesomaty",
    emoji: "🥩",
    name: "Mięsomaty",
    tagline: "Mięso od rolnika, bez pośredników",
    desc: "Chłodniczy automat do sprzedaży mięsa i wędlin od lokalnych dostawców. Oparty na RHD — najwyższa marża ze wszystkich typów.",
    roi: "18–36 mies.",
    marza: "40–70%",
    rynek: "Rosnąca nisza",
    href: "/modele-biznesowe/miesomaty",
  },
  {
    id: "warzywomaty",
    emoji: "🥦",
    name: "Warzywomaty",
    tagline: "Lokalne warzywa i owoce",
    desc: "Automat z chłodzeniem dla świeżych warzyw i owoców od lokalnych rolników. Odpowiedź na zanikające warzywniaki i rosnący trend zdrowego żywienia.",
    roi: "24–36 mies.",
    marza: "40–60%",
    rynek: "CAGR 7,9% (zdrowa żywność)",
    href: "/modele-biznesowe/warzywomaty",
  },
];

export function AutomatySection() {
  return (
    <section className="py-24 bg-[#FAF8F3]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">
            Modele biznesowe
          </div>
          <h2 className="font-serif text-[#0B1F3A] text-4xl lg:text-5xl tracking-tight mb-4">
            Który automat<br />pasuje do Ciebie?
          </h2>
          <p className="text-[#6B7A8D] text-lg max-w-2xl">
            Każdy typ automatu to osobny model biznesowy — z własną logiką lokalizacji,
            asortymentu i rentowności. Poznaj je wszystkie.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured — kwiatomat */}
          {automaty
            .filter((a) => a.featured)
            .map((a) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:row-span-2 bg-[#0B1F3A] rounded-2xl p-8 flex flex-col justify-between group hover:shadow-2xl transition-shadow"
              >
                <div>
                  <div className="text-5xl mb-5">{a.emoji}</div>
                  <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">
                    Najszybciej rosnący segment
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">{a.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{a.desc}</p>
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {[
                      ["ROI", a.roi],
                      ["Marża", a.marza],
                      ["Rynek", a.rynek],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center py-2.5 border-b border-white/10">
                        <span className="text-white/40 text-xs uppercase tracking-wide">{k}</span>
                        <span className="text-white font-semibold text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={a.href}
                  className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Sprawdź model <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}

          {/* Pozostałe */}
          {automaty
            .filter((a) => !a.featured)
            .map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white border border-[#E4E9F0] rounded-2xl p-7 flex flex-col group hover:border-[#C9A84C]/40 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{a.emoji}</div>
                <h3 className="text-[#0B1F3A] font-bold text-xl mb-1">{a.name}</h3>
                <p className="text-[#6B7A8D] text-xs font-semibold uppercase tracking-wide mb-3">{a.tagline}</p>
                <p className="text-[#6B7A8D] text-sm leading-relaxed mb-5 flex-1">{a.desc}</p>
                <div className="flex gap-4 mb-5 pt-4 border-t border-[#E4E9F0]">
                  <div>
                    <div className="text-[#0B1F3A] font-bold text-sm">{a.marza}</div>
                    <div className="text-[#6B7A8D] text-xs">marża</div>
                  </div>
                  <div>
                    <div className="text-[#0B1F3A] font-bold text-sm">{a.roi}</div>
                    <div className="text-[#6B7A8D] text-xs">zwrot</div>
                  </div>
                </div>
                <Link
                  href={a.href}
                  className="inline-flex items-center gap-1.5 text-[#0B1F3A] font-semibold text-sm hover:text-[#C9A84C] transition-colors group-hover:gap-2.5"
                >
                  Sprawdź model <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
