import Tag from "../../../Home/Home-components/Tag";
import styles from "./AboutText.module.scss";

export const AboutText = () => {
  return (
    <div className={styles.text__container}>
      <Tag content="<p>" />
      <h4 className={styles.greating}>Hello!</h4>

      <p className={styles.text}>
        My name is <span className="highlight">Artem</span> and I specialize in
        Web Developement that utilizes <span>JavaScript</span>,{" "}
        <span>TypeScript</span>, <span>REACT</span>, <span>EXPRESS</span>, and{" "}
        <span>MongoDB</span> etc.
      </p>

      <p className={styles.text}>
        I am a highly motivated individual and eternal optimist dedicated to
        writing clear, concise, robust code that works. Striving to never stop
        learning and improving.
      </p>

      <p className={styles.text}>
        When I'm not coding, I am writing bolgs, reading, or picking up some new
        hands-on art project like photography.
      </p>

      <p className={styles.text}>
        With a strong focus on problem-solving, client and project management,
        and analytical thinking, I am self-motivated and equipped to deliver
        robust web solutions that align with business objectives.
      </p>

      <Tag content="<p>" />
    </div>
  );
};

export default AboutText;
