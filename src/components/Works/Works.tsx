import classNames from "classnames";
import { content } from "../../content/mainContent_EN";
import SectionHead from "../SectionHead";
import styles from "./Works.module.scss";
import useTheme from "../../customHooks/useTheme";
import computer from "../../images/computer.webp";

const Works = () => {
  const { theme } = useTheme();

  const sectionClass = theme === "dark" ? styles.dark : styles.light;
  const workItemClass =
    theme === "dark" ? styles.work__item__dark : styles.work__item__light;

  const title = content.WorksSection.sectionName;
  const textHead = content.WorksSection.sectionHeader;

  const worksList = [...content.WorksSection.works];

  return (
    <section className={classNames(styles.works, sectionClass)}>
      <SectionHead title={title} text={textHead} />

      <div className={styles.works__list}>
        {worksList.map((work, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.work__item, workItemClass)}
            >
              <h4 className={styles.title}>{work.name}</h4>

              <div className={styles.item__image}>
                <img
                  className={styles.computer}
                  src={computer}
                  alt="Computer"
                />

                <div className={styles.preview_container}>
                  <img
                    className={styles.preview}
                    src={work.previewImage}
                    alt="Preview"
                  />
                </div>
              </div>
              
              <a className={styles.link} href={work.link} target="_blank">
                {work.buttonTitle}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
