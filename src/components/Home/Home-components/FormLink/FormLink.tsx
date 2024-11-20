import useTheme from "../../../../customHooks/useTheme";
import { Mail } from "../../../SVGs/Icons";
import styles from "./FormLink.module.scss";

const FormLink = () => {
  const { theme, colorBrand, colorDark, colorLight } = useTheme();

  const textColor = theme === 'dark' ? colorLight : colorDark;
  const iconWidth = '40px';
  const iconHeight = '40px';

  return (
    <a className={styles.form_link} href="#">
      <p style={{color: textColor}}>Let's Talk</p>
      <i className={styles.icon}>
        <Mail
          width={iconWidth}
          height={iconHeight}
          color={colorBrand}/>
      </i>
    </a>
  );
};

export default FormLink;
