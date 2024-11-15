import Logo from "./Header-components/Logo/Logo.tsx";
import Menu from "./Header-components/Menu/Menu.tsx";
import SocLinks from "./Header-components/SocLinks/SocLinks.tsx";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SocLinks />
      <Menu />
    </header>
  );
};

export default Header;
