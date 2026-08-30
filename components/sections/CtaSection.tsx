"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
      </div>
      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-5">
            Gotowy na rozmowę? To nic nie kosztuje.
          </div>
          <h2 className="font-serif text-white text-4xl lg:text-5xl tracking-tight mb-5 max-w-3xl mx-auto">
            Bezpłatna konsultacja.<br />Bez zobowiązań.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-3">
            Bezpłatna konsultacja trwa 20–30 minut. Powiesz nam o swojej sytuacji,
            my powiemy Ci co jest możliwe i czy inwestycja ma sens w Twoim przypadku.
          </p>
          <p className="text-white/30 text-sm mb-10">
            Odpowiadamy na każde zapytanie w ciągu 24 godzin roboczych.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] hover:bg-[#DFC070] text-[#0B1F3A] font-bold rounded-xl transition-colors shadow-lg shadow-[#C9A84C]/20"
            >
              <MessageCircle size={18} />
              Umów konsultację
            </Link>
            <a
              href="tel:606136613"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-colors bg-white/5"
            >
              <Phone size={18} />
              606 13 66 13
            </a>
          </div>
          <p className="text-white/25 text-sm">
            Tomasz Skoniecki · Biznesomat · MT Consulting · Lublin · Cała Polska
          </p>
        </motion.div>
      </div>
    </section>
  );
}
