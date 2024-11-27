import cl from "./SkillsList.module.scss";
import SkillItem from "../SkillItem";

type Props = {
  skills: string[];
};


const SkillsList: React.FC<Props> = ({ skills }) => {

  return (
    <ul className={cl.skills_list}>
      {skills.map((skill, index) => {
        return (
          <SkillItem
            key={index}
            skill={skill}
          />
        )
      })}
    </ul>
  );
};

export default SkillsList;
