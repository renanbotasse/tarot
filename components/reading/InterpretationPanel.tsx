"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TarotCard } from "@/lib/cards";
import { SpreadPosition } from "@/lib/spreads";
import { ChevronRight, Flame, Droplets, Wind, Mountain, Globe } from "lucide-react";
import { SpreadType, getSpread } from "@/lib/spreads";
import { useT } from "@/hooks/useT";
import { useLanguageStore } from "@/store/useLanguageStore";

interface InterpretationPanelProps {
  card: TarotCard | null;
  isReversed: boolean;
  position: SpreadPosition | null;
  positionIndex: number;
  totalPositions: number;
  onNext: () => void;
  isComplete: boolean;
  spreadType: SpreadType;
}

const ELEMENT_ICONS: Record<string, React.ReactNode> = {
  Fire: <Flame className="w-4 h-4" />,
  Water: <Droplets className="w-4 h-4" />,
  Air: <Wind className="w-4 h-4" />,
  Earth: <Mountain className="w-4 h-4" />,
};

function toRoman(n: number): string {
  const map: [number, string][] = [
    [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],
    [90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],
    [5,"V"],[4,"IV"],[1,"I"],
  ];
  let result = "";
  for (const [val, sym] of map) {
    while (n >= val) { result += sym; n -= val; }
  }
  return result;
}

