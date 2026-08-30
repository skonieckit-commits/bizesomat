"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Briefcase, TrendingUp, Percent, User, ArrowRight, Phone, Mail, ArrowLeft } from "lucide-react";

const kafelki = [
  {
    id: "pomysl",
    icon: Lightbulb,
    title: "Szukam pomysłu na biznes",
    sub: "Nie wiem od czego zacząć. Pomóż mi znaleźć pomysł.",
    opis: "Opiszemy Ci dostępne modele, przeanalizujemy Twój potencjał i wskażemy najlepszy kierunek. Bez zobowiązań.",
  },
  {
    id: "firma",
    icon: Briefcase,
    title: "Mam już firmę",
    sub: "Chcę ją rozwinąć i zwiększyć dochody.",
    opis: "Automat sprzedażowy to naturalny krok dla kwiaciarni, piekarni, cukierni czy masarni. Pokażemy Ci jak to działa w praktyce.",
  },
  {
    id: "inwestor",
    icon: TrendingUp,
    title: "Chcę zainwestować",
    sub: "Szukam sprawdzonych modeli z przewidywalnym zwrotem.",
    opis: "Przygotujemy dla Ciebie realną kalkulację ROI i pokażemy jak wygląda inwestycja krok po kroku.",
  },
  {
    id: "finansowanie",
    icon: Percent,
    title: "Interesuje mnie finansowanie",
    sub: "Leasing, kredyt, dotacje — nie wiem co wybrać.",
    opis: "Procedura finansowania leży po naszej stronie. Wkład własny od 10%, decyzja w 2–5 dni roboczych.",
  },
  {
    id: "ekspert",
    icon: User,
    title: "Porozmawiaj z ekspertem",
    sub: "Potrzebuję indywidualnej konsultacji.",
    opis: "Zadzwoń lub napisz — odpowiemy w ciągu 24 godzin. Konsultacja jest bezpłatna i do niczego nie zobowiązuje.",
  },
];

export default function KontaktPage() {
  const [wybrany, setWybrany] = useState<string | null>(null);
  const [wyslano, setWyslano] = useState(false);
  const [form, setForm] = useState({ imie: "", email: "", telefon: "", wiadomosc: "" });

  const kafelek = kafelki.find(k => k.id === wybrany);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWyslano(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F3] py-16 lg:py-24">
      <div className="container max-w-5xl">

        {/* Nagłówek */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-3">Bezpłatna analiza</div>
          <h1 className="font-serif text-[#0B1F3A] text-4xl lg:text-5xl tracking-tight mb-4">
            Od czego zaczynasz?
          </h1>
          <p className="text-[#6B7A8D] text-lg max-w-xl mx-auto">
            Wybierz swoją sytuację — dostosujemy rozmowę do Twoich potrzeb.
          </p>
        </motion.div>

        {/* Kafelki */}
        {!wybrany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {kafelki.map(({ id, icon: Icon, title, sub, opis }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setWybrany(id)}
                className="text-left bg-white border border-[#E4E9F0] rounded-2xl p-6 hover:border-[#C9A84C]/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 flex items-center justify-center mb-4 group-hover:bg-[#0B1F3A] transition-colors">
                  <Icon size={22} className="text-[#0B1F3A] group-hover:text-[#C9A84C] transition-colors" />
                </div>
                <h2 className="text-[#0B1F3A] font-bold text-lg mb-1 leading-snug">{title}</h2>
                <p className="text-[#6B7A8D] text-sm mb-3">{sub}</p>
                <p className="text-[#6B7A8D] text-sm leading-relaxed mb-4">{opis}</p>
                <div className="flex items-center gap-1.5 text-[#C9A84C] font-semibold text-sm group-hover:gap-3 transition-all">
                  Wybierz <ArrowRight size={15} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Formularz po wyborze */}
        {wybrany && !wyslano && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            {/* Wybrany kafelek */}
            <div className="bg-[#0B1F3A] rounded-2xl p-6 mb-8 flex items-start gap-4">
              {kafelek && (
                <>
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <kafelek.icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">{kafelek.title}</div>
                    <div className="text-white/60 text-sm">{kafelek.opis}</div>
                  </div>
                </>
              )}
            </div>

            {/* Formularz */}
            <div className="bg-white border border-[#E4E9F0] rounded-2xl p-8">
              <h2 className="text-[#0B1F3A] font-bold text-xl mb-6">Zostaw kontakt — oddzwonimy</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#0B1F3A] text-sm font-semibold mb-1.5 block">Imię i nazwisko *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jan Kowalski"
                      value={form.imie}
                      onChange={e => setForm({...form, imie: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-[#E4E9F0] focus:border-[#C9A84C] rounded-xl text-sm text-[#0B1F3A] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#0B1F3A] text-sm font-semibold mb-1.5 block">Telefon *</label>
                    <input
                      required
                      type="tel"
                      placeholder="600 000 000"
                      value={form.telefon}
                      onChange={e => setForm({...form, telefon: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-[#E4E9F0] focus:border-[#C9A84C] rounded-xl text-sm text-[#0B1F3A] outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#0B1F3A] text-sm font-semibold mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="jan@firma.pl"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-[#E4E9F0] focus:border-[#C9A84C] rounded-xl text-sm text-[#0B1F3A] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#0B1F3A] text-sm font-semibold mb-1.5 block">Krótki opis sytuacji (opcjonalnie)</label>
                  <textarea
                    rows={4}
                    placeholder="Napisz kilka słów o sobie i swoich planach..."
                    value={form.wiadomosc}
                    onChange={e => setForm({...form, wiadomosc: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-[#E4E9F0] focus:border-[#C9A84C] rounded-xl text-sm text-[#0B1F3A] outline-none transition-colors resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-[#C9A84C] hover:bg-[#DFC070] text-[#0B1F3A] font-bold rounded-xl transition-colors text-sm"
                  >
                    Wyślij zapytanie →
                  </button>
                  <button
                    type="button"
                    onClick={() => setWybrany(null)}
                    className="flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-[#E4E9F0] hover:border-[#0B1F3A] text-[#6B7A8D] hover:text-[#0B1F3A] font-medium rounded-xl transition-colors text-sm"
                  >
                    <ArrowLeft size={15} /> Wróć
                  </button>
                </div>
              </form>

              {/* Kontakt bezpośredni */}
              <div className="mt-6 pt-6 border-t border-[#E4E9F0] flex flex-wrap gap-5">
                <a href="tel:606136613" className="flex items-center gap-2 text-[#0B1F3A] hover:text-[#C9A84C] transition-colors text-sm font-semibold">
                  <Phone size={16} className="text-[#C9A84C]" /> 606 13 66 13
                </a>
                <a href="mailto:tomasz@biznesomat.eu" className="flex items-center gap-2 text-[#0B1F3A] hover:text-[#C9A84C] transition-colors text-sm font-semibold">
                  <Mail size={16} className="text-[#C9A84C]" /> tomasz@biznesomat.eu
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Potwierdzenie */}
        {wyslano && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-white border border-[#E4E9F0] rounded-2xl p-12"
          >
            <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="font-serif text-[#0B1F3A] text-3xl mb-3">Dziękujemy!</h2>
            <p className="text-[#6B7A8D] mb-2">Odezwiemy się w ciągu 24 godzin roboczych.</p>
            <p className="text-[#6B7A8D] text-sm">Możesz też zadzwonić bezpośrednio: <a href="tel:606136613" className="text-[#C9A84C] font-bold">606 13 66 13</a></p>
          </motion.div>
        )}

      </div>
    </main>
  );
}
