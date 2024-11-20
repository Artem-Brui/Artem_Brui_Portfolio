import { createContext } from "react";
import { contextThemeType } from "./types.ts";

const Context = createContext<contextThemeType | null>(null);

export default Context;