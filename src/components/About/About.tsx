import classNames from "classnames";
import styles from "./About.module.scss";
import useTheme from "../../customHooks/useTheme";
import AboutTitle from "./About-components/AboutTitle";
import AboutText from "./About-components/AboutText";
import image from '../../images/laptop.webp';

const About = () => {
  const { theme } = useTheme();
  const background = theme === "dark" ? styles.dark : styles.light;

  return (
    <section
      className={classNames(styles.about, background)}
    >
      <AboutTitle />
      <AboutText />
      <img className={styles.image} src={image} alt="Person typing on the laptop" />
    </section>);
};

export default About;
