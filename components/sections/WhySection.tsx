"use client";
import { motion } from "framer-motion";
import { BarChart2, MapPin, FileText, Handshake, Zap } from "lucide-react";

const reasons = [
  { icon: BarChart2, title: "Rzetelna analiza rynku", desc: "Dane z raportów branżowych i naukowych — EVA, Grand View Research, PSV. Pokazujemy realne liczby, nie obietnice." },
  { icon: MapPin, title: "Pomoc w wyborze lokalizacji", desc: "Lokalizacja decyduje o sukcesie w 70%. Przeprowadzamy Cię przez analizę ruchu, konkurencji i potencjału zarobkowego." },
  { icon: FileText, title: "Procedura leasingowa po naszej stronie", desc: "Ty wybierasz automat i miejsce — my kompletujemy dokumenty, składamy wnioski i negocjujemy warunki. Decyzja w 2–5 dni." },
  { icon: Handshake, title: "Sprawdzeni producenci", desc: "Współpracujemy z polskim producentem z 30-letnim doświadczeniem w chłodnictwie. Maszyny z gwarancją i serwisem." },
  { icon: Zap, title: "Szybki start", desc: "Od pierwszej rozmowy do działającego automatu — bez zbędnej biurokracji. Wkład własny od 10% wartości maszyny." },
];

export function WhySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">
            Dlaczego Biznesomat
          </div>
          <h2 className="font-serif text-[#0B1F3A] text-4xl lg:text-5xl tracking-tight mb-4">
            Nie jesteśmy sklepem<br />z maszynami
          </h2>
          <p className="text-[#6B7A8D] text-lg">
            Jesteśmy pośrednikiem i doradcą. Zarabiamy prowizję od producenta i leasingodawcy —
            dla Ciebie doradztwo i pomoc w procesie finansowania są bezpłatne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-7 rounded-2xl border border-[#E4E9F0] hover:border-[#C9A84C]/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center mb-5 group-hover:bg-[#C9A84C] transition-colors">
                <Icon size={22} className="text-[#C9A84C] group-hover:text-[#0B1F3A] transition-colors" />
              </div>
              <h3 className="text-[#0B1F3A] font-bold text-lg mb-2">{title}</h3>
              <p className="text-[#6B7A8D] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
