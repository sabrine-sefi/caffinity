"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { t } from "../../../../i18n/i18n";
import { tokens } from "../../../../styles/tokens";
import LanguageList from "./LanguageList";

export default function SwitchLanguage() {
  const { locale } = useLocale();

  const [open, setOpen] = useState(false);

  // ref = pointe sur une div
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Si je clique en dehors de la div avec ref (rootRef) => close
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleKey(e: KeyboardEvent) {
      // Si je clique sur Esc => close
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const langs = [
    { code: "fr", label: "Français", flag: "/fr.png" },
    { code: "en", label: "English", flag: "/en.png" },
    { code: "es", label: "Español", flag: "/es.png" },
  ] as const;

  // on cherche dans la liste une langue dont le code === locale
  // langs[0] => si aucune langue choisie donc 1ere langue de la liste
  const current = langs.find((l) => l.code === locale) ?? langs[0];

  // others = toutes les autres langues à afficher dans la liste déroulante
  // exp: si current = "fr", others = [en, es]
  const others = langs.filter((l) => l.code !== current.code);

  // forcer font : to fix pour utiliser front tailwind!
  const fontStyle = {
    fontFamily: tokens.font.content,
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((ev) => !ev)}
        aria-haspopup="listbox" // a11y => ce bouton ouvre une liste
        aria-expanded={open} // a11y => dit si la liste est ouverte ou fermée
        aria-label={`${t(locale, "nav.language")}: ${current.label}`}
        className="bg-surface flex items-center gap-2 py-1.5 px-2.5 text-sm"
        style={fontStyle}
      >
        <span aria-hidden="true">
          <Image
            src={current.flag}
            alt=""
            width={512}
            height={512}
            className="h-6 w-6"
          />
        </span>
        <span>{current.label}</span>
      </button>
      {open && (
        <LanguageList langues={others} closeList={() => setOpen(false)} />
      )}
    </div>
  );
}
