import { ReactNode } from "react";

export type ChildrenType = {
  children: ReactNode;
}

export type contextThemeType = {
  theme: string;
  toggleTheme: () => void;
  colorLight: string;
  colorDark: string;
  colorBrand: string;
}