import { TarotCard } from "../entities/TarotCard";
import { DrawnCard, SpreadPosition } from "../entities/SpreadSession";

/**
 * Assigns shuffled cards to spread positions.
 * Pure function — no side effects, fully testable.
 * isReversed is ALWAYS false in MVP.
 */
export function dealCards(
  deck: TarotCard[],
  positions: SpreadPosition[]
): DrawnCard[] {
  if (deck.length < positions.length) {
    throw new Error(
      `Not enough cards in deck (${deck.length}) to fill ${positions.length} positions`
    );
  }
  return positions.map((position, index) => ({
    card: deck[index],
    position,
    isReversed: false as const,  // always false in MVP
    isRevealed: false,
  }));
}
