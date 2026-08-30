"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    cat: "Rynek i trendy",
    title: "Globalny rynek kwiatomatów: 670 mln USD w 2026, CAGR 16% do 2035",
    excerpt: "Kwiatomaty rosną 3× szybciej niż klasyczny vending. Dlaczego Europa dominuje i co to oznacza dla polskich inwestorów.",
    href: "/wiedza/rynek-kwiatomatow-2026",
    time: "8 min",
  },
  {
    cat: "Modele biznesowe",
    title: "Kwiatomat jako biznes pasywny — co naprawdę oznacza praca 24/7",
    excerpt: "15–20 godzin miesięcznie obsługi przy realnym zysku 1 500–4 000 zł. Analiza czasu, pracy i skalowania.",
    href: "/wiedza/kwiatomat-biznes-pasywny",
    time: "7 min",
  },
  {
    cat: "Prawo i regulacje",
    title: "RHD 2026 — rolnicy sprzedają bez pośredników przez automaty",
    excerpt: "Liczba podmiotów RHD wzrosła z 1 500 do 4 700 w 5 lat. Jak mięsomaty i rolniomaty korzystają z uproszczonego prawa.",
    href: "/wiedza/rhd-2026-miesomaty",
    time: "6 min",
  },
];

export function ArticlesSection() {
  return (
    <section className="py-24 bg-[#FAF8F3]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Wiedza</div>
            <h2 className="font-serif text-[#0B1F3A] text-4xl lg:text-5xl tracking-tight">
              Artykuły oparte<br />na danych
            </h2>
          </div>
          <Link
            href="/wiedza"
            className="inline-flex items-center gap-2 text-[#0B1F3A] font-semibold text-sm hover:text-[#C9A84C] transition-colors shrink-0"
          >
            Wszystkie artykuły <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#E4E9F0] rounded-2xl p-7 flex flex-col hover:shadow-lg hover:border-[#C9A84C]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide">{a.cat}</span>
                <span className="text-[#6B7A8D] text-xs">{a.time} czytania</span>
              </div>
              <h3 className="text-[#0B1F3A] font-bold text-lg leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">
                {a.title}
              </h3>
              <p className="text-[#6B7A8D] text-sm leading-relaxed flex-1 mb-5">{a.excerpt}</p>
              <Link
                href={a.href}
                className="inline-flex items-center gap-1.5 text-[#0B1F3A] font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Czytaj dalej <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
