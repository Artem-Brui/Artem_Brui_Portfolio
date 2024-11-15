import useTheme from "../../../../customHooks/useTheme";
import styles from "./Menu.module.scss";
import classNames from "classnames";

const Menu = () => {
  const { theme } = useTheme();

  return (
    <nav className={styles.navigation}>
      <button
        className={classNames(styles.burger_menu, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        onClick={() => {}}
      ></button>
    </nav>
  );
};

export default Menu;
