import { Hct, hexFromArgb, TonalPalette } from "@material/material-color-utilities";

const primaryPalette = TonalPalette.fromInt(0xff006853);
const secondaryPalette = TonalPalette.fromInt(0xffb9b9b9);
const tertiaryPalette = TonalPalette.fromInt(0xffe7641c);

const palette = {
  primary: {
    5: hexFromArgb(primaryPalette.tone(5)),
    10: hexFromArgb(primaryPalette.tone(10)),
    20: hexFromArgb(primaryPalette.tone(20)),
    30: hexFromArgb(primaryPalette.tone(30)),
    40: hexFromArgb(primaryPalette.tone(38.76893025029359)),
    50: hexFromArgb(primaryPalette.tone(50)),
    60: hexFromArgb(primaryPalette.tone(60)),
    70: hexFromArgb(primaryPalette.tone(70)),
    80: hexFromArgb(primaryPalette.tone(80)),
    90: hexFromArgb(primaryPalette.tone(90)),
    95: hexFromArgb(primaryPalette.tone(100)),
  },
  secondary: {
    5: hexFromArgb(secondaryPalette.tone(5)),
    10: hexFromArgb(secondaryPalette.tone(10)),
    20: hexFromArgb(secondaryPalette.tone(20)),
    30: hexFromArgb(secondaryPalette.tone(30)),
    40: hexFromArgb(secondaryPalette.tone(40)),
    50: hexFromArgb(secondaryPalette.tone(50)),
    60: hexFromArgb(secondaryPalette.tone(60)),
    70: hexFromArgb(secondaryPalette.tone(75.14859596285152)),
    80: hexFromArgb(secondaryPalette.tone(80)),
    90: hexFromArgb(secondaryPalette.tone(90)),
    95: hexFromArgb(secondaryPalette.tone(100)),
  },
  tertiary: {
    5: hexFromArgb(tertiaryPalette.tone(5)),
    10: hexFromArgb(tertiaryPalette.tone(10)),
    20: hexFromArgb(tertiaryPalette.tone(20)),
    30: hexFromArgb(tertiaryPalette.tone(30)),
    40: hexFromArgb(tertiaryPalette.tone(40)),
    50: hexFromArgb(tertiaryPalette.tone(50)),
    60: hexFromArgb(tertiaryPalette.tone(58.214226672945685)),
    70: hexFromArgb(tertiaryPalette.tone(70)),
    80: hexFromArgb(tertiaryPalette.tone(80)),
    90: hexFromArgb(tertiaryPalette.tone(90)),
    95: hexFromArgb(tertiaryPalette.tone(100)),
  },
};

const themes = {
  schemes: {
    light: {
      primary: {
        dark: palette.primary["30"],
        main: palette.primary["40"],
        DEFAULT: palette.primary["40"],
        light: palette.primary["50"],
      },
      secondary: {
        dark: palette.secondary["60"],
        main: palette.secondary["70"],
        DEFAULT: palette.secondary["70"],
        light: palette.secondary["80"],
      },
      tertiary: {
        dark: palette.tertiary["50"],
        main: palette.tertiary["60"],
        DEFAULT: palette.tertiary["60"],
        light: palette.tertiary["70"],
      },
      text: {
        main: "#404040",
        middle: "#B0B0B0",
        light: "#E0E0E0",
      },
    },
    dark: {
      primary: {
        dark: palette.primary["30"],
        main: palette.primary["40"],
        DEFAULT: palette.primary["40"],
        light: palette.primary["50"],
      },
      secondary: {
        dark: palette.secondary["30"],
        main: palette.secondary["40"],
        DEFAULT: palette.secondary["40"],
        light: palette.secondary["50"],
      },
      tertiary: {
        dark: palette.tertiary["50"],
        main: palette.tertiary["60"],
        DEFAULT: palette.tertiary["60"],
        light: palette.tertiary["70"],
      },
      text: {
        main: "#404040",
        middle: "#B0B0B0",
        light: "#E0E0E0",
      },
    },
  },
  palette,
};

export default themes;
