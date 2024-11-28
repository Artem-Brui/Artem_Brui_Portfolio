import cl from "./SkillsListWorks.module.scss";
import SkillItem from "../SkillItemWorks";

type Props = {
  skills: string[];
};


const SkillsListWorks: React.FC<Props> = ({ skills }) => {

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

export default SkillsListWorks;
