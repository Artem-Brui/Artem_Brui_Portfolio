import { useState } from "react";

import Context from "./service.ts";
import { ChildrenType } from "./types.ts";
import contextData from "./contextData.ts";

export const ContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const { colorLight, colorDark, colorDarkPlus, colorBrand } = contextData;

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <Context.Provider
      value={{ theme, toggleTheme, colorLight, colorDark, colorDarkPlus, colorBrand }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
