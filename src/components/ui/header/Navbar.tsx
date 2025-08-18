"use client";

import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import Logo from "./logo/Logo";
import SwitchTheme from "./SwitchTheme";

export default function Navbar() {
  const { locale } = useLocale();

  return (
    <header className="sticky top-0 w-full z-50 glass-nav text-[var(--text)]">
      <nav
        aria-label={t(locale, "a11y.labelPrincipal")}
        className="flex items-center justify-between py-4 px-6 md:px-8"
      >
        <Logo />
        <div className="flex items-center">
          <SwitchLanguage />
          <SwitchTheme />
        </div>
      </nav>
    </header>
  );
}
