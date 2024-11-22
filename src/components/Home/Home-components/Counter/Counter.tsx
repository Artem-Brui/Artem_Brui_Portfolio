import classNames from "classnames";
import useTheme from "../../../../customHooks/useTheme";
import styles from "./Counter.module.scss";
import { content } from "../../../../content/mainContent_EN";

const counterContent = [
  {
    name: content.HomeSection.counter.projectsTitle,
    number: content.HomeSection.counter.projectsAmount,
  },
  {
    name: content.HomeSection.counter.carrierTitle,
    number:
      new Date().getFullYear() -
      Number(content.HomeSection.counter.carrierStarted),
  },
  {
    name: content.HomeSection.counter.skillsTitle,
    number: content.HomeSection.counter.skillsAmount,
  },
];

const Counter = () => {
  const { theme } = useTheme();

  const containerClass =
    theme === "dark" ? styles.container_dark : styles.container_light;
  const textColorClass =
    theme === "dark" ? styles.font_dark : styles.font_light;

  const containerStyle = classNames(styles.counter, containerClass);
  const textStyle = classNames(styles.counter_text, textColorClass);

  return (
    <ul className={containerStyle}>
      {counterContent.map((item, index) => {
        return (
          <li key={index} className={styles.counter_item}>
            <p className={styles.counter_number}>{item.number}</p>
            <p className={textStyle}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Counter;
