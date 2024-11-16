import Tag from "../Tag";
import styles from "./Descreption.module.scss";
import classNames from "classnames";

const Descreption = () => {
  return (
    <>
      <div className={styles.descreption}>
        <Tag content={"<p>"} />

        <p className={classNames(styles.text, styles.descreption_text)}>
          Dedicated to clean code, seamless collaboration, and helping your team
          deliver outstanding results.
        </p>

        <Tag content={"<p>"} />
      </div>
    </>
  );
};

export default Descreption;
