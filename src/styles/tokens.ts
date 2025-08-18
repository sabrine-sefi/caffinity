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
    bg: "#FAF7F2",
    text: "#0b1320",
    primary: "#955D3B",
    border: "#D9D9D9",
    focus: "#2563eb",
  },
  dark: {
    bg: "#0E0D0C",
    text: "#FAF7F2",
    primary: "#AC6B44",
    border: "#2c2c2c",
    focus: "#60a5fa",
  },
  font: {
    content: "var(--font-sans)", // Poppins
    titles: "var(--font-display)", // Livvic
    second: "var(--font-second)", // Parisienne
  },
};
