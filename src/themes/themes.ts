import { argbFromHex, TonalPalette } from "@material/material-color-utilities";
import { createPalettes, createScheme } from "/src/themes/create-themes";

const palettes = {
  primary: TonalPalette.fromInt(argbFromHex("#0052cc")),
  // primary: TonalPalette.fromInt(argbFromHex("#9e403d")),
  secondary: TonalPalette.fromInt(argbFromHex("#e5e5e5")),
  tertiary: TonalPalette.fromInt(argbFromHex("#735b2e")),

  neutral: TonalPalette.fromInt(argbFromHex("#655c5b")),
  neutralVariant: TonalPalette.fromInt(argbFromHex("#6b5a59")),

  info: TonalPalette.fromInt(argbFromHex("#00639c")),
  success: TonalPalette.fromInt(argbFromHex("#1b6d24")),
  warning: TonalPalette.fromInt(argbFromHex("#934c00")),
  error: TonalPalette.fromInt(argbFromHex("#ba1a1a")),
};

const schemes = {
  light: {
    //
    primary: palettes.primary.tone(40),
    primaryHover: palettes.primary.tone(40),
    primaryActive: palettes.primary.tone(40),
    primaryDisabled: palettes.primary.tone(40),
    onPrimary: palettes.primary.tone(100),
    primaryContainer: palettes.primary.tone(90),
    primaryContainerHover: palettes.primary.tone(80),
    primaryContainerActive: palettes.primary.tone(70),
    onPrimaryContainer: palettes.primary.tone(10),
    //
    secondary: palettes.secondary.tone(40),
    onSecondary: palettes.secondary.tone(100),
    secondaryContainer: palettes.secondary.tone(90),
    secondaryContainerHover: palettes.secondary.tone(80),
    secondaryContainerActive: palettes.secondary.tone(70),
    onSecondaryContainer: palettes.secondary.tone(10),
    //
    tertiary: palettes.tertiary.tone(40),
    onTertiary: palettes.tertiary.tone(100),
    tertiaryContainer: palettes.tertiary.tone(90),
    onTertiaryContainer: palettes.tertiary.tone(10),
    //
    error: palettes.error.tone(40),
    onError: palettes.error.tone(100),
    errorContainer: palettes.error.tone(90),
    errorContainerHover: palettes.error.tone(80),
    errorContainerActive: palettes.error.tone(70),
    onErrorContainer: palettes.error.tone(10),
    //
    background: palettes.neutral.tone(99),
    onBackground: palettes.neutral.tone(10),
    surface: palettes.neutral.tone(99),
    onSurface: palettes.neutral.tone(10),
    //
    surfaceVariant: palettes.neutralVariant.tone(90),
    onSurfaceVariant: palettes.neutralVariant.tone(30),
    outline: palettes.neutralVariant.tone(50),
    //
    shadow: palettes.neutral.tone(0),
    surfaceTint: palettes.primary.tone(40),
    inverseSurface: palettes.neutral.tone(20),
    inverseOnSurface: palettes.neutral.tone(95),
    inversePrimary: palettes.primary.tone(80),
    // 功能
    info: palettes.info.tone(40),
    onInfo: palettes.info.tone(100),
    infoContainer: palettes.info.tone(90),
    infoContainerHover: palettes.info.tone(80),
    infoContainerActive: palettes.info.tone(70),
    onInfoContainer: palettes.info.tone(10),
    warning: palettes.warning.tone(40),
    onWarning: palettes.warning.tone(100),
    warningContainer: palettes.warning.tone(90),
    warningContainerHover: palettes.warning.tone(80),
    warningContainerActive: palettes.warning.tone(70),
    onWarningContainer: palettes.warning.tone(10),
    success: palettes.success.tone(40),
    onSuccess: palettes.success.tone(100),
    successContainer: palettes.success.tone(90),
    successContainerHover: palettes.success.tone(80),
    successContainerActive: palettes.success.tone(70),
    onSuccessContainer: palettes.success.tone(10),
  },
  dark: {
    //
    primary: palettes.primary.tone(80),
    onPrimary: palettes.primary.tone(20),
    primaryContainer: palettes.primary.tone(30),
    primaryContainerHover: palettes.primary.tone(40),
    primaryContainerActive: palettes.primary.tone(50),
    onPrimaryContainer: palettes.primary.tone(90),
    //
    secondary: palettes.secondary.tone(80),
    onSecondary: palettes.secondary.tone(20),
    secondaryContainer: palettes.secondary.tone(30),
    secondaryContainerHover: palettes.secondary.tone(40),
    secondaryContainerActive: palettes.secondary.tone(50),
    onSecondaryContainer: palettes.secondary.tone(90),
    //
    tertiary: palettes.tertiary.tone(80),
    onTertiary: palettes.tertiary.tone(20),
    tertiaryContainer: palettes.tertiary.tone(30),
    onTertiaryContainer: palettes.tertiary.tone(90),
    //
    error: palettes.error.tone(80),
    onError: palettes.error.tone(20),
    errorContainer: palettes.error.tone(30),
    errorContainerHover: palettes.error.tone(40),
    errorContainerActive: palettes.error.tone(50),
    onErrorContainer: palettes.error.tone(90),
    //
    background: palettes.neutral.tone(10),
    onBackground: palettes.neutral.tone(90),
    surface: palettes.neutral.tone(10),
    onSurface: palettes.neutral.tone(90),
    //
    surfaceVariant: palettes.neutralVariant.tone(30),
    onSurfaceVariant: palettes.neutralVariant.tone(80),
    outline: palettes.neutralVariant.tone(60),
    //
    shadow: palettes.neutral.tone(0),
    surfaceTint: palettes.primary.tone(80),
    inverseSurface: palettes.neutral.tone(90),
    inverseOnSurface: palettes.neutral.tone(20),
    inversePrimary: palettes.primary.tone(40),
    // 功能
    info: palettes.info.tone(80),
    onInfo: palettes.info.tone(20),
    infoContainer: palettes.info.tone(30),
    infoContainerHover: palettes.info.tone(40),
    infoContainerActive: palettes.info.tone(50),
    onInfoContainer: palettes.info.tone(90),
    warning: palettes.warning.tone(80),
    onWarning: palettes.warning.tone(20),
    warningContainer: palettes.warning.tone(30),
    warningContainerHover: palettes.warning.tone(40),
    warningContainerActive: palettes.warning.tone(50),
    onWarningContainer: palettes.warning.tone(90),
    success: palettes.success.tone(80),
    onSuccess: palettes.success.tone(20),
    successContainer: palettes.success.tone(30),
    successContainerHover: palettes.success.tone(40),
    successContainerActive: palettes.success.tone(50),
    onSuccessContainer: palettes.success.tone(90),
  },
};

export const themes = {
  palettes,
  schemes,
};

export function createThemes() {
  return `
:root {
${createPalettes(themes.palettes)}
${createScheme(themes.schemes.light)}
}
.dark {
${createScheme(themes.schemes.dark)}
}
`;
}
