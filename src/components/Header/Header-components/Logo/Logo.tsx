import { content } from "../../../../content/mainContent_EN";
import Tag from "../../../Home/Home-components/Tag";
import styles from "./Logo.module.scss";

const Logo = () => {
  const h1Content = content.Header.ownerName;
  return (
    <div>
      <Tag content="<A/>" />
      <h1 className={styles.title}>{h1Content}</h1>
    </div>
  );
};

export default Logo;
