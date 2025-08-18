"use client";

import Image from "next/image";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { toUppFirst } from "../../../../../Utils";

export default function LanguageList({
  langues,
  closeList,
}: {
  langues: { code: string; label: string; flag: string }[];
  closeList: () => void;
}) {
  const { setLocale } = useLocale();

  // style liste DS
  const listStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    minWidth: "70px",
    zIndex: 9,
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
    backgroundColor: "var(--bg)",
  };

  // style bouton DS
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    cursor: "pointer",
    color: "var(--text)",
    textDecorationColor: "var(--primary)",
  };

  return (
    <ul
      role="listbox" // a11y: annoncer que c’est une liste d’options
      style={listStyle}
      className="surface absolute right-0 mt-1 text-sm rounded-lg"
    >
      {langues.map((langue) => (
        <li key={langue.code}>
          <button
            type="button"
            role="option"
            aria-selected={false}
            lang={langue.code} // tag HTML "lang" => a11y pour lecteur d'écran
            style={buttonStyle}
            className="hover-primary"
            onClick={() => {
              // on change la langue avec le setLocale
              setLocale(langue.code as any);
              // close
              closeList();
            }}
          >
            <Image
              src={langue.flag}
              alt=""
              width={512}
              height={512}
              className="h-5 w-5"
            />
            <span className="hover-primary">{toUppFirst(langue.code)}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
