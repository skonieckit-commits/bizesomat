"use client";
import { ArrowRight } from "lucide-react";

const kroki = [
  { n: "1", title: "Zainspiruj się", desc: "Pomysły i modele biznesowe" },
  { n: "2", title: "Przeanalizuj", desc: "Sprawdź opłacalność i dopasowanie" },
  { n: "3", title: "Zaplanuj", desc: "Finansowanie i wybór rozwiązań" },
];

const przewagi = [
  { title: "Rzetelna analiza", desc: "Na podstawie danych rynkowych" },
  { title: "Realne kalkulacje", desc: "Koszty, przychody i scenariusze" },
  { title: "Sprawdzeni eksperci", desc: "Wsparcie na każdym etapie" },
  { title: "Aktualna wiedza", desc: "Artykuły, poradniki, case studies" },
  { title: "Plan dopasowany do Ciebie", desc: "Zacznij od małej skali, rozwijaj mądrze" },
];

export function StepsSection() {
  return (
    <section className="bg-white border-b border-[#E4E9F0]">
      <div className="container">
        <div className="flex flex-wrap items-center gap-0 py-4">
          {/* Kroki */}
          {kroki.map((k, i) => (
            <div key={k.n} className="flex items-center">
              <div className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-6 h-6 rounded-full bg-[#0B1F3A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {k.n}
                </div>
                <div>
                  <div className="text-[#0B1F3A] font-semibold text-sm">{k.title}</div>
                  <div className="text-[#6B7A8D] text-xs">{k.desc}</div>
                </div>
              </div>
              {i < kroki.length - 1 && <ArrowRight size={14} className="text-[#C9A84C] shrink-0" />}
            </div>
          ))}

          {/* Separator */}
          <div className="w-px h-10 bg-[#E4E9F0] mx-3 hidden lg:block" />

          {/* Przewagi */}
          {przewagi.map((p) => (
            <div key={p.title} className="flex items-center gap-2 px-3 py-2">
              <div className="w-5 h-5 rounded bg-[#C9A84C]/15 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              </div>
              <div>
                <div className="text-[#0B1F3A] font-semibold text-xs">{p.title}</div>
                <div className="text-[#6B7A8D] text-[10px]">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
