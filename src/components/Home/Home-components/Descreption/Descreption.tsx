import { content } from "../../../../services/content";
import Tag from "../Tag";
import styles from "./Descreption.module.scss";

const Descreption = () => {
  const text = content.HomeSection.descreption;
  return (
    <>
      <div className={styles.descreption}>
        <Tag content={"<p>"} />
        <p
          className={styles.descreption_text}>
          {text}
        </p>

        <Tag content={"<p>"} />
      </div>
    </>
  );
};

export default Descreption;
