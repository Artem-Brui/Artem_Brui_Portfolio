import styles from "./SocLinks.module.scss";

import {Linkedin, GitHub} from "../../../SVGs/Icons";
import useTheme from "../../../../customHooks/useTheme";

const SocLinks = () => {
  const { colorBrand } = useTheme();
  
  const iconSize = 25;

  return (
    <div className={styles.socLinks}>
      <a href="https://www.linkedin.com/in/artem-brui-563252288" target="blank">
        <Linkedin
          width={iconSize}
          height={iconSize}
          color={colorBrand} />
      </a>

      <a href="https://github.com/Artem-Brui" target="blank">
      <GitHub
          width={iconSize}
          height={iconSize}
          color={colorBrand} />
      </a>
    </div>
  );
};

export default SocLinks;
