"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SPREADS, SpreadConfig } from "@/lib/spreads";

const SPREAD_IMAGES: Record<string, string> = {
  "celtic-cross": "/cards/10-WheelOfFortune.png",
  "pentagram": "/cards/14-Temperance.png",
  "three-card": "/cards/21-TheWorld.png",
};

interface SpreadSelectorProps {
  onSelect: (spread: SpreadConfig) => void;
}

export default function SpreadSelector({ onSelect }: SpreadSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h3 className="font-cinzel text-primary uppercase font-black tracking-[0.3em] text-sm text-center">
        Choose Your Spread
      </h3>

      <div className="flex gap-5 w-full justify-center">
        {SPREADS.map((spread, i) => (
          <motion.button
            key={spread.id}
            onClick={() => onSelect(spread)}
            className="group relative flex-1 max-w-xs rounded-xl overflow-hidden cursor-pointer text-left"
            style={{
              height: "190px",
              border: "2px solid #b8860b",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.6), 0 0 12px rgba(184,134,11,0.2)",
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            whileHover={{ y: -4, boxShadow: "0 0 30px rgba(214,112,10,0.5), inset 0 0 20px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Background card image */}
            <div className="absolute inset-0">
              <Image
                src={SPREAD_IMAGES[spread.id]}
                alt={spread.name}
                fill
                className="object-cover object-top opacity-25 group-hover:opacity-45 transition-all duration-500 scale-110 group-hover:scale-100"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)" }}
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end px-5 pb-5 gap-1">
              <span className="text-white font-playfair font-bold text-xl drop-shadow-lg leading-tight">
                {spread.name}
              </span>
              <span className="text-primary text-[11px] uppercase font-bold tracking-widest font-cinzel">
                {spread.label}
              </span>
              <span className="text-slate-400 text-[11px] leading-snug mt-0.5">
                {spread.description}
              </span>
            </div>

            {/* Hover glow border */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ border: "2px solid rgba(214,112,10,0.6)" }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
