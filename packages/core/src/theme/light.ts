import type { Theme } from "./types";

export const lightTheme: Theme = {
  colors: {
    primary: "#6750A4",
    onPrimary: "#FFFFFF",
    primaryContainer: "#EADDFF",
    onPrimaryContainer: "#21005D",
    secondary: "#625B71",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#E8DEF8",
    onSecondaryContainer: "#1D192B",
    tertiary: "#7D5260",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#FFD8E4",
    onTertiaryContainer: "#31111D",
    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B",
    background: "#FFFBFE",
    onBackground: "#1C1B1F",
    surface: "#FFFBFE",
    onSurface: "#1C1B1F",
    surfaceVariant: "#E7E0EC",
    onSurfaceVariant: "#49454F",
    outline: "#79747E",
    outlineVariant: "#CAC4D0",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#313033",
    inverseOnSurface: "#F4EFF4",
    inversePrimary: "#D0BCFF"
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
