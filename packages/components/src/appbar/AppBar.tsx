import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@rn-ui/core";

import { IconButton } from "../icon-button";
import type { IconButtonProps } from "../icon-button";
import { Typography } from "../typography";
import type { TypographyVariant } from "../typography";
import { createStyles } from "./styles";
import type { AppBarProps } from "./types";

type AppBarSize = "small" | "medium" | "large";
const TOP_APP_BAR_HORIZONTAL_PADDING = 4;
const TOP_APP_BAR_TITLE_INSET = 12;
const DEFAULT_BACK_ICON: IconButtonProps["icon"] =
  Platform.OS === "ios" ? "chevron-left" : "arrow-left";

const titleVariantBySize: Record<AppBarSize, TypographyVariant> = {
  small: "titleLarge",
  medium: "headlineSmall",
  large: "headlineMedium"
};

function resolveSize(variant: AppBarProps["variant"]): AppBarSize {
  if (variant === "medium" || variant === "large") {
    return variant;
  }

  return "small";
}

function getSizeStyle(
  styles: ReturnType<typeof createStyles>,
  size: AppBarSize
) {
  if (size === "large") {
    return styles.largeContainer;
  }

  return styles.mediumContainer;
}

function withTopInset(
  enabled: boolean,
  content: ReactNode,
  style: StyleProp<ViewStyle>
) {
  if (enabled) {
    return (
      <SafeAreaView edges={["top"]} style={style}>
        {content}
      </SafeAreaView>
    );
  }

  return <View style={style}>{content}</View>;
}

function measureWidth(event: LayoutChangeEvent): number {
  return Math.round(event.nativeEvent.layout.width);
}

export function AppBar({
  title,
  variant = "small",
  canGoBack = false,
  onBackPress,
  insetTop = false,
  leading,
  trailing,
  actions
}: AppBarProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [leadingWidth, setLeadingWidth] = useState(0);
  const [actionsWidth, setActionsWidth] = useState(0);
  const titleColorStyle = useMemo(
    () => ({ color: theme.colors.onSurface }),
    [theme.colors.onSurface]
  );
  const size = resolveSize(variant);
  const titleVariant = titleVariantBySize[size];
  const isCenterAligned = variant === "center-aligned";
  const isExpanded = size !== "small";
  const titleStartInset =
    TOP_APP_BAR_HORIZONTAL_PADDING + Math.max(TOP_APP_BAR_TITLE_INSET, leadingWidth);
  const compactTitleEndInset = TOP_APP_BAR_HORIZONTAL_PADDING + actionsWidth;
  const centeredSideInset =
    TOP_APP_BAR_HORIZONTAL_PADDING + Math.max(leadingWidth, actionsWidth);

  const leadingContent = useMemo(() => {
    if (leading) {
      return leading;
    }

    if (!canGoBack) {
      return null;
    }

    return (
      <View style={styles.iconFrame}>
        <IconButton
          icon={DEFAULT_BACK_ICON}
          size="medium"
          variant="standard"
          iconColor={theme.colors.onSurface}
          accessibilityLabel="Go back"
          onPress={onBackPress}
        />
      </View>
    );
  }, [canGoBack, leading, onBackPress, styles.iconFrame, theme.colors.onSurface]);

  const actionsContent = useMemo(() => {
    if (trailing) {
      return trailing;
    }

    if (!actions || actions.length === 0) {
      return null;
    }

    return (
      <View style={styles.actionsRow}>
        {actions.map((action, index) => (
          <View key={`${String(action.icon)}-${index}`} style={styles.iconFrame}>
            <IconButton
              icon={action.icon}
              size="medium"
              variant="standard"
              accessibilityLabel={action.accessibilityLabel}
              onPress={action.onPress}
              disabled={action.disabled}
            />
          </View>
        ))}
      </View>
    );
  }, [actions, styles.actionsRow, styles.iconFrame, trailing]);

  const onLeadingLayout = useCallback((event: LayoutChangeEvent) => {
    const nextWidth = measureWidth(event);

    setLeadingWidth((currentWidth) => {
      if (currentWidth === nextWidth) {
        return currentWidth;
      }

      return nextWidth;
    });
  }, []);

  const onActionsLayout = useCallback((event: LayoutChangeEvent) => {
    const nextWidth = measureWidth(event);

    setActionsWidth((currentWidth) => {
      if (currentWidth === nextWidth) {
        return currentWidth;
      }

      return nextWidth;
    });
  }, []);

  const topRow = (
    <View style={styles.topRow}>
      <View collapsable={false} onLayout={onLeadingLayout} style={styles.sideSlot}>
        {leadingContent}
      </View>
      <View style={styles.topRowSpacer} />
      <View collapsable={false} onLayout={onActionsLayout} style={styles.sideSlot}>
        {actionsContent}
      </View>
    </View>
  );

  if (isExpanded) {
    const content = (
      <View style={[styles.expandedContainer, getSizeStyle(styles, size)]}>
        {topRow}
        <View
          pointerEvents="none"
          style={[
            styles.expandedTitleContainer,
            size === "large" ? styles.largeTitlePadding : styles.mediumTitlePadding,
            { paddingLeft: titleStartInset }
          ]}
        >
          <Typography
            numberOfLines={1}
            variant={titleVariant}
            style={[styles.title, titleColorStyle, styles.startAlignedTitle]}
          >
            {title}
          </Typography>
        </View>
      </View>
    );

    return (
      <View style={styles.root}>
        {withTopInset(insetTop, content, styles.safeArea)}
      </View>
    );
  }

  const content = (
    <View style={styles.smallContainer}>
      {topRow}
      <View
        pointerEvents="none"
        style={[
          styles.overlayTitleContainer,
          isCenterAligned
            ? { left: centeredSideInset, right: centeredSideInset }
            : { left: titleStartInset, right: compactTitleEndInset }
        ]}
      >
        <Typography
          numberOfLines={1}
          variant={titleVariant}
          style={[
            styles.title,
            titleColorStyle,
            isCenterAligned ? styles.centeredTitle : styles.startAlignedTitle
          ]}
        >
          {title}
        </Typography>
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      {withTopInset(insetTop, content, styles.safeArea)}
    </View>
  );
}
