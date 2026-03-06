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
"[project]/app/premium/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PremiumPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MarqueeLights(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5c1f1f6361826259053085f3d6581441c5b70c24256cf4f55ba2b1e9479bebd3") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c1f1f6361826259053085f3d6581441c5b70c24256cf4f55ba2b1e9479bebd3";
    }
    const { inverted: t1 } = t0;
    const inverted = t1 === undefined ? false : t1;
    let t2;
    if ($[1] !== inverted) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around px-4 py-1.5",
            children: Array.from({
                length: 14
            }, {
                "MarqueeLights[Array.from()]": (_, i)=>{
                    const isOn = inverted ? i % 2 !== 0 : i % 2 === 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-5 h-5 rounded-full",
                        style: {
                            background: isOn ? "radial-gradient(circle at 30% 30%, #fff 0%, #ffbf00 100%)" : "#2b1a0a",
                            border: `1px solid ${isOn ? "#fff" : "#3d2b1a"}`
                        },
                        animate: isOn ? {
                            boxShadow: [
                                "0 0 14px 4px #ff8c00, 0 0 28px 7px #ffbf00, inset 0 0 4px #fff",
                                "0 0 6px 1px #ff8c00, 0 0 12px 3px #ffbf00, inset 0 0 2px #fff",
                                "0 0 14px 4px #ff8c00, 0 0 28px 7px #ffbf00, inset 0 0 4px #fff"
                            ],
                            opacity: [
                                1,
                                0.7,
                                1
                            ]
                        } : {
                            opacity: [
                                0.15,
                                0.25,
                                0.15
                            ]
                        },
                        transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            delay: isOn ? 0 : 0.6,
                            ease: "easeInOut"
                        }
                    }, i, false, {
                        fileName: "[project]/app/premium/page.tsx",
                        lineNumber: 27,
                        columnNumber: 18
                    }, this);
                }
            }["MarqueeLights[Array.from()]"])
        }, void 0, false, {
            fileName: "[project]/app/premium/page.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = inverted;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    return t2;
}
_c = MarqueeLights;
const BADGE_ICONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
];
function PremiumPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(150);
    if ($[0] !== "5c1f1f6361826259053085f3d6581441c5b70c24256cf4f55ba2b1e9479bebd3") {
        for(let $i = 0; $i < 150; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c1f1f6361826259053085f3d6581441c5b70c24256cf4f55ba2b1e9479bebd3";
    }
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    let T0;
    let t0;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== t.premium.badges || $[2] !== t.premium.features || $[3] !== t.premium.hero || $[4] !== t.premium.heroSub || $[5] !== t.premium.masterDesc || $[6] !== t.premium.masterReading || $[7] !== t.premium.price || $[8] !== t.premium.priceMain || $[9] !== t.premium.priceSub || $[10] !== t.premium.requestBtn || $[11] !== t.premium.ticketLabel || $[12] !== t.premium.validUntil || $[13] !== t.premium.whatYouReceive) {
        const TRUST_BADGES = t.premium.badges.map(_PremiumPageTPremiumBadgesMap);
        t11 = "relative flex min-h-screen w-full flex-col overflow-x-hidden";
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = {
                background: "#1a0f0a"
            };
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this);
            $[29] = t12;
            $[30] = t13;
        } else {
            t12 = $[29];
            t13 = $[30];
        }
        t9 = "flex-1 flex flex-col items-center justify-center p-5 lg:p-10 relative overflow-hidden";
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = {
                background: "radial-gradient(circle at center, #2d0a02 0%, #120503 100%)",
                boxShadow: "inset 0 0 120px rgba(0,0,0,0.9)"
            };
            $[31] = t10;
        } else {
            t10 = $[31];
        }
        t6 = "relative z-10 w-full max-w-5xl flex flex-col items-center";
        let t14;
        let t15;
        let t16;
        let t17;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = {
                border: "10px solid #140a05",
                boxShadow: "0 0 40px rgba(0,0,0,1), 0 0 14px rgba(255,140,0,0.1)"
            };
            t15 = {
                opacity: 0,
                y: -24
            };
            t16 = {
                opacity: 1,
                y: 0
            };
            t17 = {
                duration: 0.8
            };
            $[32] = t14;
            $[33] = t15;
            $[34] = t16;
            $[35] = t17;
        } else {
            t14 = $[32];
            t15 = $[33];
            t16 = $[34];
            t17 = $[35];
        }
        let t18;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-7 inset-x-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeLights, {
                    inverted: false
                }, void 0, false, {
                    fileName: "[project]/app/premium/page.tsx",
                    lineNumber: 132,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this);
            $[36] = t18;
        } else {
            t18 = $[36];
        }
        let t19;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = {
                background: "rgba(15,2,2,0.97)",
                borderColor: "rgba(255,191,0,0.2)",
                boxShadow: "inset 0 0 40px rgba(0,0,0,1)"
            };
            $[37] = t19;
        } else {
            t19 = $[37];
        }
        let t20;
        let t21;
        let t22;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = {
                color: "#ffbf00",
                textShadow: "0 0 12px rgba(255,191,0,0.6), 2px 2px 2px rgba(0,0,0,1)"
            };
            t21 = {
                textShadow: [
                    "0 0 12px rgba(255,191,0,0.6), 2px 2px 2px rgba(0,0,0,1)",
                    "0 0 24px rgba(255,191,0,0.9), 2px 2px 2px rgba(0,0,0,1)",
                    "0 0 12px rgba(255,191,0,0.6), 2px 2px 2px rgba(0,0,0,1)"
                ]
            };
            t22 = {
                duration: 3,
                repeat: Infinity
            };
            $[38] = t20;
            $[39] = t21;
            $[40] = t22;
        } else {
            t20 = $[38];
            t21 = $[39];
            t22 = $[40];
        }
        let t23;
        if ($[41] !== t.premium.hero) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: "font-vintage text-3xl md:text-5xl font-bold uppercase leading-none mb-4",
                style: t20,
                animate: t21,
                transition: t22,
                children: t.premium.hero
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, this);
            $[41] = t.premium.hero;
            $[42] = t23;
        } else {
            t23 = $[42];
        }
        let t24;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-32 h-0.5 my-3",
                style: {
                    background: "linear-gradient(to right, transparent, #ffbf00, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this);
            $[43] = t24;
        } else {
            t24 = $[43];
        }
        let t25;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = {
                color: "#ffbf00",
                filter: "drop-shadow(0 0 4px rgba(255,191,0,0.4))"
            };
            $[44] = t25;
        } else {
            t25 = $[44];
        }
        let t26;
        if ($[45] !== t.premium.heroSub) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-vintage tracking-[0.4em] text-base uppercase italic",
                style: t25,
                children: t.premium.heroSub
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this);
            $[45] = t.premium.heroSub;
            $[46] = t26;
        } else {
            t26 = $[46];
        }
        let t27;
        if ($[47] !== t23 || $[48] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 lg:p-10 flex flex-col items-center text-center relative border-4",
                style: t19,
                children: [
                    t23,
                    t24,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this);
            $[47] = t23;
            $[48] = t26;
            $[49] = t27;
        } else {
            t27 = $[49];
        }
        let t28;
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-7 inset-x-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeLights, {
                    inverted: true
                }, void 0, false, {
                    fileName: "[project]/app/premium/page.tsx",
                    lineNumber: 217,
                    columnNumber: 59
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, this);
            $[50] = t28;
        } else {
            t28 = $[50];
        }
        if ($[51] !== t27) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full max-w-3xl mb-12 relative",
                style: t14,
                initial: t15,
                animate: t16,
                transition: t17,
                children: [
                    t18,
                    t27,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 223,
                columnNumber: 12
            }, this);
            $[51] = t27;
            $[52] = t7;
        } else {
            t7 = $[52];
        }
        let t29;
        let t30;
        let t31;
        let t32;
        let t33;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = {
                background: "rgba(0,0,0,0.85)",
                border: "2px solid rgba(255,191,0,0.3)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.8)"
            };
            t30 = {
                x: -30,
                opacity: 0
            };
            t31 = {
                x: 0,
                opacity: 1
            };
            t32 = {
                delay: 0.3,
                type: "spring"
            };
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-2 border border-primary-gold/10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this);
            $[53] = t29;
            $[54] = t30;
            $[55] = t31;
            $[56] = t32;
            $[57] = t33;
        } else {
            t29 = $[53];
            t30 = $[54];
            t31 = $[55];
            t32 = $[56];
            t33 = $[57];
        }
        let t34;
        if ($[58] !== t.premium.masterReading) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-vintage text-primary-gold text-2xl uppercase tracking-[0.3em] mb-3",
                children: t.premium.masterReading
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this);
            $[58] = t.premium.masterReading;
            $[59] = t34;
        } else {
            t34 = $[59];
        }
        let t35;
        if ($[60] !== t.premium.masterDesc) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-200 text-sm font-fell italic max-w-xs mx-auto leading-relaxed",
                children: [
                    '"',
                    t.premium.masterDesc,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 276,
                columnNumber: 13
            }, this);
            $[60] = t.premium.masterDesc;
            $[61] = t35;
        } else {
            t35 = $[61];
        }
        let t36;
        if ($[62] !== t34 || $[63] !== t35) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-7 relative z-10",
                children: [
                    t34,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this);
            $[62] = t34;
            $[63] = t35;
            $[64] = t36;
        } else {
            t36 = $[64];
        }
        let t37;
        let t38;
        let t39;
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = {
                scale: 1.04
            };
            t38 = {
                scale: 0.97
            };
            t39 = {
                type: "spring",
                stiffness: 300
            };
            $[65] = t37;
            $[66] = t38;
            $[67] = t39;
        } else {
            t37 = $[65];
            t38 = $[66];
            t39 = $[67];
        }
        let t40;
        if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute pointer-events-none",
                style: {
                    inset: "-18px",
                    background: "rgba(255,140,0,0.2)",
                    filter: "blur(24px)",
                    borderRadius: "9999px"
                },
                initial: {
                    opacity: 0
                },
                whileHover: {
                    opacity: 1
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 315,
                columnNumber: 13
            }, this);
            $[68] = t40;
        } else {
            t40 = $[68];
        }
        let t41;
        if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = {
                padding: "3px",
                backgroundColor: "#1a0c02",
                border: "2px solid #ffbf00",
                clipPath: "polygon(4% 0, 96% 0, 100% 8%, 100% 42%, 97% 50%, 100% 58%, 100% 92%, 96% 100%, 4% 100%, 0 92%, 0 58%, 3% 50%, 0 42%, 0 8%)"
            };
            $[69] = t41;
        } else {
            t41 = $[69];
        }
        let t42;
        if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
            t42 = {
                margin: "5px",
                position: "relative"
            };
            $[70] = t42;
        } else {
            t42 = $[70];
        }
        let t43;
        if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[5px]",
                style: {
                    border: "2px solid rgba(255,191,0,0.3)"
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this);
            $[71] = t43;
        } else {
            t43 = $[71];
        }
        let t44;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t44 = {
                color: "#ffbf00"
            };
            $[72] = t44;
        } else {
            t44 = $[72];
        }
        let t45;
        if ($[73] !== t.premium.ticketLabel) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-vintage text-2xl leading-none mb-1 font-black",
                style: t44,
                children: t.premium.ticketLabel
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 371,
                columnNumber: 13
            }, this);
            $[73] = t.premium.ticketLabel;
            $[74] = t45;
        } else {
            t45 = $[74];
        }
        let t46;
        if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-0.5 my-2 opacity-80",
                style: {
                    background: "#ffbf00"
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 379,
                columnNumber: 13
            }, this);
            $[75] = t46;
        } else {
            t46 = $[75];
        }
        let t47;
        if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = {
                width: "88px",
                height: "88px",
                border: "2px solid #ffbf00"
            };
            $[76] = t47;
        } else {
            t47 = $[76];
        }
        let t48;
        if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-5xl",
                style: {
                    color: "#ffbf00"
                },
                children: "☽"
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 399,
                columnNumber: 13
            }, this);
            $[77] = t48;
        } else {
            t48 = $[77];
        }
        let t49;
        if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center rounded-full mb-2",
                style: t47,
                children: [
                    t48,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full border-dashed",
                        style: {
                            transform: "scale(0.9)",
                            border: "2px dashed rgba(255,191,0,0.3)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/premium/page.tsx",
                        lineNumber: 408,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 408,
                columnNumber: 13
            }, this);
            $[78] = t49;
        } else {
            t49 = $[78];
        }
        let t50;
        if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
            t50 = {
                color: "#ffbf00"
            };
            $[79] = t50;
        } else {
            t50 = $[79];
        }
        let t51;
        if ($[80] !== t.premium.requestBtn) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-vintage text-base tracking-normal font-black text-center px-2",
                style: t50,
                children: t.premium.requestBtn
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 427,
                columnNumber: 13
            }, this);
            $[80] = t.premium.requestBtn;
            $[81] = t51;
        } else {
            t51 = $[81];
        }
        let t52;
        if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-0.5 my-2 opacity-80",
                style: {
                    background: "#ffbf00"
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 435,
                columnNumber: 13
            }, this);
            $[82] = t52;
        } else {
            t52 = $[82];
        }
        let t53;
        if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
            t53 = {
                color: "rgba(255,191,0,0.7)"
            };
            $[83] = t53;
        } else {
            t53 = $[83];
        }
        let t54;
        if ($[84] !== t.premium.validUntil) {
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-typewriter font-black uppercase tracking-[0.4em]",
                style: t53,
                children: t.premium.validUntil
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 453,
                columnNumber: 13
            }, this);
            $[84] = t.premium.validUntil;
            $[85] = t54;
        } else {
            t54 = $[85];
        }
        let t55;
        if ($[86] !== t45 || $[87] !== t51 || $[88] !== t54) {
            t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "group relative z-10",
                whileHover: t37,
                whileTap: t38,
                transition: t39,
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-56 shadow-[0_16px_40px_rgba(0,0,0,0.9)]",
                        style: t41,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-primary-gold/40 h-full",
                            style: t42,
                            children: [
                                t43,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center py-6 px-3 relative z-10",
                                    children: [
                                        t45,
                                        t46,
                                        t49,
                                        t51,
                                        t52,
                                        t54
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/premium/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 253
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/premium/page.tsx",
                            lineNumber: 461,
                            columnNumber: 182
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/premium/page.tsx",
                        lineNumber: 461,
                        columnNumber: 111
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 461,
                columnNumber: 13
            }, this);
            $[86] = t45;
            $[87] = t51;
            $[88] = t54;
            $[89] = t55;
        } else {
            t55 = $[89];
        }
        let t56;
        if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
            t56 = {
                color: "#ffbf00"
            };
            $[90] = t56;
        } else {
            t56 = $[90];
        }
        let t57;
        if ($[91] !== t.premium.price) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 font-vintage tracking-[0.4em] text-xs uppercase relative z-10",
                style: t56,
                children: t.premium.price
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 480,
                columnNumber: 13
            }, this);
            $[91] = t.premium.price;
            $[92] = t57;
        } else {
            t57 = $[92];
        }
        let t58;
        if ($[93] !== t36 || $[94] !== t55 || $[95] !== t57) {
            t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex flex-col items-center justify-center p-8 relative rounded-sm",
                style: t29,
                initial: t30,
                animate: t31,
                transition: t32,
                children: [
                    t33,
                    t36,
                    t55,
                    t57
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 488,
                columnNumber: 13
            }, this);
            $[93] = t36;
            $[94] = t55;
            $[95] = t57;
            $[96] = t58;
        } else {
            t58 = $[96];
        }
        let t59;
        let t60;
        let t61;
        let t62;
        let t63;
        if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
            t59 = {
                background: "rgba(0,0,0,0.85)",
                border: "2px solid rgba(255,191,0,0.3)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.8)"
            };
            t60 = {
                x: 30,
                opacity: 0
            };
            t61 = {
                x: 0,
                opacity: 1
            };
            t62 = {
                delay: 0.4,
                type: "spring"
            };
            t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-2 border border-primary-gold/10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 520,
                columnNumber: 13
            }, this);
            $[97] = t59;
            $[98] = t60;
            $[99] = t61;
            $[100] = t62;
            $[101] = t63;
        } else {
            t59 = $[97];
            t60 = $[98];
            t61 = $[99];
            t62 = $[100];
            t63 = $[101];
        }
        let t64;
        if ($[102] !== t.premium.whatYouReceive) {
            t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-vintage text-primary-gold text-2xl uppercase tracking-[0.3em] mb-1 text-center",
                children: t.premium.whatYouReceive
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 535,
                columnNumber: 13
            }, this);
            $[102] = t.premium.whatYouReceive;
            $[103] = t64;
        } else {
            t64 = $[103];
        }
        let t65;
        if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
            t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-24 h-0.5 mx-auto mb-6",
                style: {
                    background: "linear-gradient(to right, transparent, #ffbf00, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 543,
                columnNumber: 13
            }, this);
            $[104] = t65;
        } else {
            t65 = $[104];
        }
        let t66;
        if ($[105] !== t.premium.features) {
            t66 = t.premium.features.map(_PremiumPageTPremiumFeaturesMap);
            $[105] = t.premium.features;
            $[106] = t66;
        } else {
            t66 = $[106];
        }
        let t67;
        if ($[107] !== t66) {
            t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: t66
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 560,
                columnNumber: 13
            }, this);
            $[107] = t66;
            $[108] = t67;
        } else {
            t67 = $[108];
        }
        let t68;
        if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
            t68 = {
                color: "#ffbf00"
            };
            $[109] = t68;
        } else {
            t68 = $[109];
        }
        let t69;
        if ($[110] !== t.premium.priceMain) {
            t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-vintage text-4xl",
                style: t68,
                children: t.premium.priceMain
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 577,
                columnNumber: 13
            }, this);
            $[110] = t.premium.priceMain;
            $[111] = t69;
        } else {
            t69 = $[111];
        }
        let t70;
        if ($[112] !== t.premium.priceSub) {
            t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-cinzel text-[10px] font-black uppercase tracking-widest text-slate-400",
                children: t.premium.priceSub
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 585,
                columnNumber: 13
            }, this);
            $[112] = t.premium.priceSub;
            $[113] = t70;
        } else {
            t70 = $[113];
        }
        let t71;
        if ($[114] !== t69 || $[115] !== t70) {
            t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 pt-5 border-t border-primary-gold/20 flex items-baseline gap-2",
                children: [
                    t69,
                    t70
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 593,
                columnNumber: 13
            }, this);
            $[114] = t69;
            $[115] = t70;
            $[116] = t71;
        } else {
            t71 = $[116];
        }
        let t72;
        if ($[117] !== t64 || $[118] !== t67 || $[119] !== t71) {
            t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex flex-col justify-center p-8 relative rounded-sm",
                style: t59,
                initial: t60,
                animate: t61,
                transition: t62,
                children: [
                    t63,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            t64,
                            t65,
                            t67,
                            t71
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/premium/page.tsx",
                        lineNumber: 602,
                        columnNumber: 152
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 602,
                columnNumber: 13
            }, this);
            $[117] = t64;
            $[118] = t67;
            $[119] = t71;
            $[120] = t72;
        } else {
            t72 = $[120];
        }
        if ($[121] !== t58 || $[122] !== t72) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-stretch",
                children: [
                    t58,
                    t72
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 611,
                columnNumber: 12
            }, this);
            $[121] = t58;
            $[122] = t72;
            $[123] = t8;
        } else {
            t8 = $[123];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t0 = "mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 w-full border-t-2 pt-10 pb-6";
        if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = {
                borderTopColor: "rgba(255,191,0,0.2)"
            };
            t2 = {
                opacity: 0,
                y: 24
            };
            t3 = {
                opacity: 1,
                y: 0
            };
            t4 = {
                delay: 0.6
            };
            $[124] = t1;
            $[125] = t2;
            $[126] = t3;
            $[127] = t4;
        } else {
            t1 = $[124];
            t2 = $[125];
            t3 = $[126];
            t4 = $[127];
        }
        t5 = TRUST_BADGES.map(_PremiumPageTRUST_BADGESMap);
        $[1] = t.premium.badges;
        $[2] = t.premium.features;
        $[3] = t.premium.hero;
        $[4] = t.premium.heroSub;
        $[5] = t.premium.masterDesc;
        $[6] = t.premium.masterReading;
        $[7] = t.premium.price;
        $[8] = t.premium.priceMain;
        $[9] = t.premium.priceSub;
        $[10] = t.premium.requestBtn;
        $[11] = t.premium.ticketLabel;
        $[12] = t.premium.validUntil;
        $[13] = t.premium.whatYouReceive;
        $[14] = T0;
        $[15] = t0;
        $[16] = t1;
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
        $[20] = t13;
        $[21] = t2;
        $[22] = t3;
        $[23] = t4;
        $[24] = t5;
        $[25] = t6;
        $[26] = t7;
        $[27] = t8;
        $[28] = t9;
    } else {
        T0 = $[14];
        t0 = $[15];
        t1 = $[16];
        t10 = $[17];
        t11 = $[18];
        t12 = $[19];
        t13 = $[20];
        t2 = $[21];
        t3 = $[22];
        t4 = $[23];
        t5 = $[24];
        t6 = $[25];
        t7 = $[26];
        t8 = $[27];
        t9 = $[28];
    }
    let t14;
    if ($[128] !== T0 || $[129] !== t0 || $[130] !== t1 || $[131] !== t2 || $[132] !== t3 || $[133] !== t4 || $[134] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t0,
            style: t1,
            initial: t2,
            animate: t3,
            transition: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/app/premium/page.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[128] = T0;
        $[129] = t0;
        $[130] = t1;
        $[131] = t2;
        $[132] = t3;
        $[133] = t4;
        $[134] = t5;
        $[135] = t14;
    } else {
        t14 = $[135];
    }
    let t15;
    if ($[136] !== t14 || $[137] !== t6 || $[138] !== t7 || $[139] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/premium/page.tsx",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        $[136] = t14;
        $[137] = t6;
        $[138] = t7;
        $[139] = t8;
        $[140] = t15;
    } else {
        t15 = $[140];
    }
    let t16;
    if ($[141] !== t10 || $[142] !== t15 || $[143] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t9,
            style: t10,
            children: t15
        }, void 0, false, {
            fileName: "[project]/app/premium/page.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[141] = t10;
        $[142] = t15;
        $[143] = t9;
        $[144] = t16;
    } else {
        t16 = $[144];
    }
    let t17;
    if ($[145] !== t11 || $[146] !== t12 || $[147] !== t13 || $[148] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            style: t12,
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/premium/page.tsx",
            lineNumber: 728,
            columnNumber: 11
        }, this);
        $[145] = t11;
        $[146] = t12;
        $[147] = t13;
        $[148] = t16;
        $[149] = t17;
    } else {
        t17 = $[149];
    }
    return t17;
}
_s(PremiumPage, "uZyfTDL5l50aWwhHvO0Py2n2h8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c1 = PremiumPage;
function _PremiumPageTRUST_BADGESMap(t0) {
    const { icon: Icon, label: label_0 } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex flex-col items-center text-center group",
        whileHover: {
            y: -3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "mb-3 transition-transform group-hover:scale-110",
                style: {
                    width: "36px",
                    height: "36px",
                    color: "#ffbf00",
                    filter: "drop-shadow(0 0 8px rgba(255,191,0,0.4))"
                }
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 746,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-black uppercase tracking-[0.4em] font-cinzel",
                style: {
                    color: "rgba(255,191,0,0.8)"
                },
                children: label_0
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 751,
                columnNumber: 10
            }, this)
        ]
    }, label_0, true, {
        fileName: "[project]/app/premium/page.tsx",
        lineNumber: 744,
        columnNumber: 10
    }, this);
}
function _PremiumPageTPremiumFeaturesMap(item, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex items-start gap-3",
        initial: {
            x: 20,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        transition: {
            delay: 0.5 + i_0 * 0.1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm mt-1 flex-shrink-0 font-bold",
                style: {
                    color: "#ffbf00"
                },
                children: "✦"
            }, void 0, false, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 764,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-cinzel text-xs font-black uppercase tracking-widest mb-0.5",
                        style: {
                            color: "#ffbf00"
                        },
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/app/premium/page.tsx",
                        lineNumber: 766,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-fell text-xs text-slate-400 leading-relaxed italic",
                        children: item.desc
                    }, void 0, false, {
                        fileName: "[project]/app/premium/page.tsx",
                        lineNumber: 768,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/premium/page.tsx",
                lineNumber: 766,
                columnNumber: 16
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/app/premium/page.tsx",
        lineNumber: 756,
        columnNumber: 10
    }, this);
}
function _PremiumPageTPremiumBadgesMap(label, i) {
    return {
        icon: BADGE_ICONS[i],
        label
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, "MarqueeLights");
__turbopack_context__.k.register(_c1, "PremiumPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4f213b73._.js.map