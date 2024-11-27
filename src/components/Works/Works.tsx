import classNames from "classnames";
import { content } from "../../content/mainContent_EN";
import SectionHead from "../SectionHead";
import styles from "./Works.module.scss";
import useTheme from "../../customHooks/useTheme";
import WorkItem from "./Works-components/WorkItem";

const Works = () => {
  const { theme } = useTheme();

  const sectionClass = theme === "dark" ? styles.dark : styles.light;

  const title = content.WorksSection.sectionName;
  const textHead = content.WorksSection.sectionHeader;

  const worksList = [...content.WorksSection.works];

  return (
    <section className={classNames(styles.works, sectionClass)}>
      <SectionHead title={title} text={textHead} />

      <div className={styles.works__list}>
        {worksList.map((work, index) => {
          return (
            <WorkItem
              key={index}
              work={work} />
          );
        })}
      </div>
    </section>
  );
};

export default Works;
