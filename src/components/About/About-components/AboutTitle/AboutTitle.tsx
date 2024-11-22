import { content } from "../../../../content/mainContent_EN";
import styles from "./AboutTitle.module.scss";

const AboutTitle = () => {
  const sectionName = content.AboutSection.sectionName;
  return <h3 className={styles.head}>{sectionName}</h3>;
};

export default AboutTitle;
