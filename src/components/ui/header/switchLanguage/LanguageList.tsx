"use client";

import Image from "next/image";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { tokens } from "../../../../styles/tokens";

export default function LanguageList({
  langues,
  closeList,
}: {
  langues: { code: string; label: string; flag: string }[];
  closeList: () => void;
}) {
  const { setLocale } = useLocale();

  //pour forcer font and color (tokens) => to fix: tailwind!
  const fontStyle = {
    fontFamily: tokens.font.content,
  };
  return (
    <ul
      role="listbox" // a11y: annoncer que c’est une liste d’options
      style={fontStyle}
      className="absolute right-0 mt-2 w-40 rounded-md bg-white text-sm drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
    >
      {langues.map((langue) => (
        <li key={langue.code}>
          <button
            type="button"
            role="option"
            aria-selected={false}
            lang={langue.code} // tag HTML "lang" => a11y pour lecteur d'écran
            className="w-full flex items-center gap-2 px-3 py-2"
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
              className="h-6 w-6"
            />
            <span>{langue.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
