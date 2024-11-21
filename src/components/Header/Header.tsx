import useTheme from "../../customHooks/useTheme.ts";
import Logo from "./Header-components/Logo/Logo.tsx";
import Menu from "./Header-components/Menu/Menu.tsx";
import SocLinks from "./Header-components/SocLinks/SocLinks.tsx";
import styles from "./Header.module.scss";

const Header = () => {
  const { theme } = useTheme();

  const headerClass = theme === 'dark' ? styles.dark : styles.light;

  return (
    <header className={headerClass}>
      <div className={styles.header}>
        <Logo />
        <SocLinks />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
