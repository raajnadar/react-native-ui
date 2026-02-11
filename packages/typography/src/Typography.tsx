import { useMemo } from "react";
import type { ReactNode } from "react";
import type { StyleProp, TextProps, TextStyle } from "react-native";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@react-native-ui/core";

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
  numberOfLines?: TextProps["numberOfLines"];
  ellipsizeMode?: TextProps["ellipsizeMode"];
  selectable?: TextProps["selectable"];
}

export function Typography({
  children,
  variant = "bodyMedium",
  style,
  numberOfLines,
  ellipsizeMode,
  selectable,
  ...props
}: TypographyProps) {
  const theme = useTheme() as ThemeLike | undefined;
  const styles = useMemo(
    () => createTypographyStyles(theme?.typography),
    [theme?.typography]
  );

  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      selectable={selectable}
      style={[styles[variant], style]}
    >
      {children}
    </Text>
  );
}
