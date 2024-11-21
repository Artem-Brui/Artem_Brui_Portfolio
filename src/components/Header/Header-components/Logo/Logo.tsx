import Tag from "../../../Home/Home-components/Tag";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <Tag content="<A/>" />
      <h1 className={styles.title}>Artem Brui</h1>
    </div>
  );
};

export default Logo;
