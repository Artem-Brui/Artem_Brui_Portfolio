import { content } from "../../../../content/mainContent_EN";
import useTheme from "../../../../customHooks/useTheme";
import getResponsiveIconSize from "../../../Header/Header-components/SocLinks/service";
import { Mail } from "../../../SVGs/Icons";
import styles from "./FormLink.module.scss";

const FormLink = () => {
  const { theme, colorBrand, colorDark, colorLight } = useTheme();

  const callToAction = content.HomeSection.callToAction;
  const textColor = theme === "dark" ? colorLight : colorDark;
  const iconSize = getResponsiveIconSize(1.7)

  return (
    <a className={styles.form_link} href="#">
      <p style={{ color: textColor }}>{callToAction}</p>
      <i className={styles.icon}>
        <Mail width={iconSize} height={iconSize} color={colorBrand} />
      </i>
    </a>
  );
};

export default FormLink;
