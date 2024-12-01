import classNames from "classnames";
import { content } from "../../../../content/mainContent_EN";
import useTheme from "../../../../customHooks/useTheme";
import Tag from "../../../Home/Home-components/Tag";
import cl from "./AboutText.module.scss";

const AboutText = () => {
  const { theme } = useTheme()
  const greating = content.AboutSection.greating;
  const paragraphsList = content.AboutSection.paragraphsList;

  return (
    <div className={classNames(cl.text__container, cl[theme])}>
      <Tag content="<p>" />
      <p className={cl.greating}>{greating}</p>

      {paragraphsList.map((parag, index) => {
        return (
          <p key={index} className={cl.paragraph}>
            {parag.paragraph}
          </p>
        );
      })}

      <Tag content="<p>" />
    </div>
  );
};

export default AboutText;
