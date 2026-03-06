"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Clock } from "lucide-react";
import Nav from "@/components/shared/Nav";
import { useT } from "@/hooks/useT";

function MarqueeLights({ inverted = false }: { inverted?: boolean }) {
  const count = 14;
  return (
    <div className="flex justify-around px-4 py-1.5">
      {Array.from({ length: count }, (_, i) => {
        const isOn = inverted ? i % 2 !== 0 : i % 2 === 0;
        return (
          <motion.div
            key={i}
            className="w-5 h-5 rounded-full"
            style={{
              background: isOn
                ? "radial-gradient(circle at 30% 30%, #fff 0%, #ffbf00 100%)"
                : "#2b1a0a",
              border: `1px solid ${isOn ? "#fff" : "#3d2b1a"}`,
            }}
            animate={isOn ? {
              boxShadow: [
                "0 0 14px 4px #ff8c00, 0 0 28px 7px #ffbf00, inset 0 0 4px #fff",
                "0 0 6px 1px #ff8c00, 0 0 12px 3px #ffbf00, inset 0 0 2px #fff",
                "0 0 14px 4px #ff8c00, 0 0 28px 7px #ffbf00, inset 0 0 4px #fff",
              ],
              opacity: [1, 0.7, 1],
            } : {
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: isOn ? 0 : 0.6, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

const BADGE_ICONS = [ShieldCheck, Lock, Clock];

export default function PremiumPage() {
  const t = useT();
  const TRUST_BADGES = t.premium.badges.map((label, i) => ({ icon: BADGE_ICONS[i], label }));

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{ background: "#1a0f0a" }}
    >
      <Nav />

      <main
        className="flex-1 flex flex-col items-center justify-center p-5 lg:p-10 relative overflow-hidden"
        style={{ background: "radial-gradient(circle at center, #2d0a02 0%, #120503 100%)", boxShadow: "inset 0 0 120px rgba(0,0,0,0.9)" }}
      >
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

          {/* ── MARQUEE HERO BOX ──────────────────── */}
          <motion.div
            className="w-full max-w-3xl mb-12 relative"
            style={{ border: "10px solid #140a05", boxShadow: "0 0 40px rgba(0,0,0,1), 0 0 14px rgba(255,140,0,0.1)" }}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-7 inset-x-0">
              <MarqueeLights inverted={false} />
            </div>

            <div
              className="p-8 lg:p-10 flex flex-col items-center text-center relative border-4"
              style={{ background: "rgba(15,2,2,0.97)", borderColor: "rgba(255,191,0,0.2)", boxShadow: "inset 0 0 40px rgba(0,0,0,1)" }}
            >
              <motion.h1
                className="font-vintage text-3xl md:text-5xl font-bold uppercase leading-none mb-4"
                style={{ color: "#ffbf00", textShadow: "0 0 12px rgba(255,191,0,0.6), 2px 2px 2px rgba(0,0,0,1)" }}
                animate={{ textShadow: [
                  "0 0 12px rgba(255,191,0,0.6), 2px 2px 2px rgba(0,0,0,1)",
                  "0 0 24px rgba(255,191,0,0.9), 2px 2px 2px rgba(0,0,0,1)",
                  "0 0 12px rgba(255,191,0,0.6), 2px 2px 2px rgba(0,0,0,1)",
                ]}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {t.premium.hero}
              </motion.h1>

              <div className="w-32 h-0.5 my-3" style={{ background: "linear-gradient(to right, transparent, #ffbf00, transparent)" }} />

              <p
                className="font-vintage tracking-[0.4em] text-base uppercase italic"
                style={{ color: "#ffbf00", filter: "drop-shadow(0 0 4px rgba(255,191,0,0.4))" }}
              >
                {t.premium.heroSub}
              </p>
            </div>

            <div className="absolute -bottom-7 inset-x-0">
              <MarqueeLights inverted={true} />
            </div>
          </motion.div>

          {/* ── TWO PANELS ────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-stretch">

            {/* LEFT: Master Reading — dark panel, inverted ticket */}
            <motion.div
              className="flex flex-col items-center justify-center p-8 relative rounded-sm"
              style={{
                background: "rgba(0,0,0,0.85)",
                border: "2px solid rgba(255,191,0,0.3)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.8)",
              }}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="absolute inset-2 border border-primary-gold/10 pointer-events-none" />

              <div className="text-center mb-7 relative z-10">
                <h4 className="font-vintage text-primary-gold text-2xl uppercase tracking-[0.3em] mb-3">
                  {t.premium.masterReading}
                </h4>
                <p className="text-slate-200 text-sm font-fell italic max-w-xs mx-auto leading-relaxed">
                  "{t.premium.masterDesc}"
                </p>
              </div>

              {/* Inverted ticket — dark background, gold text */}
              <motion.div
                className="group relative z-10"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute pointer-events-none"
                  style={{ inset: "-18px", background: "rgba(255,140,0,0.2)", filter: "blur(24px)", borderRadius: "9999px" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Dark inverted ticket */}
                <div
                  className="w-56 shadow-[0_16px_40px_rgba(0,0,0,0.9)]"
                  style={{
                    padding: "3px",
                    backgroundColor: "#1a0c02",
                    border: "2px solid #ffbf00",
                    clipPath: "polygon(4% 0, 96% 0, 100% 8%, 100% 42%, 97% 50%, 100% 58%, 100% 92%, 96% 100%, 4% 100%, 0 92%, 0 58%, 3% 50%, 0 42%, 0 8%)",
                  }}
                >
                  <div className="border border-primary-gold/40 h-full" style={{ margin: "5px", position: "relative" }}>
                    <div className="absolute inset-[5px]" style={{ border: "2px solid rgba(255,191,0,0.3)" }} />
                    <div className="flex flex-col items-center py-6 px-3 relative z-10">
                      <span className="font-vintage text-2xl leading-none mb-1 font-black" style={{ color: "#ffbf00" }}>
                        {t.premium.ticketLabel}
                      </span>
                      <div className="w-full h-0.5 my-2 opacity-80" style={{ background: "#ffbf00" }} />
                      <div
                        className="relative flex items-center justify-center rounded-full mb-2"
                        style={{ width: "88px", height: "88px", border: "2px solid #ffbf00" }}
                      >
                        <span className="text-5xl" style={{ color: "#ffbf00" }}>☽</span>
                        <div className="absolute inset-0 rounded-full border-dashed" style={{ transform: "scale(0.9)", border: "2px dashed rgba(255,191,0,0.3)" }} />
                      </div>
                      <div className="font-vintage text-base tracking-normal font-black text-center px-2" style={{ color: "#ffbf00" }}>
                        {t.premium.requestBtn}
                      </div>
                      <div className="w-full h-0.5 my-2 opacity-80" style={{ background: "#ffbf00" }} />
                      <span className="text-[10px] font-typewriter font-black uppercase tracking-[0.4em]" style={{ color: "rgba(255,191,0,0.7)" }}>
                        {t.premium.validUntil}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <p className="mt-6 font-vintage tracking-[0.4em] text-xs uppercase relative z-10" style={{ color: "#ffbf00" }}>
                {t.premium.price}
              </p>
            </motion.div>

            {/* RIGHT: What you get */}
            <motion.div
              className="flex flex-col justify-center p-8 relative rounded-sm"
              style={{
                background: "rgba(0,0,0,0.85)",
                border: "2px solid rgba(255,191,0,0.3)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.8)",
              }}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <div className="absolute inset-2 border border-primary-gold/10 pointer-events-none" />

              <div className="relative z-10">
                <h4 className="font-vintage text-primary-gold text-2xl uppercase tracking-[0.3em] mb-1 text-center">
                  {t.premium.whatYouReceive}
                </h4>
                <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: "linear-gradient(to right, transparent, #ffbf00, transparent)" }} />

                <div className="flex flex-col gap-4">
                  {t.premium.features.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <span className="text-sm mt-1 flex-shrink-0 font-bold" style={{ color: "#ffbf00" }}>✦</span>
                      <div>
                        <p className="font-cinzel text-xs font-black uppercase tracking-widest mb-0.5" style={{ color: "#ffbf00" }}>
                          {item.title}
                        </p>
                        <p className="font-fell text-xs text-slate-400 leading-relaxed italic">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-primary-gold/20 flex items-baseline gap-2">
                  <span className="font-vintage text-4xl" style={{ color: "#ffbf00" }}>{t.premium.priceMain}</span>
                  <span className="font-cinzel text-[10px] font-black uppercase tracking-widest text-slate-400">{t.premium.priceSub}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── TRUST BADGES ──────────────────────── */}
          <motion.div
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 w-full border-t-2 pt-10 pb-6"
            style={{ borderTopColor: "rgba(255,191,0,0.2)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="flex flex-col items-center text-center group"
                whileHover={{ y: -3 }}
              >
                <Icon
                  className="mb-3 transition-transform group-hover:scale-110"
                  style={{ width: "36px", height: "36px", color: "#ffbf00", filter: "drop-shadow(0 0 8px rgba(255,191,0,0.4))" }}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] font-cinzel" style={{ color: "rgba(255,191,0,0.8)" }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
