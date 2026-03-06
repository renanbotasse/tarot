(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/reading/TarotCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TarotCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const sizes = {
    sm: {
        w: "96px",
        h: "158px"
    },
    md: {
        w: "116px",
        h: "192px"
    },
    lg: {
        w: "136px",
        h: "224px"
    }
};
function TarotCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "8b38687c55107a3b61f27dfa9d7b7f4aad8f1a14a2010a754e20ce3fb6fd48ee") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b38687c55107a3b61f27dfa9d7b7f4aad8f1a14a2010a754e20ce3fb6fd48ee";
    }
    const { card, isReversed: t1, isRevealed, isActive: t2, isNext: t3, isDimmed: t4, isCrossing: t5, positionName, labelSide: t6, onClick, size: t7, index: t8 } = t0;
    const isReversed = t1 === undefined ? false : t1;
    const isActive = t2 === undefined ? false : t2;
    const isNext = t3 === undefined ? false : t3;
    const isDimmed = t4 === undefined ? false : t4;
    const isCrossing = t5 === undefined ? false : t5;
    const labelSide = t6 === undefined ? "below" : t6;
    const size = t7 === undefined ? "md" : t7;
    const index = t8 === undefined ? 0 : t8;
    const { w, h } = sizes[size];
    let t9;
    if ($[1] !== isDimmed || $[2] !== onClick) {
        t9 = ({
            "TarotCard[handleClick]": ()=>{
                if (!isDimmed && onClick) {
                    onClick();
                }
            }
        })["TarotCard[handleClick]"];
        $[1] = isDimmed;
        $[2] = onClick;
        $[3] = t9;
    } else {
        t9 = $[3];
    }
    const handleClick = t9;
    const t10 = isCrossing ? "rotate(90deg)" : "none";
    const t11 = isCrossing ? 10 : 1;
    const t12 = isDimmed ? "not-allowed" : "pointer";
    const t13 = isDimmed ? "none" : "auto";
    let t14;
    if ($[4] !== h || $[5] !== t10 || $[6] !== t11 || $[7] !== t12 || $[8] !== t13 || $[9] !== w) {
        t14 = {
            width: w,
            height: h,
            transform: t10,
            zIndex: t11,
            cursor: t12,
            pointerEvents: t13
        };
        $[4] = h;
        $[5] = t10;
        $[6] = t11;
        $[7] = t12;
        $[8] = t13;
        $[9] = w;
        $[10] = t14;
    } else {
        t14 = $[10];
    }
    let t15;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            y: -80,
            opacity: 0,
            scale: 0.7
        };
        $[11] = t15;
    } else {
        t15 = $[11];
    }
    const t16 = isDimmed ? 0.35 : 1;
    let t17;
    if ($[12] !== t16) {
        t17 = {
            y: 0,
            opacity: t16,
            scale: 1
        };
        $[12] = t16;
        $[13] = t17;
    } else {
        t17 = $[13];
    }
    const t18 = index * 0.12;
    let t19;
    if ($[14] !== t18) {
        t19 = {
            delay: t18,
            type: "spring",
            stiffness: 200,
            damping: 20
        };
        $[14] = t18;
        $[15] = t19;
    } else {
        t19 = $[15];
    }
    let t20;
    if ($[16] !== isDimmed || $[17] !== isNext || $[18] !== isRevealed) {
        t20 = !isDimmed && isRevealed ? {
            y: -4
        } : !isDimmed && isNext ? {
            scale: 1.04
        } : {};
        $[16] = isDimmed;
        $[17] = isNext;
        $[18] = isRevealed;
        $[19] = t20;
    } else {
        t20 = $[19];
    }
    let t21;
    if ($[20] !== isActive) {
        t21 = isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-lg pointer-events-none",
            style: {
                border: "3px solid #ffd700",
                zIndex: 20
            },
            animate: {
                boxShadow: [
                    "0 0 10px rgba(255,215,0,0.4)",
                    "0 0 30px rgba(255,215,0,0.8)",
                    "0 0 10px rgba(255,215,0,0.4)"
                ]
            },
            transition: {
                duration: 1.5,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 163,
            columnNumber: 23
        }, this);
        $[20] = isActive;
        $[21] = t21;
    } else {
        t21 = $[21];
    }
    let t22;
    if ($[22] !== isActive || $[23] !== isNext) {
        t22 = isNext && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-lg pointer-events-none",
            style: {
                border: "3px solid #d6700a",
                zIndex: 20
            },
            animate: {
                boxShadow: [
                    "0 0 8px rgba(214,112,10,0.5)",
                    "0 0 28px rgba(214,112,10,0.9)",
                    "0 0 8px rgba(214,112,10,0.5)"
                ]
            },
            transition: {
                duration: 1.2,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 179,
            columnNumber: 34
        }, this);
        $[22] = isActive;
        $[23] = isNext;
        $[24] = t22;
    } else {
        t22 = $[24];
    }
    let t23;
    if ($[25] !== isDimmed) {
        t23 = isDimmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-lg pointer-events-none",
            style: {
                background: "rgba(0,0,0,0.3)",
                zIndex: 20
            },
            animate: {
                opacity: [
                    0.3,
                    0.6,
                    0.3
                ]
            },
            transition: {
                duration: 2.5,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 196,
            columnNumber: 23
        }, this);
        $[25] = isDimmed;
        $[26] = t23;
    } else {
        t23 = $[26];
    }
    let t24;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            transformStyle: "preserve-3d"
        };
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    const t25 = isRevealed ? 0 : 180;
    let t26;
    if ($[28] !== t25) {
        t26 = {
            rotateY: t25
        };
        $[28] = t25;
        $[29] = t26;
    } else {
        t26 = $[29];
    }
    let t27;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            duration: 0.7,
            type: "spring",
            stiffness: 100
        };
        $[30] = t27;
    } else {
        t27 = $[30];
    }
    let t28;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            backfaceVisibility: "hidden"
        };
        $[31] = t28;
    } else {
        t28 = $[31];
    }
    let t29;
    if ($[32] !== card || $[33] !== isActive || $[34] !== isReversed) {
        t29 = card && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%",
                transform: isReversed ? "rotate(180deg)" : "none",
                border: `2px solid ${isActive ? "#ffd700" : "#b5944d"}`,
                borderRadius: "8px",
                overflow: "hidden"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: card.image,
                alt: card.name,
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/components/reading/TarotCard.tsx",
                lineNumber: 259,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 252,
            columnNumber: 19
        }, this);
        $[32] = card;
        $[33] = isActive;
        $[34] = isReversed;
        $[35] = t29;
    } else {
        t29 = $[35];
    }
    let t30;
    if ($[36] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-lg overflow-hidden",
            style: t28,
            children: t29
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[36] = t29;
        $[37] = t30;
    } else {
        t30 = $[37];
    }
    let t31;
    let t32;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
        };
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/cards/CardBack.png",
            alt: "Card back",
            fill: true,
            className: "object-cover opacity-80"
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[38] = t31;
        $[39] = t32;
    } else {
        t31 = $[38];
        t32 = $[39];
    }
    let t33;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                background: "linear-gradient(135deg, rgba(184,134,11,0.08) 0%, transparent 60%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[40] = t33;
    } else {
        t33 = $[40];
    }
    let t34;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-lg overflow-hidden card-back-style",
            style: t31,
            children: [
                t32,
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    style: {
                        opacity: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "28px",
                            color: "#b5944d"
                        },
                        children: "⬠"
                    }, void 0, false, {
                        fileName: "[project]/components/reading/TarotCard.tsx",
                        lineNumber: 302,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reading/TarotCard.tsx",
                    lineNumber: 300,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[41] = t34;
    } else {
        t34 = $[41];
    }
    let t35;
    if ($[42] !== t26 || $[43] !== t30) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative w-full h-full",
            style: t24,
            animate: t26,
            transition: t27,
            children: [
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[42] = t26;
        $[43] = t30;
        $[44] = t35;
    } else {
        t35 = $[44];
    }
    let t36;
    if ($[45] !== index || $[46] !== isActive || $[47] !== isCrossing || $[48] !== isNext || $[49] !== labelSide || $[50] !== positionName) {
        t36 = positionName && !isCrossing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: labelSide === "right" ? "absolute top-1/2 -translate-y-1/2 left-full ml-2 whitespace-nowrap" : "absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center",
            style: {
                fontSize: "11px",
                color: isActive ? "#d6700a" : isNext ? "#d6700a" : "rgba(181,148,77,0.6)",
                fontFamily: "var(--font-cinzel)",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: index * 0.12 + 0.3
            },
            children: positionName
        }, void 0, false, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 321,
            columnNumber: 42
        }, this);
        $[45] = index;
        $[46] = isActive;
        $[47] = isCrossing;
        $[48] = isNext;
        $[49] = labelSide;
        $[50] = positionName;
        $[51] = t36;
    } else {
        t36 = $[51];
    }
    let t37;
    if ($[52] !== handleClick || $[53] !== t14 || $[54] !== t17 || $[55] !== t19 || $[56] !== t20 || $[57] !== t21 || $[58] !== t22 || $[59] !== t23 || $[60] !== t35 || $[61] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative",
            style: t14,
            initial: t15,
            animate: t17,
            transition: t19,
            whileHover: t20,
            onClick: handleClick,
            children: [
                t21,
                t22,
                t23,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/components/reading/TarotCard.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[52] = handleClick;
        $[53] = t14;
        $[54] = t17;
        $[55] = t19;
        $[56] = t20;
        $[57] = t21;
        $[58] = t22;
        $[59] = t23;
        $[60] = t35;
        $[61] = t36;
        $[62] = t37;
    } else {
        t37 = $[62];
    }
    return t37;
}
_c = TarotCard;
var _c;
__turbopack_context__.k.register(_c, "TarotCard");
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
"[project]/components/reading/InterpretationPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InterpretationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
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
;
const ELEMENT_ICONS = {
    Fire: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    Water: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Air: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 25,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0)),
    Earth: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"], {
        className: "w-4 h-4"
    }, void 0, false, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0))
};
function toRoman(n) {
    const map = [
        [
            1000,
            "M"
        ],
        [
            900,
            "CM"
        ],
        [
            500,
            "D"
        ],
        [
            400,
            "CD"
        ],
        [
            100,
            "C"
        ],
        [
            90,
            "XC"
        ],
        [
            50,
            "L"
        ],
        [
            40,
            "XL"
        ],
        [
            10,
            "X"
        ],
        [
            9,
            "IX"
        ],
        [
            5,
            "V"
        ],
        [
            4,
            "IV"
        ],
        [
            1,
            "I"
        ]
    ];
    let result = "";
    for (const [val, sym] of map){
        while(n >= val){
            result += sym;
            n -= val;
        }
    }
    return result;
}
function InterpretationPanel(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "f5cbbd1a85feeb85b628578d36b776ad71bbe1dc83e0003a2b67cfe906b39a8c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f5cbbd1a85feeb85b628578d36b776ad71bbe1dc83e0003a2b67cfe906b39a8c";
    }
    const { card, isReversed, position, positionIndex, totalPositions, onNext, isComplete, spreadType } = t0;
    const spreadConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spreads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpread"])(spreadType);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    const cardName = lang === "pt" ? card?.namePt ?? card?.name : card?.name;
    const cardMeaning = lang === "pt" ? card?.uprightMeaningPt ?? card?.uprightMeaning : card?.uprightMeaning;
    const cardKeywords = lang === "pt" ? card?.keywordsPt ?? card?.keywords : card?.keywords;
    const posLabel = lang === "pt" ? position?.labelPt ?? position?.label : position?.label;
    const posDesc = lang === "pt" ? position?.descriptionPt ?? position?.description : position?.description;
    const spreadLabel = lang === "pt" ? spreadConfig?.labelPt ?? spreadConfig?.label : spreadConfig?.label;
    const spreadName = lang === "pt" ? spreadConfig?.namePt ?? spreadConfig?.name : spreadConfig?.name;
    const spreadDesc = lang === "pt" ? spreadConfig?.descriptionPt ?? spreadConfig?.description : spreadConfig?.description;
    const t1 = "w-[500px] flex-shrink-0 h-full flex flex-col relative z-40 border-l-4 overflow-hidden";
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "#e8dfcc",
            borderLeftColor: "#b5944d"
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none opacity-20",
            style: {
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c4a882' fill-opacity='0.4'%3E%3Cpath d='M5 0h1L0 6V5z'/%3E%3Cpath d='M6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
            }
        }, void 0, false, {
            fileName: "[project]/components/reading/InterpretationPanel.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
    const t4 = "wait";
    const t5 = !card || !position ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex-1 flex flex-col p-6 overflow-y-auto",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 border-b-2 pb-4",
                style: {
                    borderBottomColor: "rgba(181,148,77,0.4)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-cinzel text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-1",
                        children: spreadLabel
                    }, void 0, false, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-playfair text-2xl font-bold italic text-slate-700 mb-2",
                        children: spreadName
                    }, void 0, false, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 111
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-fell italic text-sm text-slate-600 leading-relaxed",
                        children: spreadDesc
                    }, void 0, false, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 204
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 98,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-cinzel text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-3",
                children: t.reading.howToRead
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 100,
                columnNumber: 297
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: spreadConfig?.positions.map({
                    "InterpretationPanel[(anonymous)()]": (pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-cinzel text-[11px] font-bold flex-shrink-0 mt-0.5",
                                    style: {
                                        color: "#b5944d",
                                        minWidth: "18px"
                                    },
                                    children: toRoman(i + 1)
                                }, void 0, false, {
                                    fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                    lineNumber: 101,
                                    columnNumber: 112
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-cinzel text-xs font-bold uppercase tracking-wider text-slate-700",
                                            children: lang === "pt" ? pos.labelPt ?? pos.label : pos.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                            lineNumber: 104,
                                            columnNumber: 42
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-500 font-fell text-sm ml-2 italic",
                                            children: [
                                                "— ",
                                                lang === "pt" ? pos.descriptionPt ?? pos.description : pos.description
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                            lineNumber: 104,
                                            columnNumber: 191
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                    lineNumber: 104,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, pos.id, true, {
                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                            lineNumber: 101,
                            columnNumber: 59
                        }, this)
                }["InterpretationPanel[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 100,
                columnNumber: 411
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 font-cinzel text-[11px] uppercase tracking-widest text-primary/70 text-center",
                children: t.reading.clickToBegin
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 105,
                columnNumber: 54
            }, this)
        ]
    }, "empty", true, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 92,
        columnNumber: 35
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex-1 flex flex-col overflow-y-auto relative z-10",
        initial: {
            x: 60,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: -60,
            opacity: 0
        },
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center pt-5 pb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-5 py-1.5 rounded-full",
                    style: {
                        background: "#1a1512",
                        border: "1px solid #b5944d"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-cinzel text-[13px] uppercase tracking-widest text-slate-400",
                            children: toRoman(positionIndex + 1)
                        }, void 0, false, {
                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "#b5944d"
                            },
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 128
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-cinzel text-[13px] uppercase tracking-widest text-primary font-bold",
                            children: posLabel
                        }, void 0, false, {
                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                            lineNumber: 123,
                            columnNumber: 20
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "#b5944d"
                            },
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                            lineNumber: 123,
                            columnNumber: 128
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-cinzel text-[13px] text-slate-400",
                            children: [
                                positionIndex + 1,
                                "/",
                                totalPositions
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reading/InterpretationPanel.tsx",
                            lineNumber: 125,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/reading/InterpretationPanel.tsx",
                    lineNumber: 118,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 118,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-slate-600 font-cinzel uppercase text-[13px] tracking-[0.2em] px-6 pb-3",
                children: posDesc
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 125,
                columnNumber: 132
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center px-6 mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg overflow-hidden shadow-xl",
                    style: {
                        width: "100px",
                        height: "164px",
                        border: "2px solid #b5944d",
                        transform: isReversed ? "rotate(180deg)" : "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: card.image,
                        alt: cardName ?? card.name,
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 130,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/reading/InterpretationPanel.tsx",
                    lineNumber: 125,
                    columnNumber: 295
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 125,
                columnNumber: 248
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-6 flex flex-col gap-3 text-slate-800 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold italic border-b-2 pb-1 font-playfair flex-1",
                                style: {
                                    borderBottomColor: "#d6700a"
                                },
                                children: cardName
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 130,
                                columnNumber: 233
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-3 text-[13px] font-bold px-3 py-1 rounded-full font-cinzel uppercase tracking-wider",
                                style: {
                                    background: "rgba(25,100,25,0.12)",
                                    color: "#1a641a",
                                    border: "1px solid #1a641a"
                                },
                                children: t.card.upright
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 130,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        className: "italic text-base text-slate-700 pl-4 py-1.5 font-fell",
                        style: {
                            borderLeft: "4px solid rgba(214,112,10,0.5)"
                        },
                        children: [
                            '"',
                            card.waiteQuote,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 136,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 font-sans leading-relaxed text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: cardMeaning
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 138,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600",
                                children: t.card.positionSentence(posLabel ?? position.label, posDesc ?? position.description)
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 138,
                                columnNumber: 123
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 138,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: (cardKeywords ?? card.keywords).map(_InterpretationPanelAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 138,
                        columnNumber: 249
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            borderTop: "1px solid rgba(0,0,0,0.1)",
                            paddingTop: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[13px] uppercase font-bold tracking-widest text-slate-500 mb-2 font-cinzel",
                                children: t.card.correspondences
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 141,
                                columnNumber: 10
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary",
                                                children: ELEMENT_ICONS[card.element] ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 279
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 216
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                children: [
                                                    t.card.element,
                                                    ": ",
                                                    card.element
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 316
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 175
                                    }, this),
                                    card.planet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary text-sm",
                                                children: "☿"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 454
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                children: card.planet
                                            }, void 0, false, {
                                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 501
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 413
                                    }, this),
                                    card.romanNumeral && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary text-sm",
                                                children: "📖"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 627
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                children: [
                                                    card.arcana === "major" ? t.card.majorArcana : card.arcana.charAt(0).toUpperCase() + card.arcana.slice(1),
                                                    " ",
                                                    card.romanNumeral
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 675
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 586
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 141,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reading/InterpretationPanel.tsx",
                        lineNumber: 138,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 130,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "p-4 mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: onNext,
                    className: "w-full py-3.5 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 font-cinzel",
                    style: {
                        background: "#1a1512",
                        color: "#e8dfcc"
                    },
                    whileHover: {
                        background: "#2a2018"
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    children: isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 26
                            }, this),
                            " ",
                            t.reading.backHome,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            t.reading.revealNext,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/reading/InterpretationPanel.tsx",
                    lineNumber: 141,
                    columnNumber: 906
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reading/InterpretationPanel.tsx",
                lineNumber: 141,
                columnNumber: 874
            }, this)
        ]
    }, card.id, true, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 105,
        columnNumber: 196
    }, this);
    let t6;
    if ($[3] !== T0 || $[4] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            mode: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/reading/InterpretationPanel.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[3] = T0;
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== t2 || $[7] !== t3 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t1,
            style: t2,
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/reading/InterpretationPanel.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    return t7;
}
_s(InterpretationPanel, "kHz8+ENIPYP2+Ndrm1QB+9q289Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = InterpretationPanel;
function _InterpretationPanelAnonymous(kw) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[13px] uppercase tracking-widest px-2 py-0.5 rounded font-cinzel",
        style: {
            background: "rgba(181,148,77,0.15)",
            border: "1px solid rgba(181,148,77,0.4)",
            color: "#7a5a2a"
        },
        children: kw
    }, kw, false, {
        fileName: "[project]/components/reading/InterpretationPanel.tsx",
        lineNumber: 171,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "InterpretationPanel");
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
"[project]/app/reading/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reading/TarotCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$InterpretationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reading/InterpretationPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useSessionStore.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
function ReadingPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(131);
    if ($[0] !== "64bb4a9e614957a324cc7d9e4b39b4aff9bcd98d6c553ae8187582b841918aac") {
        for(let $i = 0; $i < 131; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64bb4a9e614957a324cc7d9e4b39b4aff9bcd98d6c553ae8187582b841918aac";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"])(_ReadingPageUseSessionStore);
    const revealNextCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"])(_ReadingPageUseSessionStore2);
    const [activePosition, setActivePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sessionTime, setSessionTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    let t0;
    let t1;
    if ($[1] !== router || $[2] !== session) {
        t0 = ({
            "ReadingPage[useEffect()]": ()=>{
                if (!session) {
                    router.push("/");
                }
            }
        })["ReadingPage[useEffect()]"];
        t1 = [
            session,
            router
        ];
        $[1] = router;
        $[2] = session;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ReadingPage[useEffect()]": ()=>{
                const interval = setInterval({
                    "ReadingPage[useEffect() > setInterval()]": ()=>setSessionTime(_ReadingPageUseEffectSetIntervalSetSessionTime)
                }["ReadingPage[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(interval);
            }
        })["ReadingPage[useEffect()]"];
        t3 = [];
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const formatTime = _ReadingPageFormatTime;
    let t4;
    if ($[7] !== revealNextCard || $[8] !== session) {
        t4 = ({
            "ReadingPage[handleCardClick]": (index)=>{
                if (!session) {
                    return;
                }
                if (index < session.revealedCount) {
                    setActivePosition(index);
                } else {
                    if (index === session.revealedCount && !session.isComplete) {
                        revealNextCard();
                        setActivePosition(index);
                    }
                }
            }
        })["ReadingPage[handleCardClick]"];
        $[7] = revealNextCard;
        $[8] = session;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleCardClick = t4;
    let t5;
    if ($[10] !== revealNextCard || $[11] !== router || $[12] !== session) {
        t5 = ({
            "ReadingPage[handleRevealNext]": ()=>{
                if (!session) {
                    return;
                }
                if (session.isComplete) {
                    router.push("/");
                    return;
                }
                const next = session.revealedCount;
                revealNextCard();
                setActivePosition(next);
            }
        })["ReadingPage[handleRevealNext]"];
        $[10] = revealNextCard;
        $[11] = router;
        $[12] = session;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const handleRevealNext = t5;
    if (!session) {
        let t6;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = {
                background: "#1a1f18"
            };
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        let t7;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center",
                style: t6,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-primary text-4xl",
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    children: "✦"
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 135,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reading/page.tsx",
                lineNumber: 135,
                columnNumber: 12
            }, this);
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        return t7;
    }
    let t6;
    if ($[16] !== session.spreadType) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$spreads$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpread"])(session.spreadType);
        $[16] = session.spreadType;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const spreadConfig = t6;
    const spreadName = lang === "pt" ? spreadConfig?.namePt ?? spreadConfig?.name ?? session.spreadType : spreadConfig?.name ?? session.spreadType;
    const cardCount = session.drawnCards.length;
    let t7;
    if ($[18] !== lang) {
        t7 = ({
            "ReadingPage[posLabel]": (pos)=>lang === "pt" ? pos.labelPt ?? pos.label : pos.label
        })["ReadingPage[posLabel]"];
        $[18] = lang;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const posLabel = t7;
    const { revealedCount, isComplete, drawnCards } = session;
    const activeCard = activePosition !== null ? drawnCards[activePosition] : null;
    const activePos = activeCard?.position ?? null;
    const isCeltic = session.spreadType === "celtic-cross";
    let t8;
    if ($[20] !== isCeltic || $[21] !== session.spreadType) {
        t8 = ({
            "ReadingPage[getGridLayout]": ()=>{
                if (isCeltic) {
                    return "grid grid-cols-5 grid-rows-4 gap-x-3 gap-y-[15px] w-full max-w-3xl";
                }
                if (session.spreadType === "pentagram") {
                    return "grid grid-cols-3 grid-rows-3 gap-8 w-full max-w-xl";
                }
                return "flex items-center justify-center gap-10 w-full max-w-2xl";
            }
        })["ReadingPage[getGridLayout]"];
        $[20] = isCeltic;
        $[21] = session.spreadType;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    const getGridLayout = t8;
    let t9;
    if ($[23] !== activePosition || $[24] !== handleCardClick || $[25] !== isComplete || $[26] !== revealedCount) {
        t9 = ({
            "ReadingPage[cardProps]": (index_0)=>({
                    isRevealed: index_0 < revealedCount,
                    isNext: index_0 === revealedCount && !isComplete,
                    isDimmed: index_0 > revealedCount,
                    isActive: activePosition === index_0,
                    onClick: ()=>handleCardClick(index_0)
                })
        })["ReadingPage[cardProps]"];
        $[23] = activePosition;
        $[24] = handleCardClick;
        $[25] = isComplete;
        $[26] = revealedCount;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    const cardProps = t9;
    let t10;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            background: "#1a1f18"
        };
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            background: "#2a1b11"
        };
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-3",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-cinzel text-xl font-black uppercase tracking-widest text-white",
                    style: {
                        textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a, 0 0 30px #d6700a"
                    },
                    children: "Rasputin's Eye"
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 252,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t.nav.spreads) {
        t14 = {
            href: "/reading",
            label: t.nav.spreads
        };
        $[32] = t.nav.spreads;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t.nav.library) {
        t15 = {
            href: "/library",
            label: t.nav.library
        };
        $[34] = t.nav.library;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t.nav.premium) {
        t16 = {
            href: "/premium",
            label: t.nav.premium
        };
        $[36] = t.nav.premium;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t14 || $[39] !== t15 || $[40] !== t16) {
        t17 = [
            t14,
            t15,
            t16
        ].map(_ReadingPageAnonymous);
        $[38] = t14;
        $[39] = t15;
        $[40] = t16;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== setLang) {
        t18 = ({
            "ReadingPage[<button>.onClick]": ()=>setLang("en")
        })["ReadingPage[<button>.onClick]"];
        $[42] = setLang;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    const t19 = `font-cinzel text-xs font-bold uppercase tracking-wider transition-colors ${lang === "en" ? "text-primary" : "text-slate-500 hover:text-slate-300"}`;
    let t20;
    if ($[44] !== t18 || $[45] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t18,
            className: t19,
            children: "EN"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[44] = t18;
        $[45] = t19;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 text-xs",
            children: "|"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== setLang) {
        t22 = ({
            "ReadingPage[<button>.onClick]": ()=>setLang("pt")
        })["ReadingPage[<button>.onClick]"];
        $[48] = setLang;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    const t23 = `font-cinzel text-xs font-bold uppercase tracking-wider transition-colors ${lang === "pt" ? "text-primary" : "text-slate-500 hover:text-slate-300"}`;
    let t24;
    if ($[50] !== t22 || $[51] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t22,
            className: t23,
            children: "PT"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[50] = t22;
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== t20 || $[54] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 ml-2 border-l border-white/10 pl-4",
            children: [
                t20,
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t24;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t17 || $[57] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden md:flex items-center gap-8",
            children: [
                t17,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[56] = t17;
        $[57] = t25;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    const t27 = formatTime(sessionTime);
    let t28;
    if ($[59] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-300 font-mono text-sm tabular-nums font-cinzel",
            children: t27
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[59] = t27;
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    let t29;
    let t30;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            background: "#d6700a",
            color: "#fff"
        };
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[61] = t29;
        $[62] = t30;
    } else {
        t29 = $[61];
        t30 = $[62];
    }
    let t31;
    if ($[63] !== t.reading.endRitual) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "flex items-center gap-2 px-4 py-2 rounded font-bold text-xs tracking-widest uppercase transition-all font-cinzel hover:opacity-80",
            style: t29,
            children: [
                t30,
                t.reading.endRitual
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        $[63] = t.reading.endRitual;
        $[64] = t31;
    } else {
        t31 = $[64];
    }
    let t32;
    if ($[65] !== t28 || $[66] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-5",
            children: [
                t28,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[65] = t28;
        $[66] = t31;
        $[67] = t32;
    } else {
        t32 = $[67];
    }
    let t33;
    if ($[68] !== t26 || $[69] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex items-center justify-between px-8 py-4 border-b-8 border-[#1a110a] z-50",
            style: t11,
            children: [
                t13,
                t26,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[68] = t26;
        $[69] = t32;
        $[70] = t33;
    } else {
        t33 = $[70];
    }
    let t34;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "smoke-overlay absolute inset-0 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    let t36;
    let t37;
    let t38;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brass-corner brass-tl"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brass-corner brass-tr"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brass-corner brass-bl"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brass-corner brass-br"
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[72] = t35;
        $[73] = t36;
        $[74] = t37;
        $[75] = t38;
    } else {
        t35 = $[72];
        t36 = $[73];
        t37 = $[74];
        t38 = $[75];
    }
    const t39 = getGridLayout();
    let t40;
    if ($[76] !== isCeltic) {
        t40 = isCeltic ? {
            minHeight: "680px"
        } : {};
        $[76] = isCeltic;
        $[77] = t40;
    } else {
        t40 = $[77];
    }
    let t41;
    if ($[78] !== cardProps || $[79] !== drawnCards || $[80] !== isCeltic || $[81] !== posLabel) {
        t41 = isCeltic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    style: {
                        gridColumn: "2 / 4",
                        gridRow: "1 / 2"
                    },
                    children: drawnCards[4] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[4].card,
                        positionName: posLabel(drawnCards[4].position),
                        size: "sm",
                        index: 4,
                        ...cardProps(4)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 458,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 455,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    style: {
                        gridColumn: "1 / 2",
                        gridRow: "2 / 4"
                    },
                    children: drawnCards[3] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[3].card,
                        positionName: posLabel(drawnCards[3].position),
                        size: "sm",
                        index: 3,
                        ...cardProps(3)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 461,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 458,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    style: {
                        gridColumn: "2 / 3",
                        gridRow: "2 / 4"
                    },
                    children: drawnCards[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[0].card,
                        positionName: posLabel(drawnCards[0].position),
                        size: "sm",
                        index: 0,
                        ...cardProps(0)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 464,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 461,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    style: {
                        gridColumn: "3 / 4",
                        gridRow: "2 / 4"
                    },
                    children: drawnCards[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[1].card,
                        positionName: posLabel(drawnCards[1].position),
                        size: "sm",
                        index: 1,
                        ...cardProps(1)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 467,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 464,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    style: {
                        gridColumn: "4 / 5",
                        gridRow: "2 / 4"
                    },
                    children: drawnCards[5] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[5].card,
                        positionName: posLabel(drawnCards[5].position),
                        size: "sm",
                        index: 5,
                        ...cardProps(5)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 470,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 467,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    style: {
                        gridColumn: "2 / 4",
                        gridRow: "4 / 5"
                    },
                    children: drawnCards[2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[2].card,
                        positionName: posLabel(drawnCards[2].position),
                        size: "sm",
                        index: 2,
                        ...cardProps(2)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 473,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 470,
                    columnNumber: 160
                }, this),
                [
                    6,
                    7,
                    8,
                    9
                ].map({
                    "ReadingPage[(anonymous)()]": (posIdx, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            style: {
                                gridColumn: "5 / 6",
                                gridRow: `${4 - i} / ${5 - i}`
                            },
                            children: drawnCards[posIdx] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                card: drawnCards[posIdx].card,
                                positionName: posLabel(drawnCards[posIdx].position),
                                labelSide: "right",
                                size: "sm",
                                index: posIdx,
                                ...cardProps(posIdx)
                            }, void 0, false, {
                                fileName: "[project]/app/reading/page.tsx",
                                lineNumber: 477,
                                columnNumber: 35
                            }, this)
                        }, posIdx, false, {
                            fileName: "[project]/app/reading/page.tsx",
                            lineNumber: 474,
                            columnNumber: 54
                        }, this)
                }["ReadingPage[(anonymous)()]"])
            ]
        }, void 0, true);
        $[78] = cardProps;
        $[79] = drawnCards;
        $[80] = isCeltic;
        $[81] = posLabel;
        $[82] = t41;
    } else {
        t41 = $[82];
    }
    let t42;
    if ($[83] !== cardProps || $[84] !== drawnCards || $[85] !== posLabel || $[86] !== session.spreadType) {
        t42 = session.spreadType === "pentagram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-start-2 row-start-1 flex items-center justify-center",
                    children: drawnCards[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[0].card,
                        positionName: posLabel(drawnCards[0].position),
                        size: "md",
                        index: 0,
                        ...cardProps(0)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 489,
                        columnNumber: 143
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 489,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-start-3 row-start-2 flex items-center justify-center",
                    children: drawnCards[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[1].card,
                        positionName: posLabel(drawnCards[1].position),
                        size: "md",
                        index: 1,
                        ...cardProps(1)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 489,
                        columnNumber: 367
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 489,
                    columnNumber: 275
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-start-3 row-start-3 flex items-center justify-center",
                    children: drawnCards[2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[2].card,
                        positionName: posLabel(drawnCards[2].position),
                        size: "md",
                        index: 2,
                        ...cardProps(2)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 489,
                        columnNumber: 591
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 489,
                    columnNumber: 499
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-start-1 row-start-3 flex items-center justify-center",
                    children: drawnCards[3] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[3].card,
                        positionName: posLabel(drawnCards[3].position),
                        size: "md",
                        index: 3,
                        ...cardProps(3)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 489,
                        columnNumber: 815
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 489,
                    columnNumber: 723
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-start-1 row-start-2 flex items-center justify-center",
                    children: drawnCards[4] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        card: drawnCards[4].card,
                        positionName: posLabel(drawnCards[4].position),
                        size: "md",
                        index: 4,
                        ...cardProps(4)
                    }, void 0, false, {
                        fileName: "[project]/app/reading/page.tsx",
                        lineNumber: 489,
                        columnNumber: 1039
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 489,
                    columnNumber: 947
                }, this)
            ]
        }, void 0, true);
        $[83] = cardProps;
        $[84] = drawnCards;
        $[85] = posLabel;
        $[86] = session.spreadType;
        $[87] = t42;
    } else {
        t42 = $[87];
    }
    let t43;
    if ($[88] !== cardProps || $[89] !== drawnCards || $[90] !== posLabel || $[91] !== session.spreadType) {
        t43 = session.spreadType === "three-card" && drawnCards.slice(0, 3).map({
            "ReadingPage[(anonymous)()]": (dc, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$TarotCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    card: dc.card,
                    positionName: posLabel(dc.position),
                    size: "lg",
                    index: i_0,
                    ...cardProps(i_0)
                }, i_0, false, {
                    fileName: "[project]/app/reading/page.tsx",
                    lineNumber: 501,
                    columnNumber: 50
                }, this)
        }["ReadingPage[(anonymous)()]"]);
        $[88] = cardProps;
        $[89] = drawnCards;
        $[90] = posLabel;
        $[91] = session.spreadType;
        $[92] = t43;
    } else {
        t43 = $[92];
    }
    let t44;
    if ($[93] !== t39 || $[94] !== t40 || $[95] !== t41 || $[96] !== t42 || $[97] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t39,
            style: t40,
            children: [
                t41,
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 513,
            columnNumber: 11
        }, this);
        $[93] = t39;
        $[94] = t40;
        $[95] = t41;
        $[96] = t42;
        $[97] = t43;
        $[98] = t44;
    } else {
        t44 = $[98];
    }
    let t45;
    let t46;
    let t47;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            opacity: 0,
            x: -20
        };
        t46 = {
            opacity: 1,
            x: 0
        };
        t47 = {
            delay: 0.5
        };
        $[99] = t45;
        $[100] = t46;
        $[101] = t47;
    } else {
        t45 = $[99];
        t46 = $[100];
        t47 = $[101];
    }
    let t48;
    if ($[102] !== spreadName) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold italic text-slate-100 font-playfair",
            children: [
                "The ",
                spreadName
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[102] = spreadName;
        $[103] = t48;
    } else {
        t48 = $[103];
    }
    let t49;
    if ($[104] !== cardCount || $[105] !== isComplete || $[106] !== revealedCount || $[107] !== t.reading) {
        t49 = isComplete ? t.reading.readingComplete : revealedCount === 0 ? t.reading.cardsClickGlowing(cardCount) : t.reading.revealedOf(revealedCount, cardCount);
        $[104] = cardCount;
        $[105] = isComplete;
        $[106] = revealedCount;
        $[107] = t.reading;
        $[108] = t49;
    } else {
        t49 = $[108];
    }
    let t50;
    if ($[109] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-primary uppercase tracking-[0.2em] font-cinzel",
            children: t49
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[109] = t49;
        $[110] = t50;
    } else {
        t50 = $[110];
    }
    let t51;
    if ($[111] !== t48 || $[112] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute bottom-6 left-8",
            initial: t45,
            animate: t46,
            transition: t47,
            children: [
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 575,
            columnNumber: 11
        }, this);
        $[111] = t48;
        $[112] = t50;
        $[113] = t51;
    } else {
        t51 = $[113];
    }
    let t52;
    if ($[114] !== t44 || $[115] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-[2.5] px-5 py-5 flex flex-col items-center justify-center",
            children: [
                t35,
                t36,
                t37,
                t38,
                t44,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[114] = t44;
        $[115] = t51;
        $[116] = t52;
    } else {
        t52 = $[116];
    }
    const t53 = activeCard?.card ?? null;
    const t54 = activePosition ?? 0;
    let t55;
    if ($[117] !== activePos || $[118] !== cardCount || $[119] !== handleRevealNext || $[120] !== isComplete || $[121] !== session.spreadType || $[122] !== t53 || $[123] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reading$2f$InterpretationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            card: t53,
            isReversed: false,
            position: activePos,
            positionIndex: t54,
            totalPositions: cardCount,
            onNext: handleRevealNext,
            isComplete: isComplete,
            spreadType: session.spreadType
        }, void 0, false, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[117] = activePos;
        $[118] = cardCount;
        $[119] = handleRevealNext;
        $[120] = isComplete;
        $[121] = session.spreadType;
        $[122] = t53;
        $[123] = t54;
        $[124] = t55;
    } else {
        t55 = $[124];
    }
    let t56;
    if ($[125] !== t52 || $[126] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-1 overflow-hidden relative velvet-green",
            children: [
                t34,
                t52,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[125] = t52;
        $[126] = t55;
        $[127] = t56;
    } else {
        t56 = $[127];
    }
    let t57;
    if ($[128] !== t33 || $[129] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-screen w-full flex-col overflow-hidden",
            style: t10,
            children: [
                t33,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/app/reading/page.tsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[128] = t33;
        $[129] = t56;
        $[130] = t57;
    } else {
        t57 = $[130];
    }
    return t57;
}
_s(ReadingPage, "B7/+S+201J2SgnJRSMTP2+bCoVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useSessionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageStore"]
    ];
});
_c = ReadingPage;
function _ReadingPageAnonymous(l) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: l.href,
        className: "font-cinzel text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-primary transition-colors",
        children: l.label
    }, l.href, false, {
        fileName: "[project]/app/reading/page.tsx",
        lineNumber: 628,
        columnNumber: 10
    }, this);
}
function _ReadingPageFormatTime(s_1) {
    const m = Math.floor(s_1 / 60);
    const sec = s_1 % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function _ReadingPageUseEffectSetIntervalSetSessionTime(t_0) {
    return t_0 + 1;
}
function _ReadingPageUseSessionStore2(s_0) {
    return s_0.revealNextCard;
}
function _ReadingPageUseSessionStore(s) {
    return s.session;
}
var _c;
__turbopack_context__.k.register(_c, "ReadingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e3eeac9d._.js.map