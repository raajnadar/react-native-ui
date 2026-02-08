export interface Theme {
  colors: Colors;
  typography: Typography;
  shape: Shape;
  elevation: Elevation;
  motion: Motion;
}

export interface Colors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
}

export interface Typography {
  displayLarge: TextStyle;
  headlineMedium: TextStyle;
  bodyLarge: TextStyle;
  labelSmall: TextStyle;
}

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  letterSpacing: number;
}

export interface Shape {
  cornerNone: number;
  cornerExtraSmall: number;
  cornerSmall: number;
  cornerMedium: number;
  cornerLarge: number;
  cornerExtraLarge: number;
  cornerFull: number;
}

export interface Elevation {
  level0: number;
  level1: number;
  level2: number;
  level3: number;
  level4: number;
  level5: number;
}

export interface Motion {
  durationShort1: number;
  durationShort2: number;
  durationShort3: number;
  durationShort4: number;
  durationMedium1: number;
  durationMedium2: number;
  durationMedium3: number;
  durationMedium4: number;
  durationLong1: number;
  durationLong2: number;
  durationLong3: number;
  durationLong4: number;
  easingLinear: string;
  easingStandard: string;
  easingStandardAccelerate: string;
  easingStandardDecelerate: string;
  easingEmphasized: string;
  easingEmphasizedAccelerate: string;
  easingEmphasizedDecelerate: string;
}
