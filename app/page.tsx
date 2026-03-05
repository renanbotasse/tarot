"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import InsertCoinButton from "@/components/home/InsertCoinButton";
import SpreadSelector from "@/components/home/SpreadSelector";
import ShuffleOverlay from "@/components/home/ShuffleOverlay";
import { SPREADS, SpreadConfig } from "@/lib/spreads";
import { useSessionStore } from "@/store/useSessionStore";
import Link from "next/link";

export default function HomePage() {
  const session = useSessionStore((s) => s.session);
  const [selectedSpread, setSelectedSpread] = useState<SpreadConfig | null>(null);
  const [showShuffle, setShowShuffle] = useState(false);
  const [showSpreads, setShowSpreads] = useState(false);
  const [pendingSpread, setPendingSpread] = useState<SpreadConfig | null>(null);

  const openShuffle = (spread: SpreadConfig) => {
    setSelectedSpread(spread);
    setShowShuffle(true);
  };

  const handleCoinClick = () => {
    setShowSpreads(true);
  };

  const handleSpreadSelect = (spread: SpreadConfig) => {
    if (session) { setPendingSpread(spread); } else { openShuffle(spread); }
  };

  const confirmNewReading = () => {
    if (pendingSpread) { openShuffle(pendingSpread); }
    setPendingSpread(null);
  };

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 lg:p-12"
      style={{ background: "#1a0f0a" }}
    >
      {/* ── ARCADE CABINET OUTER FRAME ────────────────── */}
      <div
        className="relative w-full max-w-6xl flex flex-col overflow-hidden rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.9)]"
        style={{ background: "#2a1b11", border: "12px solid #1a110a" }}
      >
        {/* ── HEADER / NAV ───────────────────────────── */}
        <header
          className="flex items-center justify-between px-8 py-4 border-b-8 border-[#1a110a]"
          style={{ background: "#2a1b11" }}
        >
          <div className="flex items-center gap-3">
            <motion.span
              className="text-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              👁
            </motion.span>
            <div>
              <h1
                className="font-cinzel text-xl font-black uppercase tracking-widest text-white"
                style={{ textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a, 0 0 30px #d6700a" }}
              >
                Rasputin's Eye
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/reading", label: "Tarot Spreads" },
              { href: "/library", label: "Library" },
              { href: "/premium", label: "Premium" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-cinzel text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* ── INNER CABINET VIEW ──────────────────────── */}
        <div
          className="relative flex-1 min-h-[540px] flex items-stretch overflow-hidden"
          style={{
            border: "16px solid #3d2b1f",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.9)",
          }}
        >
          {/* Rasputin full background */}
          <Image
            src="/rasputin-bg.png"
            alt="Rasputin — Mystic of Destiny"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,0,0,0.72) 100%)" }} />
          {/* Dust particles overlay */}
          <div className="absolute inset-0 dust-particles opacity-10 pointer-events-none" />
          {/* Atmospheric vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)" }}
          />

          <div className="relative w-full h-full z-10">
            {/* CENTER: always full width — never shifts */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-8 py-10">
              {/* Title + subtitle — top */}
              <motion.div
                className="text-center space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-playfair text-6xl font-black text-white leading-tight italic drop-shadow-lg">
                  Reveal Your Destiny
                </h2>
                <p className="text-slate-300 text-lg font-fell italic" style={{ marginBottom: "10%" }}>
                  Step inside and let the mechanical Rasputin see your future.
                </p>
              </motion.div>

              {/* Insert Coin + dots — bottom */}
              <div className="flex flex-col items-center gap-4">
                <AnimatePresence mode="wait">
                  {!showSpreads ? (
                    <motion.div
                      key="coin"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <InsertCoinButton onClick={handleCoinClick} />
                    </motion.div>
                  ) : (
                    <motion.p
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-primary font-cinzel text-sm uppercase tracking-widest font-bold"
                    >
                      Choose your spread →
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
              </div>
            </div>

            {/* Bottom ambient lights */}
            <div
              className="absolute bottom-0 inset-x-0 h-10 flex items-center justify-center gap-3 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
            >
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: "6px",
                    height: "6px",
                    background: i % 2 === 0 ? "#d6700a" : "rgba(214,112,10,0.2)",
                  }}
                  animate={i % 2 === 0 ? {
                    opacity: [1, 0.2, 1],
                    boxShadow: ["0 0 6px #d6700a", "0 0 0px transparent", "0 0 6px #d6700a"],
                  } : {}}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>

          {/* SPREAD SELECTOR — filho direto do cabinet, cobre 100% vertical */}
          <AnimatePresence>
            {showSpreads && (
              <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center px-10 py-8"
                style={{
                  background: "rgba(55, 0, 0, 0.52)",
                  backdropFilter: "blur(3px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <SpreadSelector onSelect={handleSpreadSelect} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── FOOTER BAR ─────────────────────────────── */}
        <footer
          className="h-12 px-8 flex items-center"
          style={{ background: "#1a110a" }}
        >
          <p className="text-[12px] text-primary/60 uppercase tracking-[0.3em] font-cinzel font-bold">
            Est. 1892 · Premium Mechanical Divination
          </p>
        </footer>
      </div>

      {/* ── CONFIRMATION MODAL (active session) ─────── */}
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
              className="relative rounded-xl p-8 max-w-sm w-full text-center"
              style={{ background: "#1a1512", border: "2px solid #b8860b" }}
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
            >
              <p className="font-playfair text-xl italic text-white mb-2">Reading in Progress</p>
              <p className="text-slate-400 text-sm font-fell mb-6">
                You have a reading in progress. Start a new one? Your current reading will be lost.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setPendingSpread(null)}
                  className="flex-1 py-3 rounded-lg font-cinzel text-sm uppercase tracking-widest text-slate-300"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmNewReading}
                  className="flex-1 py-3 rounded-lg font-cinzel font-bold text-sm uppercase tracking-widest text-black"
                  style={{ background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)" }}
                >
                  New Reading
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SHUFFLE OVERLAY ─────────────────────────── */}
      <AnimatePresence>
        {showShuffle && selectedSpread && (
          <ShuffleOverlay
            spread={selectedSpread}
            onClose={() => setShowShuffle(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
