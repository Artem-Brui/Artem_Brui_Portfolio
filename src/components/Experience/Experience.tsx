import classNames from "classnames";
import { content } from "../../content/mainContent_EN";
import SectionHead from "../SectionHead";
import styles from "./Experience.module.scss";
import useTheme from "../../customHooks/useTheme";
import computer from "../../images/computer.webp";

const Experience = () => {
  const { theme } = useTheme();

  const sectionClass = theme === "dark" ? styles.dark : styles.light;

  const title = content.ExperienceSection.sectionName;
  const textHead = content.ExperienceSection.sectionHeader;

  const worksList = [...content.WorksSection.works];

  return (
    <section className={classNames(styles.experience, sectionClass)}>
      <SectionHead title={title} text={textHead} />
    </section>
  );
};

export default Experience;
