"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Rozmowa i analiza", desc: "Opowiadasz nam o pomyśle, lokalizacji i budżecie. Analizujemy potencjał razem." },
  { n: "02", title: "Wybór automatu", desc: "Dobieramy typ automatu do Twojej lokalizacji i grupy docelowej — bez przepłacania." },
  { n: "03", title: "Finansowanie", desc: "Procedura leasingowa po naszej stronie. Wkład własny od 10%. Decyzja w 2–5 dni roboczych." },
  { n: "04", title: "Dostawa i start", desc: "Producent dostarcza automat, uruchamiasz biznes. Automat zaczyna zarabiać." },
];

export function HowSection() {
  return (
    <section id="jak-to-dziala" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">
            Jak działamy
          </div>
          <h2 className="font-serif text-white text-4xl lg:text-5xl tracking-tight">
            4 kroki do Twojego automatu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 -translate-y-0.5 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% + 0rem)" }} />
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <div className="text-[#C9A84C] font-bold text-4xl font-serif mb-4">{n}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
