import { useState } from "react";
import useTheme from "../../../../customHooks/useTheme";
import styles from "./Switcher.module.scss";
import classNames from "classnames";

const Switcher = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const handleClick = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <div className={styles.switcherBox}>
      <label
        htmlFor="switcher"
        className={classNames(styles.switcher, {
          [styles.dark]: isDark,
          [styles.light]: !isDark,
        })}
      >
        <input
          id="switcher"
          type="checkbox"
          checked={isDark}
          onChange={handleClick}
        />
      </label>
    </div>
  );
};

export default Switcher;
