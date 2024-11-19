
import styles from "./Skills.module.scss";
import classNames from "classnames";
import SkillsList from "./Skills-components/SkillsList";
import SkillHead from "./Skills-components/SkillHead";

const Skills = () => {
  return (
    <section className={classNames(styles.skills)}>
      <SkillHead />
      <SkillsList />
    </section>);
};

export default Skills;
