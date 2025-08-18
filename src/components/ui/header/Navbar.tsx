"use client";

import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import Logo from "./logo/Logo";
import SwitchTheme from "./SwitchTheme";
import Shopping from "./Shopping";
import NavList from "./NavList";

export default function Navbar() {
  const { locale } = useLocale();

  return (
    <header className="sticky top-0 w-full glass-nav text-[var(--text)]">
      <nav
        aria-label={t(locale, "a11y.labelPrincipal")}
        className="flex items-center justify-between py-4 px-6 md:px-8"
      >
        <Logo />
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <NavList />
          </div>
          <div className="flex items-center">
            <Shopping />
            <SwitchLanguage />
            <SwitchTheme />
          </div>
        </div>
      </nav>
    </header>
  );
}
