import Tag from "../Tag";
import styles from "./Greating.module.scss";
import classNames from "classnames";

const Greating = () => {
  return (
    <div className={styles.greating}>
      <Tag content={"<h1>"} />

      <p className={classNames(styles.text, styles.greating_text)}>
        Hey,
        <br />
        I'm <span>Artem</span>
        <br />
        Full Stack Developer
      </p>

      <Tag content={"<h1>"} />
    </div>
  );
};

export default Greating;
