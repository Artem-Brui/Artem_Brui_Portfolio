import classNames from "classnames";
import photo from "../../../../../public/images/photo.webp";
import useTheme from "../../../../customHooks/useTheme";
import styles from "./Photo.module.scss";

const Photo = () => {
  const { theme } = useTheme();

  const borderClass = theme === "dark" ? null : styles.light;

  return (
    <div className={styles.container}>
      <img
        className={classNames(styles.myPhoto, borderClass)}
        src={photo}
        alt="My photo"
      />
    </div>
  );
};

export default Photo;
