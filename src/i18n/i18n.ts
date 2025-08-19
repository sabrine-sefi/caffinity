import en from "./en.json";
import fr from "./fr.json";
import es from "./es.json";

// type strict: "en" | "fr" | "es"
export type Locale = "en" | "fr" | "es";

// langue par défaut français
export const defaultLocale: Locale = "fr";

// toutes les langues dispo dans le site
export const locales: Locale[] = ["en", "fr", "es"];

// on regroupe les dictionnaires dans un objet
// dict["fr"] → { brand: {...}, nav: {...}, ... }
const dict: Record<Locale, Record<string, unknown>> = { en, fr, es };

// fonction pour lire un chemin style "a.b.c"
function get(obj: Record<string, unknown>, path: string): unknown {
  return path
    .split(".") // "nav.home" → ["nav","home"]
    .reduce<unknown>((acc, part) => {
      if (acc && typeof acc === "object" && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, obj);
}

export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  // je prends la bonne traduction sinon fr
  const value = get(dict[locale] ?? dict[defaultLocale], key) ?? key;

  // si la valeur n’est pas une string => je renvoie la clé
  if (typeof value !== "string") return key;

  // si pas de variables => renvoie direct la valeur
  if (!vars) return value;

  // sinon remplace les vars dans le texte => exemple: "Salut {name}" + {name: "Sabrine"} => "Salut Sabrine"
  return value.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
