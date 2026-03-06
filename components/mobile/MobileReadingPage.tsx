"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useSessionStore } from "@/store/useSessionStore";
import { getSpread, SpreadPosition } from "@/lib/spreads";
import { useT } from "@/hooks/useT";
import { useLanguageStore } from "@/store/useLanguageStore";
import TarotCard from "@/components/reading/TarotCard";

export default function MobileReadingPage() {
  const router = useRouter();
  const session = useSessionStore((s) => s.session);
  const revealNextCard = useSessionStore((s) => s.revealNextCard);
  const t = useT();
  const { lang } = useLanguageStore();
  const [activePosition, setActivePosition] = useState<number | null>(null);

  if (!session) return null;

  const spreadConfig = getSpread(session.spreadType);
  const spreadName =
    lang === "pt"
      ? (spreadConfig?.namePt ?? spreadConfig?.name ?? session.spreadType)
      : (spreadConfig?.name ?? session.spreadType);

  const posLabel = (pos: SpreadPosition) =>
    lang === "pt" ? (pos.labelPt ?? pos.label) : pos.label;
  const posDesc = (pos: SpreadPosition) =>
    lang === "pt" ? (pos.descriptionPt ?? pos.description) : pos.description;

  const { revealedCount, isComplete, drawnCards } = session;
  const cardCount = drawnCards.length;

  const handleCardTap = (index: number) => {
    if (index < revealedCount) {
      setActivePosition(index);
    } else if (index === revealedCount && !isComplete) {
      revealNextCard();
      setActivePosition(index);
    }
  };

  const handleRevealNext = () => {
    if (isComplete) {
      router.push("/");
      return;
    }
    setActivePosition(null);
  };

  const cardProps = (index: number) => ({
    isRevealed: index < revealedCount,
    isNext: index === revealedCount && !isComplete,
    isDimmed: index > revealedCount,
    isActive: activePosition === index,
    onClick: () => handleCardTap(index),
  });

  const activeDrawnCard = activePosition !== null ? drawnCards[activePosition] : null;
  const activeCard = activeDrawnCard?.card ?? null;
  const activePos = activeDrawnCard?.position ?? null;

  const cardName = lang === "pt" ? (activeCard?.namePt ?? activeCard?.name) : activeCard?.name;
  const cardMeaning =
    lang === "pt"
      ? (activeCard?.uprightMeaningPt ?? activeCard?.uprightMeaning)
      : activeCard?.uprightMeaning;
  const cardKeywords =
    lang === "pt"
      ? (activeCard?.keywordsPt ?? activeCard?.keywords)
      : activeCard?.keywords;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#1a0f0a" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-4 py-3 border-b-2 border-[#2a1b11] z-10"
        style={{ background: "#2a1b11" }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="text-xl"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            👁
          </motion.span>
          <span className="font-playfair text-white italic text-sm font-bold">
            {spreadName}
          </span>
        </div>
        <Link
          href="/"
          className="font-cinzel text-[11px] uppercase tracking-widest text-primary border border-primary/40 px-3 py-1.5 rounded"
        >
          {t.reading.endRitual}
        </Link>
      </header>

      {/* Status bar */}
      <div className="px-4 py-2 text-center">
        <p className="text-primary font-cinzel text-xs uppercase tracking-widest">
          {isComplete
            ? t.reading.readingComplete
            : revealedCount === 0
            ? t.reading.clickToBegin
            : t.reading.revealedOf(revealedCount, cardCount)}
        </p>
      </div>

      {/* Scrollable card grid */}
      <div className="flex-1 overflow-y-auto pt-2 pb-8">
        {session.spreadType === "three-card" ? (
          <div className="flex gap-4 justify-center px-4 py-4">
            {drawnCards.slice(0, 3).map((dc, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <TarotCard
                  card={dc.card}
                  positionName={posLabel(dc.position)}
                  size="sm"
                  index={i}
                  {...cardProps(i)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-6 py-4">
            {drawnCards.map((dc, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <p
                  className="font-cinzel text-[10px] uppercase tracking-widest"
                  style={{ color: "rgba(184,134,11,0.5)" }}
                >
                  {i + 1}
                </p>
                <TarotCard
                  card={dc.card}
                  positionName={posLabel(dc.position)}
                  size="sm"
                  index={i}
                  {...cardProps(i)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom sheet */}
      <AnimatePresence>
        {activeCard && activePos && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.65)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePosition(null)}
            />

            {/* Sheet */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl overflow-hidden flex flex-col"
              style={{
                background: "#e8dfcc",
                border: "1px solid rgba(181,148,77,0.4)",
                maxHeight: "78vh",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-slate-400" />
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 px-5 pb-4">
                {/* Position badge */}
                <div className="flex justify-center py-3">
                  <div
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full"
                    style={{ background: "#1a1512", border: "1px solid #b5944d" }}
                  >
                    <span className="font-cinzel text-[11px] uppercase tracking-widest text-slate-400">
                      {activePosition !== null ? activePosition + 1 : ""}
                    </span>
                    <span style={{ color: "#b5944d" }}>·</span>
                    <span className="font-cinzel text-[11px] uppercase tracking-widest text-primary font-bold">
                      {posLabel(activePos)}
                    </span>
                    <span style={{ color: "#b5944d" }}>·</span>
                    <span className="font-cinzel text-[11px] text-slate-400">
                      {(activePosition ?? 0) + 1}/{cardCount}
                    </span>
                  </div>
                </div>

                {/* Position description */}
                <p className="text-center text-slate-600 font-cinzel uppercase text-[11px] tracking-[0.18em] mb-3">
                  {posDesc(activePos)}
                </p>

                {/* Card image + name */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="relative rounded-lg overflow-hidden shadow-lg flex-shrink-0"
                    style={{
                      width: "72px",
                      height: "118px",
                      border: "2px solid #b5944d",
                    }}
                  >
                    <Image
                      src={activeCard.image}
                      alt={cardName ?? activeCard.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className="font-playfair text-xl font-bold italic text-slate-800 border-b-2 pb-1 mb-2"
                      style={{ borderBottomColor: "#d6700a" }}
                    >
                      {cardName}
                    </h3>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full font-cinzel uppercase tracking-wider"
                      style={{
                        background: "rgba(25,100,25,0.12)",
                        color: "#1a641a",
                        border: "1px solid #1a641a",
                      }}
                    >
                      {t.card.upright}
                    </span>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {(cardKeywords ?? activeCard.keywords).slice(0, 3).map((kw) => (
                        <span
                          key={kw}
                          className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded font-cinzel"
                          style={{
                            background: "rgba(181,148,77,0.15)",
                            border: "1px solid rgba(181,148,77,0.4)",
                            color: "#7a5a2a",
                          }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Waite quote */}
                <blockquote
                  className="italic text-sm text-slate-700 pl-3 py-1 mb-3 font-fell"
                  style={{ borderLeft: "3px solid rgba(214,112,10,0.5)" }}
                >
                  "{activeCard.waiteQuote}"
                </blockquote>

                {/* Interpretation */}
                <div className="text-sm text-slate-800 leading-relaxed space-y-2 mb-4 font-sans">
                  <p>{cardMeaning}</p>
                  <p className="text-slate-600">
                    {t.card.positionSentence(posLabel(activePos), posDesc(activePos))}
                  </p>
                </div>
              </div>

              {/* Footer button */}
              <div className="px-5 pb-6 pt-2 flex-shrink-0 border-t border-slate-300">
                <motion.button
                  onClick={handleRevealNext}
                  className="w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 font-cinzel"
                  style={{ background: "#1a1512", color: "#e8dfcc" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isComplete ? (
                    <><span>✦</span> {t.reading.backHome} <span>✦</span></>
                  ) : (
                    <>{t.reading.revealNext} <ChevronRight className="w-4 h-4" /></>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
