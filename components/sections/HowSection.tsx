"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Rozmowa i analiza", desc: "Opowiadasz nam o pomyśle, lokalizacji i budżecie. Analizujemy potencjał razem." },
  { n: "02", title: "Wybór automatu", desc: "Dobieramy typ automatu do Twojej lokalizacji i grupy docelowej — bez przepłacania." },
  { n: "03", title: "Finansowanie", desc: "Procedura leasingowa po naszej stronie. Wkład własny od 10%. Decyzja w 2–5 dni roboczych." },
  { n: "04", title: "Dostawa i start", desc: "Producent dostarcza automat, uruchamiasz biznes. Automat zaczyna zarabiać." },
];

export function HowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

      <div className="container relative" ref={ref}>
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
            4 kroki do Twojego biznesu
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Animowana linia łącząca kroki (tylko desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 z-0 px-[12.5%]">
            <svg width="100%" height="2" className="overflow-visible">
              <motion.line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
                transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {steps.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative z-10 group"
            >
              <div
                className="bg-[#C9A84C] border border-[#C9A84C] rounded-2xl p-7 transition-all duration-300 hover:bg-[#DFC070]"
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px 0 rgba(201,168,76,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                {/* Numer z pulsującym blaskiem */}
                <div className="relative mb-4 w-fit">
                  <motion.div
                    animate={inView ? { opacity: [0, 0.4, 0.15] } : { opacity: 0 }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 blur-2xl rounded-full"
                    style={{ background: "white", transform: "scale(2)" }}
                  />
                  <div className="relative text-white font-bold text-4xl font-serif">{n}</div>
                </div>

                <h3 className="text-[#0B1F3A] font-bold text-lg mb-2">{title}</h3>
                <p className="text-[#0B1F3A]/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
