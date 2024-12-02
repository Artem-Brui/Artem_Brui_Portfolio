import { useState } from "react";
import cl from "./Switcher.module.scss";
import classNames from "classnames";
import useTheme from "@customHooks/useTheme";
import { Moon, Sun } from "@components/SVGs/Icons";

const Switcher = () => {
  const { theme, toggleTheme, colorBrand } = useTheme();

  const [isDark, setIsDark] = useState(theme === "dark");

  const iconColor = !isDark ? colorBrand : "#fafa83";
  const iconClassName = isDark ? cl.icon__dark : cl.icon__light;

  const iconSize = 21;

  const handleClick = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <div className={classNames(cl.switcherBox, cl[theme])}>
      <label
        htmlFor="switcher"
        className={classNames(cl.switcher, cl[theme])}
      >
        <input
          id="switcher"
          type="checkbox"
          checked={isDark}
          onChange={handleClick}
        />
        <div>
          <i
            className={
              classNames(
                cl.icon,
                iconClassName,
                {
                  [cl.hiden]: isDark,
                })}
          >
            <Moon width={iconSize} height={iconSize} color={iconColor} />
          </i>

          <i
            className={classNames(
              cl.icon,
              iconClassName,
              {
                [cl.hiden]: !isDark,
              })}
          >
            <Sun width={iconSize} height={iconSize} color={iconColor} />
          </i>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
