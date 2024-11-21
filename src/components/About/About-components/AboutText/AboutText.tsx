import { content } from "../../../../services/content";
import Tag from "../../../Home/Home-components/Tag";
import styles from "./AboutText.module.scss";

const AboutText = () => {
  const greating = content.AboutSection.greating;
  const paragraphsList = content.AboutSection.paragraphsList;

  return (
    <div className={styles.text__container}>
      <Tag content="<p>" />
      <p className={styles.greating}>{greating}</p>

      {paragraphsList.map((parag, index) => {
        return (
          <p
            key={index}
            className={styles.paragraph}>
            {parag.paragraph}
          </p>
        );
      })}

      <Tag content="<p>" />
    </div>
  );
};

export default AboutText;
