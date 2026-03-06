import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "en" | "pt";

interface LangStore {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const useLanguageStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
    }),
    { name: "tarot-lang" }
  )
);
