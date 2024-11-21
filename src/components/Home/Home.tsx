import Greating from "./Home-components/Greating";
import Descreption from "./Home-components/Descreption";
import Counter from "./Home-components/Counter/Counter";
import Photo from "./Home-components/Photo";
import styles from "./Home.module.scss";
import FormLink from "./Home-components/FormLink";
import useTheme from "../../customHooks/useTheme";
import classNames from "classnames";

const Home = () => {
  const { theme } = useTheme();

  const themeClass = theme === 'dark' ? styles.dark : styles.light;

  return (
    <section className={classNames(styles.home_items, themeClass)} >
      <Photo />
      <Greating />
      <Descreption />
      <FormLink />
      <Counter />
    </section>
  );
};

export default Home;
