import { css } from "styled-components";

const theme = {
  fontSizes: [
    // Text phone, Text tablet
    14,
    // Subheading phone, Subheading tablet, Text laptop, Subheading laptop, Text desktop
    16,
    // Subheading desktop
    18,
    // Heading phone
    20,
    // Large heading phone, Heading tablet
    24,
    // Large heading tablet, Heading laptop
    28,
    // Large heading laptop, Heading desktop
    36,
    // Large heading desktop
    44,
  ],
  lineHeights: [
    // Text phone, Text tablet
    "18px",
    // Subheading phone, Subheading tablet
    "20px",
    // Subheading desktop
    "22px",
    // Heading phone
    "24px",
    // Large heading phone, Heading tablet
    "32px",
    // Large heading tablet, Heading laptop
    "40px",
    // Large heading laptop, Heading desktop
    "44px",
    // Large heading desktop
    "56px",
  ],
  space: [],
  colors: {
    primary: {
      50: "#e3f8f4",
      100: "#baede2",
      200: "#8CE2CF",
      300: "#60d5bc",
      400: "#45c8ac",
      500: "#39bc9d",
      600: "#34ae90",
      700: "#2e9c7f",
      800: "#298b70",
      900: "#226e54",
    },
    secondary: {
      50: "#f3e7e5",
      100: "#eec6b9",
      200: "#e3a38d",
      300: "#dc7f5f",
      400: "#d9643b",
      500: "#d54917",
      600: "#cb4414",
      700: "#be3e10",
      800: "#b1370c",
      900: "#992b04",
    },
    text: {
      highEmphasis: "rgba(255, 255, 255, 0.87)",
      mediumEmphasis: "rgba(255, 255, 255, 0.6)",
    },
    border: { inactive: "rgba(255, 255, 255, 0.12)" },
    surface: ["#1C2321", "#222D2A", "#24312E"],
  },
  breakpoints: ["38rem", "60rem", "75rem"],
};

const getMediaHelper = (minWidth) => (...args) => css`
  @media (min-width: ${minWidth}) {
    ${css(...args)}
  }
`;

export const media = {
  sm: getMediaHelper(theme.breakpoints[0]),
  md: getMediaHelper(theme.breakpoints[1]),
  lg: getMediaHelper(theme.breakpoints[2]),
};

export default theme;
