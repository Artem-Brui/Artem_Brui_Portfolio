import { useState } from "react";
import useTheme from "../../../../customHooks/useTheme";
import styles from "./Switcher.module.scss";
import { Sun, Moon } from "../../../SVGs/Icons";
import classNames from "classnames";

const Switcher = () => {
  const { theme, toggleTheme, colorBrand, colorDark, colorLight } = useTheme();
  const isThemeDark = theme === "dark";
  
  const [isDark, setIsDark] = useState(isThemeDark);

  const switcherBackColor = isThemeDark ? colorDark : colorLight;
  const iconBoxColor = isThemeDark ? colorLight : colorDark;
  const iconBoxTransform = isThemeDark ? 0 : 18;
  const iconWidth = "15px";
  const iconHeight = "15px";

  const handleClick = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  const iconBoxStyles: React.CSSProperties = {
    backgroundColor: iconBoxColor,
    width: parseInt(iconWidth) + 7,
    height: parseInt(iconHeight) + 7,
    transform: `translateX(${iconBoxTransform}px)`
  };

  const switcherStyles = {
    backgroundColor: switcherBackColor,
  }

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

        <i
          className={classNames(
            styles.icon,
            {
              [styles.hiden]: isThemeDark,
            })}
          style={iconBoxStyles}>
          <Sun
            width={iconWidth} 
            height={iconHeight} 
            color={"#f4f47c"} />
        </i>

        <i
          className={
            classNames(
              styles.icon,
              styles.moon,
              {
                [styles.hiden]: !isThemeDark,
              })}
          style={iconBoxStyles}
        >
          <Moon 
            width={iconWidth} 
            height={iconHeight} 
            color={colorBrand} />
        </i>
      </label>
    </div>
  );
};

export default Switcher;
