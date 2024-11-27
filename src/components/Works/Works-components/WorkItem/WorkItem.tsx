import classNames from "classnames";
import cl from "./WorkItem.module.scss";
import computer from "../../../../images/computer.webp";
import React from "react";
import useTheme from "../../../../customHooks/useTheme";
import { content } from "../../../../content/mainContent_EN";
import SkillsList from "../SkillsList";
import ChallengeList from "../ChallengeList";

type Props = {
  work: {
    name: string;
    link: string;
    previewImage: string;
    created: string,
    challenges: string[];
    skills: string[];
  };
};

const WorkItem: React.FC<Props> = ({ work }) => {
  const { name, link, previewImage, created, challenges, skills } = work;
  const { buttonTitle, createdTitle } = content.WorksSection;

  const { theme } = useTheme();

  const workItemClass =
    theme === "dark" ? cl.work__item__dark : cl.work__item__light;


  return (
    <div className={classNames(cl.work__item, workItemClass)}>
      <h4 className={cl.title}>
        {name}
      </h4>

      <p className={cl.date}>
        {createdTitle}{' '}{created}
      </p>

      <div className={cl.item__image}>
        <img className={cl.computer} src={computer} alt="Computer" />

        <div className={cl.preview_container}>
          <img className={cl.preview} src={previewImage} alt="Preview" />
        </div>
      </div>

      <SkillsList skills={skills} />
      <ChallengeList challenges={challenges} />

      <a className={cl.link} href={link} target="_blank">
        {buttonTitle}
      </a>
    </div>
  );
};

export default WorkItem;
