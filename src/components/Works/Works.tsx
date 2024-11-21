import classNames from "classnames";
import { content } from "../../services/content";
import SectionHead from "../SectionHead";
import styles from "./Works.module.scss";
import useTheme from "../../customHooks/useTheme";
import computer from '../../images/computer.webp'

const Works = () => {
  const { theme } = useTheme();

  const sectionClass = theme === 'dark' ? styles.dark : styles.light;

  const title = content.WorksSection.sectionName;
  const textHead = content.WorksSection.sectionHeader;

  const worksList = [...content.WorksSection.works]

  return (
    <section className={classNames(styles.works, sectionClass)}>
      <SectionHead title={title} text={textHead} />

      {worksList.map((work, index) => {
        return (
          <div className={styles.works__list}>
            <img className={styles.computer} src={computer} alt="Computer" />
            <a className={styles.link} href="#">View Website</a>
          </div>
        )
      })}
    </section>
  );
};

export default Works;
