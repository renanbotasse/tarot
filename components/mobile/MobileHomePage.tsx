"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SPREADS, SpreadConfig } from "@/lib/spreads";
import { useSessionStore } from "@/store/useSessionStore";
import { useT } from "@/hooks/useT";
import { useLanguageStore } from "@/store/useLanguageStore";
import MobileShuffleOverlay from "@/components/mobile/MobileShuffleOverlay";
import Image from "next/image";
import { clsx } from "clsx";

export default function MobileHomePage() {
  const session = useSessionStore((s) => s.session);
  const t = useT();
  const { lang, setLang } = useLanguageStore();

  const [showSpreads, setShowSpreads] = useState(false);
  const [selectedSpread, setSelectedSpread] = useState<SpreadConfig | null>(null);
  const [showShuffle, setShowShuffle] = useState(false);
  const [pendingSpread, setPendingSpread] = useState<SpreadConfig | null>(null);

  const openShuffle = (spread: SpreadConfig) => {
    setSelectedSpread(spread);
    setShowShuffle(true);
  };

  const handleSpreadSelect = (spread: SpreadConfig) => {
    if (session) {
      setPendingSpread(spread);
    } else {
      openShuffle(spread);
    }
  };

  return (
    <main
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#1a0f0a" }}
    >
      {/* Rasputin background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/rasputin-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,0,0,0.80) 100%)" }} />
      </div>
      {/* Header */}
      <header
        className="relative z-10 flex items-center justify-between px-5 py-4 border-b-4 border-[#1a110a]"
        style={{ background: "#2a1b11" }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="text-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            👁
          </motion.span>
          <h1
            className="font-cinzel text-base font-black uppercase tracking-widest text-white"
            style={{ textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a" }}
          >
            Rasputin's Eye
          </h1>
        </div>

        {/* Language toggle */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLang("en")}
            className={clsx(
              "font-cinzel text-xs font-bold uppercase tracking-wider transition-colors",
              lang === "en" ? "text-primary" : "text-slate-500"
            )}
          >
            EN
          </button>
          <span className="text-slate-600 text-xs">|</span>
          <button
            onClick={() => setLang("pt")}
            className={clsx(
              "font-cinzel text-xs font-bold uppercase tracking-wider transition-colors",
              lang === "pt" ? "text-primary" : "text-slate-500"
            )}
          >
            PT
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-10 text-center gap-6">
        <motion.div
          className="space-y-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-playfair text-4xl font-black text-white leading-tight italic drop-shadow-lg">
            {t.home.headline}
          </h2>
          <p className="text-slate-300 text-sm font-fell italic leading-relaxed">
            {t.home.subtitle}
          </p>
        </motion.div>

        {/* Coin / hint */}
        <AnimatePresence mode="wait">
          {!showSpreads ? (
            <motion.button
              key="coin"
              onClick={() => setShowSpreads(true)}
              className="flex flex-col items-center justify-center w-20 h-20 rounded-full relative"
              style={{
                background: "rgba(20,10,5,0.75)",
                border: "3px solid rgba(184,134,11,0.4)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                  "0 0 12px rgba(214,112,10,0.15)",
                  "0 0 28px rgba(214,112,10,0.35)",
                  "0 0 12px rgba(214,112,10,0.15)",
                ],
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", boxShadow: { duration: 3, repeat: Infinity } }}
              whileTap={{ scale: 0.93 }}
            >
              <span className="font-cinzel font-black text-white/80 uppercase text-[10px] tracking-widest leading-tight text-center">
                {t.home.coinButton.split(" ")[0]}<br />{t.home.coinButton.split(" ")[1]}
              </span>
            </motion.button>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-cinzel text-xs uppercase tracking-widest font-bold"
            >
              {t.home.spreadHint}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          className="flex gap-3 text-primary/30 text-sm select-none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦ ✧ ✦ ✧ ✦
        </motion.div>

        {/* Spread cards — vertical list */}
        <AnimatePresence>
          {showSpreads && (
            <motion.div
              className="w-full flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-cinzel text-primary uppercase font-black tracking-[0.3em] text-xs text-center mb-1">
                {t.spreadSelector.title}
              </p>
              {SPREADS.map((spread, i) => (
                <motion.button
                  key={spread.id}
                  onClick={() => handleSpreadSelect(spread)}
                  className="w-full rounded-xl text-left px-5 py-4 relative overflow-hidden"
                  style={{
                    border: "2px solid #b8860b",
                    background: "rgba(10,5,0,0.8)",
                    boxShadow: "0 0 12px rgba(184,134,11,0.15)",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ boxShadow: "0 0 20px rgba(214,112,10,0.4)" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-playfair font-bold text-lg italic">
                        {lang === "pt" ? spread.namePt : spread.name}
                      </p>
                      <p className="text-primary text-[11px] uppercase font-bold tracking-widest font-cinzel mt-0.5">
                        {lang === "pt" ? spread.labelPt : spread.label}
                      </p>
                      <p className="text-slate-400 text-xs mt-1 font-fell italic">
                        {lang === "pt" ? spread.descriptionPt : spread.description}
                      </p>
                    </div>
                    <span className="text-primary text-lg ml-3 flex-shrink-0">→</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 px-5 py-3 flex items-center"
        style={{ background: "#1a110a" }}
      >
        <p className="text-[10px] text-primary/60 uppercase tracking-[0.3em] font-cinzel font-bold">
          {t.home.footer}
        </p>
      </footer>

      {/* Confirmation modal */}
      <AnimatePresence>
        {pendingSpread && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative rounded-xl p-7 max-w-sm w-full text-center"
              style={{ background: "#1a1512", border: "2px solid #b8860b" }}
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
            >
              <p className="font-playfair text-xl italic text-white mb-2">{t.home.modal.title}</p>
              <p className="text-slate-400 text-sm font-fell mb-6">{t.home.modal.warning}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setPendingSpread(null)}
                  className="flex-1 py-3 rounded-lg font-cinzel text-sm uppercase tracking-widest text-slate-300"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  {t.home.modal.cancel}
                </button>
                <button
                  onClick={() => { openShuffle(pendingSpread); setPendingSpread(null); }}
                  className="flex-1 py-3 rounded-lg font-cinzel font-bold text-sm uppercase tracking-widest text-black"
                  style={{ background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)" }}
                >
                  {t.home.modal.newReading}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shuffle overlay */}
      <AnimatePresence>
        {showShuffle && selectedSpread && (
          <MobileShuffleOverlay
            spread={selectedSpread}
            onClose={() => setShowShuffle(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
