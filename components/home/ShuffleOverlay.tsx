"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SpreadConfig } from "@/lib/spreads";
import { useSessionStore } from "@/store/useSessionStore";

interface ShuffleOverlayProps {
  spread: SpreadConfig;
  onClose: () => void;
}

type Phase = "entering" | "focus" | "shuffling" | "done";

export default function ShuffleOverlay({ spread, onClose }: ShuffleOverlayProps) {
  const router = useRouter();
  const startSession = useSessionStore((s) => s.startSession);
  const [phase, setPhase] = useState<Phase>("entering");
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase("focus");
      setTimeout(() => inputRef.current?.focus(), 300);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const submitQuestion = () => {
    if (!question.trim()) return;
    setPhase("shuffling");
    setTimeout(() => setPhase("done"), 2200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitQuestion();
    }
  };

  const beginReading = () => {
    startSession(spread.id, spread.positions);
    router.push("/reading");
  };

  const fanCards = Array.from({ length: 11 }, (_, i) => ({
    rotate: (i - 5) * 7,
    x: (i - 5) * 22,
    delay: i * 0.04,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "rgba(10,5,0,0.97)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-slate-500 hover:text-primary text-sm uppercase tracking-widest font-cinzel"
      >
        ✕ Close
      </button>

      {/* Spread name */}
      <motion.div
        className="mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-primary text-sm uppercase tracking-[0.4em] font-cinzel mb-1">Selected Spread</p>
        <h2 className="font-playfair text-5xl font-bold text-white italic">{spread.name}</h2>
        <p className="text-slate-400 text-base mt-1 font-fell">
          {spread.cardCount} cards drawn from the full 78-card Rider-Waite deck
        </p>
      </motion.div>

      {/* Card Fan */}
      <div className="relative flex items-center justify-center h-56 w-full mb-10">
        <AnimatePresence>
          {phase !== "entering" &&
            fanCards.map((card, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ originX: "50%", originY: "100%" }}
                initial={{ rotate: 0, x: 0, y: 60, opacity: 0, scale: 0.6 }}
                animate={{
                  rotate: phase === "shuffling"
                    ? card.rotate + (Math.random() - 0.5) * 20
                    : card.rotate,
                  x: card.x,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ delay: card.delay, type: "spring", stiffness: 200, damping: 20 }}
              >
                <div
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                  style={{ width: "100px", height: "165px", border: "2px solid #b5944d" }}
                >
                  <Image src="/cards/CardBack.png" alt="Card back" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.1) 0%, transparent 60%)" }} />
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Phase CTAs */}
      <motion.div
        className="text-center max-w-lg px-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: phase !== "entering" ? 1 : 0, y: phase !== "entering" ? 0 : 20 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="wait">

          {phase === "focus" && (
            <motion.div key="focus" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
              <p className="text-parchment font-fell text-xl italic">
                "Speak your question to the cosmos. The cards will answer."
              </p>

              <div className="relative">
                <textarea
                  ref={inputRef}
                  value={question}
                  maxLength={120}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Write your question here…"
                  rows={3}
                  className="w-full resize-none rounded px-4 py-3 font-fell text-lg text-slate-200 placeholder-slate-600 outline-none focus:ring-1 focus:ring-primary leading-relaxed"
                  style={{
                    background: "rgba(20,10,5,0.85)",
                    border: "1px solid rgba(184,134,11,0.35)",
                  }}
                />
                <div className="flex justify-between mt-1">
                  <p className="text-slate-600 text-xs font-cinzel uppercase tracking-widest">
                    Press Enter to shuffle
                  </p>
                  <p className="text-slate-600 text-xs font-cinzel tabular-nums">
                    {question.length}/120
                  </p>
                </div>
              </div>

              <motion.button
                onClick={submitQuestion}
                disabled={!question.trim()}
                className="px-10 py-3 font-cinzel font-bold uppercase tracking-widest text-base transition-all"
                style={{
                  background: question.trim() ? "transparent" : "transparent",
                  border: `2px solid ${question.trim() ? "#b8860b" : "rgba(184,134,11,0.25)"}`,
                  color: question.trim() ? "#e8dfcc" : "rgba(232,223,204,0.3)",
                  borderRadius: "4px",
                  cursor: question.trim() ? "pointer" : "not-allowed",
                }}
                whileHover={question.trim() ? { background: "rgba(184,134,11,0.15)", boxShadow: "0 0 20px rgba(184,134,11,0.3)" } : {}}
                whileTap={question.trim() ? { scale: 0.97 } : {}}
              >
                ✦ Shuffle the Deck ✦
              </motion.button>
            </motion.div>
          )}

          {phase === "shuffling" && (
            <motion.div key="shuffling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <p className="text-slate-500 font-fell text-base italic mb-1">
                "{question}"
              </p>
              <motion.p
                className="text-parchment font-fell text-xl italic"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                The spirits are listening…
              </motion.p>
              <div className="flex justify-center gap-2 mt-2">
                {[...Array(7)].map((_, i) => (
                  <motion.div key={i} className="w-1.5 h-6 bg-primary rounded-full"
                    animate={{ scaleY: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.07 }} />
                ))}
              </div>
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
              <p className="text-slate-500 font-fell text-base italic mb-1">
                "{question}"
              </p>
              <p className="text-parchment font-fell text-xl italic">
                "The cards have been laid before the cosmos. Your reading awaits."
              </p>
              <motion.button
                onClick={beginReading}
                className="mt-4 px-10 py-4 font-cinzel font-black uppercase tracking-widest text-base text-black"
                style={{ background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)", borderRadius: "4px" }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,215,0,0.5)" }}
                whileTap={{ scale: 0.97 }}
                animate={{ boxShadow: ["0 0 20px rgba(255,215,0,0.2)", "0 0 40px rgba(255,215,0,0.5)", "0 0 20px rgba(255,215,0,0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦ Begin the Revelation ✦
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>

      <div className="absolute bottom-8 flex gap-3 text-primary/20 text-lg select-none">
        {["✦","✧","✦","✧","✦","✧","✦"].map((s, i) => (
          <motion.span key={i} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}>
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
