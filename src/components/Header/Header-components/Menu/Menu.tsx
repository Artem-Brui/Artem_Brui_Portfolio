import useTheme from "../../../../customHooks/useTheme";
import { BurgerMenu } from "../../../SVGs/Icons";
import getResponsiveIconSize from "../SocLinks/service";
import styles from "./Menu.module.scss";

const Menu = () => {
  const { theme, colorLight, colorDark } = useTheme();
  
  const iconColor = theme === 'dark' ? colorLight : colorDark;
  
  const iconSize = getResponsiveIconSize(1.8);

  return (
    <nav className={styles.navigation}>
      <a
        className={styles.burger_menu}
        onClick={() => {console.log('menuClicked');
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
