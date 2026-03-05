import { TarotCard } from "../entities/TarotCard";

/**
 * Fisher-Yates shuffle — pure function, no side effects.
 * Guarantees every card appears exactly once in the result.
 */
export function shuffleDeck(cards: TarotCard[]): TarotCard[] {
  const deck = [...cards];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
