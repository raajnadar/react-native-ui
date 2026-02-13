import type { ReactNode } from "react";
import type { IconButtonProps } from "../icon-button";

export type AppBarVariant = "small" | "center-aligned" | "medium" | "large";

export interface AppBarAction {
  icon: IconButtonProps["icon"];
  accessibilityLabel: string;
  onPress?: () => void;
  disabled?: boolean;
}

export interface AppBarProps {
  title: string;
  variant?: AppBarVariant;
  canGoBack?: boolean;
  onBackPress?: () => void;
  insetTop?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  actions?: AppBarAction[];
}
