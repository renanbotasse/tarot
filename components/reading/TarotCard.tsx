"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TarotCard as TarotCardType } from "@/lib/cards";

interface TarotCardProps {
  card?: TarotCardType;
  isReversed?: boolean;
  isRevealed: boolean;
  isActive?: boolean;
  isNext?: boolean;
  isDimmed?: boolean;
  isCrossing?: boolean;
  positionName?: string;
  labelSide?: "below" | "right";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  index?: number;
}

const sizes = {
  sm: { w: "96px", h: "158px" },
  md: { w: "116px", h: "192px" },
  lg: { w: "136px", h: "224px" },
};

export default function TarotCard({
  card,
  isReversed = false,
  isRevealed,
  isActive = false,
  isNext = false,
  isDimmed = false,
  isCrossing = false,
  positionName,
  labelSide = "below",
  onClick,
  size = "md",
  index = 0,
}: TarotCardProps) {
  const { w, h } = sizes[size];

  const handleClick = () => {
    if (!isDimmed && onClick) onClick();
  };

  return (
    <motion.div
      className="relative"
      style={{
        width: w,
        height: h,
        transform: isCrossing ? "rotate(90deg)" : "none",
        zIndex: isCrossing ? 10 : 1,
        cursor: isDimmed ? "not-allowed" : "pointer",
        // Fix: dimmed cards must not intercept clicks from cards beneath them
        pointerEvents: isDimmed ? "none" : "auto",
      }}
      initial={{ y: -80, opacity: 0, scale: 0.7 }}
      animate={{
        y: 0,
        opacity: isDimmed ? 0.35 : 1,
        scale: 1,
      }}
      transition={{
        delay: index * 0.12,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={!isDimmed && isRevealed ? { y: -4 } : !isDimmed && isNext ? { scale: 1.04 } : {}}
      onClick={handleClick}
    >
      {/* Gold active ring */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ border: "3px solid #ffd700", zIndex: 20 }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(255,215,0,0.4)",
              "0 0 30px rgba(255,215,0,0.8)",
              "0 0 10px rgba(255,215,0,0.4)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {/* Orange pulsing ring — next card to reveal */}
      {isNext && !isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ border: "3px solid #d6700a", zIndex: 20 }}
          animate={{
            boxShadow: [
              "0 0 8px rgba(214,112,10,0.5)",
              "0 0 28px rgba(214,112,10,0.9)",
              "0 0 8px rgba(214,112,10,0.5)",
            ],
          }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}

      {/* Dim overlay for future locked cards */}
      {isDimmed && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ background: "rgba(0,0,0,0.3)", zIndex: 20 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      )}

      {/* 3D flip container */}
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isRevealed ? 0 : 180 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        {/* FACE */}
        <div className="absolute inset-0 rounded-lg overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          {card && (
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: isReversed ? "rotate(180deg)" : "none",
                border: `2px solid ${isActive ? "#ffd700" : "#b5944d"}`,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image src={card.image} alt={card.name} fill className="object-cover" />
            </div>
          )}
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden card-back-style"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image src="/cards/CardBack.png" alt="Card back" fill className="object-cover opacity-80" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(184,134,11,0.08) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0.3 }}>
            <span style={{ fontSize: "28px", color: "#b5944d" }}>⬠</span>
          </div>
        </div>
      </motion.div>

      {/* Position label */}
      {positionName && !isCrossing && (
        <motion.div
          className={
            labelSide === "right"
              ? "absolute top-1/2 -translate-y-1/2 left-full ml-2 whitespace-nowrap"
              : "absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
          }
          style={{
            fontSize: "11px",
            color: isActive ? "#d6700a" : isNext ? "#d6700a" : "rgba(181,148,77,0.6)",
            fontFamily: "var(--font-cinzel)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.12 + 0.3 }}
        >
          {positionName}
        </motion.div>
      )}
    </motion.div>
  );
}
