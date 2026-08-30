"use client";
import { motion } from "framer-motion";
import { Send, Lock, Shield } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-14 bg-[#FAF8F3] border-t border-[#E4E9F0]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
              <Send size={20} className="text-[#C9A84C]" />
            </div>
            <div>
              <h3 className="text-[#0B1F3A] font-bold text-xl mb-1">Bądź na bieżąco z nowościami</h3>
              <p className="text-[#6B7A8D] text-sm max-w-md">
                Otrzymuj praktyczne wskazówki, nowe modele biznesowe i aktualne informacje o finansowaniu.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="px-4 py-3 border-2 border-[#E4E9F0] focus:border-[#C9A84C] rounded-xl text-sm text-[#0B1F3A] bg-white flex-1 lg:w-72 outline-none transition-colors"
              />
              <button className="px-5 py-3 bg-[#0B1F3A] hover:bg-[#122848] text-white font-bold rounded-xl text-sm transition-colors whitespace-nowrap">
                Zapisz się
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-[#6B7A8D] text-xs">
              <Lock size={10} />
              <span>Zero spamu. Anuluj w każdej chwili.</span>
            </div>
          </div>
        </motion.div>
        <div className="mt-8 pt-6 border-t border-[#E4E9F0] flex items-center gap-2 text-[#6B7A8D] text-xs">
          <Shield size={12} className="text-[#C9A84C]" />
          <span><strong className="text-[#0B1F3A]">Twoje dane są bezpieczne.</strong> Nie sprzedajemy Twoich danych. Możesz się wypisać w każdej chwili.</span>
        </div>
      </div>
    </section>
  );
}
