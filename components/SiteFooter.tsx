import Link from "next/link";

const cols = [
  {
    title: "Modele biznesowe",
    links: [
      { label: "Kwiatomaty", href: "/modele-biznesowe/kwiatomaty" },
      { label: "Ciastomaty", href: "/modele-biznesowe/ciastomaty" },
      { label: "Chlebomaty", href: "/modele-biznesowe/chlebomaty" },
      { label: "Mięsomaty", href: "/modele-biznesowe/miesomaty" },
      { label: "Warzywomaty", href: "/modele-biznesowe/warzywomaty" },
    ],
  },
  {
    title: "Wiedza",
    links: [
      { label: "Artykuły i poradniki", href: "/wiedza" },
      { label: "Analizy rynku", href: "/wiedza/rynek" },
      { label: "Case studies", href: "/wiedza/case-studies" },
      { label: "Fiskalizacja 2027", href: "/wiedza/fiskalizacja" },
    ],
  },
  {
    title: "Finansowanie",
    links: [
      { label: "Leasing operacyjny", href: "/finansowanie" },
      { label: "Jak działa leasing", href: "/finansowanie/jak-dziala" },
      { label: "Kalkulator rat", href: "/finansowanie/kalkulator" },
    ],
  },
  {
    title: "Biznesomat",
    links: [
      { label: "O nas", href: "/o-nas" },
      { label: "Pytania i odpowiedzi", href: "/pytania" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#071528] text-white/70 mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C9A84C] flex items-center justify-center font-bold text-[#0B1F3A] text-sm">
                B
              </div>
              <span className="text-white font-bold tracking-wide text-sm uppercase">
                Biznes<span className="text-[#C9A84C]">omat</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Automaty sprzedażowe z chłodzeniem i podgrzewaniem. Kwiatomaty · Ciastomaty · Inne -omaty. Leasing od ręki. Cała Polska.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/biznesomat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C9A84C] hover:text-[#DFC070] transition-colors"
              >
                @biznesomat
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Biznesomat.eu · Wszelkie prawa zastrzeżone
          </p>
          <div className="flex gap-6">
            <Link href="/polityka-prywatnosci" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
