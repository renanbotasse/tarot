"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { CARDS, TarotCard } from "@/lib/cards";
import Nav from "@/components/shared/Nav";

type FilterTab = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

const TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "major", label: "Major Arcana" },
  { id: "wands", label: "Wands" },
  { id: "cups", label: "Cups" },
  { id: "swords", label: "Swords" },
  { id: "pentacles", label: "Pentacles" },
];

const CARDS_PER_PAGE = 18;
const ROTATIONS = [-2, 1.5, -1.5, 2, -0.5, 1];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  const filtered = useMemo(() => {
    let cards = CARDS;
    if (activeTab !== "all") {
      const arcana = activeTab === "major" ? "major" : activeTab;
      cards = cards.filter((c) => c.arcana === arcana);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      cards = cards.filter((c) => c.name.toLowerCase().includes(q) || c.keywords.some((k) => k.includes(q)));
    }
    return cards;
  }, [activeTab, search]);

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const pageCards = filtered.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);

  const handleTabChange = (tab: FilterTab) => {
    setActiveTab(tab);
    setPage(1);
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{ background: "#1a0f0a" }}
    >
      <Nav />

      {/* Filigree outer border */}
      <div className="p-3 md:p-6 flex flex-col flex-1">
        <div
          className="flex-1 flex flex-col rounded-xl overflow-hidden shadow-2xl"
          style={{ outline: "2px solid #d6700a", outlineOffset: "-5px", background: "rgba(10,13,20,0.8)" }}
        >
          {/* ── MAIN CONTENT ────────────────────────── */}
          <main className="flex-1 p-5 overflow-y-auto">
            {/* Page title */}
            <div className="mb-5 text-center max-w-lg mx-auto">
              <h1 className="text-3xl font-playfair font-bold text-primary mb-1.5 drop-shadow-md">
                The Tarot Library
              </h1>
              <p className="text-slate-400 italic font-fell text-sm">
                "A collection of ancient wisdom and symbolic archetypes from the 1911 Rider-Waite traditions."
              </p>
            </div>

            {/* Search + Filter Tabs row */}
            <div className="flex flex-col items-center gap-2 mb-6">
              {/* Search */}
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-primary/60" />
                <input
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search the unknown…"
                  className="pl-8 pr-3 py-1 text-xs rounded-lg text-slate-200 w-full outline-none focus:ring-1 focus:ring-primary"
                  style={{
                    background: "rgba(15,18,30,0.8)",
                    border: "1px solid rgba(214,112,10,0.25)",
                  }}
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {TABS.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className="px-3 py-1 rounded-t-lg font-fell text-sm transition-all"
                    style={{
                      background: activeTab === tab.id
                        ? "linear-gradient(180deg, #b8860b 0%, #8b6508 100%)"
                        : "linear-gradient(180deg, #5c4a33 0%, #3d2e1d 100%)",
                      border: "1px solid #d6700a",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.5)",
                      color: activeTab === tab.id ? "#1a0f0a" : "#d4cbb8",
                      fontWeight: activeTab === tab.id ? "bold" : "normal",
                      borderBottom: activeTab === tab.id ? "2px solid #d6700a" : "1px solid #d6700a",
                    }}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Card Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-[0.75px] gap-y-[20px] mb-8"
              key={`${activeTab}-${page}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {pageCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  className="group flex flex-col gap-1.5 cursor-pointer w-[70%] mx-auto"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
                  onClick={() => setSelectedCard(card)}
                >
                  {/* Card image */}
                  <div
                    className="relative w-full rounded-lg overflow-hidden border-2 transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      aspectRatio: "2/3.5",
                      background: "#0f1218",
                      borderColor: "rgba(214,112,10,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 13px 3px rgba(214,112,10,0.4)";
                      (e.currentTarget as HTMLElement).style.borderColor = "#d6700a";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(214,112,10,0.3)";
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                    {/* View label on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[21px] text-white font-cinzel font-bold uppercase tracking-widest" style={{ textShadow: "0 0 8px rgba(0,0,0,0.8)" }}>View →</span>
                    </div>
                  </div>

                  {/* Parchment label */}
                  <div
                    className="px-1 py-0.5 rounded shadow-md text-center transition-transform group-hover:rotate-0"
                    style={{
                      background: "#e2d1b3",
                      color: "#2b1d0e",
                      transform: `rotate(${ROTATIONS[i % 6]}deg)`,
                    }}
                  >
                    <span className="font-fell text-[13px] font-bold">{card.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mb-5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                  style={{ background: "rgba(214,112,10,0.1)", border: "1px solid rgba(214,112,10,0.3)", color: "#d6700a" }}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                    .reduce<(number | "...")[]>((acc, p, i, arr) => {
                      if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((p, i) =>
                      p === "..." ? (
                        <span key={`ellipsis-${i}`} className="text-primary self-end pb-1 font-fell text-sm">...</span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => setPage(p as number)}
                          className="w-7 h-7 rounded-lg font-fell text-sm font-bold transition-all"
                          style={{
                            background: page === p ? "#d6700a" : "rgba(214,112,10,0.1)",
                            border: "1px solid rgba(214,112,10,0.3)",
                            color: page === p ? "#0a0d14" : "#d6700a",
                          }}
                        >
                          {p}
                        </button>
                      )
                    )}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-all disabled:opacity-30"
                  style={{ background: "rgba(214,112,10,0.1)", border: "1px solid rgba(214,112,10,0.3)", color: "#d6700a" }}
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </main>

          {/* ── FOOTER ─────────────────────────────── */}
          <footer
            className="p-3 border-t flex justify-center"
            style={{ borderTopColor: "rgba(214,112,10,0.3)", background: "rgba(10,13,20,0.9)" }}
          >
            <div className="flex items-center gap-1.5 text-primary/40">
              <span>✦</span>
              <p className="font-fell text-[11px] uppercase tracking-[0.2em]">
                Seek and ye shall find
              </p>
              <span>✦</span>
            </div>
          </footer>
        </div>
      </div>

      {/* ── CARD DETAIL MODAL ──────────────────────── */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl flex"
              style={{ background: "#e8dfcc", maxHeight: "82vh" }}
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-2.5 right-2.5 z-10 rounded-full p-1 transition-colors hover:opacity-80"
                style={{ background: "rgba(0,0,0,0.15)" }}
              >
                <X className="w-3.5 h-3.5 text-slate-700" />
              </button>

              {/* Left: Card image */}
              <div
                className="relative flex-shrink-0"
                style={{ width: "108px", minHeight: "189px" }}
              >
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Details */}
              <div className="flex-1 p-5 overflow-y-auto text-slate-800">
                {/* Arcana badge */}
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full font-cinzel mb-1.5 inline-block"
                  style={{
                    background: "rgba(181,148,77,0.2)",
                    border: "1px solid rgba(181,148,77,0.5)",
                    color: "#7a5a2a",
                  }}
                >
                  {selectedCard.arcana === "major"
                    ? `Major Arcana · ${selectedCard.romanNumeral}`
                    : `${selectedCard.arcana.charAt(0).toUpperCase() + selectedCard.arcana.slice(1)}`}
                </span>

                <h2 className="text-[1.7rem] font-bold italic font-playfair mb-0.5">{selectedCard.name}</h2>
                <p className="text-[11px] text-slate-500 font-cinzel uppercase tracking-widest mb-3">
                  {selectedCard.element} {selectedCard.planet ? `· ${selectedCard.planet}` : ""}
                </p>

                <blockquote
                  className="italic text-xs text-slate-700 pl-2.5 py-1 mb-3 font-fell"
                  style={{ borderLeft: "2px solid rgba(214,112,10,0.5)" }}
                >
                  "{selectedCard.waiteQuote}"
                </blockquote>

                <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 font-cinzel">Upright Meaning</h4>
                <p className="text-xs leading-relaxed mb-2">{selectedCard.uprightMeaning}</p>

                <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 font-cinzel">Reversed Meaning</h4>
                <p className="text-xs leading-relaxed mb-3">{selectedCard.reversedMeaning}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {selectedCard.keywords.map((k) => (
                    <span
                      key={k}
                      className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded font-cinzel"
                      style={{ background: "rgba(181,148,77,0.15)", border: "1px solid rgba(181,148,77,0.4)", color: "#7a5a2a" }}
                    >
                      {k}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
