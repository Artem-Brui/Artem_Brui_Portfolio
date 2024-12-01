import Greating from "./Home-components/Greating";
import Descreption from "./Home-components/Descreption";
import Counter from "./Home-components/Counter/Counter";
import Photo from "./Home-components/Photo";
import styles from "./Home.module.scss";
import useTheme from "../../customHooks/useTheme";
import classNames from "classnames";

const Home = () => {
  const { theme } = useTheme();

  return (
    <section className={classNames(styles.home, styles[theme])} >
      <div className={styles.section_container}>
        <Photo />
        <Greating />
        <Descreption />
        <Counter />
      </div>
    </section>
  );
};

export default Home;
