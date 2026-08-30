"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plusy = [
  "Wkład własny od 10% wartości automatu",
  "Decyzja leasingowa w 2–5 dni roboczych",
  "Raty leasingowe jako koszt uzyskania przychodu",
  "Procedura finansowania po naszej stronie",
  "Porównanie ofert kilku firm leasingowych",
  "Leasing operacyjny lub finansowy — dobieramy wariant",
];

export function LeasingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Finansowanie</div>
            <h2 className="font-serif text-[#0B1F3A] text-4xl lg:text-5xl tracking-tight mb-5">
              Leasing od ręki.<br />Procedura po<br />naszej stronie.
            </h2>
            <p className="text-[#6B7A8D] text-lg leading-relaxed mb-8">
              Nie musisz angażować pełnej kwoty z własnej kieszeni. Leasing pozwala zachować
              płynność finansową i szybciej skalować — zamiast jednego automatu za gotówkę
              możesz mieć trzy na leasing.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {plusy.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-[#0B1F3A] text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/finansowanie"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B1F3A] hover:bg-[#122848] text-white font-bold rounded-xl transition-colors text-sm"
            >
              Dowiedz się więcej <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Przykładowa kalkulacja */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#0B1F3A] rounded-2xl p-8 text-white"
          >
            <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-5">
              Przykładowa kalkulacja — kwiatomat
            </div>
            <div className="space-y-4 mb-7">
              {[
                ["Wartość automatu", "60 000 zł netto"],
                ["Wkład własny (15%)", "9 000 zł"],
                ["Kwota leasingu", "51 000 zł"],
                ["Okres leasingu", "48 miesięcy"],
                ["Rata miesięczna (est.)", "~1 200 zł"],
                ["Wykup końcowy (1%)", "600 zł"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-white/50 text-sm">{k}</span>
                  <span className="text-white font-semibold text-sm">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-4">
              <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide mb-1">Przy dobrze dobranej lokalizacji</div>
              <div className="text-white text-sm">
                Zysk netto ~2 500 zł/mies. → rata 1 200 zł to mniej niż połowa zysku.
                Automat zarabia na własne raty i generuje dodatkowy dochód.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
