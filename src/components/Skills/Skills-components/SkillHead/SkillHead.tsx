import styles from "./SkillHead.module.scss";

const SkillHead = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.text}>I am striving to never stop learning and improving</p>
    </div>
  );
};

export default SkillHead;
