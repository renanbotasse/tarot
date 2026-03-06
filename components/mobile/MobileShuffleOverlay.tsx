"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SpreadConfig } from "@/lib/spreads";
import { useSessionStore } from "@/store/useSessionStore";
import { useT } from "@/hooks/useT";
import { useLanguageStore } from "@/store/useLanguageStore";

interface Props {
  spread: SpreadConfig;
  onClose: () => void;
}

type Phase = "focus" | "shuffling" | "done";

export default function MobileShuffleOverlay({ spread, onClose }: Props) {
  const router = useRouter();
  const startSession = useSessionStore((s) => s.startSession);
  const t = useT();
  const { lang } = useLanguageStore();
  const [phase, setPhase] = useState<Phase>("focus");
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 400);
  }, []);

  const submitQuestion = () => {
    if (!question.trim()) return;
    setPhase("shuffling");
    setTimeout(() => setPhase("done"), 2200);
  };

  const beginReading = () => {
    startSession(spread.id, spread.positions);
    router.push("/reading");
  };

  const spreadName = lang === "pt" ? (spread.namePt ?? spread.name) : spread.name;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(10,5,0,0.98)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-primary font-cinzel text-[10px] uppercase tracking-[0.4em]">
            {t.shuffle.selectedSpread}
          </p>
          <h2 className="font-playfair text-2xl font-bold text-white italic leading-tight">
            {spreadName}
          </h2>
          <p className="text-slate-500 text-xs font-fell mt-0.5">
            {t.shuffle.cardsDrawn(spread.cardCount)}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 font-cinzel text-xs uppercase tracking-widest px-3 py-2"
          style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px" }}
        >
          {t.shuffle.close}
        </button>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px" style={{ background: "rgba(184,134,11,0.2)" }} />

      {/* Card image */}
      <div className="flex justify-center py-6">
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl"
          style={{ width: "80px", height: "132px", border: "2px solid #b5944d" }}
          animate={
            phase === "shuffling"
              ? { rotate: [-3, 3, -3], x: [-4, 4, -4] }
              : { rotate: 0, x: 0 }
          }
          transition={
            phase === "shuffling"
              ? { duration: 0.2, repeat: Infinity }
              : { type: "spring" }
          }
        >
          <Image src="/cards/CardBack.png" alt="Card back" fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.1) 0%, transparent 60%)" }}
          />
        </motion.div>
      </div>

      {/* Phase content */}
      <div className="flex-1 px-5">
        <AnimatePresence mode="wait">

          {phase === "focus" && (
            <motion.div
              key="focus"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-4"
            >
              <p className="text-parchment font-fell text-lg italic text-center">
                "{t.shuffle.speakQuestion}"
              </p>

              <textarea
                ref={inputRef}
                value={question}
                maxLength={120}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={t.shuffle.questionPlaceholder}
                rows={3}
                className="w-full resize-none rounded px-4 py-3 font-fell text-base text-slate-200 placeholder-slate-600 outline-none focus:ring-1 focus:ring-primary leading-relaxed"
                style={{
                  background: "rgba(20,10,5,0.85)",
                  border: "1px solid rgba(184,134,11,0.35)",
                }}
              />
              <p className="text-slate-600 text-xs font-cinzel uppercase tracking-widest text-right -mt-2">
                {question.length}/120
              </p>

              <button
                onClick={submitQuestion}
                disabled={!question.trim()}
                className="w-full py-4 font-cinzel font-bold uppercase tracking-widest text-sm rounded"
                style={{
                  border: `2px solid ${question.trim() ? "#b8860b" : "rgba(184,134,11,0.2)"}`,
                  color: question.trim() ? "#e8dfcc" : "rgba(232,223,204,0.25)",
                  background: "transparent",
                }}
              >
                {t.shuffle.shuffleBtn}
              </button>
            </motion.div>
          )}

          {phase === "shuffling" && (
            <motion.div
              key="shuffling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <p className="text-slate-500 font-fell text-sm italic">"{question}"</p>
              <motion.p
                className="text-parchment font-fell text-xl italic"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                {t.shuffle.listening}
              </motion.p>
              <div className="flex justify-center gap-2">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-6 bg-primary rounded-full"
                    animate={{ scaleY: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.07 }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <p className="text-slate-500 font-fell text-sm italic">"{question}"</p>
              <p className="text-parchment font-fell text-lg italic">
                {t.shuffle.cardsLaid}
              </p>
              <motion.button
                onClick={beginReading}
                className="w-full py-4 font-cinzel font-black uppercase tracking-widest text-sm text-black rounded"
                style={{ background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)" }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    "0 0 16px rgba(255,215,0,0.2)",
                    "0 0 32px rgba(255,215,0,0.5)",
                    "0 0 16px rgba(255,215,0,0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t.shuffle.beginBtn}
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center gap-3 py-5 text-primary/20 text-sm select-none">
        {["✦", "✧", "✦", "✧", "✦"].map((s, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
