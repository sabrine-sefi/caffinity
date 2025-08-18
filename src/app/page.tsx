"use client";

import { useLocale } from "../i18n/LocaleProvider";
import { t } from "../i18n/i18n";

export default function Home() {
  const { locale } = useLocale();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">{t(locale, "nav.language")}</h1>
      </main>
    </div>
  );
}
