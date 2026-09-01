"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookies_accepted")) setVisible(true);
    } catch {}
  }, []);

  const accept = () => {
    try { localStorage.setItem("cookies_accepted", "1"); } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-2xl mx-auto"
        >
          <div className="bg-[#0B1F3A] border border-white/15 rounded-2xl px-6 py-4 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-white/75 text-sm leading-relaxed flex-1">
              Ta strona używa plików cookies w celu zapewnienia jej prawidłowego działania oraz analizy ruchu.{" "}
              <a href="/polityka-prywatnosci" className="text-[#C9A84C] hover:underline">Polityka prywatności</a>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => { try { localStorage.setItem("cookies_accepted", "0"); } catch {} setVisible(false); }}
                className="px-4 py-2 rounded-xl border border-white/20 text-white/60 hover:text-white text-sm transition-colors"
              >
                Odrzuć
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-xl bg-[#C9A84C] hover:bg-[#DFC070] text-[#0B1F3A] font-bold text-sm transition-colors"
              >
                Akceptuj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
