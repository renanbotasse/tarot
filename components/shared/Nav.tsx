"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useT } from "@/hooks/useT";

export default function Nav() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguageStore();
  const t = useT();

  const links = [
    { href: "/reading", label: t.nav.spreads },
    { href: "/library", label: t.nav.library },
    { href: "/premium", label: t.nav.premium },
  ];

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

        {/* Language toggle */}
        <div className="flex items-center gap-1 ml-2 border-l border-white/10 pl-4">
          <button
            onClick={() => setLang("en")}
            className={clsx(
              "font-cinzel text-xs font-bold uppercase tracking-wider transition-colors",
              lang === "en" ? "text-primary" : "text-slate-500 hover:text-slate-300"
            )}
          >
            EN
          </button>
          <span className="text-slate-600 text-xs">|</span>
          <button
            onClick={() => setLang("pt")}
            className={clsx(
              "font-cinzel text-xs font-bold uppercase tracking-wider transition-colors",
              lang === "pt" ? "text-primary" : "text-slate-500 hover:text-slate-300"
            )}
          >
            PT
          </button>
        </div>
      </nav>
    </header>
  );
}
