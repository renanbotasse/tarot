(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/home/InsertCoinButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsertCoinButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function InsertCoinButton(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "68ec7eaad99963c92675db6ba70a29cfe112cd2932fde7198532fec1c7a245bc") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68ec7eaad99963c92675db6ba70a29cfe112cd2932fde7198532fec1c7a245bc";
    }
    const { onClick } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    let t1;
    if ($[1] !== t.home.coinButton) {
        t1 = t.home.coinButton.split(" ");
        $[1] = t.home.coinButton;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [line1, line2] = t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "rgba(20,10,5,0.75)",
            border: "3px solid rgba(184,134,11,0.4)"
        };
        t3 = {
            scale: 1.06,
            borderColor: "rgba(184,134,11,0.8)"
        };
        t4 = {
            scale: 0.93
        };
        t5 = {
            boxShadow: [
                "0 0 12px rgba(214,112,10,0.15)",
                "0 0 28px rgba(214,112,10,0.35)",
                "0 0 12px rgba(214,112,10,0.15)"
            ]
        };
        t6 = {
            duration: 3,
            repeat: Infinity
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-full",
            style: {
                background: "rgba(214,112,10,0.08)"
            },
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ],
                opacity: [
                    0.4,
                    0,
                    0.4
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/components/home/InsertCoinButton.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-3 left-1/2 -translate-x-1/2 rounded-full",
            style: {
                width: "22px",
                height: "3px",
                background: "#1a110a",
                borderBottom: "1px solid rgba(184,134,11,0.5)"
            }
        }, void 0, false, {
            fileName: "[project]/components/home/InsertCoinButton.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                rotateZ: [
                    0,
                    10,
                    -10,
                    0
                ]
            },
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 4
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                className: "text-primary/70 w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/home/InsertCoinButton.tsx",
                lineNumber: 102,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/InsertCoinButton.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/components/home/InsertCoinButton.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== line1 || $[13] !== line2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex flex-col items-center gap-1.5",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-cinzel font-black text-white/80 uppercase text-[11px] tracking-widest leading-none text-center",
                    children: [
                        line1,
                        t10,
                        line2
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/InsertCoinButton.tsx",
                    lineNumber: 116,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/InsertCoinButton.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[12] = line1;
        $[13] = line2;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== onClick || $[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: onClick,
            className: "group relative flex flex-col items-center justify-center w-24 h-24 rounded-full cursor-pointer",
            style: t2,
            whileHover: t3,
            whileTap: t4,
            animate: t5,
            transition: t6,
            children: [
                t7,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/InsertCoinButton.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[15] = onClick;
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    return t12;
}
_s(InsertCoinButton, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = InsertCoinButton;
var _c;
__turbopack_context__.k.register(_c, "InsertCoinButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/spreads.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SPREADS",
    ()=>SPREADS,
    "getSpread",
    ()=>getSpread
]);
const SPREADS = [
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
            {
                id: "situation",
                label: "The Heart",
                labelPt: "O Coração",
                description: "The central situation",
                descriptionPt: "A situação central"
            },
            {
                id: "obstacle",
                label: "The Obstacle",
                labelPt: "O Obstáculo",
                description: "What stands before you",
                descriptionPt: "O que se coloca à sua frente",
                rotation: 90
            },
            {
                id: "shadow",
                label: "The Shadow",
                labelPt: "A Sombra",
                description: "What lies beneath",
                descriptionPt: "O que jaz abaixo"
            },
            {
                id: "past",
                label: "The Past",
                labelPt: "O Passado",
                description: "What has passed",
                descriptionPt: "O que passou"
            },
            {
                id: "higher_self",
                label: "The Crown",
                labelPt: "A Coroa",
                description: "What you aspire to",
                descriptionPt: "Ao que você aspira"
            },
            {
                id: "future",
                label: "The Future",
                labelPt: "O Futuro",
                description: "What approaches",
                descriptionPt: "O que se aproxima"
            },
            {
                id: "self",
                label: "The Self",
                labelPt: "O Eu",
                description: "How you see yourself",
                descriptionPt: "Como você se vê"
            },
            {
                id: "environment",
                label: "Surroundings",
                labelPt: "O Entorno",
                description: "External influences",
                descriptionPt: "Influências externas"
            },
            {
                id: "hopes_fears",
                label: "Fears & Desires",
                labelPt: "Medos e Desejos",
                description: "The hidden dimension",
                descriptionPt: "A dimensão oculta"
            },
            {
                id: "outcome",
                label: "Final Outcome",
                labelPt: "Resultado Final",
                description: "Where this leads",
                descriptionPt: "Para onde isso leva"
            }
        ]
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
            {
                id: "spirit",
                label: "Spirit",
                labelPt: "Espírito",
                description: "Your higher self",
                descriptionPt: "Seu eu superior"
            },
            {
                id: "fire",
                label: "Fire",
                labelPt: "Fogo",
                description: "Will and desire",
                descriptionPt: "Vontade e desejo"
            },
            {
                id: "earth",
                label: "Earth",
                labelPt: "Terra",
                description: "Material reality",
                descriptionPt: "Realidade material"
            },
            {
                id: "water",
                label: "Water",
                labelPt: "Água",
                description: "Emotion and intuition",
                descriptionPt: "Emoção e intuição"
            },
            {
                id: "air",
                label: "Air",
                labelPt: "Ar",
                description: "Thought and truth",
                descriptionPt: "Pensamento e verdade"
            }
        ]
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
            {
                id: "past",
                label: "The Past",
                labelPt: "O Passado",
                description: "What has shaped you",
                descriptionPt: "O que te formou"
            },
            {
                id: "present",
                label: "The Present",
                labelPt: "O Presente",
                description: "Where you stand now",
                descriptionPt: "Onde você está agora"
            },
            {
                id: "future",
                label: "The Future",
                labelPt: "O Futuro",
                description: "Where you are headed",
                descriptionPt: "Para onde você vai"
            }
        ]
    }
];
function getSpread(id) {
    return SPREADS.find((s)=>s.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/SpreadSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpreadSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spreads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/spreads.ts [app-client] (ecmascript)");
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
const SPREAD_IMAGES = {
    "celtic-cross": "/cards/10-WheelOfFortune.png",
    "pentagram": "/cards/14-Temperance.png",
    "three-card": "/cards/21-TheWorld.png"
};
function SpreadSelector(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "2746b11d522ded36ad7db6a96bd303dd4daec14cee23f5bfd92db6d555d8af85") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2746b11d522ded36ad7db6a96bd303dd4daec14cee23f5bfd92db6d555d8af85";
    }
    const { onSelect } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    let t1;
    if ($[1] !== t.spreadSelector.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-cinzel text-primary uppercase font-black tracking-[0.3em] text-sm text-center",
            children: t.spreadSelector.title
        }, void 0, false, {
            fileName: "[project]/components/home/SpreadSelector.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = t.spreadSelector.title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== lang || $[4] !== onSelect) {
        t2 = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spreads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPREADS"].map({
            "SpreadSelector[SPREADS.map()]": (spread, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: {
                        "SpreadSelector[SPREADS.map() > <motion.button>.onClick]": ()=>onSelect(spread)
                    }["SpreadSelector[SPREADS.map() > <motion.button>.onClick]"],
                    className: "group relative flex-1 max-w-xs rounded-xl overflow-hidden cursor-pointer text-left",
                    style: {
                        height: "190px",
                        border: "2px solid #b8860b",
                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.6), 0 0 12px rgba(184,134,11,0.2)"
                    },
                    initial: {
                        y: 30,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 120
                    },
                    whileHover: {
                        y: -4,
                        boxShadow: "0 0 30px rgba(214,112,10,0.5), inset 0 0 20px rgba(0,0,0,0.4)"
                    },
                    whileTap: {
                        scale: 0.97
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: SPREAD_IMAGES[spread.id],
                                    alt: lang === "pt" ? spread.namePt : spread.name,
                                    fill: true,
                                    className: "object-cover object-top opacity-25 group-hover:opacity-45 transition-all duration-500 scale-110 group-hover:scale-100"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SpreadSelector.tsx",
                                    lineNumber: 64,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SpreadSelector.tsx",
                                    lineNumber: 64,
                                    columnNumber: 276
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/SpreadSelector.tsx",
                            lineNumber: 64,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full flex flex-col justify-end px-5 pb-5 gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-playfair font-bold text-xl drop-shadow-lg leading-tight",
                                    children: lang === "pt" ? spread.namePt : spread.name
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SpreadSelector.tsx",
                                    lineNumber: 66,
                                    columnNumber: 97
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary text-[11px] uppercase font-bold tracking-widest font-cinzel",
                                    children: lang === "pt" ? spread.labelPt : spread.label
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SpreadSelector.tsx",
                                    lineNumber: 66,
                                    columnNumber: 239
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-400 text-[11px] leading-snug mt-0.5",
                                    children: lang === "pt" ? spread.descriptionPt : spread.description
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SpreadSelector.tsx",
                                    lineNumber: 66,
                                    columnNumber: 384
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/SpreadSelector.tsx",
                            lineNumber: 66,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity",
                            style: {
                                border: "2px solid rgba(214,112,10,0.6)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/SpreadSelector.tsx",
                            lineNumber: 66,
                            columnNumber: 521
                        }, this)
                    ]
                }, spread.id, true, {
                    fileName: "[project]/components/home/SpreadSelector.tsx",
                    lineNumber: 43,
                    columnNumber: 55
                }, this)
        }["SpreadSelector[SPREADS.map()]"]);
        $[3] = lang;
        $[4] = onSelect;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-5 w-full justify-center",
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/home/SpreadSelector.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t1 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-6 w-full",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/SpreadSelector.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_s(SpreadSelector, "kHz8+ENIPYP2+Ndrm1QB+9q289Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = SpreadSelector;
var _c;
__turbopack_context__.k.register(_c, "SpreadSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/domain/use-cases/shuffleDeck.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shuffleDeck",
    ()=>shuffleDeck
]);
function shuffleDeck(cards) {
    const deck = [
        ...cards
    ];
    for(let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [
            deck[j],
            deck[i]
        ];
    }
    return deck;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/domain/use-cases/dealCards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dealCards",
    ()=>dealCards
]);
function dealCards(deck, positions) {
    if (deck.length < positions.length) {
        throw new Error(`Not enough cards in deck (${deck.length}) to fill ${positions.length} positions`);
    }
    return positions.map((position, index)=>({
            card: deck[index],
            position,
            isReversed: false,
            isRevealed: false
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/store/useSessionStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionStore",
    ()=>useSessionStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$domain$2f$use$2d$cases$2f$shuffleDeck$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/domain/use-cases/shuffleDeck.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$domain$2f$use$2d$cases$2f$dealCards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/domain/use-cases/dealCards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cards.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const useSessionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        session: null,
        startSession: (spreadType, positions)=>set(()=>{
                const deck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$domain$2f$use$2d$cases$2f$shuffleDeck$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffleDeck"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARDS"]); // Fisher-Yates shuffle
                const drawnCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$domain$2f$use$2d$cases$2f$dealCards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dealCards"])(deck, positions); // isReversed: false always
                return {
                    session: {
                        spreadType,
                        drawnCards,
                        revealedCount: 0,
                        startedAt: new Date(),
                        isComplete: false
                    }
                };
            }),
        revealNextCard: ()=>set((state)=>{
                if (!state.session) return state;
                const { session } = state;
                // Consistency guard: no mutation if already complete
                if (session.isComplete) return state;
                const nextIndex = session.revealedCount;
                if (nextIndex >= session.drawnCards.length) return state;
                // Atomic update — single set() call
                const updatedCards = session.drawnCards.map((dc, i)=>i === nextIndex ? {
                        ...dc,
                        isRevealed: true
                    } : dc);
                const revealedCount = nextIndex + 1;
                return {
                    session: {
                        ...session,
                        drawnCards: updatedCards,
                        revealedCount,
                        isComplete: revealedCount === session.drawnCards.length
                    }
                };
            }),
        clearSession: ()=>set({
                session: null
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ShuffleOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShuffleOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useSessionStore.ts [app-client] (ecmascript)");
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
function ShuffleOverlay(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    if ($[0] !== "1de1ff2074af217c354e82d8541f76be1544860a1345e6badaa6fe9bec6d7ea5") {
        for(let $i = 0; $i < 77; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1de1ff2074af217c354e82d8541f76be1544860a1345e6badaa6fe9bec6d7ea5";
    }
    const { spread, onClose } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const startSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"])(_ShuffleOverlayUseSessionStore);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("entering");
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ShuffleOverlay[useEffect()]": ()=>{
                const t_0 = setTimeout({
                    "ShuffleOverlay[useEffect() > setTimeout()]": ()=>{
                        setPhase("focus");
                        setTimeout({
                            "ShuffleOverlay[useEffect() > setTimeout() > setTimeout()]": ()=>inputRef.current?.focus()
                        }["ShuffleOverlay[useEffect() > setTimeout() > setTimeout()]"], 300);
                    }
                }["ShuffleOverlay[useEffect() > setTimeout()]"], 600);
                return ()=>clearTimeout(t_0);
            }
        })["ShuffleOverlay[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== question) {
        t3 = ({
            "ShuffleOverlay[submitQuestion]": ()=>{
                if (!question.trim()) {
                    return;
                }
                setPhase("shuffling");
                setTimeout({
                    "ShuffleOverlay[submitQuestion > setTimeout()]": ()=>setPhase("done")
                }["ShuffleOverlay[submitQuestion > setTimeout()]"], 2200);
            }
        })["ShuffleOverlay[submitQuestion]"];
        $[3] = question;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const submitQuestion = t3;
    let t4;
    if ($[5] !== submitQuestion) {
        t4 = ({
            "ShuffleOverlay[handleKeyDown]": (e)=>{
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submitQuestion();
                }
            }
        })["ShuffleOverlay[handleKeyDown]"];
        $[5] = submitQuestion;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleKeyDown = t4;
    let t5;
    if ($[7] !== router || $[8] !== spread.id || $[9] !== spread.positions || $[10] !== startSession) {
        t5 = ({
            "ShuffleOverlay[beginReading]": ()=>{
                startSession(spread.id, spread.positions);
                router.push("/reading");
            }
        })["ShuffleOverlay[beginReading]"];
        $[7] = router;
        $[8] = spread.id;
        $[9] = spread.positions;
        $[10] = startSession;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const beginReading = t5;
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = Array.from({
            length: 11
        }, _ShuffleOverlayArrayFrom);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const fanCards = t6;
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            background: "rgba(10,5,0,0.97)"
        };
        t8 = {
            opacity: 0
        };
        t9 = {
            opacity: 1
        };
        t10 = {
            opacity: 0
        };
        $[13] = t10;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        t10 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[17] !== onClose || $[18] !== t.shuffle.close) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "absolute top-6 right-8 text-slate-500 hover:text-primary text-sm uppercase tracking-widest font-cinzel",
            children: t.shuffle.close
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[17] = onClose;
        $[18] = t.shuffle.close;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    let t13;
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            y: -20,
            opacity: 0
        };
        t13 = {
            y: 0,
            opacity: 1
        };
        t14 = {
            delay: 0.3
        };
        $[20] = t12;
        $[21] = t13;
        $[22] = t14;
    } else {
        t12 = $[20];
        t13 = $[21];
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t.shuffle.selectedSpread) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-primary text-sm uppercase tracking-[0.4em] font-cinzel mb-1",
            children: t.shuffle.selectedSpread
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[23] = t.shuffle.selectedSpread;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const t16 = lang === "pt" ? spread.namePt ?? spread.name : spread.name;
    let t17;
    if ($[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-playfair text-5xl font-bold text-white italic",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== spread.cardCount || $[28] !== t.shuffle) {
        t18 = t.shuffle.cardsDrawn(spread.cardCount);
        $[27] = spread.cardCount;
        $[28] = t.shuffle;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-400 text-base mt-1 font-fell",
            children: t18
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t15 || $[33] !== t17 || $[34] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "mb-8 text-center",
            initial: t12,
            animate: t13,
            transition: t14,
            children: [
                t15,
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t17;
        $[34] = t19;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== phase) {
        t21 = phase !== "entering" && fanCards.map({
            "ShuffleOverlay[fanCards.map()]": (card, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute",
                    style: {
                        originX: "50%",
                        originY: "100%"
                    },
                    initial: {
                        rotate: 0,
                        x: 0,
                        y: 60,
                        opacity: 0,
                        scale: 0.6
                    },
                    animate: {
                        rotate: phase === "shuffling" ? card.rotate + (Math.random() - 0.5) * 20 : card.rotate,
                        x: card.x,
                        y: 0,
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        delay: card.delay,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-lg overflow-hidden shadow-2xl",
                        style: {
                            width: "100px",
                            height: "165px",
                            border: "2px solid #b5944d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/cards/CardBack.png",
                                alt: "Card back",
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/home/ShuffleOverlay.tsx",
                                lineNumber: 254,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                style: {
                                    background: "linear-gradient(135deg, rgba(184,134,11,0.1) 0%, transparent 60%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/home/ShuffleOverlay.tsx",
                                lineNumber: 254,
                                columnNumber: 100
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ShuffleOverlay.tsx",
                        lineNumber: 250,
                        columnNumber: 10
                    }, this)
                }, i_0, false, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 230,
                    columnNumber: 56
                }, this)
        }["ShuffleOverlay[fanCards.map()]"]);
        $[36] = phase;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center h-56 w-full mb-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: t21
            }, void 0, false, {
                fileName: "[project]/components/home/ShuffleOverlay.tsx",
                lineNumber: 265,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[38] = t21;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            y: 20
        };
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    const t24 = phase !== "entering" ? 1 : 0;
    const t25 = phase !== "entering" ? 0 : 20;
    let t26;
    if ($[41] !== t24 || $[42] !== t25) {
        t26 = {
            opacity: t24,
            y: t25
        };
        $[41] = t24;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            delay: 0.4
        };
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] !== handleKeyDown || $[46] !== phase || $[47] !== question || $[48] !== submitQuestion || $[49] !== t.shuffle.pressEnter || $[50] !== t.shuffle.questionPlaceholder || $[51] !== t.shuffle.shuffleBtn || $[52] !== t.shuffle.speakQuestion) {
        t28 = phase === "focus" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-parchment font-fell text-xl italic",
                    children: [
                        '"',
                        t.shuffle.speakQuestion,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 312,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            ref: inputRef,
                            value: question,
                            maxLength: 120,
                            onChange: {
                                "ShuffleOverlay[<textarea>.onChange]": (e_0)=>setQuestion(e_0.target.value)
                            }["ShuffleOverlay[<textarea>.onChange]"],
                            onKeyDown: handleKeyDown,
                            placeholder: t.shuffle.questionPlaceholder,
                            rows: 3,
                            className: "w-full resize-none rounded px-4 py-3 font-fell text-lg text-slate-200 placeholder-slate-600 outline-none focus:ring-1 focus:ring-primary leading-relaxed",
                            style: {
                                background: "rgba(20,10,5,0.85)",
                                border: "1px solid rgba(184,134,11,0.35)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/ShuffleOverlay.tsx",
                            lineNumber: 312,
                            columnNumber: 142
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 text-xs font-cinzel uppercase tracking-widest",
                                    children: t.shuffle.pressEnter
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                                    lineNumber: 317,
                                    columnNumber: 57
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 text-xs font-cinzel tabular-nums",
                                    children: [
                                        question.length,
                                        "/120"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                                    lineNumber: 317,
                                    columnNumber: 159
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ShuffleOverlay.tsx",
                            lineNumber: 317,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 312,
                    columnNumber: 116
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: submitQuestion,
                    disabled: !question.trim(),
                    className: "px-10 py-3 font-cinzel font-bold uppercase tracking-widest text-base transition-all",
                    style: {
                        background: question.trim() ? "transparent" : "transparent",
                        border: `2px solid ${question.trim() ? "#b8860b" : "rgba(184,134,11,0.25)"}`,
                        color: question.trim() ? "#e8dfcc" : "rgba(232,223,204,0.3)",
                        borderRadius: "4px",
                        cursor: question.trim() ? "pointer" : "not-allowed"
                    },
                    whileHover: question.trim() ? {
                        background: "rgba(184,134,11,0.15)",
                        boxShadow: "0 0 20px rgba(184,134,11,0.3)"
                    } : {},
                    whileTap: question.trim() ? {
                        scale: 0.97
                    } : {},
                    children: t.shuffle.shuffleBtn
                }, void 0, false, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 317,
                    columnNumber: 259
                }, this)
            ]
        }, "focus", true, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 306,
            columnNumber: 32
        }, this);
        $[45] = handleKeyDown;
        $[46] = phase;
        $[47] = question;
        $[48] = submitQuestion;
        $[49] = t.shuffle.pressEnter;
        $[50] = t.shuffle.questionPlaceholder;
        $[51] = t.shuffle.shuffleBtn;
        $[52] = t.shuffle.speakQuestion;
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    let t29;
    if ($[54] !== phase || $[55] !== question || $[56] !== t.shuffle.listening) {
        t29 = phase === "shuffling" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 font-fell text-base italic mb-1",
                    children: [
                        '"',
                        question,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 349,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "text-parchment font-fell text-xl italic",
                    animate: {
                        opacity: [
                            1,
                            0.5,
                            1
                        ]
                    },
                    transition: {
                        duration: 0.5,
                        repeat: Infinity
                    },
                    children: t.shuffle.listening
                }, void 0, false, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 349,
                    columnNumber: 108
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-2 mt-2",
                    children: [
                        ...Array(7)
                    ].map(_ShuffleOverlayAnonymous)
                }, void 0, false, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 354,
                    columnNumber: 42
                }, this)
            ]
        }, "shuffling", true, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 343,
            columnNumber: 36
        }, this);
        $[54] = phase;
        $[55] = question;
        $[56] = t.shuffle.listening;
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    let t30;
    if ($[58] !== beginReading || $[59] !== phase || $[60] !== question || $[61] !== t.shuffle.beginBtn || $[62] !== t.shuffle.cardsLaid) {
        t30 = phase === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 font-fell text-base italic mb-1",
                    children: [
                        '"',
                        question,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 370,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-parchment font-fell text-xl italic",
                    children: [
                        '"',
                        t.shuffle.cardsLaid,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 370,
                    columnNumber: 108
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: beginReading,
                    className: "mt-4 px-10 py-4 font-cinzel font-black uppercase tracking-widest text-base text-black",
                    style: {
                        background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)",
                        borderRadius: "4px"
                    },
                    whileHover: {
                        scale: 1.04,
                        boxShadow: "0 0 40px rgba(255,215,0,0.5)"
                    },
                    whileTap: {
                        scale: 0.97
                    },
                    animate: {
                        boxShadow: [
                            "0 0 20px rgba(255,215,0,0.2)",
                            "0 0 40px rgba(255,215,0,0.5)",
                            "0 0 20px rgba(255,215,0,0.2)"
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity
                    },
                    children: t.shuffle.beginBtn
                }, void 0, false, {
                    fileName: "[project]/components/home/ShuffleOverlay.tsx",
                    lineNumber: 370,
                    columnNumber: 190
                }, this)
            ]
        }, "done", true, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 364,
            columnNumber: 31
        }, this);
        $[58] = beginReading;
        $[59] = phase;
        $[60] = question;
        $[61] = t.shuffle.beginBtn;
        $[62] = t.shuffle.cardsLaid;
        $[63] = t30;
    } else {
        t30 = $[63];
    }
    let t31;
    if ($[64] !== t28 || $[65] !== t29 || $[66] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: [
                t28,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[64] = t28;
        $[65] = t29;
        $[66] = t30;
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== t26 || $[69] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center max-w-lg px-6 w-full",
            initial: t23,
            animate: t26,
            transition: t27,
            children: t31
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[68] = t26;
        $[69] = t31;
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    let t33;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-8 flex gap-3 text-primary/20 text-lg select-none",
            children: [
                "\u2726",
                "\u2727",
                "\u2726",
                "\u2727",
                "\u2726",
                "\u2727",
                "\u2726"
            ].map(_ShuffleOverlayAnonymous2)
        }, void 0, false, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== t11 || $[73] !== t20 || $[74] !== t22 || $[75] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-50 flex flex-col items-center justify-center",
            style: t7,
            initial: t8,
            animate: t9,
            exit: t10,
            children: [
                t11,
                t20,
                t22,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ShuffleOverlay.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[72] = t11;
        $[73] = t20;
        $[74] = t22;
        $[75] = t32;
        $[76] = t34;
    } else {
        t34 = $[76];
    }
    return t34;
}
_s(ShuffleOverlay, "niAtfu41xbTTA/EIMJ0FDi7VGF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = ShuffleOverlay;
function _ShuffleOverlayAnonymous2(s_0, i_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        animate: {
            opacity: [
                0.2,
                0.6,
                0.2
            ]
        },
        transition: {
            duration: 2,
            repeat: Infinity,
            delay: i_2 * 0.2
        },
        children: s_0
    }, i_2, false, {
        fileName: "[project]/components/home/ShuffleOverlay.tsx",
        lineNumber: 433,
        columnNumber: 10
    }, this);
}
function _ShuffleOverlayAnonymous(__0, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-1.5 h-6 bg-primary rounded-full",
        animate: {
            scaleY: [
                1,
                2,
                1
            ],
            opacity: [
                0.5,
                1,
                0.5
            ]
        },
        transition: {
            duration: 0.4,
            repeat: Infinity,
            delay: i_1 * 0.07
        }
    }, i_1, false, {
        fileName: "[project]/components/home/ShuffleOverlay.tsx",
        lineNumber: 442,
        columnNumber: 10
    }, this);
}
function _ShuffleOverlayArrayFrom(_, i) {
    return {
        rotate: (i - 5) * 7,
        x: (i - 5) * 22,
        delay: i * 0.04
    };
}
function _ShuffleOverlayUseSessionStore(s) {
    return s.startSession;
}
var _c;
__turbopack_context__.k.register(_c, "ShuffleOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$InsertCoinButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/InsertCoinButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SpreadSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SpreadSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ShuffleOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/ShuffleOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useSessionStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
;
;
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(97);
    if ($[0] !== "e6588f81773bcf0c6c64fda777401e2a9f1f28bd032ad26f0e5c30a4a565a2f2") {
        for(let $i = 0; $i < 97; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e6588f81773bcf0c6c64fda777401e2a9f1f28bd032ad26f0e5c30a4a565a2f2";
    }
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"])(_HomePageUseSessionStore);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    const [selectedSpread, setSelectedSpread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showShuffle, setShowShuffle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSpreads, setShowSpreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingSpread, setPendingSpread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "HomePage[openShuffle]": (spread)=>{
                setSelectedSpread(spread);
                setShowShuffle(true);
            }
        })["HomePage[openShuffle]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const openShuffle = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HomePage[handleCoinClick]": ()=>{
                setShowSpreads(true);
            }
        })["HomePage[handleCoinClick]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCoinClick = t1;
    let t2;
    if ($[3] !== session) {
        t2 = ({
            "HomePage[handleSpreadSelect]": (spread_0)=>{
                if (session) {
                    setPendingSpread(spread_0);
                } else {
                    openShuffle(spread_0);
                }
            }
        })["HomePage[handleSpreadSelect]"];
        $[3] = session;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleSpreadSelect = t2;
    let t3;
    if ($[5] !== pendingSpread) {
        t3 = ({
            "HomePage[confirmNewReading]": ()=>{
                if (pendingSpread) {
                    openShuffle(pendingSpread);
                }
                setPendingSpread(null);
            }
        })["HomePage[confirmNewReading]"];
        $[5] = pendingSpread;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const confirmNewReading = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: "#1a0f0a"
        };
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            background: "#2a1b11",
            border: "12px solid #1a110a"
        };
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            background: "#2a1b11"
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
            fileName: "[project]/app/page.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-cinzel text-xl font-black uppercase tracking-widest text-white",
                        style: {
                            textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a, 0 0 30px #d6700a"
                        },
                        children: "Rasputin's Eye"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 60
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 137,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t.nav.spreads) {
        t9 = {
            href: "/reading",
            label: t.nav.spreads
        };
        $[12] = t.nav.spreads;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t.nav.library) {
        t10 = {
            href: "/library",
            label: t.nav.library
        };
        $[14] = t.nav.library;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t.nav.premium) {
        t11 = {
            href: "/premium",
            label: t.nav.premium
        };
        $[16] = t.nav.premium;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t10 || $[19] !== t11 || $[20] !== t9) {
        t12 = [
            t9,
            t10,
            t11
        ].map(_HomePageAnonymous);
        $[18] = t10;
        $[19] = t11;
        $[20] = t9;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== setLang) {
        t13 = ({
            "HomePage[<button>.onClick]": ()=>setLang("en")
        })["HomePage[<button>.onClick]"];
        $[22] = setLang;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = `font-cinzel text-xs font-bold uppercase tracking-wider transition-colors ${lang === "en" ? "text-primary" : "text-slate-500 hover:text-slate-300"}`;
    let t15;
    if ($[24] !== t13 || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t14,
            children: "EN"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 text-xs",
            children: "|"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== setLang) {
        t17 = ({
            "HomePage[<button>.onClick]": ()=>setLang("pt")
        })["HomePage[<button>.onClick]"];
        $[28] = setLang;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    const t18 = `font-cinzel text-xs font-bold uppercase tracking-wider transition-colors ${lang === "pt" ? "text-primary" : "text-slate-500 hover:text-slate-300"}`;
    let t19;
    if ($[30] !== t17 || $[31] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: t18,
            children: "PT"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t18;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== t15 || $[34] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 ml-2 border-l border-white/10 pl-4",
            children: [
                t15,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[33] = t15;
        $[34] = t19;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== t12 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between px-8 py-4 border-b-8 border-[#1a110a]",
            style: t6,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center gap-8",
                    children: [
                        t12,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 245,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    let t23;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            border: "16px solid #3d2b1f",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.9)"
        };
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/rasputin-bg.png",
            alt: "Rasputin \u2014 Mystic of Destiny",
            fill: true,
            className: "object-cover object-top",
            priority: true
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[39] = t22;
        $[40] = t23;
    } else {
        t22 = $[39];
        t23 = $[40];
    }
    let t24;
    let t25;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,0,0,0.72) 100%)"
            }
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 dust-particles opacity-10 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[41] = t24;
        $[42] = t25;
    } else {
        t24 = $[41];
        t25 = $[42];
    }
    let t26;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none",
            style: {
                background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)"
            }
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    let t28;
    let t29;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            y: 20,
            opacity: 0
        };
        t28 = {
            y: 0,
            opacity: 1
        };
        t29 = {
            delay: 0.3
        };
        $[44] = t27;
        $[45] = t28;
        $[46] = t29;
    } else {
        t27 = $[44];
        t28 = $[45];
        t29 = $[46];
    }
    let t30;
    if ($[47] !== t.home.headline) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-playfair text-6xl font-black text-white leading-tight italic drop-shadow-lg",
            children: t.home.headline
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[47] = t.home.headline;
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            marginBottom: "10%"
        };
        $[49] = t31;
    } else {
        t31 = $[49];
    }
    let t32;
    if ($[50] !== t.home.subtitle) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-300 text-lg font-fell italic",
            style: t31,
            children: t.home.subtitle
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[50] = t.home.subtitle;
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] !== t30 || $[53] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center space-y-3",
            initial: t27,
            animate: t28,
            transition: t29,
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[52] = t30;
        $[53] = t32;
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] !== showSpreads || $[56] !== t.home.spreadHint) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: !showSpreads ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.8,
                    opacity: 0
                },
                transition: {
                    type: "spring"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$InsertCoinButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: handleCoinClick
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 358,
                    columnNumber: 10
                }, this)
            }, "coin", false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 347,
                columnNumber: 56
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "text-primary font-cinzel text-sm uppercase tracking-widest font-bold",
                children: t.home.spreadHint
            }, "hint", false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 358,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[55] = showSpreads;
        $[56] = t.home.spreadHint;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex gap-3 text-primary/30 text-sm select-none",
            animate: {
                opacity: [
                    0.3,
                    0.7,
                    0.3
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity
            },
            children: "✦ ✧ ✦ ✧ ✦"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[59] = t34;
        $[60] = t36;
    } else {
        t36 = $[60];
    }
    let t37;
    if ($[61] !== t33 || $[62] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-10 flex flex-col items-center justify-between px-8 py-10",
            children: [
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[61] = t33;
        $[62] = t36;
        $[63] = t37;
    } else {
        t37 = $[63];
    }
    let t38;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 inset-x-0 h-10 flex items-center justify-center gap-3 pointer-events-none",
            style: {
                background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
            },
            children: [
                ...Array(9)
            ].map(_HomePageAnonymous2)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[64] = t38;
    } else {
        t38 = $[64];
    }
    let t39;
    if ($[65] !== t37) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full z-10",
            children: [
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[65] = t37;
        $[66] = t39;
    } else {
        t39 = $[66];
    }
    let t40;
    if ($[67] !== handleSpreadSelect || $[68] !== showSpreads) {
        t40 = showSpreads && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 z-20 flex flex-col items-center justify-center px-10 py-8",
            style: {
                background: "rgba(55, 0, 0, 0.52)",
                backdropFilter: "blur(3px)"
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
            transition: {
                duration: 0.35
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SpreadSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSelect: handleSpreadSelect
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 428,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 417,
            columnNumber: 26
        }, this);
        $[67] = handleSpreadSelect;
        $[68] = showSpreads;
        $[69] = t40;
    } else {
        t40 = $[69];
    }
    let t41;
    if ($[70] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t40
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[70] = t40;
        $[71] = t41;
    } else {
        t41 = $[71];
    }
    let t42;
    if ($[72] !== t39 || $[73] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1 min-h-[540px] flex items-stretch overflow-hidden",
            style: t22,
            children: [
                t23,
                t24,
                t25,
                t26,
                t39,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[72] = t39;
        $[73] = t41;
        $[74] = t42;
    } else {
        t42 = $[74];
    }
    let t43;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            background: "#1a110a"
        };
        $[75] = t43;
    } else {
        t43 = $[75];
    }
    let t44;
    if ($[76] !== t.home.footer) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "h-12 px-8 flex items-center",
            style: t43,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[12px] text-primary/60 uppercase tracking-[0.3em] font-cinzel font-bold",
                children: t.home.footer
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 463,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[76] = t.home.footer;
        $[77] = t44;
    } else {
        t44 = $[77];
    }
    let t45;
    if ($[78] !== t21 || $[79] !== t42 || $[80] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-6xl flex flex-col overflow-hidden rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.9)]",
            style: t5,
            children: [
                t21,
                t42,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[78] = t21;
        $[79] = t42;
        $[80] = t44;
        $[81] = t45;
    } else {
        t45 = $[81];
    }
    let t46;
    if ($[82] !== confirmNewReading || $[83] !== pendingSpread || $[84] !== t.home.modal) {
        t46 = pendingSpread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            style: {
                background: "rgba(0,0,0,0.85)"
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative rounded-xl p-8 max-w-sm w-full text-center",
                style: {
                    background: "#1a1512",
                    border: "2px solid #b8860b"
                },
                initial: {
                    scale: 0.85,
                    y: 30
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                exit: {
                    scale: 0.85,
                    y: 30
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-playfair text-xl italic text-white mb-2",
                        children: t.home.modal.title
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 501,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm font-fell mb-6",
                        children: t.home.modal.warning
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 501,
                        columnNumber: 94
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "HomePage[<button>.onClick]": ()=>setPendingSpread(null)
                                }["HomePage[<button>.onClick]"],
                                className: "flex-1 py-3 rounded-lg font-cinzel text-sm uppercase tracking-widest text-slate-300",
                                style: {
                                    border: "1px solid rgba(255,255,255,0.15)"
                                },
                                children: t.home.modal.cancel
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 501,
                                columnNumber: 201
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: confirmNewReading,
                                className: "flex-1 py-3 rounded-lg font-cinzel font-bold text-sm uppercase tracking-widest text-black",
                                style: {
                                    background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)"
                                },
                                children: t.home.modal.newReading
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 505,
                                columnNumber: 44
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 501,
                        columnNumber: 173
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 489,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 481,
            columnNumber: 28
        }, this);
        $[82] = confirmNewReading;
        $[83] = pendingSpread;
        $[84] = t.home.modal;
        $[85] = t46;
    } else {
        t46 = $[85];
    }
    let t47;
    if ($[86] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t46
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[86] = t46;
        $[87] = t47;
    } else {
        t47 = $[87];
    }
    let t48;
    if ($[88] !== selectedSpread || $[89] !== showShuffle) {
        t48 = showShuffle && selectedSpread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ShuffleOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            spread: selectedSpread,
            onClose: {
                "HomePage[<ShuffleOverlay>.onClose]": ()=>setShowShuffle(false)
            }["HomePage[<ShuffleOverlay>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 525,
            columnNumber: 44
        }, this);
        $[88] = selectedSpread;
        $[89] = showShuffle;
        $[90] = t48;
    } else {
        t48 = $[90];
    }
    let t49;
    if ($[91] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t48
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[91] = t48;
        $[92] = t49;
    } else {
        t49 = $[92];
    }
    let t50;
    if ($[93] !== t45 || $[94] !== t47 || $[95] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 lg:p-12",
            style: t4,
            children: [
                t45,
                t47,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[93] = t45;
        $[94] = t47;
        $[95] = t49;
        $[96] = t50;
    } else {
        t50 = $[96];
    }
    return t50;
}
_s(HomePage, "bHWTpWOoql7B+O89nilLrK32ml4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = HomePage;
function _HomePageAnonymous2(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "rounded-full",
        style: {
            width: "6px",
            height: "6px",
            background: i % 2 === 0 ? "#d6700a" : "rgba(214,112,10,0.2)"
        },
        animate: i % 2 === 0 ? {
            opacity: [
                1,
                0.2,
                1
            ],
            boxShadow: [
                "0 0 6px #d6700a",
                "0 0 0px transparent",
                "0 0 6px #d6700a"
            ]
        } : {},
        transition: {
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1
        }
    }, i, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 555,
        columnNumber: 10
    }, this);
}
function _HomePageAnonymous(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: l.href,
        className: "font-cinzel text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-primary transition-colors",
        children: l.label
    }, l.href, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 569,
        columnNumber: 10
    }, this);
}
function _HomePageUseSessionStore(s) {
    return s.session;
}
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4303832f._.js.map