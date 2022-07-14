import { argbFromHex, TonalPalette } from "@material/material-color-utilities";

export type Palette =
  | "primary"
  | "secondary"
  | "tertiary"
  | "error"
  | "info"
  | "warning"
  | "success"
  | "neutral";

export type Scheme =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "success"
  | "error";

const palette = {
  primary: TonalPalette.fromInt(argbFromHex("#386a20")),
  secondary: TonalPalette.fromInt(argbFromHex("#55624c")),
  tertiary: TonalPalette.fromInt(argbFromHex("#19686a")),
  neutral: TonalPalette.fromInt(argbFromHex("#5d5f5a")),
  neutralVariant: TonalPalette.fromInt(argbFromHex("#5b6056")),

  error: TonalPalette.fromInt(argbFromHex("#b3261e")),
  info: TonalPalette.fromInt(argbFromHex("#3399ff")),
  warning: TonalPalette.fromInt(argbFromHex("#e6a03a")),
  success: TonalPalette.fromInt(argbFromHex("#459b64")),
};

const scheme = {
  primary: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  secondary: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  tertiary: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  neutral: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  info: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  warning: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  success: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  error: {
    default: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
    container: {
      base: palette.primary.tone(40),
      hover: palette.primary.tone(40),
      active: palette.primary.tone(40),
      disabled: palette.primary.tone(40),
      onBase: palette.primary.tone(40),
      onDisabled: palette.primary.tone(40),
    },
  },
  background: {
    base: palette.primary.tone(40),
    onBase: palette.primary.tone(40),
  },
  surface: {
    base: palette.primary.tone(40),
    onBase: palette.primary.tone(40),
  },
};
