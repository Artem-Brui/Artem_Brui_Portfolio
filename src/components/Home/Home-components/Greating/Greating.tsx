import { content } from "../../../../content/mainContent_EN";
import Tag from "../Tag";
import styles from "./Greating.module.scss";

const Greating = () => {
  const contentList = [...content.HomeSection.greating];

  return (
    <div className={styles.greating}>
      <Tag content={"<h1>"} />

      <div className={styles.text__container}>
        {contentList.map((text, index) => {
          return (
            <p key={index} className={styles.greating_text}>
              {text}
              <br />
            </p>
          );
        })}
      </div>

      <Tag content={"<h1>"} />
    </div>
  );
};

export default Greating;
