import * as React from "react";

import type { Theme } from "../theme/types";
import { lightTheme } from "../theme/light";
import { ThemeContext } from "./ThemeContext";

export interface MaterialProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export function MaterialProvider({ theme, children }: MaterialProviderProps) {
  return (
    <ThemeContext.Provider value={theme ?? lightTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
