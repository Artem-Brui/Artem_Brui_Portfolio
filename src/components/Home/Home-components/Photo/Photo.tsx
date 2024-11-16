import photo from '../../../../../public/images/photo.png'
import styles from "./Photo.module.scss";

const Photo = () => {
  return (
    <img className={styles.myPhoto} src={photo} alt="My photo" />
  );
};

export default Photo;
