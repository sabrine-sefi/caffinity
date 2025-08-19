"use client";

import Image from "next/image";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { toUppFirst } from "../../../../../Utils";
import FloatingBox from "@/ds/FloatingBox";

type LanguageListProps = {
  langues: { code: string; label: string; flag: string }[];
  onClose: () => void;
};

export default function LanguageList({ langues, onClose }: LanguageListProps) {
  const { setLocale } = useLocale();

  return (
    <FloatingBox onClose={onClose} className="top-full right-4 w-30">
      <ul role="listbox">
        {langues.map((langue) => (
          <li key={langue.code}>
            <button
              type="button"
              role="option"
              aria-selected={false}
              lang={langue.code}
              className="flex items-center justify-start gap-2 p-2 cursor-pointer w-full"
              onClick={() => {
                setLocale(langue.code as any);
                onClose();
              }}
            >
              <Image src={langue.flag} alt="" width={512} height={512} className="h-5 w-5" />
              <span className="hover-primary">{toUppFirst(langue.label)}</span>
            </button>
          </li>
        ))}
      </ul>
    </FloatingBox>
  );
}
