import classNames from "classnames";
import styles from "./Contact.module.scss";
import useTheme from "../../customHooks/useTheme";
import { content } from "../../content/mainContent_EN";
import SectionHead from "../SectionHead";
import Form from "./Contact-components/Form";

const Contact = () => {
  const { theme } = useTheme();
  const sectionClass = theme === "dark" ? styles.dark : styles.light;

  const title = content.ContactSection.sectionName;
  const textHead = content.ContactSection.sectionHeader;

  return (
    <section className={classNames(styles.contact, sectionClass)}>
      <SectionHead title={title} text={textHead} />
      <Form />

    </section>
  )
};

export default Contact;
