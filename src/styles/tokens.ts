type ThemeColors = {
  bg: string;
  text: string;
  primary: string;
  surface: string;
};
type Fonts = {
  content: string;
  titles: string;
  second: string;
};

export const tokens: { light: ThemeColors; dark: ThemeColors; font: Fonts } = {
  light: {
    bg: "#f8fafc",
    text: "#0b1320",
    primary: "#955D3B",
    surface: "#ffffff",
  },
  dark: {
    bg: "#0b1320",
    text: "#f8fafc",
    primary: "#955D3B",
    surface: "#121826",
  },
  font: {
    content: "var(--font-sans)", // Poppins
    titles: "var(--font-display)", // Livvic
    second: "var(--font-second)", // Parisienne
  },
};
