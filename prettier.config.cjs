/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // ajoute toujours un point-virgule
  singleQuote: false, // utilise les guillemets doubles ("")
  trailingComma: "es5", // ajoute des virgules de fin où c’est valide (objets, arrays, etc.)
  tabWidth: 2, // indentation = 2 espaces
  useTabs: false, // pas de tabulation → espaces
  bracketSpacing: true, // { foo: bar } au lieu de {foo:bar}
  arrowParens: "always", // toujours entourer les params de fonction fléchée → (x) => {}
  printWidth: 100, // longueur max par ligne (wrap auto si plus long)
  endOfLine: "lf", // force les fins de lignes en LF (Linux/macOS standard)
};
