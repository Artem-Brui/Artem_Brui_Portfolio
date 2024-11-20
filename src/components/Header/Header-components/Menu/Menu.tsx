import useTheme from "../../../../customHooks/useTheme";
import { BurgerMenu } from "../../../SVGs/Icons";
import styles from "./Menu.module.scss";

const Menu = () => {
  const { theme, colorLight, colorDark } = useTheme();
  
  const iconColor = theme === 'dark' ? colorLight : colorDark;
  const iconWidth = '40px';
  const iconHeight = '40px';

  return (
    <nav className={styles.navigation}>
      <a
        className={styles.burger_menu}
        onClick={() => {console.log(444444);
        }}
      >
        <BurgerMenu
          width={iconWidth}
          height={iconHeight}
          color={iconColor} />
      </a>
    </nav>
  );
};

export default Menu;
