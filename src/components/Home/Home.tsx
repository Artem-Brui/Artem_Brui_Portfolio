import Greating from "./Home-components/Greating";
import Descreption from "./Home-components/Descreption";
import Counter from "./Home-components/Counter/Counter";
import Photo from "./Home-components/Photo";

import styles from "./Home.module.scss";
import FormLink from "./Home-components/FormLink";

const Home = () => {
  return (
    <section className={styles.home_items}>
      <Photo />
      <Greating />
      <Descreption />
      <FormLink />
      <Counter />
    </section>
  );
};

export default Home;
