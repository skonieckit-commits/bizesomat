"use client";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { ArrowRight, Play, Clock, TrendingUp, BarChart2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedChart() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, 1, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setProgress(v),
    });
    return controls.stop;
  }, [inView]);

  const points: [number, number][] = [[0, 72], [100, 55], [200, 30], [300, 6]];

  const interpolatePoints = (pts: [number, number][], t: number) => {
    const maxX = pts[pts.length - 1][0] * t;
    const visible = pts.filter(([x]) => x <= maxX + 1);
    if (visible.length === 0) return { path: "", dots: [] as [number, number][] };
    const last = pts.find(([x]) => x > maxX);
    if (last && visible.length > 0) {
      const prev = visible[visible.length - 1];
      const ratio = (maxX - prev[0]) / (last[0] - prev[0]);
      const ix = prev[0] + (last[0] - prev[0]) * ratio;
      const iy = prev[1] + (last[1] - prev[1]) * ratio;
      visible.push([ix, iy]);
    }
    const path = visible.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
    return { path, dots: visible };
  };

  const { path, dots } = interpolatePoints(points, progress);

  return (
    <svg ref={ref} viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>
      {path && (
        <>
          <path d={`${path} L${dots[dots.length-1][0]},80 L0,80 Z`} fill="url(#chartGrad)" />
          <path d={path} fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {dots.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r="4"
          fill="#122848" stroke="#C9A84C" strokeWidth="2.5"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: i * 0.15 + 0.3 }}
        />
      ))}
      {[["2024", 5], ["2026", 100], ["2028", 200], ["2030", 280]].map(([l, x]) => (
        <text key={String(l)} x={x} y="78" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">{l}</text>
      ))}
    </svg>
  );
}

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative bg-[#0B1F3A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEWA */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/12 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">Portal dla przedsiębiorczych</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-serif text-white text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            >
              Zbuduj biznes,<br />
              który <span className="text-[#C9A84C]">pracuje</span><br />
              dla Ciebie 24/7
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Poznaj nowe modele biznesowe oparte na nowoczesnych urządzeniach samoobsługowych. Analizujemy Twoje potrzeby, wskazujemy sposób finansowania oraz uruchamiamy z Tobą Twój biznes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/rozpocznij"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C9A84C] hover:bg-[#DFC070] text-[#0B1F3A] font-bold rounded-xl transition-all text-sm shadow-lg shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/40 hover:-translate-y-0.5"
              >
                Rozpocznij darmową analizę <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold cursor-pointer"
                style={{ border: "2px solid white", color: "white", backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <Play size={14} className="fill-white" />
                Zobacz jak to działa
              </button>
            </motion.div>

            {/* Kroki */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                ["1", "Zainspiruj się", "Pomysły i modele"],
                ["2", "Przeanalizuj", "Opłacalność i ryzyko"],
                ["3", "Zaplanuj", "Finansowanie i start"],
              ].map(([n, t, d], i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C] text-[#0B1F3A] text-xs font-bold flex items-center justify-center shrink-0">{n}</div>
                  <div>
                    <div className="text-white text-xs font-semibold">{t}</div>
                    <div className="text-white/50 text-[10px]">{d}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Przewagi */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {["Rzetelna analiza", "Realne kalkulacje", "Sprawdzeni eksperci", "Aktualna wiedza", "Plan do Ciebie"].map((p) => (
                <div key={p} className="flex items-center gap-1.5 text-white/60 text-xs">
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                  {p}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* PRAWA — panel ROI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="bg-[#122848] border border-white/20 rounded-2xl p-6">
              <div className="text-white/65 text-xs uppercase tracking-widest mb-2">Twój potencjalny zysk netto</div>
              <div className="flex items-end gap-2 mb-1">
                <div className="font-serif text-[#C9A84C] text-5xl font-bold">6 500 zł</div>
                <div className="text-white/60 text-base mb-2">/ mies.</div>
              </div>
              <div className="text-[#C9A84C] text-xs font-semibold mb-5">+24% rocznie do 2030</div>

              <div className="h-28 mb-5 bg-[#0B1F3A]/50 rounded-xl p-3">
                <AnimatedChart />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Clock, label: "ROI", value: "14 mies." },
                  { icon: TrendingUp, label: "IRR", value: "38%" },
                  { icon: BarChart2, label: "Marża netto", value: "42%" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    className="bg-[#0B1F3A] border border-white/15 rounded-xl p-3 text-center"
                  >
                    <Icon size={15} className="text-[#C9A84C] mx-auto mb-1.5" />
                    <div className="text-white font-bold text-lg leading-none">{value}</div>
                    <div className="text-white/55 text-xs mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-[#122848] border border-white/20 rounded-2xl p-5"
            >
              <div className="text-white/65 text-xs uppercase tracking-widest mb-4">Szybka kalkulacja</div>
              <div className="flex flex-col gap-0 mb-4">
                {[
                  ["Inwestycja początkowa", "75 000 zł"],
                  ["Szacowany zysk miesięczny", "6 500 zł"],
                ].map(([k, v]) => (
                  <div key={String(k)} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/65 text-sm">{k}</span>
                    <span className="text-white font-bold text-sm">{v}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/finansowanie/kalkulator"
                className="flex items-center justify-between w-full px-4 py-3 bg-[#C9A84C] hover:bg-[#DFC070] rounded-xl text-[#0B1F3A] text-sm font-bold transition-all hover:-translate-y-0.5"
              >
                Kalkulator zysków →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Modal z filmem */}
    {videoOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
        onClick={() => setVideoOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <iframe
            src="https://www.youtube.com/embed/1Uz5Ettgwck?autoplay=1"
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-lg font-bold hover:bg-black transition-colors"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    )}
  );
}
