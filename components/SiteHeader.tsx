"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const nav = [
  {
    label: "Modele biznesowe",
    href: "/modele-biznesowe",
    children: [
      { label: "Kwiatomaty", href: "/modele-biznesowe/kwiatomaty", desc: "Kwiaty cięte 24/7" },
      { label: "Ciastomaty", href: "/modele-biznesowe/ciastomaty", desc: "Wypieki i desery" },
      { label: "Chlebomaty", href: "/modele-biznesowe/chlebomaty", desc: "Świeże pieczywo" },
      { label: "Mięsomaty", href: "/modele-biznesowe/miesomaty", desc: "Mięso od rolnika" },
      { label: "Warzywomaty", href: "/modele-biznesowe/warzywomaty", desc: "Lokalne warzywa i owoce" },
    ],
  },
  {
    label: "Wiedza",
    href: "/wiedza",
    children: [
      { label: "Artykuły i poradniki", href: "/wiedza", desc: "Kompletne przewodniki" },
      { label: "Analizy rynku", href: "/wiedza/rynek", desc: "Dane i trendy 2026" },
      { label: "Case studies", href: "/wiedza/case-studies", desc: "Realne przykłady" },
    ],
  },
  {
    label: "Finansowanie",
    href: "/finansowanie",
    children: [
      { label: "Jak działa leasing", href: "/finansowanie/jak-dziala", desc: "Krok po kroku" },
      { label: "Kalkulator rat", href: "/finansowanie/kalkulator", desc: "Policz ratę online" },
    ],
  },
  {
    label: "Pytania i odpowiedzi",
    href: "/pytania",
    children: [
      { label: "Najczęstsze pytania", href: "/pytania", desc: "FAQ" },
      { label: "Zapytaj eksperta", href: "/kontakt", desc: "Bezpłatna konsultacja" },
    ],
  },
  {
    label: "O nas",
    href: "/o-nas",
    children: [
      { label: "Kim jesteśmy", href: "/o-nas", desc: "Misja i wartości" },
      { label: "Kontakt", href: "/kontakt", desc: "Tomasz Skoniecki" },
    ],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#0B1F3A", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="container">
        {/* Pasek główny */}
        <div style={{ display: "flex", alignItems: "center", height: "64px", gap: "8px" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", marginRight: "16px", flexShrink: 0 }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#0B1F3A", fontSize: "14px" }}>
              B
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ color: "white", fontWeight: "bold", letterSpacing: "0.05em", fontSize: "13px", textTransform: "uppercase" }}>
                Biznes<span style={{ color: "#C9A84C" }}>omat</span>
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "9px", letterSpacing: "0.05em" }}>Twój partner w dochodowym biznesie</span>
            </div>
          </Link>

          {/* Nav desktop — zawsze widoczny na dużym ekranie */}
          <nav style={{ display: "flex", alignItems: "center", flex: 1 }} className="desktop-nav">
            {nav.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    padding: "8px 10px", color: "rgba(255,255,255,0.85)",
                    fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap",
                    borderRadius: "8px", transition: "color 0.15s",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                  <ChevronDown size={12} style={{ opacity: 0.6, transform: dropdown === item.label ? "rotate(180deg)" : "none", transition: "transform 0.15s" }} />
                </Link>

                {dropdown === item.label && (
                  <div style={{
                    position: "absolute", top: "100%", left: 0, marginTop: "4px",
                    width: "220px", backgroundColor: "#0B1F3A",
                    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)", padding: "8px 0", zIndex: 100,
                  }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ display: "flex", flexDirection: "column", padding: "10px 16px", textDecoration: "none" }}
                      >
                        <span style={{ color: "white", fontSize: "13px", fontWeight: 600 }}>{child.label}</span>
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", marginTop: "2px" }}>{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Prawa strona */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, marginLeft: "auto" }} className="desktop-actions">
            <button style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer", padding: "6px" }}>
              <Search size={17} />
            </button>
            <Link href="/kontakt" style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
              Zaloguj się
            </Link>
            <Link href="/kontakt" style={{
              padding: "8px 16px", backgroundColor: "#C9A84C", color: "#0B1F3A",
              fontSize: "13px", fontWeight: "bold", borderRadius: "8px",
              textDecoration: "none", whiteSpace: "nowrap",
            }}>
              Darmowa analiza
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: "none", color: "white", background: "none", border: "none", cursor: "pointer", padding: "8px", marginLeft: "auto" }}
            className="mobile-burger"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 0" }} className="mobile-menu">
            {nav.map((item) => (
              <div key={item.label}>
                <Link href={item.href} style={{ display: "block", padding: "10px 12px", color: "white", fontSize: "14px", fontWeight: 500, textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href} style={{ display: "block", padding: "8px 24px", color: "rgba(255,255,255,0.55)", fontSize: "13px", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                    → {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ padding: "12px" }}>
              <Link href="/kontakt" style={{ display: "block", textAlign: "center", padding: "10px", backgroundColor: "#C9A84C", color: "#0B1F3A", fontWeight: "bold", borderRadius: "8px", fontSize: "13px", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                Darmowa analiza
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
