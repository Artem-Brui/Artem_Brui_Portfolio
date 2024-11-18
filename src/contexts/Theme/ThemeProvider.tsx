import { useState } from "react";

import ThemeContext from "./service.ts";
import { ChildrenType } from "./types.ts";

export const ThemeProvider: React.FC<ChildrenType> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const colorLight = '#fffff';
  const colorDark = '#292F36';
  const colorBrand = '#569cd6';

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colorLight, colorDark, colorBrand }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
