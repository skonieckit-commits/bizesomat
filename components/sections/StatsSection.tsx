"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Users, Star, Banknote, UserCheck, Timer } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) =>
    v >= 1000 ? `${(v / 1000).toFixed(0)} ${suffix}`.trim() : `${Math.round(v)}${suffix}`
  );

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { icon: Shield, raw: 250, suffix: "+", label: "sprawdzonych modeli biznesowych", display: "250+" },
  { icon: Users, raw: 15000, suffix: "+", label: "przedsiębiorców skorzystało z analiz", display: "15 000+" },
  { icon: Star, raw: 98, suffix: "%", label: "zadowolonych użytkowników", display: "98%" },
  { icon: Banknote, raw: 2.5, suffix: " mld zł", label: "sfinansowanych inwestycji", display: "2,5 mld zł", custom: true },
  { icon: UserCheck, raw: 120, suffix: "+", label: "ekspertów i partnerów", display: "120+" },
  { icon: Timer, raw: 10, suffix: " min", label: "tyle trwa wstępna analiza", display: "10 min", custom: true },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-[#0B1F3A]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map(({ icon: Icon, raw, suffix, label, display, custom }, i) => (
            <motion.div
              key={display}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="w-11 h-11 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center mx-auto mb-3"
              >
                <Icon size={19} className="text-[#C9A84C]" />
              </motion.div>
              <div className="font-serif text-white text-2xl font-bold mb-1">
                {custom ? display : <Counter value={raw} suffix={suffix} />}
              </div>
              <div className="text-white/50 text-xs leading-snug">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
