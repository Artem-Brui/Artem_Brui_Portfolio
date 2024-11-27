import styles from "./Skills.module.scss";
import SectionHead from "../SectionHead";
import { content } from "../../content/mainContent_EN";
import useTheme from "../../customHooks/useTheme";
import classNames from "classnames";
import SkillsBoard from "./Skills-components/SkillsBoard";

const Skills = () => {
  const { theme } = useTheme();
  const sectionClass = theme === "dark" ? styles.dark : styles.light;

  const title = content.SkillsSection.sectionName;
  const textHead = content.SkillsSection.sectionHeader;

  return (
    <section className={classNames(styles.skills, sectionClass)}>
      <SectionHead title={title} text={textHead} />
      <SkillsBoard />
    </section>
  );
};

export default Skills;
