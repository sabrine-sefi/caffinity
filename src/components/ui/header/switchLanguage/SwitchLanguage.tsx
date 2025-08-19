"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { t } from "../../../../i18n/i18n";
import { toUppFirst } from "../../../../../Utils";

import LanguageList from "./LanguageList";

export default function SwitchLanguage() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [ignoreNextClose, setIgnoreNextClose] = useState(false);

  const langs = [
    { code: "fr", label: "Français", flag: "/fr.png" },
    { code: "en", label: "English", flag: "/en.png" },
    { code: "es", label: "Español", flag: "/es.png" },
  ] as const;

  const current = langs.find((l) => l.code === locale) ?? langs[0];
  const others = langs.filter((l) => l.code !== current.code);

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t(locale, "nav.language")}: ${current.label}`}
        className="focus-ring flex items-center gap-2 px-4 py-2 text-sm rounded-lg cursor-pointer font-sans text-[var(--text)]"
      >
        <span aria-hidden="true">
          <Image
            src={current.flag}
            alt=""
            width={512}
            height={512}
            className="h-4 w-4 sm:h-5 sm:w-5"
          />
        </span>
        <span className="hover-primary">{toUppFirst(current.code)}</span>
      </button>

      {open && (
        <LanguageList
          langues={others}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
