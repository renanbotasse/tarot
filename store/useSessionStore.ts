"use client";

import { create } from "zustand";
import { SpreadSession, SpreadType } from "@/domain/entities/SpreadSession";
import { SpreadPosition } from "@/domain/entities/SpreadSession";
import { shuffleDeck } from "@/domain/use-cases/shuffleDeck";
import { dealCards } from "@/domain/use-cases/dealCards";
import { CARDS } from "@/lib/cards";

interface SessionStore {
  session: SpreadSession | null;
  /** Replaces any existing session. Caller must show confirmation modal first. */
  startSession: (spreadType: SpreadType, positions: SpreadPosition[]) => void;
  /**
   * Reveals the next card in sequential order.
   * ACID: single set() call, consistency guard prevents double-reveal.
   */
  revealNextCard: () => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  session: null,

  startSession: (spreadType, positions) =>
    set(() => {
      const deck = shuffleDeck(CARDS);           // Fisher-Yates shuffle
      const drawnCards = dealCards(deck, positions); // isReversed: false always
      return {
        session: {
          spreadType,
          drawnCards,
          revealedCount: 0,
          startedAt: new Date(),
          isComplete: false,
        },
      };
    }),

  revealNextCard: () =>
    set((state) => {
      if (!state.session) return state;
      const { session } = state;
      // Consistency guard: no mutation if already complete
      if (session.isComplete) return state;

      const nextIndex = session.revealedCount;
      if (nextIndex >= session.drawnCards.length) return state;

      // Atomic update — single set() call
      const updatedCards = session.drawnCards.map((dc, i) =>
        i === nextIndex ? { ...dc, isRevealed: true } : dc
      );
      const revealedCount = nextIndex + 1;

      return {
        session: {
          ...session,
          drawnCards: updatedCards,
          revealedCount,
          isComplete: revealedCount === session.drawnCards.length,
        },
      };
    }),

  clearSession: () => set({ session: null }),
}));
