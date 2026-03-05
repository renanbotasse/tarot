import { SpreadPosition, SpreadType } from "@/domain/entities/SpreadSession";

export type { SpreadType } from "@/domain/entities/SpreadSession";
export type { SpreadPosition } from "@/domain/entities/SpreadSession";

export interface SpreadConfig {
  id: SpreadType;
  name: string;
  label: string;
  cardCount: number;
  description: string;
  positions: SpreadPosition[];
}

export const SPREADS: SpreadConfig[] = [
  {
    id: "celtic-cross",
    name: "Celtic Cross",
    label: "10 Cards • Deep Insight",
    cardCount: 10,
    description: "The definitive spread — ten positions that illuminate.",
    positions: [
      { id: "situation",   label: "The Heart",        description: "The central situation" },
      { id: "obstacle",    label: "The Obstacle",     description: "What stands before you", rotation: 90 },
      { id: "shadow",      label: "The Shadow",       description: "What lies beneath" },
      { id: "past",        label: "The Past",         description: "What has passed" },
      { id: "higher_self", label: "The Crown",        description: "What you aspire to" },
      { id: "future",      label: "The Future",       description: "What approaches" },
      { id: "self",        label: "The Self",         description: "How you see yourself" },
      { id: "environment", label: "Surroundings",     description: "External influences" },
      { id: "hopes_fears", label: "Fears & Desires",  description: "The hidden dimension" },
      { id: "outcome",     label: "Final Outcome",    description: "Where this leads" },
    ],
  },
  {
    id: "pentagram",
    name: "Pentagram",
    label: "5 Cards • Spiritual Flow",
    cardCount: 5,
    description: "Five sacred points — Spirit, Fire, Water, Air, and Earth.",
    positions: [
      { id: "spirit", label: "Spirit", description: "Your higher self" },
      { id: "fire",   label: "Fire",   description: "Will and desire" },
      { id: "earth",  label: "Earth",  description: "Material reality" },
      { id: "water",  label: "Water",  description: "Emotion and intuition" },
      { id: "air",    label: "Air",    description: "Thought and truth" },
    ],
  },
  {
    id: "three-card",
    name: "3-Card",
    label: "3 Cards • Past, Present, Future",
    cardCount: 3,
    description: "The eternal triad — Past, Present, and Future.",
    positions: [
      { id: "past",    label: "The Past",    description: "What has shaped you" },
      { id: "present", label: "The Present", description: "Where you stand now" },
      { id: "future",  label: "The Future",  description: "Where you are headed" },
    ],
  },
];

export function getSpread(id: string): SpreadConfig | undefined {
  return SPREADS.find((s) => s.id === id);
}
