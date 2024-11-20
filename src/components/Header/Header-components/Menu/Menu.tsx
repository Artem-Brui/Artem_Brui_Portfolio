import useTheme from "../../../../customHooks/useTheme";
import { BurgerMenu } from "../../../SVGs/Icons";
import styles from "./Menu.module.scss";

const Menu = () => {
  const { theme, colorLight, colorDark } = useTheme();
  
  const iconColor = theme === 'dark' ? colorLight : colorDark;
  const iconSize = 40;

  return (
    <nav className={styles.navigation}>
      <a
        className={styles.burger_menu}
        onClick={() => {console.log(444444);
        }}
      >
        <BurgerMenu
          width={iconSize}
          height={iconSize}
          color={iconColor} />
      </a>
    </nav>
  );
};

export default Menu;
