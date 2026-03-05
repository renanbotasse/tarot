"use client";

import { motion } from "framer-motion";

export default function FortuneTellerFigure() {
  return (
    <div className="relative flex flex-col items-center justify-end h-full pb-8">
      {/* Glow aura behind figure */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      {/* SVG Mystic Figure */}
      <motion.svg
        viewBox="0 0 200 340"
        className="w-56 h-auto relative z-10 drop-shadow-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer glow ring */}
        <ellipse cx="100" cy="330" rx="55" ry="8" fill="rgba(214,112,10,0.3)" />

        {/* Robe / Body */}
        <path
          d="M60 160 Q50 220 40 280 Q45 295 100 300 Q155 295 160 280 Q150 220 140 160 Z"
          fill="#1a0a05"
          stroke="#b8860b"
          strokeWidth="1.5"
        />
        {/* Robe details */}
        <path d="M100 180 Q90 230 85 290" stroke="#3d2b1f" strokeWidth="1" fill="none" />
        <path d="M100 180 Q110 230 115 290" stroke="#3d2b1f" strokeWidth="1" fill="none" />
        {/* Gold trim on robe */}
        <path d="M60 162 Q100 150 140 162" stroke="#b8860b" strokeWidth="2" fill="none" />
        <path d="M50 220 Q100 210 150 220" stroke="#b8860b" strokeWidth="1" fill="none" />
        <path d="M42 270 Q100 262 158 270" stroke="#b8860b" strokeWidth="1" fill="none" />

        {/* Arms */}
        <path
          d="M65 170 Q30 185 25 210 Q30 215 38 208 Q42 195 68 182"
          fill="#1a0a05"
          stroke="#b8860b"
          strokeWidth="1"
        />
        <path
          d="M135 170 Q170 185 175 210 Q170 215 162 208 Q158 195 132 182"
          fill="#1a0a05"
          stroke="#b8860b"
          strokeWidth="1"
        />
        {/* Hands */}
        <ellipse cx="27" cy="213" rx="7" ry="5" fill="#5c3520" />
        <ellipse cx="173" cy="213" rx="7" ry="5" fill="#5c3520" />

        {/* Neck */}
        <rect x="88" y="130" width="24" height="32" rx="8" fill="#5c3520" />

        {/* Head */}
        <ellipse cx="100" cy="118" rx="32" ry="35" fill="#5c3520" />
        {/* Face details */}
        <ellipse cx="100" cy="125" rx="24" ry="26" fill="#7a4a30" />

        {/* Eyes — glowing amber */}
        <motion.ellipse
          cx="88" cy="118" rx="7" ry="5"
          fill="#d6700a"
          animate={{ opacity: [1, 0.6, 1], rx: [7, 6, 7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="112" cy="118" rx="7" ry="5"
          fill="#d6700a"
          animate={{ opacity: [1, 0.6, 1], rx: [7, 6, 7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        {/* Eye glow */}
        <ellipse cx="88" cy="118" rx="9" ry="7" fill="rgba(214,112,10,0.3)" />
        <ellipse cx="112" cy="118" rx="9" ry="7" fill="rgba(214,112,10,0.3)" />
        {/* Pupils */}
        <ellipse cx="88" cy="118" rx="3" ry="3" fill="#1a0000" />
        <ellipse cx="112" cy="118" rx="3" ry="3" fill="#1a0000" />

        {/* Nose */}
        <path d="M97 124 Q100 132 103 124" stroke="#5c3520" strokeWidth="1" fill="none" />

        {/* Mustache */}
        <path d="M85 134 Q92 138 100 135 Q108 138 115 134" stroke="#1a0000" strokeWidth="1.5" fill="none" />

        {/* Turban */}
        <path
          d="M68 105 Q75 70 100 65 Q125 70 132 105 Z"
          fill="#2d0a0a"
          stroke="#b8860b"
          strokeWidth="1.5"
        />
        {/* Turban swirls */}
        <path d="M72 100 Q100 75 128 100" stroke="#d6700a" strokeWidth="1" fill="none" />
        <path d="M76 90 Q100 70 124 90" stroke="#d6700a" strokeWidth="0.5" fill="none" />
        {/* Turban jewel */}
        <motion.circle
          cx="100" cy="78"
          r="6"
          fill="#d6700a"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <circle cx="100" cy="78" r="3" fill="#ffd700" />
        {/* Turban feather */}
        <path d="M100 72 Q105 55 103 40 Q108 50 112 38 Q108 52 115 60 Q107 58 103 72" fill="#1a0a05" stroke="#b8860b" strokeWidth="0.5" />

        {/* Crystal ball */}
        <motion.circle
          cx="100" cy="240"
          r="28"
          fill="rgba(10,30,50,0.8)"
          stroke="#b8860b"
          strokeWidth="2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Ball inner glow */}
        <motion.circle
          cx="100" cy="240"
          r="22"
          fill="none"
          stroke="rgba(214,112,10,0.4)"
          strokeWidth="1"
          animate={{ r: [22, 25, 22] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="93" cy="233" r="6" fill="rgba(255,255,255,0.05)" />
        <motion.circle
          cx="100" cy="240"
          r="8"
          fill="rgba(214,112,10,0.15)"
          animate={{ r: [8, 12, 8], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        {/* Ball stand */}
        <path d="M80 268 Q100 265 120 268 L115 280 Q100 282 85 280 Z" fill="#3d2b1f" stroke="#b8860b" strokeWidth="1" />
      </motion.svg>

      {/* Floating mystical particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/60 pointer-events-none"
          style={{
            width: `${[3,2,4,2,3,2][i]}px`,
            height: `${[3,2,4,2,3,2][i]}px`,
            left: `${[20,70,45,80,15,55][i]}%`,
            top: `${[30,20,50,40,60,70][i]}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0, 1, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
