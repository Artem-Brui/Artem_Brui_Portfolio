import { content } from "../../../../services/content";
import styles from "./AboutTitle.module.scss";

const AboutTitle = () => {
  const sectionName = content.AboutSection.sectionName;
  return (
    <h3
      className={styles.head}>
      {sectionName}
    </h3>
  );
};

export default AboutTitle;
