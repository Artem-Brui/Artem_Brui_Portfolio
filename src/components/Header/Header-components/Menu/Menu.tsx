import useTheme from "@customHooks/useTheme";
import getResponsiveIconSize from "../SocLinks/service";
import cl from "./Menu.module.scss";
import { BurgerMenu } from "@components/SVGs/Icons";

const Menu = () => {
  const { theme, colorLight, colorDark } = useTheme();
  
  const iconColor = theme === 'dark' ? colorLight : colorDark;
  
  const iconSize = getResponsiveIconSize(1.8);

  return (
    <nav className={cl.navigation}>
      <a
        className={cl.burger_menu}
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
