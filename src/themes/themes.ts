import { argbFromHex, TonalPalette } from "@material/material-color-utilities";

const palettes = {
  primary: TonalPalette.fromInt(argbFromHex("#0c56d0")),
  secondary: TonalPalette.fromInt(argbFromHex("#585e71")),
  tertiary: TonalPalette.fromInt(argbFromHex("#735471")),

  neutral: TonalPalette.fromInt(argbFromHex("#5E5E62")),
  neutralVariant: TonalPalette.fromInt(argbFromHex("#5C5E67")),

  info: TonalPalette.fromInt(argbFromHex("#00639a")),
  success: TonalPalette.fromInt(argbFromHex("#1b6d24")),
  warning: TonalPalette.fromInt(argbFromHex("#9c4400")),
  error: TonalPalette.fromInt(argbFromHex("#ba1a1a")),
};

function createLightPaletteTonal(palette: TonalPalette) {
  return {
    main: {
      base: palette.tone(40),
      onBase: palette.tone(100),
      baseHover: palette.tone(50),
      baseActive: palette.tone(60),
      baseDisabled: palette.tone(80),
      onBaseDisabled: palette.tone(95),
    },
    lite: {
      base: palette.tone(90),
      onBase: palette.tone(10),
      baseHover: palette.tone(80),
      baseActive: palette.tone(70),
      baseDisabled: palette.tone(20),
      onBaseDisabled: palette.tone(10),
    },
  };
}

function createDarkPaletteTonal(palette: TonalPalette) {
  return {
    main: {
      base: palette.tone(80),
      onBase: palette.tone(20),
      baseHover: palette.tone(100),
      baseActive: palette.tone(100),
      baseDisabled: palette.tone(100),
      onBaseDisabled: palette.tone(100),
    },
    lite: {
      base: palette.tone(30),
      onBase: palette.tone(90),
      baseHover: palette.tone(100),
      baseActive: palette.tone(100),
      baseDisabled: palette.tone(100),
      onBaseDisabled: palette.tone(100),
    },
  };
}

function createLightTonal(palette: TonalPalette) {
  return {
    1: palette.tone(0),
    2: palette.tone(10),
    3: palette.tone(20),
    4: palette.tone(30),
    5: palette.tone(40),
    6: palette.tone(50),
    7: palette.tone(60),
    8: palette.tone(70),
    9: palette.tone(80),
    10: palette.tone(90),
    11: palette.tone(95),
    12: palette.tone(99),
    13: palette.tone(100),
  };
}
function createDarkTonal(palette: TonalPalette) {
  return {
    1: palette.tone(100),
    2: palette.tone(99),
    3: palette.tone(95),
    4: palette.tone(90),
    5: palette.tone(80),
    6: palette.tone(70),
    7: palette.tone(60),
    8: palette.tone(50),
    9: palette.tone(40),
    10: palette.tone(30),
    11: palette.tone(20),
    12: palette.tone(10),
    13: palette.tone(0),
  };
}

const schemes = {
  light: {
    primary: createLightPaletteTonal(palettes.primary),
    secondary: createLightPaletteTonal(palettes.secondary),
    tertiary: createLightPaletteTonal(palettes.tertiary),
    info: createLightPaletteTonal(palettes.info),
    success: createLightPaletteTonal(palettes.success),
    warning: createLightPaletteTonal(palettes.warning),
    error: createLightPaletteTonal(palettes.error),
  },
  dark: {
    primary: createDarkPaletteTonal(palettes.primary),
    secondary: createDarkPaletteTonal(palettes.secondary),
    tertiary: createDarkPaletteTonal(palettes.tertiary),
    info: createDarkPaletteTonal(palettes.info),
    success: createDarkPaletteTonal(palettes.success),
    warning: createDarkPaletteTonal(palettes.warning),
    error: createDarkPaletteTonal(palettes.error),
  },
};

const tonal = {
  light: {
    primary: createLightTonal(palettes.primary),
    secondary: createLightTonal(palettes.secondary),
    tertiary: createLightTonal(palettes.tertiary),
    info: createLightTonal(palettes.info),
    success: createLightTonal(palettes.success),
    warning: createLightTonal(palettes.warning),
    error: createLightTonal(palettes.error),
  },
  dark: {
    primary: createDarkTonal(palettes.primary),
    secondary: createDarkTonal(palettes.secondary),
    tertiary: createDarkTonal(palettes.tertiary),
    info: createDarkTonal(palettes.info),
    success: createDarkTonal(palettes.success),
    warning: createDarkTonal(palettes.warning),
    error: createDarkTonal(palettes.error),
  },
};

export default {
  palettes,
  schemes,
  tonal,
};
