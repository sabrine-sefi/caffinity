export type ThemeColors = {
  bg: string;
  text: string;
  primary: string;
  border: string;
  focus: string;
};

export type Fonts = {
  content: string;
  titles: string;
  second: string;
};

export const tokens: {
  light: ThemeColors;
  dark: ThemeColors;
  font: Fonts;
} = {
  light: {
    bg: "var(--bg)",
    text: "var(--text)",
    primary: "var(--primary)",
    border: "var(--border)",
    focus: "var(--focus)",
  },
  dark: {
    bg: "var(--bg)",
    text: "var(--text)",
    primary: "var(--primary)",
    border: "var(--border)",
    focus: "var(--focus)",
  },
  font: {
    content: "var(--font-sans)", // Poppins
    titles: "var(--font-display)", // Livvic
    second: "var(--font-second)", // Parisienne
  },
};
