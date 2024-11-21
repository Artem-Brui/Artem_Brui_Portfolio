
import styles from "./Skills.module.scss";
import SkillsList from "./Skills-components/SkillsList";
import SectionHead from "../SectionHead";
import { content } from "../../services/content";

const Skills = () => {
  const title = content.SkillsSection.sectionName;
  const textHead = content.SkillsSection.sectionHeader;

  return (
    <section className={styles.skills}>
      <SectionHead title={title} text={textHead} />
      <SkillsList />
    </section>);
};

export default Skills;
