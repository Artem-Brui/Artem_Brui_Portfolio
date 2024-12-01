import classNames from "classnames";
import { content } from "../../../../content/mainContent_EN";
import useTheme from "../../../../customHooks/useTheme";
import cl from "./AboutTitle.module.scss";

const AboutTitle = () => {
  const { theme } = useTheme();

  const sectionName = content.AboutSection.sectionName;
  return (
    <h3 className={classNames(cl.head, cl[theme])}>
      {sectionName}
    </h3>
  );
};

export default AboutTitle;
