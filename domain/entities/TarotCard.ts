export type Arcana = "major" | "wands" | "cups" | "swords" | "pentacles";

export interface TarotCard {
  id: string;           // "major-00", "wands-01"
  name: string;
  arcana: Arcana;
  number: number;       // 0–21 major, 1–14 minor
  romanNumeral?: string;
  image: string;        // "/cards/00-TheFool.png" — always prefixed with /cards/
  element: string;
  planet?: string;
  uprightMeaning: string;
  reversedMeaning: string;  // prepared for V2, NOT displayed in MVP
  waiteQuote: string;
  keywords: string[];
}

/** Type guard: is this a Major Arcana card? */
export function isMajorArcana(card: TarotCard): boolean {
  return card.arcana === "major";
}

/** Type guard: is this a Minor Arcana card? */
export function isMinorArcana(card: TarotCard): boolean {
  return card.arcana !== "major";
}
