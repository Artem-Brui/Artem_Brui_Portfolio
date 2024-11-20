import { useContext } from "react";
import ThemeContext from "../contexts/Main/service.ts";
import { contextThemeType } from "../contexts/Main/types.ts";

export default function useTheme(): contextThemeType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Context is not defined!!..");
  }

  return context;
}
