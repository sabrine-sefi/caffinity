"use client";

import { createContext, useContext, useState, useEffect } from "react";

// langues dispo dans le site
// as const => ça fige le tableau: TypeScript sait que soit  "fr" | "en" | "es"
const locales = ["fr", "en", "es"] as const;
type Locale = (typeof locales)[number];

// valeur par défaut: français
const defaultLocale: Locale = "fr";

// crée le contexte
const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
} | null>(null);

// hook pour éviter de répéter useContext(LocaleContext) partout!!
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context)
    throw new Error("useLocale doit être utilisé dans un LocaleProvider");
  return context;
}

// LocaleProvider => entourer toute l’app + donne acces à ln actuelle + function pour changer
export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // je stocke la langue actuelle
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // au premier render, je check si j’ai une langue sauvegardée dans localStorage
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved && locales.includes(saved as Locale)) {
      setLocale(saved as Locale);
    }
  }, []);

  // quand je change langue => update state + sauvegarde dans localStorage
  const changeLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("locale", l);
  };

  return (
    // fournis à toute l'app la langue actuelle + function pour la changer
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
