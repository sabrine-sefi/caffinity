"use client";

import { useLocale } from "../../i18n/LocaleProvider";
import { t } from "../../i18n/i18n";

export default function AboutPage() {
  const { locale } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full p-8 text-center">
      <h1 className="text-2xl font-semibold">{t(locale, "nav.about")} - Coming soon</h1>
    </div>
  );
}
