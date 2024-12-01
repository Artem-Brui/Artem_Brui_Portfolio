import classNames from "classnames";
import cl from "./Footer.module.scss";
import useTheme from "../../customHooks/useTheme";
import { content } from "../../content/mainContent_EN";
import SocLinks from "../Header/Header-components/SocLinks/SocLinks";

const Footer = () => {
  const { theme } = useTheme();

  const rightsText = content.Footer.textRights;

  return (
    <footer className={classNames(cl.footer, cl[theme])}>
      <div className={cl.footer_container}>
        <SocLinks />
  
        <p>{rightsText}</p>
      </div>
    </footer>
  )
};

export default Footer;
