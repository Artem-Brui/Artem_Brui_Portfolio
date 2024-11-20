import { useState } from "react";
import styles from "./Switcher.module.scss";
import { Sun, Moon } from "../SVGs/Icons";
import classNames from "classnames";
import useTheme from "../../customHooks/useTheme";

const Switcher = () => {
  const { theme, toggleTheme, colorBrand, colorDark, colorLight } = useTheme();
  const isThemeDark = theme === "dark";
  
  const [isDark, setIsDark] = useState(isThemeDark);

  const switcherBackColor = isThemeDark ? colorLight : colorDark;
  const iconBoxTransform = isThemeDark ? 0 : 19;
  const iconBoxSize = 25;
  const iconSize = iconBoxSize - 4;

  const iconBoxStyles: React.CSSProperties = {
    transform: `translateX(${iconBoxTransform}px)`,
  };

  const switcherStyles = {
    backgroundColor: switcherBackColor,
  };

  const handleClick = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <div className={styles.switcherBox}>
      <label
        htmlFor="switcher"
        className={styles.switcher}
        style={switcherStyles}
      >
        <input
          id="switcher"
          type="checkbox"
          checked={isDark}
          onChange={handleClick}
        />
        <div>
          <i
            className={classNames(styles.icon, { [styles.hiden]: isThemeDark })}
            style={iconBoxStyles}
          >
            <Sun width={iconSize} height={iconSize} color={"#f4f47c"} />
          </i>

          <i
            className={classNames(styles.icon, { [styles.hiden]: !isThemeDark })}
            style={iconBoxStyles}
          >
            <Moon width={iconSize} height={iconSize} color={colorBrand} />
          </i>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
