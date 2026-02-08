import type { Theme } from "./types";

export const darkTheme: Theme = {
  colors: {
    primary: "#D0BCFF",
    onPrimary: "#381E72",
    primaryContainer: "#4F378B",
    onPrimaryContainer: "#EADDFF",
    secondary: "#CCC2DC",
    onSecondary: "#332D41",
    secondaryContainer: "#4A4458",
    onSecondaryContainer: "#E8DEF8",
    tertiary: "#EFB8C8",
    onTertiary: "#492532",
    tertiaryContainer: "#633B48",
    onTertiaryContainer: "#FFD8E4",
    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
    onErrorContainer: "#F9DEDC",
    background: "#1C1B1F",
    onBackground: "#E6E1E5",
    surface: "#1C1B1F",
    onSurface: "#E6E1E5",
    surfaceVariant: "#49454F",
    onSurfaceVariant: "#CAC4D0",
    outline: "#938F99",
    outlineVariant: "#49454F",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#E6E1E5",
    inverseOnSurface: "#313033",
    inversePrimary: "#6750A4"
  },
  typography: {
    displayLarge: {
      fontFamily: "Roboto",
      fontSize: 57,
      fontWeight: "400",
      lineHeight: 64,
      letterSpacing: -0.25
    },
    headlineMedium: {
      fontFamily: "Roboto",
      fontSize: 28,
      fontWeight: "400",
      lineHeight: 36,
      letterSpacing: 0
    },
    bodyLarge: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 24,
      letterSpacing: 0.5
    },
    labelSmall: {
      fontFamily: "Roboto",
      fontSize: 11,
      fontWeight: "500",
      lineHeight: 16,
      letterSpacing: 0.5
    }
  },
  shape: {
    cornerNone: 0,
    cornerExtraSmall: 4,
    cornerSmall: 8,
    cornerMedium: 12,
    cornerLarge: 16,
    cornerExtraLarge: 28,
    cornerFull: 999
  },
  elevation: {
    level0: 0,
    level1: 1,
    level2: 3,
    level3: 6,
    level4: 8,
    level5: 12
  },
  motion: {
    durationShort1: 50,
    durationShort2: 100,
    durationShort3: 150,
    durationShort4: 200,
    durationMedium1: 250,
    durationMedium2: 300,
    durationMedium3: 350,
    durationMedium4: 400,
    durationLong1: 450,
    durationLong2: 500,
    durationLong3: 550,
    durationLong4: 600,
    easingLinear: "cubic-bezier(0, 0, 1, 1)",
    easingStandard: "cubic-bezier(0.2, 0, 0, 1)",
    easingStandardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",
    easingStandardDecelerate: "cubic-bezier(0, 0, 0, 1)",
    easingEmphasized: "cubic-bezier(0.2, 0, 0, 1)",
    easingEmphasizedAccelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
    easingEmphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)"
  }
};
