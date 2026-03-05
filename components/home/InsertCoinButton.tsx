"use client";

import { motion } from "framer-motion";
import { Coins } from "lucide-react";

interface InsertCoinButtonProps {
  onClick: () => void;
}

export default function InsertCoinButton({ onClick }: InsertCoinButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center w-24 h-24 rounded-full cursor-pointer"
      style={{
        background: "rgba(20,10,5,0.75)",
        border: "3px solid rgba(184,134,11,0.4)",
      }}
      whileHover={{ scale: 1.06, borderColor: "rgba(184,134,11,0.8)" }}
      whileTap={{ scale: 0.93 }}
      animate={{
        boxShadow: [
          "0 0 12px rgba(214,112,10,0.15)",
          "0 0 28px rgba(214,112,10,0.35)",
          "0 0 12px rgba(214,112,10,0.15)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* Subtle pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(214,112,10,0.08)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Coin slot line at top */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: "22px",
          height: "3px",
          background: "#1a110a",
          borderBottom: "1px solid rgba(184,134,11,0.5)",
        }}
      />

      {/* Icon + text */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <motion.div
          animate={{ rotateZ: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
        >
          <Coins className="text-primary/70 w-6 h-6" />
        </motion.div>
        <span className="font-cinzel font-black text-white/80 uppercase text-[11px] tracking-widest leading-none text-center">
          Insert<br />Coin
        </span>
      </div>
    </motion.button>
  );
}
