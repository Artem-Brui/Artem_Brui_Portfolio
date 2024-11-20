
import styles from "./Skills.module.scss";
import SkillsList from "./Skills-components/SkillsList";
import SectionHead from "../SectionHead";

const Skills = () => {
  const title = 'Skills';
  const textHead = 'I am striving to never stop learning and improving';

  return (
    <section className={styles.skills}>
      <SectionHead title={title} text={textHead} />
      <SkillsList />
    </section>);
};

export default Skills;
