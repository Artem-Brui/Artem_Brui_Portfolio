import useTheme from "../../../../customHooks/useTheme";
import { Mail } from "../../../SVGs/Icons";
import styles from "./FormLink.module.scss";

const FormLink = () => {
  const { theme, colorBrand, colorDark, colorLight } = useTheme();

  const textColor = theme === 'dark' ? colorLight : colorDark;
  const iconSize = 40;

  return (
    <a className={styles.form_link} href="#">
      <p style={{color: textColor}}>Let's Talk</p>
      <i className={styles.icon}>
        <Mail
          width={iconSize}
          height={iconSize}
          color={colorBrand}/>
      </i>
    </a>
  );
};

export default FormLink;
