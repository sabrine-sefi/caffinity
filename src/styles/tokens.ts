type ThemeColors = {
  bg: string;
  text: string;
  primary: string;
  surface: string;
};

export const tokens: { light: ThemeColors; dark: ThemeColors } = {
  light: {
    bg: "#f8fafc",
    text: "#0b1320",
    primary: "#B87651",
    surface: "#ffffff",
  },
  dark: {
    bg: "#0b1320",
    text: "#f8fafc",
    primary: "#B87651",
    surface: "#121826",
  },
};
