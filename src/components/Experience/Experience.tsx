import classNames from "classnames";
import { content } from "../../content/mainContent_EN";
import SectionHead from "../SectionHead";
import styles from "./Experience.module.scss";
import useTheme from "../../customHooks/useTheme";
import Job from "./Experience-components/Job";

const Experience = () => {
  const { theme } = useTheme();

  const sectionClass = theme === "dark" ? styles.dark : styles.light;

  const title = content.ExperienceSection.sectionName;
  const textHead = content.ExperienceSection.sectionHeader;
  const jobList = [...content.ExperienceSection.jobs];

  return (
    <section className={classNames(styles.experience, sectionClass)}>
      <SectionHead title={title} text={textHead} />
      <ul className={styles.jobs__list}>
        {jobList.map((job, index) => {
          return (
            <Job key={index} job={job} jobIndex={index} />
          )
        })}
      </ul>
    </section>
  );
};

export default Experience;
