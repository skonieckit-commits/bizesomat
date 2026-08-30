"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Calculator, Banknote, MessageCircle, Users, Globe } from "lucide-react";

const sekcje = [
  {
    icon: BookOpen,
    title: "Wiedza która buduje Twój biznes",
    items: ["Praktyczne artykuły i case studies", "Analizy rynku i trendy", "Gotowe strategie działania", "Aktualności i zmiany w przepisach"],
    cta: "Przejdź do bazy wiedzy →",
    href: "/wiedza",
  },
  {
    icon: Calculator,
    title: "Kalkulatory i analizy",
    items: ["Kalkulator zysków", "Symulacje scenariuszy", "Analiza kosztów i przychodów", "Porównanie modeli biznesowych"],
    cta: "Skorzystaj z narzędzi →",
    href: "/finansowanie/kalkulator",
  },
  {
    icon: Banknote,
    title: "Finansowanie bez tajemnic",
    items: ["Leasing i finansowanie", "Dotacje i wsparcie", "Porównanie ofert", "Jak przygotować wniosek"],
    cta: "Zobacz opcje finansowania →",
    href: "/finansowanie",
  },
  {
    icon: MessageCircle,
    title: "Pytania i odpowiedzi",
    items: ["Zadaj pytanie ekspertom", "Najczęstsze pytania", "Odpowiedzi w praktyce", "Historie innych przedsiębiorców"],
    cta: "Przejdź do Q&A →",
    href: "/pytania",
  },
  {
    icon: Users,
    title: "Eksperci którzy pomogą",
    items: ["Konsultacje 1:1", "Weryfikacja pomysłu", "Plan działania", "Wsparcie wdrożeniowe"],
    cta: "Poznaj ekspertów →",
    href: "/kontakt",
  },
  {
    icon: Globe,
    title: "Społeczność Biznesomatu",
    items: ["Doświadczenia innych", "Historie biznesowe", "Inspiracje i pomysły", "Wymiana wiedzy"],
    cta: "Dołącz do społeczności →",
    href: "/pytania",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function PortalSection() {
  return (
    <section className="py-20 bg-[#FAF8F3]">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {sekcje.map(({ icon: Icon, title, items, cta, href }) => (
            <motion.div
              key={title}
              variants={cardAnim as any}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(11,31,58,0.10)" }}
              className="bg-white border border-[#E4E9F0] rounded-2xl p-6 flex flex-col cursor-pointer"
              style={{ transition: "box-shadow 0.2s" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                  <Icon size={19} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-[#0B1F3A] font-bold text-sm leading-snug pt-0.5 uppercase tracking-wide">{title}</h3>
              </div>
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#6B7A8D] text-sm">
                    <span className="text-[#C9A84C] shrink-0 mt-0.5">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={href} className="text-[#C9A84C] font-bold text-sm hover:text-[#A8863A] transition-colors">
                {cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
