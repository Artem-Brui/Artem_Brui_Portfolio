import classNames from "classnames";
import styles from "./Footer.module.scss";
import useTheme from "../../customHooks/useTheme";
import { content } from "../../content/mainContent_EN";
import SocLinks from "../Header/Header-components/SocLinks/SocLinks";

const Footer = () => {
  const { theme } = useTheme();

  const footerThemeClass = theme === 'dark' ? styles.dark : styles.light;
  const rightsText = content.Footer.textRights;

  return (
    <footer className={classNames(styles.footer, footerThemeClass)}>
      <SocLinks />

      <p>{rightsText}</p>
    </footer>
  )
};

export default Footer;
