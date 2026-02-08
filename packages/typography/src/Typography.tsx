import { Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";

export type TypographyVariant =
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headlineLarge"
  | "headlineMedium"
  | "headlineSmall"
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall";

const defaultVariants: Record<TypographyVariant, TextStyle> = {
  displayLarge: {
    fontFamily: "Roboto",
    fontSize: 57,
    fontWeight: "400",
    lineHeight: 64,
    letterSpacing: -0.25
  },
  displayMedium: {
    fontFamily: "Roboto",
    fontSize: 45,
    fontWeight: "400",
    lineHeight: 52,
    letterSpacing: 0
  },
  displaySmall: {
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: "400",
    lineHeight: 44,
    letterSpacing: 0
  },
  headlineLarge: {
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 40,
    letterSpacing: 0
  },
  headlineMedium: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "400",
    lineHeight: 36,
    letterSpacing: 0
  },
  headlineSmall: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 32,
    letterSpacing: 0
  },
  titleLarge: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    letterSpacing: 0
  },
  titleMedium: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15
  },
  titleSmall: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1
  },
  bodyLarge: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.5
  },
  bodyMedium: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25
  },
  bodySmall: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: 0.4
  },
  labelLarge: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1
  },
  labelMedium: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.5
  },
  labelSmall: {
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.5
  }
};

export type TypographyOverrides = Partial<Record<TypographyVariant, TextStyle>>;

export interface TypographyProps extends RNTextProps {
  variant?: TypographyVariant;
  overrides?: TypographyOverrides;
}

export function Typography({
  variant = "bodyMedium",
  overrides,
  style,
  children,
  ...props
}: TypographyProps) {
  const variantStyle = overrides?.[variant] ?? defaultVariants[variant];

  return (
    <RNText {...props} style={[variantStyle, style]}>
      {children}
    </RNText>
  );
}

export const typography = defaultVariants;
