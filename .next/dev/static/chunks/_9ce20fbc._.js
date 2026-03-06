(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/cards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Re-export domain entity as the canonical type used throughout the app
__turbopack_context__.s([
    "CARDS",
    ()=>CARDS,
    "getCardById",
    ()=>getCardById,
    "getCardsByArcana",
    ()=>getCardsByArcana
]);
const CARDS = [
    // ─── MAJOR ARCANA ───────────────────────────────────────────
    {
        id: "00-the-fool",
        name: "The Fool",
        namePt: "O Louco",
        image: "/cards/00-TheFool.png",
        arcana: "major",
        number: 0,
        romanNumeral: "0",
        uprightMeaning: "New beginnings, innocence, spontaneity, a free spirit. The Fool leaps into the unknown with boundless optimism.",
        uprightMeaningPt: "Novos começos, inocência, espontaneidade, espírito livre. O Louco salta para o desconhecido com otimismo ilimitado.",
        reversedMeaning: "Naivety, foolishness, recklessness, risk-taking without caution. A warning to look before you leap.",
        reversedMeaningPt: "Ingenuidade, tolice, imprudência, riscos sem cautela. Um aviso para olhar antes de saltar.",
        waiteQuote: "He is the spirit in search of experience. He represents the mystical fool who has transcended worldly concerns.",
        element: "Air",
        planet: "Uranus",
        keywords: [
            "beginnings",
            "innocence",
            "adventure",
            "spontaneity"
        ],
        keywordsPt: [
            "começos",
            "inocência",
            "aventura",
            "espontaneidade"
        ]
    },
    {
        id: "01-the-magician",
        name: "The Magician",
        namePt: "O Mago",
        image: "/cards/01-TheMagician.png",
        arcana: "major",
        number: 1,
        romanNumeral: "I",
        uprightMeaning: "Willpower, desire, creation, manifestation. All tools are at your disposal — the question is whether you will use them.",
        uprightMeaningPt: "Força de vontade, desejo, criação, manifestação. Todas as ferramentas estão à sua disposição — a questão é se você as usará.",
        reversedMeaning: "Manipulation, poor planning, untapped talents. Skills are present but not being applied correctly.",
        reversedMeaningPt: "Manipulação, planejamento ruim, talentos inexplorados. As habilidades existem, mas não estão sendo aplicadas corretamente.",
        waiteQuote: "He has the whole creation as his domain. The four symbols of Magic are on his altar.",
        element: "Air",
        planet: "Mercury",
        keywords: [
            "willpower",
            "manifestation",
            "skill",
            "mastery"
        ],
        keywordsPt: [
            "vontade",
            "manifestação",
            "habilidade",
            "maestria"
        ]
    },
    {
        id: "02-the-high-priestess",
        name: "The High Priestess",
        namePt: "A Sacerdotisa",
        image: "/cards/02-TheHighPriestess.png",
        arcana: "major",
        number: 2,
        romanNumeral: "II",
        uprightMeaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind. What lies beneath the surface?",
        uprightMeaningPt: "Intuição, conhecimento sagrado, feminino divino, o inconsciente. O que existe sob a superfície?",
        reversedMeaning: "Secrets, disconnected from intuition, withdrawal and silence. Hidden forces at work.",
        reversedMeaningPt: "Segredos, desconexão da intuição, recolhimento e silêncio. Forças ocultas em ação.",
        waiteQuote: "She represents the secret church and the spiritual bride. The veil guards the mystery within.",
        element: "Water",
        planet: "Moon",
        keywords: [
            "intuition",
            "mystery",
            "inner-knowledge",
            "subconscious"
        ],
        keywordsPt: [
            "intuição",
            "mistério",
            "autoconhecimento",
            "inconsciente"
        ]
    },
    {
        id: "03-the-empress",
        name: "The Empress",
        namePt: "A Imperatriz",
        image: "/cards/03-TheEmpress.png",
        arcana: "major",
        number: 3,
        romanNumeral: "III",
        uprightMeaning: "Femininity, beauty, nature, nurturing, abundance. Creation in its most fertile form.",
        uprightMeaningPt: "Feminilidade, beleza, natureza, cuidado, abundância. A criação em sua forma mais fértil.",
        reversedMeaning: "Creative block, dependence on others, smothering, neglect of self.",
        reversedMeaningPt: "Bloqueio criativo, dependência dos outros, sufocamento, negligência consigo mesmo.",
        waiteQuote: "She is the fruitful mother of thousands. Nature itself is the garment of her glory.",
        element: "Earth",
        planet: "Venus",
        keywords: [
            "fertility",
            "abundance",
            "nurturing",
            "nature"
        ],
        keywordsPt: [
            "fertilidade",
            "abundância",
            "cuidado",
            "natureza"
        ]
    },
    {
        id: "04-the-emperor",
        name: "The Emperor",
        namePt: "O Imperador",
        image: "/cards/04-TheEmperor.png",
        arcana: "major",
        number: 4,
        romanNumeral: "IV",
        uprightMeaning: "Authority, establishment, structure, a father figure. Order imposed upon chaos through strength of will.",
        uprightMeaningPt: "Autoridade, estabelecimento, estrutura, figura paterna. Ordem imposta ao caos pela força de vontade.",
        reversedMeaning: "Domination, excessive control, rigidity, stubbornness. Authority misused or lacking.",
        reversedMeaningPt: "Dominação, controle excessivo, rigidez, teimosia. Autoridade mal utilizada ou ausente.",
        waiteQuote: "He is the supreme lord of the temporal order. His throne is of stone — enduring, immovable.",
        element: "Fire",
        planet: "Aries",
        keywords: [
            "authority",
            "structure",
            "control",
            "stability"
        ],
        keywordsPt: [
            "autoridade",
            "estrutura",
            "controle",
            "estabilidade"
        ]
    },
    {
        id: "05-the-hierophant",
        name: "The Hierophant",
        namePt: "O Hierofante",
        image: "/cards/05-TheHierophant.png",
        arcana: "major",
        number: 5,
        romanNumeral: "V",
        uprightMeaning: "Spiritual wisdom, religious beliefs, conformity, tradition. The bridge between heaven and earth.",
        uprightMeaningPt: "Sabedoria espiritual, crenças religiosas, conformidade, tradição. A ponte entre o céu e a terra.",
        reversedMeaning: "Personal beliefs, freedom, challenging the status quo. Rebellion against institution.",
        reversedMeaningPt: "Crenças pessoais, liberdade, desafio ao status quo. Rebelião contra a instituição.",
        waiteQuote: "He is the ruling power of external religion. His keys unlock both earthly and celestial mysteries.",
        element: "Earth",
        planet: "Taurus",
        keywords: [
            "tradition",
            "wisdom",
            "institution",
            "conformity"
        ],
        keywordsPt: [
            "tradição",
            "sabedoria",
            "instituição",
            "conformidade"
        ]
    },
    {
        id: "06-the-lovers",
        name: "The Lovers",
        namePt: "Os Amantes",
        image: "/cards/06-TheLovers.png",
        arcana: "major",
        number: 6,
        romanNumeral: "VI",
        uprightMeaning: "Love, harmony, relationships, values alignment, choices. The sacred union of opposites.",
        uprightMeaningPt: "Amor, harmonia, relacionamentos, alinhamento de valores, escolhas. A união sagrada dos opostos.",
        reversedMeaning: "Self-love, disharmony, imbalance, misalignment of values. A crossroads poorly navigated.",
        reversedMeaningPt: "Amor próprio, desarmonia, desequilíbrio, desalinhamento de valores. Uma encruzilhada mal navegada.",
        waiteQuote: "He who is not afraid to take the supreme step — he alone can achieve the great work.",
        element: "Air",
        planet: "Gemini",
        keywords: [
            "love",
            "union",
            "choice",
            "values"
        ],
        keywordsPt: [
            "amor",
            "união",
            "escolha",
            "valores"
        ]
    },
    {
        id: "07-the-chariot",
        name: "The Chariot",
        namePt: "O Carro",
        image: "/cards/07-TheChariot.png",
        arcana: "major",
        number: 7,
        romanNumeral: "VII",
        uprightMeaning: "Control, willpower, success, action, determination. Victory through discipline and force of will.",
        uprightMeaningPt: "Controle, força de vontade, sucesso, ação, determinação. Vitória pela disciplina e pela força da vontade.",
        reversedMeaning: "Self-discipline, opposition, lack of direction, aggression. A chariot without a driver.",
        reversedMeaningPt: "Autodisciplina, oposição, falta de direção, agressividade. Um carro sem condutor.",
        waiteQuote: "The sphinxes pull in opposite directions — yet the charioteer holds the course by will alone.",
        element: "Water",
        planet: "Cancer",
        keywords: [
            "victory",
            "control",
            "determination",
            "conquest"
        ],
        keywordsPt: [
            "vitória",
            "controle",
            "determinação",
            "conquista"
        ]
    },
    {
        id: "08-strength",
        name: "Strength",
        namePt: "A Força",
        image: "/cards/08-Strength.png",
        arcana: "major",
        number: 8,
        romanNumeral: "VIII",
        uprightMeaning: "Strength, courage, patience, control, compassion. The lion is tamed not by force but by love.",
        uprightMeaningPt: "Força, coragem, paciência, controle, compaixão. O leão é domado não pela força, mas pelo amor.",
        reversedMeaning: "Inner strength, self-doubt, low energy, raw emotion. Courage failing at a critical moment.",
        reversedMeaningPt: "Força interior, autodúvida, baixa energia, emoção bruta. Coragem falhando em momento crítico.",
        waiteQuote: "It is a card of power and energy. The woman closes the jaws of the lion — gently, completely.",
        element: "Fire",
        planet: "Leo",
        keywords: [
            "courage",
            "patience",
            "compassion",
            "inner-strength"
        ],
        keywordsPt: [
            "coragem",
            "paciência",
            "compaixão",
            "força interior"
        ]
    },
    {
        id: "09-the-hermit",
        name: "The Hermit",
        namePt: "O Eremita",
        image: "/cards/09-TheHermit.png",
        arcana: "major",
        number: 9,
        romanNumeral: "IX",
        uprightMeaning: "Soul-searching, introspection, being alone, inner guidance. The lantern illuminates the solitary path ahead.",
        uprightMeaningPt: "Busca interior, introspecção, solidão, orientação interna. A lanterna ilumina o caminho solitário à frente.",
        reversedMeaning: "Isolation, loneliness, withdrawal. Reclusiveness that has become harmful to the self.",
        reversedMeaningPt: "Isolamento, solidão, recolhimento. Reclusão que se tornou prejudicial ao próprio ser.",
        waiteQuote: "The Hermit stands solitary with his lamp lit from within. He is the Cabbalist who has descended into the world.",
        element: "Earth",
        planet: "Virgo",
        keywords: [
            "solitude",
            "introspection",
            "guidance",
            "wisdom"
        ],
        keywordsPt: [
            "solidão",
            "introspecção",
            "orientação",
            "sabedoria"
        ]
    },
    {
        id: "10-wheel-of-fortune",
        name: "Wheel of Fortune",
        namePt: "A Roda da Fortuna",
        image: "/cards/10-WheelOfFortune.png",
        arcana: "major",
        number: 10,
        romanNumeral: "X",
        uprightMeaning: "Good luck, karma, life cycles, destiny, a turning point. The wheel turns — fortune follows.",
        uprightMeaningPt: "Boa sorte, karma, ciclos da vida, destino, um ponto de virada. A roda gira — a fortuna acompanha.",
        reversedMeaning: "Bad luck, resistance to change, breaking cycles. Fate resisted rather than embraced.",
        reversedMeaningPt: "Má sorte, resistência à mudança, quebra de ciclos. Destino resistido ao invés de abraçado.",
        waiteQuote: "The Wheel of Fortune is a symbol of the cosmic cycles of existence — forever turning, never still.",
        element: "Fire",
        planet: "Jupiter",
        keywords: [
            "fate",
            "cycles",
            "luck",
            "karma"
        ],
        keywordsPt: [
            "destino",
            "ciclos",
            "sorte",
            "karma"
        ]
    },
    {
        id: "11-justice",
        name: "Justice",
        namePt: "A Justiça",
        image: "/cards/11-Justice.png",
        arcana: "major",
        number: 11,
        romanNumeral: "XI",
        uprightMeaning: "Justice, fairness, truth, cause and effect, law. The scales are balanced — truth will prevail.",
        uprightMeaningPt: "Justiça, equidade, verdade, causa e efeito, lei. As balanças estão equilibradas — a verdade prevalecerá.",
        reversedMeaning: "Unfairness, lack of accountability, dishonesty. The scales tipped by hidden forces.",
        reversedMeaningPt: "Injustiça, falta de responsabilização, desonestidade. As balanças inclinadas por forças ocultas.",
        waiteQuote: "Justice lifts the balances of Truth, and the sword is the sword of reason. She is equity made manifest.",
        element: "Air",
        planet: "Libra",
        keywords: [
            "justice",
            "fairness",
            "truth",
            "balance"
        ],
        keywordsPt: [
            "justiça",
            "equidade",
            "verdade",
            "equilíbrio"
        ]
    },
    {
        id: "12-the-hanged-man",
        name: "The Hanged Man",
        namePt: "O Enforcado",
        image: "/cards/12-TheHangedMan.png",
        arcana: "major",
        number: 12,
        romanNumeral: "XII",
        uprightMeaning: "Pause, surrender, letting go, new perspectives. Sometimes the only way forward is to stop completely.",
        uprightMeaningPt: "Pausa, rendição, deixar ir, novas perspectivas. Às vezes a única forma de avançar é parar completamente.",
        reversedMeaning: "Delays, resistance, stalling, indecision. Martyrdom without purpose or reward.",
        reversedMeaningPt: "Atrasos, resistência, procrastinação, indecisão. Martírio sem propósito ou recompensa.",
        waiteQuote: "He hangs at his own will. His face exhibits deep entrancement rather than suffering.",
        element: "Water",
        planet: "Neptune",
        keywords: [
            "surrender",
            "pause",
            "perspective",
            "sacrifice"
        ],
        keywordsPt: [
            "rendição",
            "pausa",
            "perspectiva",
            "sacrifício"
        ]
    },
    {
        id: "13-death",
        name: "Death",
        namePt: "A Morte",
        image: "/cards/13-Death.png",
        arcana: "major",
        number: 13,
        romanNumeral: "XIII",
        uprightMeaning: "Endings, change, transformation, transition. Nothing ends that does not also begin again.",
        uprightMeaningPt: "Finais, mudança, transformação, transição. Nada termina sem que algo novo comece.",
        reversedMeaning: "Resistance to change, personal transformation, inner purging. Fighting the inevitable.",
        reversedMeaningPt: "Resistência à mudança, transformação pessoal, purificação interior. Lutar contra o inevitável.",
        waiteQuote: "The pale horse passes through and nothing withstands his passage. Yet the sun rises between the towers.",
        element: "Water",
        planet: "Scorpio",
        keywords: [
            "transformation",
            "endings",
            "change",
            "transition"
        ],
        keywordsPt: [
            "transformação",
            "finais",
            "mudança",
            "transição"
        ]
    },
    {
        id: "14-temperance",
        name: "Temperance",
        namePt: "A Temperança",
        image: "/cards/14-Temperance.png",
        arcana: "major",
        number: 14,
        romanNumeral: "XIV",
        uprightMeaning: "Balance, moderation, patience, purpose, meaning. The art of combining opposites harmoniously.",
        uprightMeaningPt: "Equilíbrio, moderação, paciência, propósito, significado. A arte de combinar opostos harmoniosamente.",
        reversedMeaning: "Imbalance, excess, self-healing, re-alignment needed. The golden mean abandoned.",
        reversedMeaningPt: "Desequilíbrio, excesso, autocura, realinhamento necessário. O equilíbrio dourado abandonado.",
        waiteQuote: "The great angel mixes the waters between the two cups — the elixir of life flows between worlds.",
        element: "Fire",
        planet: "Sagittarius",
        keywords: [
            "balance",
            "moderation",
            "patience",
            "harmony"
        ],
        keywordsPt: [
            "equilíbrio",
            "moderação",
            "paciência",
            "harmonia"
        ]
    },
    {
        id: "15-the-devil",
        name: "The Devil",
        namePt: "O Diabo",
        image: "/cards/15-TheDevil.png",
        arcana: "major",
        number: 15,
        romanNumeral: "XV",
        uprightMeaning: "Shadow self, attachment, addiction, restriction, sexuality. The chains you wear are of your own making.",
        uprightMeaningPt: "Sombra interior, apego, vício, restrição, sexualidade. As correntes que você veste são de sua própria criação.",
        reversedMeaning: "Releasing limiting beliefs, exploring dark thoughts, detachment. Breaking free of bondage.",
        reversedMeaningPt: "Libertação de crenças limitantes, exploração de pensamentos sombrios, desapego. Rompendo os laços da servidão.",
        waiteQuote: "The black throne of bondage — yet look carefully, for the chains are loose and could be lifted.",
        element: "Earth",
        planet: "Capricorn",
        keywords: [
            "bondage",
            "shadow",
            "materialism",
            "addiction"
        ],
        keywordsPt: [
            "servidão",
            "sombra",
            "materialismo",
            "vício"
        ]
    },
    {
        id: "16-the-tower",
        name: "The Tower",
        namePt: "A Torre",
        image: "/cards/16-TheTower.png",
        arcana: "major",
        number: 16,
        romanNumeral: "XVI",
        uprightMeaning: "Sudden change, upheaval, chaos, revelation, awakening. The lightning strikes what is false.",
        uprightMeaningPt: "Mudança súbita, agitação, caos, revelação, despertar. O raio atinge o que é falso.",
        reversedMeaning: "Personal transformation, fear of change, averting disaster. Avoidance of necessary destruction.",
        reversedMeaningPt: "Transformação pessoal, medo da mudança, evitar o desastre. Fuga da destruição necessária.",
        waiteQuote: "The foundations rumble beneath the proud tower. What lightning destroys was never truly built to last.",
        element: "Fire",
        planet: "Mars",
        keywords: [
            "upheaval",
            "revelation",
            "chaos",
            "transformation"
        ],
        keywordsPt: [
            "agitação",
            "revelação",
            "caos",
            "transformação"
        ]
    },
    {
        id: "17-the-star",
        name: "The Star",
        namePt: "A Estrela",
        image: "/cards/17-TheStar.png",
        arcana: "major",
        number: 17,
        romanNumeral: "XVII",
        uprightMeaning: "Hope, faith, purpose, renewal, spirituality. After the storm, the stars emerge to guide the way.",
        uprightMeaningPt: "Esperança, fé, propósito, renovação, espiritualidade. Após a tempestade, as estrelas surgem para guiar o caminho.",
        reversedMeaning: "Lack of faith, despair, self-trust issues, disconnection. Hope deferred indefinitely.",
        reversedMeaningPt: "Falta de fé, desespero, problemas de autoconfiança, desconexão. Esperança adiada indefinidamente.",
        waiteQuote: "She is the eternal source of life renewed. The stars shine down as she pours the waters of immortality.",
        element: "Air",
        planet: "Aquarius",
        keywords: [
            "hope",
            "renewal",
            "faith",
            "inspiration"
        ],
        keywordsPt: [
            "esperança",
            "renovação",
            "fé",
            "inspiração"
        ]
    },
    {
        id: "18-the-moon",
        name: "The Moon",
        namePt: "A Lua",
        image: "/cards/18-TheMoon.png",
        arcana: "major",
        number: 18,
        romanNumeral: "XVIII",
        uprightMeaning: "Illusion, fear, the unconscious, intuition, confusion. Not all that glimmers in moonlight is as it seems.",
        uprightMeaningPt: "Ilusão, medo, o inconsciente, intuição, confusão. Nem tudo que brilha ao luar é o que parece.",
        reversedMeaning: "Release of fear, repressed emotion, inner confusion. Clarity emerging through the fog.",
        reversedMeaningPt: "Liberação do medo, emoção reprimida, confusão interior. Clareza emergindo através da névoa.",
        waiteQuote: "The path between two towers — the moon illuminates but deceives. Beware what crawls from the deep.",
        element: "Water",
        planet: "Pisces",
        keywords: [
            "illusion",
            "subconscious",
            "fear",
            "intuition"
        ],
        keywordsPt: [
            "ilusão",
            "inconsciente",
            "medo",
            "intuição"
        ]
    },
    {
        id: "19-the-sun",
        name: "The Sun",
        namePt: "O Sol",
        image: "/cards/19-TheSun.png",
        arcana: "major",
        number: 19,
        romanNumeral: "XIX",
        uprightMeaning: "Positivity, fun, warmth, success, vitality. The sun shines upon all things with equal and joyful light.",
        uprightMeaningPt: "Positividade, diversão, calor, sucesso, vitalidade. O sol brilha sobre todas as coisas com luz igual e alegre.",
        reversedMeaning: "Inner child, feeling down, overly optimistic. The sun temporarily hidden behind clouds.",
        reversedMeaningPt: "Criança interior, sentir-se para baixo, otimismo excessivo. O sol temporariamente escondido atrás das nuvens.",
        waiteQuote: "The Sun is the great luminary that gives life to the world. The child upon the horse is joy incarnate.",
        element: "Fire",
        planet: "Sun",
        keywords: [
            "joy",
            "success",
            "positivity",
            "vitality"
        ],
        keywordsPt: [
            "alegria",
            "sucesso",
            "positividade",
            "vitalidade"
        ]
    },
    {
        id: "20-judgement",
        name: "Judgement",
        namePt: "O Julgamento",
        image: "/cards/20-Judgement.png",
        arcana: "major",
        number: 20,
        romanNumeral: "XX",
        uprightMeaning: "Judgement, rebirth, inner calling, absolution. The trumpet sounds — rise and answer the call.",
        uprightMeaningPt: "Julgamento, renascimento, chamado interior, absolvição. A trombeta soa — levante-se e responda ao chamado.",
        reversedMeaning: "Self-doubt, inner critic, ignoring the call. Judgement avoided through fear.",
        reversedMeaningPt: "Autodúvida, crítico interior, ignorar o chamado. Julgamento evitado pelo medo.",
        waiteQuote: "The great angel sounds the last trumpet. The dead rise — but it is the living who must truly awaken.",
        element: "Fire",
        planet: "Pluto",
        keywords: [
            "rebirth",
            "calling",
            "absolution",
            "awakening"
        ],
        keywordsPt: [
            "renascimento",
            "chamado",
            "absolvição",
            "despertar"
        ]
    },
    {
        id: "21-the-world",
        name: "The World",
        namePt: "O Mundo",
        image: "/cards/21-TheWorld.png",
        arcana: "major",
        number: 21,
        romanNumeral: "XXI",
        uprightMeaning: "Completion, integration, accomplishment, travel. The great work is done — celebrate and begin again.",
        uprightMeaningPt: "Conclusão, integração, realização, viagem. A grande obra está feita — celebre e comece novamente.",
        reversedMeaning: "Seeking personal closure, short-cuts, delays. The final step not yet taken.",
        reversedMeaningPt: "Busca por fechamento pessoal, atalhos, atrasos. O passo final ainda não dado.",
        waiteQuote: "The dancer in the wreath is the Great Triumphant Heroine. The cycle is complete — and everything begins again.",
        element: "Earth",
        planet: "Saturn",
        keywords: [
            "completion",
            "wholeness",
            "accomplishment",
            "integration"
        ],
        keywordsPt: [
            "conclusão",
            "totalidade",
            "realização",
            "integração"
        ]
    },
    // ─── WANDS ──────────────────────────────────────────────────
    ...Array.from({
        length: 14
    }, (_, i)=>{
        const n = i + 1;
        const names = [
            "Ace",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Page",
            "Knight",
            "Queen",
            "King"
        ];
        const namesPt = [
            "Ás",
            "Dois",
            "Três",
            "Quatro",
            "Cinco",
            "Seis",
            "Sete",
            "Oito",
            "Nove",
            "Dez",
            "Valete",
            "Cavaleiro",
            "Rainha",
            "Rei"
        ];
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
            "Natural authority, honour, accomplishment — the king rules with fire."
        ];
        const uprightPt = [
            "Inspiração, novos começos, crescimento, potencial — uma fagulha criativa se acende.",
            "Planejamento, decisões, descoberta — dois caminhos divergem na floresta iluminada pelo fogo.",
            "Progresso, expansão, previsão — os navios estão prontos para zarpar.",
            "Celebração, harmonia, retorno ao lar — o festival da colheita está completo.",
            "Competição, conflito, adversidade — a rivalidade aguça o espírito.",
            "Sucesso, reconhecimento público, progresso — o retorno vitorioso.",
            "Perseverança, postura defensiva, manter o terreno — firme.",
            "Velocidade, ação, viagem, movimento — notícias chegam rapidamente.",
            "Resiliência, coragem, persistência — marcado pela batalha, mas inteiro.",
            "Fardo, responsabilidade, trabalho duro — a carga é pesada, mas o objetivo está próximo.",
            "Exploração, espírito livre, aventura — um jovem sonhador parte em jornada.",
            "Energia, paixão, aventura, impulsividade — avance sem hesitação.",
            "Coragem, determinação, alegria, vivacidade — a rainha comanda sua chama.",
            "Autoridade natural, honra, realizações — o rei governa com fogo."
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
            "Impulsiveness, haste, ruthlessness — power misused."
        ];
        const reversedPt = [
            "Atrasos, falta de motivação, sobrecarregado — a fagulha luta para se acender.",
            "Medo do desconhecido, falta de planejamento, impaciência — a indecisão obscurece o caminho.",
            "Excesso de confiança, falta de previsão, obstáculos — planos que não foram testados.",
            "Desarmonia, tensão, quebra de comunicação — discórdia interior.",
            "Conflito, desacordo, tensão — emoções acaloradas nublam o julgamento.",
            "Egoísmo, arrogância, atrasos no reconhecimento — sucesso retido.",
            "Ansiedade, defensividade, exaustão — sobrecarregado por todos os lados.",
            "Atrasos, sensação de perda de controle, eventos acelerados — prepare-se.",
            "Recursos internos, teimosia, recusa em recuar — a que custo?",
            "Incapacidade de delegar, energia opressiva — quando largar o fardo.",
            "Precipitado, não confiável, acessos de raiva — energia sem direção.",
            "Pressa, comportamento imprudente, energia dispersa — freie o avanço.",
            "Exigências, ciúme, insegurança — paixão tornada possessiva.",
            "Impulsividade, pressa, crueldade — poder mal utilizado."
        ];
        return {
            id: `wands-${String(n).padStart(2, "0")}`,
            name: `${names[i]} of Wands`,
            namePt: `${namesPt[i]} de Paus`,
            image: `/cards/Wands${String(n).padStart(2, "0")}.png`,
            arcana: "wands",
            number: n,
            uprightMeaning: upright[i],
            uprightMeaningPt: uprightPt[i],
            reversedMeaning: reversed[i],
            reversedMeaningPt: reversedPt[i],
            waiteQuote: `The ${names[i]} of Wands speaks of fire — that creative, primal force that drives all endeavour.`,
            element: "Fire",
            keywords: [
                "fire",
                "passion",
                "creativity",
                "ambition"
            ],
            keywordsPt: [
                "fogo",
                "paixão",
                "criatividade",
                "ambição"
            ]
        };
    }),
    // ─── CUPS ───────────────────────────────────────────────────
    ...Array.from({
        length: 14
    }, (_, i)=>{
        const n = i + 1;
        const names = [
            "Ace",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Page",
            "Knight",
            "Queen",
            "King"
        ];
        const namesPt = [
            "Ás",
            "Dois",
            "Três",
            "Quatro",
            "Cinco",
            "Seis",
            "Sete",
            "Oito",
            "Nove",
            "Dez",
            "Valete",
            "Cavaleiro",
            "Rainha",
            "Rei"
        ];
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
            "Emotional balance, generosity, calm authority — wisdom through feeling."
        ];
        const uprightPt = [
            "Novos sentimentos, intuição, criatividade, amor — o cálice transborda de possibilidade.",
            "Amor unificado, parceria, atração mútua — duas almas se espelham.",
            "Celebração, amizade, criatividade, colaborações — erga o cálice com alegria.",
            "Meditação, contemplação, apatia, reavaliação — o mundo oferecido, mas a mão retraída.",
            "Perda, tristeza, desespero, luto — mas dois cálices permanecem de pé atrás de você.",
            "Nostalgia, memórias felizes, reunião, alegria infantil — o passado dourado revisitado.",
            "Fantasia, ilusão, pensamento desejoso, escolhas — a névoa oculta muitas portas.",
            "Decepção, abandono, recolhimento — deixando o que não serve mais.",
            "Contentamento, satisfação, estabilidade emocional — desejos realizados e saboreados.",
            "Amor divino, finais venturosos, família, harmonia — o arco-íris após a tempestade.",
            "Oportunidades criativas, intuição, sensibilidade — um novo capítulo emocional acena.",
            "Romance, charme, 'Cavaleiro de armadura brilhante' — mas será que ele é o que parece?",
            "Segurança emocional, calma, conselho compassivo — a rainha das águas tranquilas.",
            "Equilíbrio emocional, generosidade, autoridade calma — sabedoria através do sentimento."
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
            "Emotional manipulation, moodiness, withdrawal — depth becoming darkness."
        ];
        const reversedPt = [
            "Perda emocional, criatividade bloqueada, vazio — o cálice voltado para dentro.",
            "Desequilíbrio, comunicação rompida, tensão — conexão sobrecarregada.",
            "Excesso, fofoca, isolamento — a celebração azeda.",
            "Tédio, oportunidades perdidas, perder o foco — distraído do que importa.",
            "Contratempos pessoais, autoperdão, seguir em frente — aceitação da perda.",
            "Viver no passado, ingenuidade, expectativas irreais — nostalgia como fuga.",
            "Alinhamento, clareza de escolha, tentação — enxergando através da ilusão.",
            "Desesperança, seguir em frente, recolhimento — quando partir.",
            "Falta de contentamento, vaidade, insatisfação — desejos não realizados.",
            "Família despedaçada, desalinhamento de valores — o arco-íris encoberto por nuvens.",
            "Imaturidade emocional, bloqueios criativos, insegurança — hesitação no limiar.",
            "Não confiável, emocionalmente imaturo, fraude — charme ocultando o vazio.",
            "Insegurança emocional, dependência, sentimentos interiores — a superfície calma ocultando profundezas.",
            "Manipulação emocional, temperamento instável, recolhimento — profundidade tornando-se escuridão."
        ];
        return {
            id: `cups-${String(n).padStart(2, "0")}`,
            name: `${names[i]} of Cups`,
            namePt: `${namesPt[i]} de Copas`,
            image: `/cards/Cups${String(n).padStart(2, "0")}.png`,
            arcana: "cups",
            number: n,
            uprightMeaning: upright[i],
            uprightMeaningPt: uprightPt[i],
            reversedMeaning: reversed[i],
            reversedMeaningPt: reversedPt[i],
            waiteQuote: `The ${names[i]} of Cups — all things of the water, emotion, and the world of feeling.`,
            element: "Water",
            keywords: [
                "water",
                "emotion",
                "love",
                "intuition"
            ],
            keywordsPt: [
                "água",
                "emoção",
                "amor",
                "intuição"
            ]
        };
    }),
    // ─── SWORDS ─────────────────────────────────────────────────
    ...Array.from({
        length: 14
    }, (_, i)=>{
        const n = i + 1;
        const names = [
            "Ace",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Page",
            "Knight",
            "Queen",
            "King"
        ];
        const namesPt = [
            "Ás",
            "Dois",
            "Três",
            "Quatro",
            "Cinco",
            "Seis",
            "Sete",
            "Oito",
            "Nove",
            "Dez",
            "Valete",
            "Cavaleiro",
            "Rainha",
            "Rei"
        ];
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
            "Mental clarity, intellectual power, authority — truth as the sovereign virtue."
        ];
        const uprightPt = [
            "Avanços, novas ideias, clareza mental, sucesso — a espada corta a confusão.",
            "Escolhas difíceis, indecisão, impasse — olhos vendados diante de duas lâminas.",
            "Separação dolorosa, tristeza, luto — as três espadas perfuram o coração.",
            "Descanso, relaxamento, contemplação — a espada do guerreiro posta de lado para curar.",
            "Conflito, tensão, perda, transição — nem toda batalha tem um vencedor claro.",
            "Transição, mudança, rito de passagem — o barco te leva a águas mais calmas.",
            "Decepção, estratégia, impermanência — o que é levado embora e o que fica?",
            "Restrição, pensamento aprisionado, impotência — mas os laços podem ser afrouxados.",
            "Ansiedade, turbulência interior, medo, medos profundos — o pesadelo que te acorda.",
            "Finais dolorosos, traição, crise, ruína — o ponto mais baixo antes do amanhecer.",
            "Agilidade mental, curiosidade, novas ideias — mente afiada, ávida por verdade.",
            "Ação, impulsividade, velocidade intelectual — avance agora, questione depois.",
            "Complexidade, experiência, sagacidade — cortando a pretensão com clareza.",
            "Clareza mental, poder intelectual, autoridade — a verdade como virtude soberana."
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
            "Abuse of power, manipulation, clear-thinking clouded by cruelty — wisdom misapplied."
        ];
        const reversedPt = [
            "Confusão, brutalidade, caos — poder sem sabedoria.",
            "Indecisão, impasse, evitar conflitos — a venda escolhida, não imposta.",
            "Liberação da dor, otimismo — escolher remover as espadas.",
            "Inquietação, isolamento, esgotamento — o guerreiro se recusa a descansar.",
            "Reconciliação, ressentimento passado, conduta antidesportiva — paz forçada.",
            "Fuga, estagnação, negócios inacabados — o barco que não sai da margem.",
            "Consciência, desonestidade, roubo — flagrado em ato.",
            "Restrição autoimposta, liberação de crenças limitantes — desatar-se.",
            "Turbulência interior, desesperança, medo do amanhã — ansiedade voltada para dentro.",
            "Recuperação, regeneração, fim inevitável — o que surge das cinzas?",
            "Comunicação precipitada, energia dispersa, decepção — palavras usadas como armas.",
            "Precipitar-se, tomada de decisões imprudentes — a carga antes do pensamento.",
            "Frieza, amargura, excessivamente crítico — sagacidade tornada crueldade.",
            "Abuso de poder, manipulação, pensamento claro nublado pela crueldade — sabedoria mal aplicada."
        ];
        return {
            id: `swords-${String(n).padStart(2, "0")}`,
            name: `${names[i]} of Swords`,
            namePt: `${namesPt[i]} de Espadas`,
            image: `/cards/Swords${String(n).padStart(2, "0")}.png`,
            arcana: "swords",
            number: n,
            uprightMeaning: upright[i],
            uprightMeaningPt: uprightPt[i],
            reversedMeaning: reversed[i],
            reversedMeaningPt: reversedPt[i],
            waiteQuote: `The ${names[i]} of Swords — the blade that severs and illuminates, for truth is never painless.`,
            element: "Air",
            keywords: [
                "air",
                "intellect",
                "conflict",
                "truth"
            ],
            keywordsPt: [
                "ar",
                "intelecto",
                "conflito",
                "verdade"
            ]
        };
    }),
    // ─── PENTACLES ──────────────────────────────────────────────
    ...Array.from({
        length: 14
    }, (_, i)=>{
        const n = i + 1;
        const names = [
            "Ace",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Page",
            "Knight",
            "Queen",
            "King"
        ];
        const namesPt = [
            "Ás",
            "Dois",
            "Três",
            "Quatro",
            "Cinco",
            "Seis",
            "Sete",
            "Oito",
            "Nove",
            "Dez",
            "Valete",
            "Cavaleiro",
            "Rainha",
            "Rei"
        ];
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
            "Abundance, prosperity, security, leadership — the king who mastered the material world."
        ];
        const uprightPt = [
            "Novas oportunidades financeiras, manifestação, abundância — o disco dourado oferecido.",
            "Múltiplas prioridades, gestão do tempo, priorização — equilibrando com graça.",
            "Trabalho em equipe, realização inicial, colaboração — obra-prima em andamento.",
            "Segurança, controle, conservação, possessividade — guardando o que foi conquistado.",
            "Perda financeira, mentalidade de pobreza, isolamento — o frio fora da igreja quente.",
            "Generosidade, caridade, dar e receber — as balanças da fortuna equilibradas.",
            "Visão de longo prazo, resultados sustentáveis, perseverança — a colheita se aproxima.",
            "Aprendizado, repetição, construção de habilidades — o caminho do mestre artesão.",
            "Abundância, independência financeira, luxo — frutos de longo trabalho.",
            "Riqueza, segurança financeira, família, sucesso a longo prazo — o legado completo.",
            "Oportunidade financeira, desenvolvimento de habilidades, bolsa de estudos — estudante ávido de abundância.",
            "Trabalho duro, produtividade, rotina — o cavaleiro que nunca se apressa, mas nunca para.",
            "Praticidade, confortos materiais, segurança financeira — a rainha da sabedoria material.",
            "Abundância, prosperidade, segurança, liderança — o rei que dominou o mundo material."
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
            "Financial instability, greed, stubbornness — the king who hoards rather than rules."
        ];
        const reversedPt = [
            "Oportunidade perdida, falta de planejamento, mau investimento — o disco retido.",
            "Desequilíbrio, desorganização, sobrecarga — uma bola toca o chão.",
            "Falta de trabalho em equipe, desarmonia, desalinhamento — a obra-prima abandonada.",
            "Ganância, materialismo, autoproteção — agarrar até as mãos doírem.",
            "Recuperação de perda financeira, superar dificuldades — voltar para o calor.",
            "Dívida, egoísmo, caridade unilateral — dar com condições.",
            "Falta de visão de longo prazo, crescimento limitado, impaciência — colher cedo demais.",
            "Autodesenvolvimento, perfeccionismo, mediocridade — tédio com o ofício.",
            "Autoestima, excesso de investimento no trabalho, materialismo — quando chega, chega?",
            "Fracasso financeiro, solidão, perda — o legado que desmoronou.",
            "Falta de progresso, procrastinação, aprender com falhas — a lição ainda não aprendida.",
            "Preguiça, irresponsabilidade financeira, falta de propósito — o cavalo lento parado.",
            "Desequilíbrio entre trabalho e vida doméstica, autonegligência — a rainha abandonando seu jardim.",
            "Instabilidade financeira, ganância, teimosia — o rei que acumula em vez de governar."
        ];
        return {
            id: `pentacles-${String(n).padStart(2, "0")}`,
            name: `${names[i]} of Pentacles`,
            namePt: `${namesPt[i]} de Ouros`,
            image: `/cards/Pentacles${String(n).padStart(2, "0")}.png`,
            arcana: "pentacles",
            number: n,
            uprightMeaning: upright[i],
            uprightMeaningPt: uprightPt[i],
            reversedMeaning: reversed[i],
            reversedMeaningPt: reversedPt[i],
            waiteQuote: `The ${names[i]} of Pentacles — earth made manifest, the tangible fruit of invisible labour.`,
            element: "Earth",
            keywords: [
                "earth",
                "material",
                "money",
                "stability"
            ],
            keywordsPt: [
                "terra",
                "material",
                "dinheiro",
                "estabilidade"
            ]
        };
    })
];
function getCardsByArcana(arcana) {
    return CARDS.filter((c)=>c.arcana === arcana);
}
function getCardById(id) {
    return CARDS.find((c)=>c.id === id);
} // dealRandomCards removed — use domain/use-cases/shuffleDeck + dealCards instead
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/useLanguageStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLanguageStore",
    ()=>useLanguageStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useLanguageStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        lang: "en",
        setLang: (lang)=>set({
                lang
            })
    }), {
    name: "tarot-lang"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        nav: {
            spreads: "Tarot Spreads",
            library: "Library",
            premium: "Premium"
        },
        home: {
            headline: "Reveal Your Destiny",
            subtitle: "Step inside and let the mechanical Rasputin see your future.",
            coinButton: "Insert Coin",
            spreadHint: "Choose your spread →",
            footer: "Est. 1892 · Premium Mechanical Divination",
            modal: {
                title: "Reading in Progress",
                warning: "You have a reading in progress. Start a new one? Your current reading will be lost.",
                cancel: "Cancel",
                newReading: "New Reading"
            }
        },
        spreadSelector: {
            title: "Choose Your Spread"
        },
        shuffle: {
            close: "✕ Close",
            selectedSpread: "Selected Spread",
            cardsDrawn: (count)=>`${count} cards drawn from the full 78-card Rider-Waite deck`,
            speakQuestion: "Speak your question to the cosmos. The cards will answer.",
            questionPlaceholder: "Write your question here…",
            pressEnter: "Press Enter to shuffle",
            shuffleBtn: "✦ Shuffle the Deck ✦",
            listening: "The spirits are listening…",
            cardsLaid: "The cards have been laid before the cosmos. Your reading awaits.",
            beginBtn: "✦ Begin the Revelation ✦"
        },
        reading: {
            endRitual: "End Ritual",
            readingComplete: "Reading Complete",
            cardsClickGlowing: (count)=>`${count} cards • click the glowing card`,
            revealedOf: (revealed, total)=>`${revealed} of ${total} revealed`,
            howToRead: "How to read",
            clickToBegin: "Click the glowing card to begin",
            revealNext: "Reveal Next Card",
            backHome: "Back to Home — Rasputin's Eye Needs to Rest"
        },
        card: {
            upright: "Upright",
            reversed: "Reversed",
            element: "Element",
            correspondences: "Correspondences",
            majorArcana: "Major Arcana",
            uprightMeaning: "Upright Meaning",
            reversedMeaning: "Reversed Meaning",
            positionSentence: (posLabel, posDesc)=>`In the ${posLabel} position, this card speaks to ${posDesc.toLowerCase()}.`
        },
        library: {
            title: "The Tarot Library",
            subtitle: "A collection of ancient wisdom and symbolic archetypes from the 1911 Rider-Waite traditions.",
            searchPlaceholder: "Search the unknown…",
            viewCard: "View →",
            footer: "Seek and ye shall find",
            tabs: {
                all: "All",
                major: "Major Arcana",
                wands: "Wands",
                cups: "Cups",
                swords: "Swords",
                pentacles: "Pentacles"
            }
        },
        premium: {
            hero: "Personalized Audio Interpretations",
            heroSub: "Professional Oracles · Ancient Wisdom",
            masterReading: "Master Reading",
            masterDesc: "Ancient secrets await those who seek the counsel of the cards — a reading forged in shadow and gold.",
            ticketLabel: "THE ORACLE",
            requestBtn: "REQUEST MASTER READING",
            validUntil: "VALID UNTIL MIDNIGHT",
            price: "$49.99 · Per Consultation",
            priceMain: "$49.99",
            priceSub: "USD · Per Session",
            whatYouReceive: "What You Receive",
            features: [
                {
                    title: "15-Min Audio Reading",
                    desc: "A private voice interpretation of every card in your spread, recorded by a master oracle."
                },
                {
                    title: "Full Spread Transcript",
                    desc: "A written record of your reading delivered to your inbox — yours to keep forever."
                },
                {
                    title: "Personalized Guidance",
                    desc: "Your cards read in the context of your question. No generic meanings — only truth."
                },
                {
                    title: "Priority Placement",
                    desc: "Your request moves to the front of the queue. The spirits will not keep you waiting."
                }
            ],
            badges: [
                "Secure Consultation",
                "Confidential Rite",
                "Ancient Tradition"
            ]
        }
    },
    pt: {
        nav: {
            spreads: "Tiragens de Tarô",
            library: "Biblioteca",
            premium: "Premium"
        },
        home: {
            headline: "Revele Seu Destino",
            subtitle: "Entre e deixe o mecânico Rasputin ver o seu futuro.",
            coinButton: "Inserir Moeda",
            spreadHint: "Escolha sua tiragem →",
            footer: "Est. 1892 · Adivinhação Mecânica Premium",
            modal: {
                title: "Leitura em Andamento",
                warning: "Você tem uma leitura em andamento. Iniciar uma nova? Sua leitura atual será perdida.",
                cancel: "Cancelar",
                newReading: "Nova Leitura"
            }
        },
        spreadSelector: {
            title: "Escolha Sua Tiragem"
        },
        shuffle: {
            close: "✕ Fechar",
            selectedSpread: "Tiragem Selecionada",
            cardsDrawn: (count)=>`${count} cartas retiradas do baralho completo de 78 cartas Rider-Waite`,
            speakQuestion: "Fale sua pergunta ao cosmos. As cartas irão responder.",
            questionPlaceholder: "Escreva sua pergunta aqui…",
            pressEnter: "Pressione Enter para embaralhar",
            shuffleBtn: "✦ Embaralhar as Cartas ✦",
            listening: "Os espíritos estão ouvindo…",
            cardsLaid: "As cartas foram dispostas diante do cosmos. Sua leitura aguarda.",
            beginBtn: "✦ Iniciar a Revelação ✦"
        },
        reading: {
            endRitual: "Encerrar Ritual",
            readingComplete: "Leitura Concluída",
            cardsClickGlowing: (count)=>`${count} cartas • clique na carta brilhante`,
            revealedOf: (revealed, total)=>`${revealed} de ${total} reveladas`,
            howToRead: "Como interpretar",
            clickToBegin: "Clique na carta brilhante para começar",
            revealNext: "Revelar Próxima Carta",
            backHome: "Voltar ao Início — O Olho de Rasputin Precisa Descansar"
        },
        card: {
            upright: "Direita",
            reversed: "Invertida",
            element: "Elemento",
            correspondences: "Correspondências",
            majorArcana: "Arcanos Maiores",
            uprightMeaning: "Significado Direito",
            reversedMeaning: "Significado Invertido",
            positionSentence: (posLabel, posDesc)=>`Na posição ${posLabel}, esta carta fala sobre ${posDesc.toLowerCase()}.`
        },
        library: {
            title: "A Biblioteca do Tarô",
            subtitle: "Uma coleção de sabedoria ancestral e arquétipos simbólicos da tradição Rider-Waite de 1911.",
            searchPlaceholder: "Busque o desconhecido…",
            viewCard: "Ver →",
            footer: "Buscai e encontrareis",
            tabs: {
                all: "Todos",
                major: "Arcanos Maiores",
                wands: "Paus",
                cups: "Copas",
                swords: "Espadas",
                pentacles: "Ouros"
            }
        },
        premium: {
            hero: "Interpretações em Áudio Personalizadas",
            heroSub: "Oráculos Profissionais · Sabedoria Ancestral",
            masterReading: "Leitura Mestre",
            masterDesc: "Segredos ancestrais aguardam aqueles que buscam o conselho das cartas — uma leitura forjada em sombra e ouro.",
            ticketLabel: "O ORÁCULO",
            requestBtn: "SOLICITAR LEITURA MESTRE",
            validUntil: "VÁLIDO ATÉ MEIA-NOITE",
            price: "$49,99 · Por Consulta",
            priceMain: "$49,99",
            priceSub: "USD · Por Sessão",
            whatYouReceive: "O Que Você Recebe",
            features: [
                {
                    title: "Leitura em Áudio de 15 Min",
                    desc: "Uma interpretação em voz privada de cada carta do seu spread, gravada por um oráculo mestre."
                },
                {
                    title: "Transcrição Completa",
                    desc: "Um registro escrito da sua leitura enviado à sua caixa de entrada — seu para guardar para sempre."
                },
                {
                    title: "Orientação Personalizada",
                    desc: "Suas cartas lidas no contexto da sua pergunta. Sem significados genéricos — apenas a verdade."
                },
                {
                    title: "Prioridade na Fila",
                    desc: "Seu pedido vai para o início da fila. Os espíritos não farão você esperar."
                }
            ],
            badges: [
                "Consulta Segura",
                "Rito Confidencial",
                "Tradição Ancestral"
            ]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useT.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useLanguageStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useT() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e25b338d633bc146be54eaf0b2ab19aa4695ae693b15ddbb9c2f605b0086225b") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e25b338d633bc146be54eaf0b2ab19aa4695ae693b15ddbb9c2f605b0086225b";
    }
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])(_useTUseLanguageStore);
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][lang];
}
_s(useT, "0wqPv3XS8KknlyBeRAqvdRVYuQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
function _useTUseLanguageStore(s) {
    return s.lang;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useLanguageStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Nav() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "89b51e805fd0b2f0237e373e5e3e54fab0973e52af19a87575b662ea20063d5d") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89b51e805fd0b2f0237e373e5e3e54fab0973e52af19a87575b662ea20063d5d";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    let t0;
    if ($[1] !== t.nav.spreads) {
        t0 = {
            href: "/reading",
            label: t.nav.spreads
        };
        $[1] = t.nav.spreads;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t.nav.library) {
        t1 = {
            href: "/library",
            label: t.nav.library
        };
        $[3] = t.nav.library;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t.nav.premium) {
        t2 = {
            href: "/premium",
            label: t.nav.premium
        };
        $[5] = t.nav.premium;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t0 || $[8] !== t1 || $[9] !== t2) {
        t3 = [
            t0,
            t1,
            t2
        ];
        $[7] = t0;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const links = t3;
    let t4;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: "#2a1b11"
        };
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            className: "text-3xl",
            animate: {
                scale: [
                    1,
                    1.1,
                    1
                ],
                opacity: [
                    1,
                    0.7,
                    1
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
            },
            children: "👁"
        }, void 0, false, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-cinzel text-xl font-black uppercase tracking-widest text-white",
                    style: {
                        textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a, 0 0 30px #d6700a"
                    },
                    children: "Rasputin's Eye"
                }, void 0, false, {
                    fileName: "[project]/components/shared/Nav.tsx",
                    lineNumber: 93,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== links || $[15] !== pathname) {
        t7 = links.map({
            "Nav[links.map()]": (l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: l.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("font-cinzel text-xs font-bold uppercase tracking-wider transition-colors", pathname === l.href ? "text-primary" : "text-slate-300 hover:text-primary"),
                    children: l.label
                }, l.href, false, {
                    fileName: "[project]/components/shared/Nav.tsx",
                    lineNumber: 103,
                    columnNumber: 32
                }, this)
        }["Nav[links.map()]"]);
        $[14] = links;
        $[15] = pathname;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== setLang) {
        t8 = ({
            "Nav[<button>.onClick]": ()=>setLang("en")
        })["Nav[<button>.onClick]"];
        $[17] = setLang;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const t9 = lang === "en" ? "text-primary" : "text-slate-500 hover:text-slate-300";
    let t10;
    if ($[19] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("font-cinzel text-xs font-bold uppercase tracking-wider transition-colors", t9);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: t10,
            children: "EN"
        }, void 0, false, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 text-xs",
            children: "|"
        }, void 0, false, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== setLang) {
        t13 = ({
            "Nav[<button>.onClick]": ()=>setLang("pt")
        })["Nav[<button>.onClick]"];
        $[25] = setLang;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    const t14 = lang === "pt" ? "text-primary" : "text-slate-500 hover:text-slate-300";
    let t15;
    if ($[27] !== t14) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("font-cinzel text-xs font-bold uppercase tracking-wider transition-colors", t14);
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t13 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t15,
            children: "PT"
        }, void 0, false, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t11 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 ml-2 border-l border-white/10 pl-4",
            children: [
                t11,
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[32] = t11;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t17 || $[36] !== t7) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between px-8 py-4 border-b-8 border-[#1a110a]",
            style: t4,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center gap-8",
                    children: [
                        t7,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Nav.tsx",
                    lineNumber: 185,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Nav.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t7;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    return t18;
}
_s(Nav, "vAPOwpMem+vo6+xMqhFfGZCiPbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/library/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LibraryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useT.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useLanguageStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const CARDS_PER_PAGE = 18;
const ROTATIONS = [
    -2,
    1.5,
    -1.5,
    2,
    -0.5,
    1
];
function LibraryPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(135);
    if ($[0] !== "9e70908e34c05e3e98477353bee8bd39c04aa5882f4c4b73e3ec7dceeedda372") {
        for(let $i = 0; $i < 135; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e70908e34c05e3e98477353bee8bd39c04aa5882f4c4b73e3ec7dceeedda372";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    let t0;
    if ($[1] !== t.library.tabs.all) {
        t0 = {
            id: "all",
            label: t.library.tabs.all
        };
        $[1] = t.library.tabs.all;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t.library.tabs.major) {
        t1 = {
            id: "major",
            label: t.library.tabs.major
        };
        $[3] = t.library.tabs.major;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t.library.tabs.wands) {
        t2 = {
            id: "wands",
            label: t.library.tabs.wands
        };
        $[5] = t.library.tabs.wands;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t.library.tabs.cups) {
        t3 = {
            id: "cups",
            label: t.library.tabs.cups
        };
        $[7] = t.library.tabs.cups;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t.library.tabs.swords) {
        t4 = {
            id: "swords",
            label: t.library.tabs.swords
        };
        $[9] = t.library.tabs.swords;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t.library.tabs.pentacles) {
        t5 = {
            id: "pentacles",
            label: t.library.tabs.pentacles
        };
        $[11] = t.library.tabs.pentacles;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t0 || $[14] !== t1 || $[15] !== t2 || $[16] !== t3 || $[17] !== t4 || $[18] !== t5) {
        t6 = [
            t0,
            t1,
            t2,
            t3,
            t4,
            t5
        ];
        $[13] = t0;
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    const TABS = t6;
    let t7;
    if ($[20] !== lang) {
        t7 = ({
            "LibraryPage[cardName]": (c)=>lang === "pt" ? c.namePt ?? c.name : c.name
        })["LibraryPage[cardName]"];
        $[20] = lang;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    const cardName = t7;
    let t8;
    if ($[22] !== lang) {
        t8 = ({
            "LibraryPage[cardMeaning]": (c_0)=>lang === "pt" ? c_0.uprightMeaningPt ?? c_0.uprightMeaning : c_0.uprightMeaning
        })["LibraryPage[cardMeaning]"];
        $[22] = lang;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    const cardMeaning = t8;
    let t9;
    if ($[24] !== lang) {
        t9 = ({
            "LibraryPage[cardReversed]": (c_1)=>lang === "pt" ? c_1.reversedMeaningPt ?? c_1.reversedMeaning : c_1.reversedMeaning
        })["LibraryPage[cardReversed]"];
        $[24] = lang;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    const cardReversed = t9;
    let t10;
    if ($[26] !== lang) {
        t10 = ({
            "LibraryPage[cardKeywords]": (c_2)=>lang === "pt" ? c_2.keywordsPt ?? c_2.keywords : c_2.keywords
        })["LibraryPage[cardKeywords]"];
        $[26] = lang;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    const cardKeywords = t10;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedCard, setSelectedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let cards;
    if ($[28] !== activeTab || $[29] !== search) {
        cards = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARDS"];
        if (activeTab !== "all") {
            const arcana = activeTab === "major" ? "major" : activeTab;
            let t11;
            if ($[31] !== arcana) {
                t11 = ({
                    "LibraryPage[CARDS.filter()]": (c_3)=>c_3.arcana === arcana
                })["LibraryPage[CARDS.filter()]"];
                $[31] = arcana;
                $[32] = t11;
            } else {
                t11 = $[32];
            }
            cards = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARDS"].filter(t11);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            cards = cards.filter({
                "LibraryPage[cards.filter()]": (c_4)=>c_4.name.toLowerCase().includes(q) || (c_4.namePt ?? "").toLowerCase().includes(q) || c_4.keywords.some({
                        "LibraryPage[cards.filter() > c_4.keywords.some()]": (k_0)=>k_0.includes(q)
                    }["LibraryPage[cards.filter() > c_4.keywords.some()]"]) || (c_4.keywordsPt ?? []).some({
                        "LibraryPage[cards.filter() > (anonymous)()]": (k)=>k.includes(q)
                    }["LibraryPage[cards.filter() > (anonymous)()]"])
            }["LibraryPage[cards.filter()]"]);
        }
        $[28] = activeTab;
        $[29] = search;
        $[30] = cards;
    } else {
        cards = $[30];
    }
    const filtered = cards;
    const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
    let T0;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t23;
    let t24;
    let t25;
    if ($[33] !== TABS || $[34] !== activeTab || $[35] !== cardName || $[36] !== filtered || $[37] !== page || $[38] !== search || $[39] !== t.library.searchPlaceholder || $[40] !== t.library.subtitle || $[41] !== t.library.title || $[42] !== t.library.viewCard) {
        const pageCards = filtered.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE);
        let t26;
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = ({
                "LibraryPage[handleTabChange]": (tab)=>{
                    setActiveTab(tab);
                    setPage(1);
                }
            })["LibraryPage[handleTabChange]"];
            $[59] = t26;
        } else {
            t26 = $[59];
        }
        const handleTabChange = t26;
        t23 = "relative flex min-h-screen w-full flex-col overflow-x-hidden";
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = {
                background: "#1a0f0a"
            };
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this);
            $[60] = t24;
            $[61] = t25;
        } else {
            t24 = $[60];
            t25 = $[61];
        }
        t22 = "p-3 md:p-6 flex flex-col flex-1";
        t20 = "flex-1 flex flex-col rounded-xl overflow-hidden shadow-2xl";
        if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = {
                outline: "2px solid #d6700a",
                outlineOffset: "-5px",
                background: "rgba(10,13,20,0.8)"
            };
            $[62] = t21;
        } else {
            t21 = $[62];
        }
        t17 = "flex-1 p-5 overflow-y-auto";
        let t27;
        if ($[63] !== t.library.title) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-playfair font-bold text-primary mb-1.5 drop-shadow-md",
                children: t.library.title
            }, void 0, false, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, this);
            $[63] = t.library.title;
            $[64] = t27;
        } else {
            t27 = $[64];
        }
        let t28;
        if ($[65] !== t.library.subtitle) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400 italic font-fell text-sm",
                children: [
                    '"',
                    t.library.subtitle,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 256,
                columnNumber: 13
            }, this);
            $[65] = t.library.subtitle;
            $[66] = t28;
        } else {
            t28 = $[66];
        }
        if ($[67] !== t27 || $[68] !== t28) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 text-center max-w-lg mx-auto",
                children: [
                    t27,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this);
            $[67] = t27;
            $[68] = t28;
            $[69] = t18;
        } else {
            t18 = $[69];
        }
        let t29;
        if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-primary/60"
            }, void 0, false, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 272,
                columnNumber: 13
            }, this);
            $[70] = t29;
        } else {
            t29 = $[70];
        }
        let t30;
        if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = ({
                "LibraryPage[<input>.onChange]": (e)=>{
                    setSearch(e.target.value);
                    setPage(1);
                }
            })["LibraryPage[<input>.onChange]"];
            $[71] = t30;
        } else {
            t30 = $[71];
        }
        let t31;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = {
                background: "rgba(15,18,30,0.8)",
                border: "1px solid rgba(214,112,10,0.25)"
            };
            $[72] = t31;
        } else {
            t31 = $[72];
        }
        let t32;
        if ($[73] !== search || $[74] !== t.library.searchPlaceholder) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xs",
                children: [
                    t29,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: search,
                        onChange: t30,
                        placeholder: t.library.searchPlaceholder,
                        className: "pl-8 pr-3 py-1 text-xs rounded-lg text-slate-200 w-full outline-none focus:ring-1 focus:ring-primary",
                        style: t31
                    }, void 0, false, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 301,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this);
            $[73] = search;
            $[74] = t.library.searchPlaceholder;
            $[75] = t32;
        } else {
            t32 = $[75];
        }
        let t33;
        if ($[76] !== TABS || $[77] !== activeTab) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-1.5",
                children: TABS.map({
                    "LibraryPage[TABS.map()]": (tab_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: {
                                "LibraryPage[TABS.map() > <motion.button>.onClick]": ()=>handleTabChange(tab_0.id)
                            }["LibraryPage[TABS.map() > <motion.button>.onClick]"],
                            className: "px-3 py-1 rounded-t-lg font-fell text-sm transition-all",
                            style: {
                                background: activeTab === tab_0.id ? "linear-gradient(180deg, #b8860b 0%, #8b6508 100%)" : "linear-gradient(180deg, #5c4a33 0%, #3d2e1d 100%)",
                                border: "1px solid #d6700a",
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.5)",
                                color: activeTab === tab_0.id ? "#1a0f0a" : "#d4cbb8",
                                fontWeight: activeTab === tab_0.id ? "bold" : "normal",
                                borderBottom: activeTab === tab_0.id ? "2px solid #d6700a" : "1px solid #d6700a"
                            },
                            whileHover: {
                                y: -1
                            },
                            whileTap: {
                                scale: 0.97
                            },
                            children: tab_0.label
                        }, tab_0.id, false, {
                            fileName: "[project]/app/library/page.tsx",
                            lineNumber: 311,
                            columnNumber: 47
                        }, this)
                }["LibraryPage[TABS.map()]"])
            }, void 0, false, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 310,
                columnNumber: 13
            }, this);
            $[76] = TABS;
            $[77] = activeTab;
            $[78] = t33;
        } else {
            t33 = $[78];
        }
        if ($[79] !== t32 || $[80] !== t33) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2 mb-6",
                children: [
                    t32,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 333,
                columnNumber: 13
            }, this);
            $[79] = t32;
            $[80] = t33;
            $[81] = t19;
        } else {
            t19 = $[81];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t11 = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-[0.75px] gap-y-[20px] mb-8";
        t12 = `${activeTab}-${page}`;
        if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = {
                opacity: 0
            };
            t14 = {
                opacity: 1
            };
            t15 = {
                duration: 0.3
            };
            $[82] = t13;
            $[83] = t14;
            $[84] = t15;
        } else {
            t13 = $[82];
            t14 = $[83];
            t15 = $[84];
        }
        let t34;
        if ($[85] !== cardName || $[86] !== t.library.viewCard) {
            t34 = ({
                "LibraryPage[pageCards.map()]": (card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "group flex flex-col gap-1.5 cursor-pointer w-[70%] mx-auto",
                        initial: {
                            y: 12,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            delay: i * 0.04,
                            type: "spring",
                            stiffness: 200
                        },
                        onClick: {
                            "LibraryPage[pageCards.map() > <motion.div>.onClick]": ()=>setSelectedCard(card)
                        }["LibraryPage[pageCards.map() > <motion.div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full rounded-lg overflow-hidden border-2 transition-all duration-300 group-hover:-translate-y-1",
                                style: {
                                    aspectRatio: "2/3.5",
                                    background: "#0f1218",
                                    borderColor: "rgba(214,112,10,0.3)"
                                },
                                onMouseEnter: _LibraryPagePageCardsMapDivOnMouseEnter,
                                onMouseLeave: _LibraryPagePageCardsMapDivOnMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: card.image,
                                        alt: card.name,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                    }, void 0, false, {
                                        fileName: "[project]/app/library/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 124
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100",
                                        style: {
                                            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/library/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 267
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[21px] text-white font-cinzel font-bold uppercase tracking-widest",
                                            style: {
                                                textShadow: "0 0 8px rgba(0,0,0,0.8)"
                                            },
                                            children: t.library.viewCard
                                        }, void 0, false, {
                                            fileName: "[project]/app/library/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 138
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/library/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 376,
                                columnNumber: 67
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-1 py-0.5 rounded shadow-md text-center transition-transform group-hover:rotate-0",
                                style: {
                                    background: "#e2d1b3",
                                    color: "#2b1d0e",
                                    transform: `rotate(${ROTATIONS[i % 6]}deg)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-fell text-[13px] font-bold",
                                    children: cardName(card)
                                }, void 0, false, {
                                    fileName: "[project]/app/library/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 384,
                                columnNumber: 57
                            }, this)
                        ]
                    }, card.id, true, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 364,
                        columnNumber: 54
                    }, this)
            })["LibraryPage[pageCards.map()]"];
            $[85] = cardName;
            $[86] = t.library.viewCard;
            $[87] = t34;
        } else {
            t34 = $[87];
        }
        t16 = pageCards.map(t34);
        $[33] = TABS;
        $[34] = activeTab;
        $[35] = cardName;
        $[36] = filtered;
        $[37] = page;
        $[38] = search;
        $[39] = t.library.searchPlaceholder;
        $[40] = t.library.subtitle;
        $[41] = t.library.title;
        $[42] = t.library.viewCard;
        $[43] = T0;
        $[44] = t11;
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t15;
        $[49] = t16;
        $[50] = t17;
        $[51] = t18;
        $[52] = t19;
        $[53] = t20;
        $[54] = t21;
        $[55] = t22;
        $[56] = t23;
        $[57] = t24;
        $[58] = t25;
    } else {
        T0 = $[43];
        t11 = $[44];
        t12 = $[45];
        t13 = $[46];
        t14 = $[47];
        t15 = $[48];
        t16 = $[49];
        t17 = $[50];
        t18 = $[51];
        t19 = $[52];
        t20 = $[53];
        t21 = $[54];
        t22 = $[55];
        t23 = $[56];
        t24 = $[57];
        t25 = $[58];
    }
    let t26;
    if ($[88] !== T0 || $[89] !== t11 || $[90] !== t12 || $[91] !== t13 || $[92] !== t14 || $[93] !== t15 || $[94] !== t16) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t11,
            initial: t13,
            animate: t14,
            transition: t15,
            children: t16
        }, t12, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 443,
            columnNumber: 11
        }, this);
        $[88] = T0;
        $[89] = t11;
        $[90] = t12;
        $[91] = t13;
        $[92] = t14;
        $[93] = t15;
        $[94] = t16;
        $[95] = t26;
    } else {
        t26 = $[95];
    }
    let t27;
    if ($[96] !== page || $[97] !== totalPages) {
        t27 = totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-1.5 mb-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "LibraryPage[<button>.onClick]": ()=>setPage(_LibraryPageButtonOnClickSetPage)
                    }["LibraryPage[<button>.onClick]"],
                    disabled: page === 1,
                    className: "w-7 h-7 flex items-center justify-center rounded-lg transition-all disabled:opacity-30",
                    style: {
                        background: "rgba(214,112,10,0.1)",
                        border: "1px solid rgba(214,112,10,0.3)",
                        color: "#d6700a"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 463,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/library/page.tsx",
                    lineNumber: 457,
                    columnNumber: 92
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1",
                    children: Array.from({
                        length: totalPages
                    }, _LibraryPageArrayFrom).filter({
                        "LibraryPage[(anonymous)()]": (p_0)=>p_0 === 1 || p_0 === totalPages || Math.abs(p_0 - page) <= 1
                    }["LibraryPage[(anonymous)()]"]).reduce(_LibraryPageAnonymous, []).map({
                        "LibraryPage[(anonymous)()]": (p_2, i_2)=>p_2 === "..." ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary self-end pb-1 font-fell text-sm",
                                children: "..."
                            }, `ellipsis-${i_2}`, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 468,
                                columnNumber: 71
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "LibraryPage[(anonymous)() > <button>.onClick]": ()=>setPage(p_2)
                                }["LibraryPage[(anonymous)() > <button>.onClick]"],
                                className: "w-7 h-7 rounded-lg font-fell text-sm font-bold transition-all",
                                style: {
                                    background: page === p_2 ? "#d6700a" : "rgba(214,112,10,0.1)",
                                    border: "1px solid rgba(214,112,10,0.3)",
                                    color: page === p_2 ? "#0a0d14" : "#d6700a"
                                },
                                children: p_2
                            }, p_2, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 468,
                                columnNumber: 171
                            }, this)
                    }["LibraryPage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/app/library/page.tsx",
                    lineNumber: 463,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "LibraryPage[<button>.onClick]": ()=>setPage({
                                "LibraryPage[<button>.onClick > setPage()]": (p_3)=>Math.min(totalPages, p_3 + 1)
                            }["LibraryPage[<button>.onClick > setPage()]"])
                    }["LibraryPage[<button>.onClick]"],
                    disabled: page === totalPages,
                    className: "w-7 h-7 flex items-center justify-center rounded-lg transition-all disabled:opacity-30",
                    style: {
                        background: "rgba(214,112,10,0.1)",
                        border: "1px solid rgba(214,112,10,0.3)",
                        color: "#d6700a"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 483,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/library/page.tsx",
                    lineNumber: 475,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 457,
            columnNumber: 29
        }, this);
        $[96] = page;
        $[97] = totalPages;
        $[98] = t27;
    } else {
        t27 = $[98];
    }
    let t28;
    if ($[99] !== t17 || $[100] !== t18 || $[101] !== t19 || $[102] !== t26 || $[103] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t17,
            children: [
                t18,
                t19,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[99] = t17;
        $[100] = t18;
        $[101] = t19;
        $[102] = t26;
        $[103] = t27;
        $[104] = t28;
    } else {
        t28 = $[104];
    }
    let t29;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            borderTopColor: "rgba(214,112,10,0.3)",
            background: "rgba(10,13,20,0.9)"
        };
        $[105] = t29;
    } else {
        t29 = $[105];
    }
    let t30;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "✦"
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[106] = t30;
    } else {
        t30 = $[106];
    }
    let t31;
    if ($[107] !== t.library.footer) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-fell text-[11px] uppercase tracking-[0.2em]",
            children: t.library.footer
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[107] = t.library.footer;
        $[108] = t31;
    } else {
        t31 = $[108];
    }
    let t32;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "✦"
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[109] = t32;
    } else {
        t32 = $[109];
    }
    let t33;
    if ($[110] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "p-3 border-t flex justify-center",
            style: t29,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 text-primary/40",
                children: [
                    t30,
                    t31,
                    t32
                ]
            }, void 0, true, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 536,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[110] = t31;
        $[111] = t33;
    } else {
        t33 = $[111];
    }
    let t34;
    if ($[112] !== t20 || $[113] !== t21 || $[114] !== t28 || $[115] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            style: t21,
            children: [
                t28,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[112] = t20;
        $[113] = t21;
        $[114] = t28;
        $[115] = t33;
        $[116] = t34;
    } else {
        t34 = $[116];
    }
    let t35;
    if ($[117] !== t22 || $[118] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t22,
            children: t34
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[117] = t22;
        $[118] = t34;
        $[119] = t35;
    } else {
        t35 = $[119];
    }
    let t36;
    if ($[120] !== cardKeywords || $[121] !== cardMeaning || $[122] !== cardName || $[123] !== cardReversed || $[124] !== selectedCard || $[125] !== t.card) {
        t36 = selectedCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-50 flex items-center justify-center p-2",
            style: {
                background: "rgba(0,0,0,0.85)",
                backdropFilter: "blur(8px)"
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: {
                "LibraryPage[<motion.div>.onClick]": ()=>setSelectedCard(null)
            }["LibraryPage[<motion.div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl flex",
                style: {
                    background: "#e8dfcc",
                    maxHeight: "82vh"
                },
                initial: {
                    scale: 0.85,
                    opacity: 0,
                    y: 40
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                exit: {
                    scale: 0.85,
                    opacity: 0,
                    y: 40
                },
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                },
                onClick: _LibraryPageMotionDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "LibraryPage[<button>.onClick]": ()=>setSelectedCard(null)
                        }["LibraryPage[<button>.onClick]"],
                        className: "absolute top-2.5 right-2.5 z-10 rounded-full p-1 transition-colors hover:opacity-80",
                        style: {
                            background: "rgba(0,0,0,0.15)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3.5 h-3.5 text-slate-700"
                        }, void 0, false, {
                            fileName: "[project]/app/library/page.tsx",
                            lineNumber: 598,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 594,
                        columnNumber: 49
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0",
                        style: {
                            width: "108px",
                            minHeight: "189px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selectedCard.image,
                            alt: cardName(selectedCard),
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/library/page.tsx",
                            lineNumber: 601,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 598,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-5 overflow-y-auto text-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full font-cinzel mb-1.5 inline-block",
                                style: {
                                    background: "rgba(181,148,77,0.2)",
                                    border: "1px solid rgba(181,148,77,0.5)",
                                    color: "#7a5a2a"
                                },
                                children: selectedCard.arcana === "major" ? `${t.card.majorArcana} · ${selectedCard.romanNumeral}` : `${selectedCard.arcana.charAt(0).toUpperCase() + selectedCard.arcana.slice(1)}`
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 601,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[1.7rem] font-bold italic font-playfair mb-0.5",
                                children: cardName(selectedCard)
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 605,
                                columnNumber: 193
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 font-cinzel uppercase tracking-widest mb-3",
                                children: [
                                    selectedCard.element,
                                    " ",
                                    selectedCard.planet ? `· ${selectedCard.planet}` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 605,
                                columnNumber: 290
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: "italic text-xs text-slate-700 pl-2.5 py-1 mb-3 font-fell",
                                style: {
                                    borderLeft: "2px solid rgba(214,112,10,0.5)"
                                },
                                children: [
                                    '"',
                                    selectedCard.waiteQuote,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 605,
                                columnNumber: 457
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 font-cinzel",
                                children: t.card.uprightMeaning
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 607,
                                columnNumber: 54
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs leading-relaxed mb-2",
                                children: cardMeaning(selectedCard)
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 607,
                                columnNumber: 178
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 font-cinzel",
                                children: t.card.reversedMeaning
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 607,
                                columnNumber: 253
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs leading-relaxed mb-3",
                                children: cardReversed(selectedCard)
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 607,
                                columnNumber: 378
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1 mb-4",
                                children: cardKeywords(selectedCard).map(_LibraryPageAnonymous2)
                            }, void 0, false, {
                                fileName: "[project]/app/library/page.tsx",
                                lineNumber: 607,
                                columnNumber: 454
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/library/page.tsx",
                        lineNumber: 601,
                        columnNumber: 118
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/library/page.tsx",
                lineNumber: 575,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 564,
            columnNumber: 27
        }, this);
        $[120] = cardKeywords;
        $[121] = cardMeaning;
        $[122] = cardName;
        $[123] = cardReversed;
        $[124] = selectedCard;
        $[125] = t.card;
        $[126] = t36;
    } else {
        t36 = $[126];
    }
    let t37;
    if ($[127] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t36
        }, void 0, false, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[127] = t36;
        $[128] = t37;
    } else {
        t37 = $[128];
    }
    let t38;
    if ($[129] !== t23 || $[130] !== t24 || $[131] !== t25 || $[132] !== t35 || $[133] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t23,
            style: t24,
            children: [
                t25,
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/app/library/page.tsx",
            lineNumber: 628,
            columnNumber: 11
        }, this);
        $[129] = t23;
        $[130] = t24;
        $[131] = t25;
        $[132] = t35;
        $[133] = t37;
        $[134] = t38;
    } else {
        t38 = $[134];
    }
    return t38;
}
_s(LibraryPage, "xIgkb9U+dh2xRByv+DDOaSG1BVE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = LibraryPage;
function _LibraryPageAnonymous2(k_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded font-cinzel",
        style: {
            background: "rgba(181,148,77,0.15)",
            border: "1px solid rgba(181,148,77,0.4)",
            color: "#7a5a2a"
        },
        children: k_1
    }, k_1, false, {
        fileName: "[project]/app/library/page.tsx",
        lineNumber: 641,
        columnNumber: 10
    }, this);
}
function _LibraryPageMotionDivOnClick(e_2) {
    return e_2.stopPropagation();
}
function _LibraryPageAnonymous(acc, p_1, i_1, arr) {
    if (i_1 > 0 && p_1 - arr[i_1 - 1] > 1) {
        acc.push("...");
    }
    acc.push(p_1);
    return acc;
}
function _LibraryPageArrayFrom(_, i_0) {
    return i_0 + 1;
}
function _LibraryPageButtonOnClickSetPage(p) {
    return Math.max(1, p - 1);
}
function _LibraryPagePageCardsMapDivOnMouseLeave(e_1) {
    e_1.currentTarget.style.boxShadow = "none";
    e_1.currentTarget.style.borderColor = "rgba(214,112,10,0.3)";
}
function _LibraryPagePageCardsMapDivOnMouseEnter(e_0) {
    e_0.currentTarget.style.boxShadow = "0 0 13px 3px rgba(214,112,10,0.4)";
    e_0.currentTarget.style.borderColor = "#d6700a";
}
var _c;
__turbopack_context__.k.register(_c, "LibraryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9ce20fbc._.js.map