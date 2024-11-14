import { createContext } from "react";
import { contextThemeType } from "./types.ts";

const ThemeContext = createContext<contextThemeType | null>(null);

export default ThemeContext;