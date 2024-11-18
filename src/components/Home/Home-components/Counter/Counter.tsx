import classNames from "classnames";
import useTheme from "../../../../customHooks/useTheme";
import styles from "./Counter.module.scss";

const Counter = () => {
  const { theme, colorLight, colorDark } = useTheme();

  const containerClass = theme === 'dark' ? styles.container_dark : styles.container_light;
  const textColorClass = theme === 'dark' ? styles.font_dark : styles.font_light;
  
  const containerStyle = classNames(styles.counter, containerClass);
  const textStyle = classNames(styles.counter_text, textColorClass);

  return (
    <ul className={containerStyle}>
      <li className={styles.counter_item}>
        <p className={styles.counter_number}>3</p>
        <p className={textStyle}>Own Projects</p> 
      </li>
      <li className={styles.counter_item}>
        <p className={styles.counter_number}>3</p>
        <p className={textStyle}>Years of Experiance</p> 
      </li>
      <li className={styles.counter_item}>
        <p className={styles.counter_number}>14</p>
        <p className={textStyle}>Development Tools</p> 
      </li>
    </ul>
  );
};

export default Counter;
