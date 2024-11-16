import styles from "./Counter.module.scss";

const Counter = () => {
  return (
    <ul className={styles.counter}>
      <li className={styles.counter_item}>
        <p className={styles.counter_number}>3</p>
        <p className={styles.counter_text}>Own Projects</p> 
      </li>
      <li className={styles.counter_item}>
        <p className={styles.counter_number}>3</p>
        <p className={styles.counter_text}>Years of Experiance</p> 
      </li>
      <li className={styles.counter_item}>
        <p className={styles.counter_number}>14</p>
        <p className={styles.counter_text}>Development Tools</p> 
      </li>
    </ul>
  );
};

export default Counter;
