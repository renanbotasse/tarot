import { SpreadPosition, SpreadType } from "@/domain/entities/SpreadSession";

export type { SpreadType } from "@/domain/entities/SpreadSession";
export type { SpreadPosition } from "@/domain/entities/SpreadSession";

export interface SpreadConfig {
  id: SpreadType;
  name: string;
  namePt: string;
  label: string;
  labelPt: string;
  cardCount: number;
  description: string;
  descriptionPt: string;
  positions: SpreadPosition[];
}

export const SPREADS: SpreadConfig[] = [
  {
    id: "celtic-cross",
    name: "Celtic Cross",
    namePt: "Cruz Celta",
    label: "10 Cards • Deep Insight",
    labelPt: "10 Cartas • Visão Profunda",
    cardCount: 10,
    description: "The definitive spread — ten positions that illuminate.",
    descriptionPt: "A tiragem definitiva — dez posições que iluminam.",
    positions: [
      { id: "situation",   label: "The Heart",        labelPt: "O Coração",       description: "The central situation",     descriptionPt: "A situação central" },
      { id: "obstacle",    label: "The Obstacle",     labelPt: "O Obstáculo",     description: "What stands before you",    descriptionPt: "O que se coloca à sua frente", rotation: 90 },
      { id: "shadow",      label: "The Shadow",       labelPt: "A Sombra",        description: "What lies beneath",         descriptionPt: "O que jaz abaixo" },
      { id: "past",        label: "The Past",         labelPt: "O Passado",       description: "What has passed",           descriptionPt: "O que passou" },
      { id: "higher_self", label: "The Crown",        labelPt: "A Coroa",         description: "What you aspire to",        descriptionPt: "Ao que você aspira" },
      { id: "future",      label: "The Future",       labelPt: "O Futuro",        description: "What approaches",           descriptionPt: "O que se aproxima" },
      { id: "self",        label: "The Self",         labelPt: "O Eu",            description: "How you see yourself",      descriptionPt: "Como você se vê" },
      { id: "environment", label: "Surroundings",     labelPt: "O Entorno",       description: "External influences",       descriptionPt: "Influências externas" },
      { id: "hopes_fears", label: "Fears & Desires",  labelPt: "Medos e Desejos", description: "The hidden dimension",      descriptionPt: "A dimensão oculta" },
      { id: "outcome",     label: "Final Outcome",    labelPt: "Resultado Final", description: "Where this leads",          descriptionPt: "Para onde isso leva" },
    ],
  },
  {
    id: "pentagram",
    name: "Pentagram",
    namePt: "Pentagrama",
    label: "5 Cards • Spiritual Flow",
    labelPt: "5 Cartas • Fluxo Espiritual",
    cardCount: 5,
    description: "Five sacred points — Spirit, Fire, Water, Air, and Earth.",
    descriptionPt: "Cinco pontos sagrados — Espírito, Fogo, Água, Ar e Terra.",
    positions: [
      { id: "spirit", label: "Spirit", labelPt: "Espírito", description: "Your higher self",      descriptionPt: "Seu eu superior" },
      { id: "fire",   label: "Fire",   labelPt: "Fogo",     description: "Will and desire",       descriptionPt: "Vontade e desejo" },
      { id: "earth",  label: "Earth",  labelPt: "Terra",    description: "Material reality",      descriptionPt: "Realidade material" },
      { id: "water",  label: "Water",  labelPt: "Água",     description: "Emotion and intuition", descriptionPt: "Emoção e intuição" },
      { id: "air",    label: "Air",    labelPt: "Ar",       description: "Thought and truth",     descriptionPt: "Pensamento e verdade" },
    ],
  },
  {
    id: "three-card",
    name: "3-Card",
    namePt: "3 Cartas",
    label: "3 Cards • Past, Present, Future",
    labelPt: "3 Cartas • Passado, Presente, Futuro",
    cardCount: 3,
    description: "The eternal triad — Past, Present, and Future.",
    descriptionPt: "A tríade eterna — Passado, Presente e Futuro.",
    positions: [
      { id: "past",    label: "The Past",    labelPt: "O Passado",  description: "What has shaped you",  descriptionPt: "O que te formou" },
      { id: "present", label: "The Present", labelPt: "O Presente", description: "Where you stand now",  descriptionPt: "Onde você está agora" },
      { id: "future",  label: "The Future",  labelPt: "O Futuro",   description: "Where you are headed", descriptionPt: "Para onde você vai" },
    ],
  },
];

export function getSpread(id: string): SpreadConfig | undefined {
  return SPREADS.find((s) => s.id === id);
}
