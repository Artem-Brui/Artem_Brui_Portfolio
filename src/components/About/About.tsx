import classNames from "classnames";
import styles from "./About.module.scss";
import useTheme from "../../customHooks/useTheme";

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section
      className={
        classNames(
          styles.about,
          theme === 'dark' ? styles.dark : styles.light
        )
      } >
      
    </section>
  );
};

export default About;
