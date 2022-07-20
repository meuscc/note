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

function createLightPaletteTonal(palette: TonalPalette) {
  return {
    tonal: createLightTonal(palette),
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
      baseDisabled: palette.tone(95),
      onBaseDisabled: palette.tone(80),
    },
  };
}

function createDarkPaletteTonal(palette: TonalPalette) {
  return {
    tonal: createDarkTonal(palette),
    main: {
      base: palette.tone(80),
      onBase: palette.tone(20),
      baseHover: palette.tone(70),
      baseActive: palette.tone(60),
      baseDisabled: palette.tone(60),
      onBaseDisabled: palette.tone(30),
    },
    lite: {
      base: palette.tone(30),
      onBase: palette.tone(90),
      baseHover: palette.tone(40),
      baseActive: palette.tone(50),
      baseDisabled: palette.tone(20),
      onBaseDisabled: palette.tone(50),
    },
  };
}

const schemes = {
  light: {
    primary: createLightPaletteTonal(palettes.primary),
    secondary: createLightPaletteTonal(palettes.secondary),
    tertiary: createLightPaletteTonal(palettes.tertiary),

    neutral: createLightPaletteTonal(palettes.neutral),
    neutralVariant: createLightPaletteTonal(palettes.neutralVariant),

    info: createLightPaletteTonal(palettes.info),
    success: createLightPaletteTonal(palettes.success),
    warning: createLightPaletteTonal(palettes.warning),

    error: createLightPaletteTonal(palettes.error),

    //////////////////////////////////////////////////////
    background: palettes.neutral.tone(95),
    onBackground: palettes.neutral.tone(10),
    surface: palettes.neutral.tone(99),
    onSurface: palettes.neutral.tone(10),

    surfaceVariant: palettes.neutralVariant.tone(90),
    onSurfaceVariant: palettes.neutralVariant.tone(30),

    outline: palettes.neutralVariant.tone(50),
    shadow: palettes.neutral.tone(0),

    inverseSurface: palettes.neutral.tone(20),
    inverseOnSurface: palettes.neutral.tone(95),
  },
  dark: {
    primary: createDarkPaletteTonal(palettes.primary),
    secondary: createDarkPaletteTonal(palettes.secondary),
    tertiary: createDarkPaletteTonal(palettes.tertiary),

    neutral: createDarkPaletteTonal(palettes.neutral),
    neutralVariant: createDarkPaletteTonal(palettes.neutralVariant),

    info: createDarkPaletteTonal(palettes.info),
    success: createDarkPaletteTonal(palettes.success),
    warning: createDarkPaletteTonal(palettes.warning),

    error: createDarkPaletteTonal(palettes.error),

    //////////////////////////////////////////////////////
    background: palettes.neutral.tone(10),
    onBackground: palettes.neutral.tone(90),
    surface: palettes.neutral.tone(20),
    onSurface: palettes.neutral.tone(90),

    surfaceVariant: palettes.neutralVariant.tone(30),
    onSurfaceVariant: palettes.neutralVariant.tone(80),

    outline: palettes.neutralVariant.tone(60),
    shadow: palettes.neutral.tone(0),

    inverseSurface: palettes.neutral.tone(90),
    inverseOnSurface: palettes.neutral.tone(20),
  },
};

export default {
  schemes,
  variables: {
    layout: {
      topbarHeight: 50,
      sidebarWidth: 240,
      sidebarShrink: 40,
    },
    shape: {
      radius: 4,
    },
  },
};
