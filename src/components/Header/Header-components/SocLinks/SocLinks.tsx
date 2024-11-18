import styles from "./SocLinks.module.scss";

import { LinkedinIcon, GitHubIcon } from "./Icons";
import useTheme from "../../../../customHooks/useTheme";

const SocLinks = () => {
  const { theme, colorBrand } = useTheme();
  const iconColor = theme === 'dark' ? colorBrand : colorBrand;
  const iconWidth = 20;
  const iconHeight = 20;

  return (
    <div className={styles.socLinks}>
      <a href="https://www.linkedin.com/in/artem-brui-563252288" target="blank">
        <LinkedinIcon color={iconColor} width={iconWidth} height={iconHeight} />
      </a>
      <a href="https://github.com/Artem-Brui" target="blank">
        <GitHubIcon color={iconColor} width={iconWidth} height={iconHeight} />
      </a>
    </div>
  );
};

export default SocLinks;
