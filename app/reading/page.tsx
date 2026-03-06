"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TarotCard from "@/components/reading/TarotCard";
import InterpretationPanel from "@/components/reading/InterpretationPanel";
import MobileReadingPage from "@/components/mobile/MobileReadingPage";
import { useSessionStore } from "@/store/useSessionStore";
import { getSpread, SpreadPosition } from "@/lib/spreads";
import { useT } from "@/hooks/useT";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ReadingPage() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const session = useSessionStore((s) => s.session);
  const revealNextCard = useSessionStore((s) => s.revealNextCard);

  const [activePosition, setActivePosition] = useState<number | null>(null);
  const [sessionTime, setSessionTime] = useState(0);
  const t = useT();
  const { lang, setLang } = useLanguageStore();

  useEffect(() => {
    if (!session) { router.push("/"); }
  }, [session, router]);

  useEffect(() => {
    const interval = setInterval(() => setSessionTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleCardClick = (index: number) => {
    if (!session) return;
    if (index < session.revealedCount) {
      setActivePosition(index);
    } else if (index === session.revealedCount && !session.isComplete) {
      revealNextCard();
      setActivePosition(index);
    }
  };

  const handleRevealNext = () => {
    if (!session) return;
    if (session.isComplete) { router.push("/"); return; }
    const next = session.revealedCount;
    revealNextCard();
    setActivePosition(next);
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#1a1f18" }}>
        <motion.div
          className="text-primary text-4xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          ✦
        </motion.div>
      </div>
    );
  }

  if (isMobile) return <MobileReadingPage />;

  const spreadConfig = getSpread(session.spreadType);
  const spreadName = lang === "pt" ? (spreadConfig?.namePt ?? spreadConfig?.name ?? session.spreadType) : (spreadConfig?.name ?? session.spreadType);
  const cardCount = session.drawnCards.length;
  const posLabel = (pos: SpreadPosition) => lang === "pt" ? (pos.labelPt ?? pos.label) : pos.label;
  const { revealedCount, isComplete, drawnCards } = session;

  const activeCard = activePosition !== null ? drawnCards[activePosition] : null;
  const activePos = activeCard?.position ?? null;

  const isCeltic = session.spreadType === "celtic-cross";

  const getGridLayout = () => {
    if (isCeltic) {
      return "grid grid-cols-5 grid-rows-4 gap-x-3 gap-y-[15px] w-full max-w-3xl";
    }
    if (session.spreadType === "pentagram") {
      return "grid grid-cols-3 grid-rows-3 gap-8 w-full max-w-xl";
    }
    return "flex items-center justify-center gap-10 w-full max-w-2xl";
  };

  const cardProps = (index: number) => ({
    isRevealed: index < revealedCount,
    isNext: index === revealedCount && !isComplete,
    isDimmed: index > revealedCount,
    isActive: activePosition === index,
    onClick: () => handleCardClick(index),
  });

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden" style={{ background: "#1a1f18" }}>

      {/* ── NAVIGATION — same style as home ───────────── */}
      <header
        className="flex items-center justify-between px-8 py-4 border-b-8 border-[#1a110a] z-50"
        style={{ background: "#2a1b11" }}
      >
        <Link href="/" className="flex items-center gap-3">
          <motion.span
            className="text-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            👁
          </motion.span>
          <h1
            className="font-cinzel text-xl font-black uppercase tracking-widest text-white"
            style={{ textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a, 0 0 30px #d6700a" }}
          >
            Rasputin's Eye
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/reading", label: t.nav.spreads },
            { href: "/library", label: t.nav.library },
            { href: "/premium", label: t.nav.premium },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-cinzel text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-1 ml-2 border-l border-white/10 pl-4">
            <button
              onClick={() => setLang("en")}
              className={`font-cinzel text-xs font-bold uppercase tracking-wider transition-colors ${lang === "en" ? "text-primary" : "text-slate-500 hover:text-slate-300"}`}
            >
              EN
            </button>
            <span className="text-slate-600 text-xs">|</span>
            <button
              onClick={() => setLang("pt")}
              className={`font-cinzel text-xs font-bold uppercase tracking-wider transition-colors ${lang === "pt" ? "text-primary" : "text-slate-500 hover:text-slate-300"}`}
            >
              PT
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-5">
          <span className="text-slate-300 font-mono text-sm tabular-nums font-cinzel">
            {formatTime(sessionTime)}
          </span>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded font-bold text-xs tracking-widest uppercase transition-all font-cinzel hover:opacity-80"
            style={{ background: "#d6700a", color: "#fff" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.reading.endRitual}
          </Link>
        </div>
      </header>

      {/* ── MAIN SPLIT LAYOUT ──────────────────────── */}
      <main className="flex flex-1 overflow-hidden relative velvet-green">
        <div className="smoke-overlay absolute inset-0 pointer-events-none" />

        {/* LEFT CANVAS */}
        <div className="relative flex-[2.5] px-5 py-5 flex flex-col items-center justify-center">
          <div className="brass-corner brass-tl" />
          <div className="brass-corner brass-tr" />
          <div className="brass-corner brass-bl" />
          <div className="brass-corner brass-br" />

          {/* Card Grid */}
          <div
            className={getGridLayout()}
            style={isCeltic ? { minHeight: "680px" } : {}}
          >
            {isCeltic && (
              <>
                {/* Crown — col 2-3 center, row 1 */}
                <div className="flex items-center justify-center" style={{ gridColumn: "2 / 4", gridRow: "1 / 2" }}>
                  {drawnCards[4] && (
                    <TarotCard card={drawnCards[4].card} positionName={posLabel(drawnCards[4].position)} size="sm" index={4} {...cardProps(4)} />
                  )}
                </div>

                {/* Past — col 1, rows 2-3 */}
                <div className="flex items-center justify-center" style={{ gridColumn: "1 / 2", gridRow: "2 / 4" }}>
                  {drawnCards[3] && (
                    <TarotCard card={drawnCards[3].card} positionName={posLabel(drawnCards[3].position)} size="sm" index={3} {...cardProps(3)} />
                  )}
                </div>

                {/* Heart — col 2, rows 2-3 */}
                <div className="flex items-center justify-center" style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>
                  {drawnCards[0] && (
                    <TarotCard card={drawnCards[0].card} positionName={posLabel(drawnCards[0].position)} size="sm" index={0} {...cardProps(0)} />
                  )}
                </div>

                {/* Obstacle — col 3, rows 2-3 (side by side with Heart) */}
                <div className="flex items-center justify-center" style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }}>
                  {drawnCards[1] && (
                    <TarotCard card={drawnCards[1].card} positionName={posLabel(drawnCards[1].position)} size="sm" index={1} {...cardProps(1)} />
                  )}
                </div>

                {/* Future — col 4, rows 2-3 */}
                <div className="flex items-center justify-center" style={{ gridColumn: "4 / 5", gridRow: "2 / 4" }}>
                  {drawnCards[5] && (
                    <TarotCard card={drawnCards[5].card} positionName={posLabel(drawnCards[5].position)} size="sm" index={5} {...cardProps(5)} />
                  )}
                </div>

                {/* Shadow — col 2-3 center, row 4 */}
                <div className="flex items-center justify-center" style={{ gridColumn: "2 / 4", gridRow: "4 / 5" }}>
                  {drawnCards[2] && (
                    <TarotCard card={drawnCards[2].card} positionName={posLabel(drawnCards[2].position)} size="sm" index={2} {...cardProps(2)} />
                  )}
                </div>

                {/* Staff: col 5, rows 4→1 (bottom to top) — label to the right */}
                {[6, 7, 8, 9].map((posIdx, i) => (
                  <div
                    key={posIdx}
                    className="flex items-center justify-center"
                    style={{ gridColumn: "5 / 6", gridRow: `${4 - i} / ${5 - i}` }}
                  >
                    {drawnCards[posIdx] && (
                      <TarotCard
                        card={drawnCards[posIdx].card}
                        positionName={posLabel(drawnCards[posIdx].position)}
                        labelSide="right"
                        size="sm"
                        index={posIdx}
                        {...cardProps(posIdx)}
                      />
                    )}
                  </div>
                ))}
              </>
            )}

            {session.spreadType === "pentagram" && (
              <>
                <div className="col-start-2 row-start-1 flex items-center justify-center">
                  {drawnCards[0] && <TarotCard card={drawnCards[0].card} positionName={posLabel(drawnCards[0].position)} size="md" index={0} {...cardProps(0)} />}
                </div>
                <div className="col-start-3 row-start-2 flex items-center justify-center">
                  {drawnCards[1] && <TarotCard card={drawnCards[1].card} positionName={posLabel(drawnCards[1].position)} size="md" index={1} {...cardProps(1)} />}
                </div>
                <div className="col-start-3 row-start-3 flex items-center justify-center">
                  {drawnCards[2] && <TarotCard card={drawnCards[2].card} positionName={posLabel(drawnCards[2].position)} size="md" index={2} {...cardProps(2)} />}
                </div>
                <div className="col-start-1 row-start-3 flex items-center justify-center">
                  {drawnCards[3] && <TarotCard card={drawnCards[3].card} positionName={posLabel(drawnCards[3].position)} size="md" index={3} {...cardProps(3)} />}
                </div>
                <div className="col-start-1 row-start-2 flex items-center justify-center">
                  {drawnCards[4] && <TarotCard card={drawnCards[4].card} positionName={posLabel(drawnCards[4].position)} size="md" index={4} {...cardProps(4)} />}
                </div>
              </>
            )}

            {session.spreadType === "three-card" && drawnCards.slice(0, 3).map((dc, i) => (
              <TarotCard
                key={i}
                card={dc.card}
                positionName={posLabel(dc.position)}
                size="lg"
                index={i}
                {...cardProps(i)}
              />
            ))}
          </div>

          {/* Status label */}
          <motion.div
            className="absolute bottom-6 left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold italic text-slate-100 font-playfair">
              The {spreadName}
            </h3>
            <p className="text-sm text-primary uppercase tracking-[0.2em] font-cinzel">
              {isComplete
                ? t.reading.readingComplete
                : revealedCount === 0
                ? t.reading.cardsClickGlowing(cardCount)
                : t.reading.revealedOf(revealedCount, cardCount)}
            </p>
          </motion.div>
        </div>

        {/* RIGHT INTERPRETATION PANEL */}
        <InterpretationPanel
          card={activeCard?.card ?? null}
          isReversed={false}
          position={activePos}
          positionIndex={activePosition ?? 0}
          totalPositions={cardCount}
          onNext={handleRevealNext}
          isComplete={isComplete}
          spreadType={session.spreadType}
        />
      </main>
    </div>
  );
}
