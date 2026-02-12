import { useMemo } from "react";
import type { ComponentType, ReactNode } from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@rn-ui/core";

import { typographyTokens } from "./tokens";
import type { TypographyVariant } from "./types";

type ThemeTypographyToken = Partial<
  Pick<
    TextStyle,
    "fontFamily" | "fontSize" | "fontWeight" | "letterSpacing" | "lineHeight"
  >
>;

type ThemeTypography = Partial<Record<TypographyVariant, ThemeTypographyToken>> & {
  fontFamily?: string;
  fontWeight?: Partial<Record<TypographyVariant, TextStyle["fontWeight"]>>;
};

interface ThemeLike {
  typography?: ThemeTypography;
  colors?: {
    onBackground?: string;
  };
}

function createTypographyStyles(themeTypography?: ThemeTypography) {
  const variantStyles = {} as Record<TypographyVariant, TextStyle>;

  for (const variant of Object.keys(typographyTokens) as TypographyVariant[]) {
    const localToken = typographyTokens[variant];
    const themedToken = themeTypography?.[variant];
    const themedFontFamily = themedToken?.fontFamily ?? themeTypography?.fontFamily;
    const themedFontWeight = themeTypography?.fontWeight?.[variant];

    variantStyles[variant] = {
      fontSize: themedToken?.fontSize ?? localToken.fontSize,
      lineHeight: themedToken?.lineHeight ?? localToken.lineHeight,
      letterSpacing: themedToken?.letterSpacing ?? localToken.letterSpacing,
      fontWeight: themedFontWeight ?? themedToken?.fontWeight ?? localToken.fontWeight,
      ...(themedFontFamily ? { fontFamily: themedFontFamily } : {})
    };
  }

  return StyleSheet.create(variantStyles);
}

export interface TypographyProps
  extends Omit<TextProps, "children" | "style"> {
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
  ...textProps
}: TypographyProps) {
  const theme = useTheme() as ThemeLike | undefined;
  const styles = useMemo(
    () => createTypographyStyles(theme?.typography),
    [theme?.typography]
  );
  const colorStyle = useMemo(
    () => ({ color: theme?.colors?.onBackground }),
    [theme?.colors?.onBackground]
  );

  return (
    <Component
      {...textProps}
      style={[styles[variant], colorStyle, style]}
    >
      {children}
    </Component>
  );
}