export default function InterpretationPanel({
  card,
  isReversed,
  position,
  positionIndex,
  totalPositions,
  onNext,
  isComplete,
  spreadType,
}: InterpretationPanelProps) {
  const spreadConfig = getSpread(spreadType);
  const t = useT();
  const { lang } = useLanguageStore();

  const cardName = lang === "pt" ? (card?.namePt ?? card?.name) : card?.name;
  const cardMeaning = lang === "pt" ? (card?.uprightMeaningPt ?? card?.uprightMeaning) : card?.uprightMeaning;
  const cardKeywords = lang === "pt" ? (card?.keywordsPt ?? card?.keywords) : card?.keywords;
  const posLabel = lang === "pt" ? (position?.labelPt ?? position?.label) : position?.label;
  const posDesc = lang === "pt" ? (position?.descriptionPt ?? position?.description) : position?.description;
  const spreadLabel = lang === "pt" ? (spreadConfig?.labelPt ?? spreadConfig?.label) : spreadConfig?.label;
  const spreadName = lang === "pt" ? (spreadConfig?.namePt ?? spreadConfig?.name) : spreadConfig?.name;
  const spreadDesc = lang === "pt" ? (spreadConfig?.descriptionPt ?? spreadConfig?.description) : spreadConfig?.description;

  return (
    <aside
      className="w-[500px] flex-shrink-0 h-full flex flex-col relative z-40 border-l-4 overflow-hidden"
      style={{ background: "#e8dfcc", borderLeftColor: "#b5944d" }}
    >
      {/* Parchment texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c4a882' fill-opacity='0.4'%3E%3Cpath d='M5 0h1L0 6V5z'/%3E%3Cpath d='M6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <AnimatePresence mode="wait">
        {!card || !position ? (
          /* Spread guide */
          <motion.div
            key="empty"
            className="flex-1 flex flex-col p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-4 border-b-2 pb-4" style={{ borderBottomColor: "rgba(181,148,77,0.4)" }}>
              <p className="font-cinzel text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-1">
                {spreadLabel}
              </p>
              <h3 className="font-playfair text-2xl font-bold italic text-slate-700 mb-2">
                {spreadName}
              </h3>
              <p className="font-fell italic text-sm text-slate-600 leading-relaxed">
                {spreadDesc}
              </p>
            </div>

            <h4 className="font-cinzel text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-3">
              {t.reading.howToRead}
            </h4>

            <div className="flex flex-col gap-3">
              {spreadConfig?.positions.map((pos, i) => (
                <div key={pos.id} className="flex items-start gap-3">
                  <span
                    className="font-cinzel text-[11px] font-bold flex-shrink-0 mt-0.5"
                    style={{ color: "#b5944d", minWidth: "18px" }}
                  >
                    {toRoman(i + 1)}
                  </span>
                  <div>
                    <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-slate-700">
                      {lang === "pt" ? (pos.labelPt ?? pos.label) : pos.label}
                    </span>
                    <span className="text-slate-500 font-fell text-sm ml-2 italic">
                      — {lang === "pt" ? (pos.descriptionPt ?? pos.description) : pos.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 font-cinzel text-[11px] uppercase tracking-widest text-primary/70 text-center">
              {t.reading.clickToBegin}
            </p>
          </motion.div>
        ) : (
          /* Card interpretation */
          <motion.div
            key={card.id}
            className="flex-1 flex flex-col overflow-y-auto relative z-10"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Position badge */}
            <div className="flex justify-center pt-5 pb-1">
              <div
                className="flex items-center gap-2 px-5 py-1.5 rounded-full"
                style={{ background: "#1a1512", border: "1px solid #b5944d" }}
              >
                <span className="font-cinzel text-[13px] uppercase tracking-widest text-slate-400">
                  {toRoman(positionIndex + 1)}
                </span>
                <span style={{ color: "#b5944d" }}>·</span>
                <span className="font-cinzel text-[13px] uppercase tracking-widest text-primary font-bold">
                  {posLabel}
                </span>
                <span style={{ color: "#b5944d" }}>·</span>
                <span className="font-cinzel text-[13px] text-slate-400">
                  {positionIndex + 1}/{totalPositions}
                </span>
              </div>
            </div>

            {/* Position description */}
            <p className="text-center text-slate-600 font-cinzel uppercase text-[13px] tracking-[0.2em] px-6 pb-3">
              {posDesc}
            </p>

            {/* Card image thumb */}
            <div className="flex justify-center px-6 mb-3">
              <div
                className="relative rounded-lg overflow-hidden shadow-xl"
                style={{
                  width: "100px",
                  height: "164px",
                  border: "2px solid #b5944d",
                  transform: isReversed ? "rotate(180deg)" : "none",
                }}
              >
                <Image
                  src={card.image}
                  alt={cardName ?? card.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 px-6 flex flex-col gap-3 text-slate-800 pb-2">
              {/* Card name + badge */}
              <div className="flex justify-between items-center">
                <h3
                  className="text-2xl font-bold italic border-b-2 pb-1 font-playfair flex-1"
                  style={{ borderBottomColor: "#d6700a" }}
                >
                  {cardName}
                </h3>
                <span
                  className="ml-3 text-[13px] font-bold px-3 py-1 rounded-full font-cinzel uppercase tracking-wider"
                  style={{
                    background: "rgba(25,100,25,0.12)",
                    color: "#1a641a",
                    border: "1px solid #1a641a",
                  }}
                >
                  {t.card.upright}
                </span>
              </div>

              {/* Waite quote */}
              <blockquote
                className="italic text-base text-slate-700 pl-4 py-1.5 font-fell"
                style={{ borderLeft: "4px solid rgba(214,112,10,0.5)" }}
              >
                "{card.waiteQuote}"
              </blockquote>

              {/* Interpretation */}
              <div className="space-y-2 font-sans leading-relaxed text-sm">
                <p>{cardMeaning}</p>
                <p className="text-slate-600">
                  {t.card.positionSentence(posLabel ?? position.label, posDesc ?? position.description)}
                </p>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5">
                {(cardKeywords ?? card.keywords).map((kw) => (
                  <span
                    key={kw}
                    className="text-[13px] uppercase tracking-widest px-2 py-0.5 rounded font-cinzel"
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

              {/* Symbology grid */}
              <section style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "12px" }}>
                <h4 className="text-[13px] uppercase font-bold tracking-widest text-slate-500 mb-2 font-cinzel">
                  {t.card.correspondences}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{ELEMENT_ICONS[card.element] ?? <Globe className="w-4 h-4" />}</span>
                    <span className="text-sm font-bold">{t.card.element}: {card.element}</span>
                  </div>
                  {card.planet && (
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-sm">☿</span>
                      <span className="text-sm font-bold">{card.planet}</span>
                    </div>
                  )}
                  {card.romanNumeral && (
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-sm">📖</span>
                      <span className="text-sm font-bold">
                        {card.arcana === "major" ? t.card.majorArcana : card.arcana.charAt(0).toUpperCase() + card.arcana.slice(1)} {card.romanNumeral}
                      </span>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Reveal Next button */}
            <footer className="p-4 mt-auto">
              <motion.button
                onClick={onNext}
                className="w-full py-3.5 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 font-cinzel"
                style={{ background: "#1a1512", color: "#e8dfcc" }}
                whileHover={{ background: "#2a2018" }}
                whileTap={{ scale: 0.98 }}
              >
                {isComplete ? (
                  <><span>✦</span> {t.reading.backHome} <span>✦</span></>
                ) : (
                  <>{t.reading.revealNext} <ChevronRight className="w-4 h-4" /></>
                )}
              </motion.button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
