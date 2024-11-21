import { useState } from "react";
import styles from "./Switcher.module.scss";
import { Sun, Moon } from "../SVGs/Icons";
import classNames from "classnames";
import useTheme from "../../customHooks/useTheme";

const Switcher = () => {
  const { theme, toggleTheme, colorLight } = useTheme();

  const [isDark, setIsDark] = useState(theme === "dark");

  const themeClassName = isDark ? styles.dark : styles.light;
  const iconColor = isDark ? colorLight : "#bcbc02";
  const iconClassName = isDark ? styles.icon__dark : styles.icon__light;

  const iconSize = 21;

  const handleClick = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <div className={classNames(styles.switcherBox, themeClassName)}>
      <label
        htmlFor="switcher"
        className={classNames(styles.switcher, themeClassName)}
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
                styles.icon,
                iconClassName,
                {
                  [styles.hiden]: isDark,
                })}
          >
            <Sun width={iconSize} height={iconSize} color={iconColor} />
          </i>

          <i
            className={classNames(
              styles.icon,
              iconClassName,
              {
                [styles.hiden]: !isDark,
              })}
          >
            <Moon width={iconSize} height={iconSize} color={iconColor} />
          </i>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
