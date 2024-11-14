import { useContext } from "react";
import ThemeContext from "../contexts/Theme/service.ts";
import { contextThemeType } from "../contexts/Theme/types.ts";


export default function useTheme(): contextThemeType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Context is not defined!!..');
  }

  return context;
}