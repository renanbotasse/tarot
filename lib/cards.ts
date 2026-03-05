// Re-export domain entity as the canonical type used throughout the app
export type { TarotCard } from "@/domain/entities/TarotCard";
import type { TarotCard } from "@/domain/entities/TarotCard";

export const CARDS: TarotCard[] = [
  // ─── MAJOR ARCANA ───────────────────────────────────────────
  {
    id: "00-the-fool",
    name: "The Fool",
    image: "/cards/00-TheFool.png",
    arcana: "major",
    number: 0,
    romanNumeral: "0",
    uprightMeaning:
      "New beginnings, innocence, spontaneity, a free spirit. The Fool leaps into the unknown with boundless optimism.",
    reversedMeaning:
      "Naivety, foolishness, recklessness, risk-taking without caution. A warning to look before you leap.",
    waiteQuote:
      "He is the spirit in search of experience. He represents the mystical fool who has transcended worldly concerns.",
    element: "Air",
    planet: "Uranus",
    keywords: ["beginnings", "innocence", "adventure", "spontaneity"],
  },
  {
    id: "01-the-magician",
    name: "The Magician",
    image: "/cards/01-TheMagician.png",
    arcana: "major",
    number: 1,
    romanNumeral: "I",
    uprightMeaning:
      "Willpower, desire, creation, manifestation. All tools are at your disposal — the question is whether you will use them.",
    reversedMeaning:
      "Manipulation, poor planning, untapped talents. Skills are present but not being applied correctly.",
    waiteQuote:
      "He has the whole creation as his domain. The four symbols of Magic are on his altar.",
    element: "Air",
    planet: "Mercury",
    keywords: ["willpower", "manifestation", "skill", "mastery"],
  },
  {
    id: "02-the-high-priestess",
    name: "The High Priestess",
    image: "/cards/02-TheHighPriestess.png",
    arcana: "major",
    number: 2,
    romanNumeral: "II",
    uprightMeaning:
      "Intuition, sacred knowledge, divine feminine, the subconscious mind. What lies beneath the surface?",
    reversedMeaning:
      "Secrets, disconnected from intuition, withdrawal and silence. Hidden forces at work.",
    waiteQuote:
      "She represents the secret church and the spiritual bride. The veil guards the mystery within.",
    element: "Water",
    planet: "Moon",
    keywords: ["intuition", "mystery", "inner-knowledge", "subconscious"],
  },
  {
    id: "03-the-empress",
    name: "The Empress",
    image: "/cards/03-TheEmpress.png",
    arcana: "major",
    number: 3,
    romanNumeral: "III",
    uprightMeaning:
      "Femininity, beauty, nature, nurturing, abundance. Creation in its most fertile form.",
    reversedMeaning:
      "Creative block, dependence on others, smothering, neglect of self.",
    waiteQuote:
      "She is the fruitful mother of thousands. Nature itself is the garment of her glory.",
    element: "Earth",
    planet: "Venus",
    keywords: ["fertility", "abundance", "nurturing", "nature"],
  },
  {
    id: "04-the-emperor",
    name: "The Emperor",
    image: "/cards/04-TheEmperor.png",
    arcana: "major",
    number: 4,
    romanNumeral: "IV",
    uprightMeaning:
      "Authority, establishment, structure, a father figure. Order imposed upon chaos through strength of will.",
    reversedMeaning:
      "Domination, excessive control, rigidity, stubbornness. Authority misused or lacking.",
    waiteQuote:
      "He is the supreme lord of the temporal order. His throne is of stone — enduring, immovable.",
    element: "Fire",
    planet: "Aries",
    keywords: ["authority", "structure", "control", "stability"],
  },
  {
    id: "05-the-hierophant",
    name: "The Hierophant",
    image: "/cards/05-TheHierophant.png",
    arcana: "major",
    number: 5,
    romanNumeral: "V",
    uprightMeaning:
      "Spiritual wisdom, religious beliefs, conformity, tradition. The bridge between heaven and earth.",
    reversedMeaning:
      "Personal beliefs, freedom, challenging the status quo. Rebellion against institution.",
    waiteQuote:
      "He is the ruling power of external religion. His keys unlock both earthly and celestial mysteries.",
    element: "Earth",
    planet: "Taurus",
    keywords: ["tradition", "wisdom", "institution", "conformity"],
  },
  {
    id: "06-the-lovers",
    name: "The Lovers",
    image: "/cards/06-TheLovers.png",
    arcana: "major",
    number: 6,
    romanNumeral: "VI",
    uprightMeaning:
      "Love, harmony, relationships, values alignment, choices. The sacred union of opposites.",
    reversedMeaning:
      "Self-love, disharmony, imbalance, misalignment of values. A crossroads poorly navigated.",
    waiteQuote:
      "He who is not afraid to take the supreme step — he alone can achieve the great work.",
    element: "Air",
    planet: "Gemini",
    keywords: ["love", "union", "choice", "values"],
  },
  {
    id: "07-the-chariot",
    name: "The Chariot",
    image: "/cards/07-TheChariot.png",
    arcana: "major",
    number: 7,
    romanNumeral: "VII",
    uprightMeaning:
      "Control, willpower, success, action, determination. Victory through discipline and force of will.",
    reversedMeaning:
      "Self-discipline, opposition, lack of direction, aggression. A chariot without a driver.",
    waiteQuote:
      "The sphinxes pull in opposite directions — yet the charioteer holds the course by will alone.",
    element: "Water",
    planet: "Cancer",
    keywords: ["victory", "control", "determination", "conquest"],
  },
  {
    id: "08-strength",
    name: "Strength",
    image: "/cards/08-Strength.png",
    arcana: "major",
    number: 8,
    romanNumeral: "VIII",
    uprightMeaning:
      "Strength, courage, patience, control, compassion. The lion is tamed not by force but by love.",
    reversedMeaning:
      "Inner strength, self-doubt, low energy, raw emotion. Courage failing at a critical moment.",
    waiteQuote:
      "It is a card of power and energy. The woman closes the jaws of the lion — gently, completely.",
    element: "Fire",
    planet: "Leo",
    keywords: ["courage", "patience", "compassion", "inner-strength"],
  },
  {
    id: "09-the-hermit",
    name: "The Hermit",
    image: "/cards/09-TheHermit.png",
    arcana: "major",
    number: 9,
    romanNumeral: "IX",
    uprightMeaning:
      "Soul-searching, introspection, being alone, inner guidance. The lantern illuminates the solitary path ahead.",
    reversedMeaning:
      "Isolation, loneliness, withdrawal. Reclusiveness that has become harmful to the self.",
    waiteQuote:
      "The Hermit stands solitary with his lamp lit from within. He is the Cabbalist who has descended into the world.",
    element: "Earth",
    planet: "Virgo",
    keywords: ["solitude", "introspection", "guidance", "wisdom"],
  },
  {
    id: "10-wheel-of-fortune",
    name: "Wheel of Fortune",
    image: "/cards/10-WheelOfFortune.png",
    arcana: "major",
    number: 10,
    romanNumeral: "X",
    uprightMeaning:
      "Good luck, karma, life cycles, destiny, a turning point. The wheel turns — fortune follows.",
    reversedMeaning:
      "Bad luck, resistance to change, breaking cycles. Fate resisted rather than embraced.",
    waiteQuote:
      "The Wheel of Fortune is a symbol of the cosmic cycles of existence — forever turning, never still.",
    element: "Fire",
    planet: "Jupiter",
    keywords: ["fate", "cycles", "luck", "karma"],
  },
  {
    id: "11-justice",
    name: "Justice",
    image: "/cards/11-Justice.png",
    arcana: "major",
    number: 11,
    romanNumeral: "XI",
    uprightMeaning:
      "Justice, fairness, truth, cause and effect, law. The scales are balanced — truth will prevail.",
    reversedMeaning:
      "Unfairness, lack of accountability, dishonesty. The scales tipped by hidden forces.",
    waiteQuote:
      "Justice lifts the balances of Truth, and the sword is the sword of reason. She is equity made manifest.",
    element: "Air",
    planet: "Libra",
    keywords: ["justice", "fairness", "truth", "balance"],
  },
  {
    id: "12-the-hanged-man",
    name: "The Hanged Man",
    image: "/cards/12-TheHangedMan.png",
    arcana: "major",
    number: 12,
    romanNumeral: "XII",
    uprightMeaning:
      "Pause, surrender, letting go, new perspectives. Sometimes the only way forward is to stop completely.",
    reversedMeaning:
      "Delays, resistance, stalling, indecision. Martyrdom without purpose or reward.",
    waiteQuote:
      "He hangs at his own will. His face exhibits deep entrancement rather than suffering.",
    element: "Water",
    planet: "Neptune",
    keywords: ["surrender", "pause", "perspective", "sacrifice"],
  },
  {
    id: "13-death",
    name: "Death",
    image: "/cards/13-Death.png",
    arcana: "major",
    number: 13,
    romanNumeral: "XIII",
    uprightMeaning:
      "Endings, change, transformation, transition. Nothing ends that does not also begin again.",
    reversedMeaning:
      "Resistance to change, personal transformation, inner purging. Fighting the inevitable.",
    waiteQuote:
      "The pale horse passes through and nothing withstands his passage. Yet the sun rises between the towers.",
    element: "Water",
    planet: "Scorpio",
    keywords: ["transformation", "endings", "change", "transition"],
  },
  {
    id: "14-temperance",
    name: "Temperance",
    image: "/cards/14-Temperance.png",
    arcana: "major",
    number: 14,
    romanNumeral: "XIV",
    uprightMeaning:
      "Balance, moderation, patience, purpose, meaning. The art of combining opposites harmoniously.",
    reversedMeaning:
      "Imbalance, excess, self-healing, re-alignment needed. The golden mean abandoned.",
    waiteQuote:
      "The great angel mixes the waters between the two cups — the elixir of life flows between worlds.",
    element: "Fire",
    planet: "Sagittarius",
    keywords: ["balance", "moderation", "patience", "harmony"],
  },
  {
    id: "15-the-devil",
    name: "The Devil",
    image: "/cards/15-TheDevil.png",
    arcana: "major",
    number: 15,
    romanNumeral: "XV",
    uprightMeaning:
      "Shadow self, attachment, addiction, restriction, sexuality. The chains you wear are of your own making.",
    reversedMeaning:
      "Releasing limiting beliefs, exploring dark thoughts, detachment. Breaking free of bondage.",
    waiteQuote:
      "The black throne of bondage — yet look carefully, for the chains are loose and could be lifted.",
    element: "Earth",
    planet: "Capricorn",
    keywords: ["bondage", "shadow", "materialism", "addiction"],
  },
  {
    id: "16-the-tower",
    name: "The Tower",
    image: "/cards/16-TheTower.png",
    arcana: "major",
    number: 16,
    romanNumeral: "XVI",
    uprightMeaning:
      "Sudden change, upheaval, chaos, revelation, awakening. The lightning strikes what is false.",
    reversedMeaning:
      "Personal transformation, fear of change, averting disaster. Avoidance of necessary destruction.",
    waiteQuote:
      "The foundations rumble beneath the proud tower. What lightning destroys was never truly built to last.",
    element: "Fire",
    planet: "Mars",
    keywords: ["upheaval", "revelation", "chaos", "transformation"],
  },
  {
    id: "17-the-star",
    name: "The Star",
    image: "/cards/17-TheStar.png",
    arcana: "major",
    number: 17,
    romanNumeral: "XVII",
    uprightMeaning:
      "Hope, faith, purpose, renewal, spirituality. After the storm, the stars emerge to guide the way.",
    reversedMeaning:
      "Lack of faith, despair, self-trust issues, disconnection. Hope deferred indefinitely.",
    waiteQuote:
      "She is the eternal source of life renewed. The stars shine down as she pours the waters of immortality.",
    element: "Air",
    planet: "Aquarius",
    keywords: ["hope", "renewal", "faith", "inspiration"],
  },
  {
    id: "18-the-moon",
    name: "The Moon",
    image: "/cards/18-TheMoon.png",
    arcana: "major",
    number: 18,
    romanNumeral: "XVIII",
    uprightMeaning:
      "Illusion, fear, the unconscious, intuition, confusion. Not all that glimmers in moonlight is as it seems.",
    reversedMeaning:
      "Release of fear, repressed emotion, inner confusion. Clarity emerging through the fog.",
    waiteQuote:
      "The path between two towers — the moon illuminates but deceives. Beware what crawls from the deep.",
    element: "Water",
    planet: "Pisces",
    keywords: ["illusion", "subconscious", "fear", "intuition"],
  },
  {
    id: "19-the-sun",
    name: "The Sun",
    image: "/cards/19-TheSun.png",
    arcana: "major",
    number: 19,
    romanNumeral: "XIX",
    uprightMeaning:
      "Positivity, fun, warmth, success, vitality. The sun shines upon all things with equal and joyful light.",
    reversedMeaning:
      "Inner child, feeling down, overly optimistic. The sun temporarily hidden behind clouds.",
    waiteQuote:
      "The Sun is the great luminary that gives life to the world. The child upon the horse is joy incarnate.",
    element: "Fire",
    planet: "Sun",
    keywords: ["joy", "success", "positivity", "vitality"],
  },
  {
    id: "20-judgement",
    name: "Judgement",
    image: "/cards/20-Judgement.png",
    arcana: "major",
    number: 20,
    romanNumeral: "XX",
    uprightMeaning:
      "Judgement, rebirth, inner calling, absolution. The trumpet sounds — rise and answer the call.",
    reversedMeaning:
      "Self-doubt, inner critic, ignoring the call. Judgement avoided through fear.",
    waiteQuote:
      "The great angel sounds the last trumpet. The dead rise — but it is the living who must truly awaken.",
    element: "Fire",
    planet: "Pluto",
    keywords: ["rebirth", "calling", "absolution", "awakening"],
  },
  {
    id: "21-the-world",
    name: "The World",
    image: "/cards/21-TheWorld.png",
    arcana: "major",
    number: 21,
    romanNumeral: "XXI",
    uprightMeaning:
      "Completion, integration, accomplishment, travel. The great work is done — celebrate and begin again.",
    reversedMeaning:
      "Seeking personal closure, short-cuts, delays. The final step not yet taken.",
    waiteQuote:
      "The dancer in the wreath is the Great Triumphant Heroine. The cycle is complete — and everything begins again.",
    element: "Earth",
    planet: "Saturn",
    keywords: ["completion", "wholeness", "accomplishment", "integration"],
  },

  // ─── WANDS ──────────────────────────────────────────────────
  ...Array.from({ length: 14 }, (_, i) => {
    const n = i + 1;
    const names = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"];
    const upright = [
      "Inspiration, new beginnings, growth, potential — a creative spark ignites.",
      "Planning, decisions, discovery — two paths diverge in the firelit wood.",
      "Progress, expansion, foresight — the ships are set to sail.",
      "Celebration, harmony, homecoming — the harvest festival is complete.",
      "Competition, conflict, adversity — rivalry sharpens the spirit.",
      "Success, public recognition, progress — the victorious return.",
      "Perseverance, defensive stance, maintaining ground — hold firm.",
      "Speed, action, air travel, movement — swift news arrives.",
      "Resilience, courage, persistence — battle-worn but unbroken.",
      "Burden, responsibility, hard work — the load is heavy but the goal is near.",
      "Exploration, free-spirit, adventure — a young dreamer sets forth.",
      "Energy, passion, adventure, impulsiveness — charge without hesitation.",
      "Courage, determination, joy, vibrancy — the queen commands her flame.",
      "Natural authority, honour, accomplishment — the king rules with fire.",
    ];
    const reversed = [
      "Delays, lack of motivation, weighed down — the spark struggles to catch.",
      "Fear of unknown, lack of planning, impatience — indecision clouds the way.",
      "Overconfidence, lack of foresight, obstacles — plans that haven't been tested.",
      "Disharmony, tension, breakdown of communication — discord within.",
      "Conflict, disagreement, tension — heated emotions cloud judgement.",
      "Egotism, arrogance, delays in recognition — success withheld.",
      "Anxiety, defensiveness, exhaustion — overwhelmed on all fronts.",
      "Delays, feeling out of control, events moving too fast — brace yourself.",
      "Inner resources, stubbornness, refusing to back down — at what cost?",
      "Inability to delegate, oppressive energy — when to set down the burden.",
      "Hasty, unreliable, tantrums — energy without direction.",
      "Rushing, reckless behaviour, scattered energy — slow the charge.",
      "Demands, jealousy, insecurity — passion turned possessive.",
      "Impulsiveness, haste, ruthlessness — power misused.",
    ];
    return {
      id: `wands-${String(n).padStart(2,"0")}`,
      name: `${names[i]} of Wands`,
      image: `/cards/Wands${String(n).padStart(2,"0")}.png`,
      arcana: "wands" as const,
      number: n,
      uprightMeaning: upright[i],
      reversedMeaning: reversed[i],
      waiteQuote: `The ${names[i]} of Wands speaks of fire — that creative, primal force that drives all endeavour.`,
      element: "Fire",
      keywords: ["fire","passion","creativity","ambition"],
    };
  }),

  // ─── CUPS ───────────────────────────────────────────────────
  ...Array.from({ length: 14 }, (_, i) => {
    const n = i + 1;
    const names = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"];
    const upright = [
      "New feelings, intuition, creativity, love — the cup overflows with possibility.",
      "Unified love, partnership, mutual attraction — two souls mirror each other.",
      "Celebration, friendship, creativity, collaborations — raise the cup in joy.",
      "Meditation, contemplation, apathy, reevaluation — the world offered but hand withdrawn.",
      "Loss, grief, despair, bereavement — yet two cups remain standing behind you.",
      "Nostalgia, happy memories, reunion, childlike joy — the golden past revisited.",
      "Fantasy, illusion, wishful thinking, choices — the mist conceals many doors.",
      "Disappointment, abandonment, withdrawal — leaving what no longer serves.",
      "Contentment, satisfaction, emotional stability — wishes granted and savoured.",
      "Divine love, blissful endings, family, harmony — the rainbow after the storm.",
      "Creative opportunities, intuition, sensitivity — a new emotional chapter beckons.",
      "Romance, charm, 'Knight in shining armour' — but is he as he seems?",
      "Emotional security, calm, compassionate counsel — the queen of still waters.",
      "Emotional balance, generosity, calm authority — wisdom through feeling.",
    ];
    const reversed = [
      "Emotional loss, blocked creativity, emptiness — the cup turned inward.",
      "Imbalance, broken communication, tension — connection strained.",
      "Overindulgence, gossip, isolation — the celebration sours.",
      "Boredom, lost opportunities, missing the point — distracted from what matters.",
      "Personal setbacks, self-forgiveness, moving on — acceptance of loss.",
      "Living in the past, naivety, unrealistic expectations — nostalgia as escape.",
      "Alignment, clarity of choice, temptation — seeing through the illusion.",
      "Hopelessness, moving on, withdrawal — when to walk away.",
      "Lack of contentment, vanity, dissatisfaction — wishes unfulfilled.",
      "Shattered family, misalignment of values — the rainbow obscured by clouds.",
      "Emotional immaturity, creative blocks, insecurity — hesitation at the threshold.",
      "Unreliable, emotionally immature, fraud — charm concealing emptiness.",
      "Emotional insecurity, dependence, inner feelings — the still surface hiding depths.",
      "Emotional manipulation, moodiness, withdrawal — depth becoming darkness.",
    ];
    return {
      id: `cups-${String(n).padStart(2,"0")}`,
      name: `${names[i]} of Cups`,
      image: `/cards/Cups${String(n).padStart(2,"0")}.png`,
      arcana: "cups" as const,
      number: n,
      uprightMeaning: upright[i],
      reversedMeaning: reversed[i],
      waiteQuote: `The ${names[i]} of Cups — all things of the water, emotion, and the world of feeling.`,
      element: "Water",
      keywords: ["water","emotion","love","intuition"],
    };
  }),

  // ─── SWORDS ─────────────────────────────────────────────────
  ...Array.from({ length: 14 }, (_, i) => {
    const n = i + 1;
    const names = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"];
    const upright = [
      "Breakthroughs, new ideas, mental clarity, success — the sword cuts through confusion.",
      "Difficult choices, indecision, stalemate — eyes blindfolded before two blades.",
      "Painful separation, sorrow, grief — the three swords pierce the heart.",
      "Rest, relaxation, contemplation — the warrior's sword laid down to heal.",
      "Conflict, tension, loss, transition — not every battle has a clean victor.",
      "Transition, change, rite of passage — the boat carries you to calmer waters.",
      "Deception, strategy, impermanence — what is carried away and what is left?",
      "Restriction, imprisoned thinking, powerlessness — but the ties can be loosened.",
      "Anxiety, inner turmoil, fear, deep-rooted fears — the nightmare that wakes you.",
      "Painful endings, betrayal, crisis, ruin — the lowest point before dawn.",
      "Mental agility, curiosity, new ideas — sharp mind, eager for truth.",
      "Action, impulsiveness, intellectual speed — charge now, question later.",
      "Complexity, experience, sharp wit — cutting through pretension with clarity.",
      "Mental clarity, intellectual power, authority — truth as the sovereign virtue.",
    ];
    const reversed = [
      "Confusion, brutality, chaos — power without wisdom.",
      "Indecision, stalemate, avoiding conflict — the blindfold chosen, not imposed.",
      "Releasing pain, optimism — choosing to remove the swords.",
      "Restlessness, isolation, burnout — the warrior refuses to rest.",
      "Reconciliation, past resentment, unsportsmanlike conduct — peace forced.",
      "Running away, stagnation, unfinished business — the boat that won't leave the shore.",
      "Conscience, dishonesty, theft — caught in the act.",
      "Self-imposed restriction, releasing limiting beliefs — untying yourself.",
      "Inner turmoil, hopelessness, fear of tomorrow — anxiety taken inward.",
      "Recovery, regeneration, inevitable end — what rises from the ashes?",
      "Hasty communication, scattering energy, deception — words weaponised.",
      "Rushing headfirst, reckless decision-making — the charge before the thought.",
      "Coldness, bitterness, overly-critical — sharp wit become cruelty.",
      "Abuse of power, manipulation, clear-thinking clouded by cruelty — wisdom misapplied.",
    ];
    return {
      id: `swords-${String(n).padStart(2,"0")}`,
      name: `${names[i]} of Swords`,
      image: `/cards/Swords${String(n).padStart(2,"0")}.png`,
      arcana: "swords" as const,
      number: n,
      uprightMeaning: upright[i],
      reversedMeaning: reversed[i],
      waiteQuote: `The ${names[i]} of Swords — the blade that severs and illuminates, for truth is never painless.`,
      element: "Air",
      keywords: ["air","intellect","conflict","truth"],
    };
  }),

  // ─── PENTACLES ──────────────────────────────────────────────
  ...Array.from({ length: 14 }, (_, i) => {
    const n = i + 1;
    const names = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"];
    const upright = [
      "New financial opportunities, manifestation, abundance — the golden disc offered.",
      "Multiple priorities, time management, prioritization — juggling with grace.",
      "Teamwork, initial fulfilment, collaboration — masterwork in progress.",
      "Security, control, conservation, possessiveness — holding what is earned.",
      "Financial loss, poverty-mindset, isolation — the cold outside the warm church.",
      "Generosity, charity, giving and receiving — the scales of fortune balanced.",
      "Long-term view, sustainable results, perseverance — the harvest approaches.",
      "Apprenticeship, repetition, skill-building — the master craftsman's path.",
      "Abundance, financial independence, luxury — fruits of long labour.",
      "Wealth, financial security, family, long-term success — the legacy complete.",
      "Financial opportunity, skill development, scholarship — eager student of abundance.",
      "Hard work, productivity, routine — the knight who never rushes but never stops.",
      "Practicality, creature comforts, financial security — the queen of material wisdom.",
      "Abundance, prosperity, security, leadership — the king who mastered the material world.",
    ];
    const reversed = [
      "Lost opportunity, lack of planning, bad investment — the disc withheld.",
      "Imbalance, disorganisation, overwhelm — one ball hits the ground.",
      "Lack of teamwork, disharmony, misalignment — the masterwork abandoned.",
      "Greed, materialism, self-protection — clinging until the hands ache.",
      "Recovery from financial loss, overcoming hardship — stepping back into the warmth.",
      "Debt, selfishness, one-sided charity — giving with strings attached.",
      "Lack of long-term vision, limited growth, impatience — harvesting too soon.",
      "Self-development, perfectionism, mediocrity — boredom with the craft.",
      "Self-worth, over-investment in work, materialism — when is enough, enough?",
      "Financial failure, loneliness, loss — the legacy that crumbled.",
      "Lack of progress, procrastination, learning from failure — the lesson not yet learned.",
      "Laziness, financial irresponsibility, aimlessness — the slow horse standing still.",
      "Imbalance in work and home life, self-neglect — the queen abandoning her garden.",
      "Financial instability, greed, stubbornness — the king who hoards rather than rules.",
    ];
    return {
      id: `pentacles-${String(n).padStart(2,"0")}`,
      name: `${names[i]} of Pentacles`,
      image: `/cards/Pentacles${String(n).padStart(2,"0")}.png`,
      arcana: "pentacles" as const,
      number: n,
      uprightMeaning: upright[i],
      reversedMeaning: reversed[i],
      waiteQuote: `The ${names[i]} of Pentacles — earth made manifest, the tangible fruit of invisible labour.`,
      element: "Earth",
      keywords: ["earth","material","money","stability"],
    };
  }),
];

export function getCardsByArcana(arcana: TarotCard["arcana"]): TarotCard[] {
  return CARDS.filter((c) => c.arcana === arcana);
}

export function getCardById(id: string): TarotCard | undefined {
  return CARDS.find((c) => c.id === id);
}

// dealRandomCards removed — use domain/use-cases/shuffleDeck + dealCards instead
