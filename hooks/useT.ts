import { useLanguageStore } from "@/store/useLanguageStore";
import { translations } from "@/lib/i18n";

export function useT() {
  const lang = useLanguageStore((s) => s.lang);
  return translations[lang];
}
