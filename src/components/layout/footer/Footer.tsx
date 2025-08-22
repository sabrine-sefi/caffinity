"use client";

import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="w-full glass-footer text-[var(--text)]">
      <div className="max-w-7xl mx-auto px-6 py-6 md:flex md:items-center md:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} CaffinitY. {t(locale, "footer.rights")}
        </p>
      </div>
    </footer>
  );
}
