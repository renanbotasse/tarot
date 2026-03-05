"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const links = [
  { href: "/reading", label: "Tarot Spreads" },
  { href: "/library", label: "Library" },
  { href: "/premium", label: "Premium" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="flex items-center justify-between px-8 py-4 border-b-8 border-[#1a110a]"
      style={{ background: "#2a1b11" }}
    >
      <Link href="/" className="flex items-center gap-3">
        <motion.span
          className="text-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          👁
        </motion.span>
        <h1
          className="font-cinzel text-xl font-black uppercase tracking-widest text-white"
          style={{ textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d6700a, 0 0 30px #d6700a" }}
        >
          Rasputin's Eye
        </h1>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={clsx(
              "font-cinzel text-xs font-bold uppercase tracking-wider transition-colors",
              pathname === l.href ? "text-primary" : "text-slate-300 hover:text-primary"
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
