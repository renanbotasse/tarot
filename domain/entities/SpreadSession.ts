import { TarotCard } from "./TarotCard";

export type SpreadType = "daily" | "three-card" | "pentagram" | "celtic-cross";

export interface SpreadPosition {
  id: string;           // "situation", "obstacle", "past"
  label: string;        // display name
  description: string;  // subtitle / context hint
  rotation?: number;    // for crossing card in Celtic Cross (90deg)
}

export interface DrawnCard {
  card: TarotCard;
  position: SpreadPosition;
  isReversed: false;    // ALWAYS false in MVP — reversed cards are V2
  isRevealed: boolean;
}

export interface SpreadSession {
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  revealedCount: number;
  startedAt: Date;
  isComplete: boolean;
}
