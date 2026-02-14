import { useMemo } from "react";
import type { ComponentType, ReactNode } from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";
import { Text } from "react-native";
import { useTheme } from "@rn-ui/core";
import type { Theme } from "@rn-ui/core";

import type { TypographyVariant } from "./types";

const HEADING_VARIANTS: ReadonlySet<TypographyVariant> = new Set([
  "displayLarge",
  "displayMedium",
  "displaySmall",
  "headlineLarge",
  "headlineMedium",
  "headlineSmall"
]);

export interface TypographyProps extends Omit<TextProps, "children" | "style"> {
  children: ReactNode;
  variant?: TypographyVariant;
  style?: StyleProp<TextStyle>;
  as?: ComponentType<TextProps>;
}

export function Typography({
  children,
  variant = "bodyMedium",
  style,
  as: Component = Text,
  accessibilityRole,
  ...textProps
}: TypographyProps) {
  const theme = useTheme() as Theme;
  const typographyStyle = theme.typography[variant];
  const colorStyle = useMemo(
    () => ({ color: theme.colors.onSurface }),
    [theme.colors.onSurface]
  );
  const resolvedRole =
    accessibilityRole ?? (HEADING_VARIANTS.has(variant) ? "header" : undefined);

  return (
    <Component
      {...textProps}
      accessibilityRole={resolvedRole}
      style={[typographyStyle, colorStyle, style]}
    >
      {children}
    </Component>
  );
}
