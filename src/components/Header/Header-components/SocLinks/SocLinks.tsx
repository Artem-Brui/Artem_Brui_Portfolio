import styles from "./SocLinks.module.scss";

import {Linkedin, GitHub} from "../../../SVGs/Icons";
import useTheme from "../../../../customHooks/useTheme";

const SocLinks = () => {
  const { colorBrand } = useTheme();
  
  const iconWidth = '25px';
  const iconHeight = '25px';

  return (
    <div className={styles.socLinks}>
      <a href="https://www.linkedin.com/in/artem-brui-563252288" target="blank">
        <Linkedin
          width={iconWidth}
          height={iconHeight}
          color={colorBrand} />
      </a>

      <a href="https://github.com/Artem-Brui" target="blank">
      <GitHub
          width={iconWidth}
          height={iconHeight}
          color={colorBrand} />
      </a>
    </div>
  );
};

export default SocLinks;
