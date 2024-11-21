import photo from "../../../../images/photo.webp";
import styles from "./Photo.module.scss";

const Photo = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.myPhoto}
        src={photo}
        alt="My photo"
      />
    </div>
  );
};

export default Photo;
