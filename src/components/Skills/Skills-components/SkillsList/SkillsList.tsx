import { content } from "../../../../services/content";
import Skill from "../Skill/Skill";
import styles from "./SkillsList.module.scss";

const SkillsList = () => {
  const skillsList = [...content.SkillsSection.skillsList];
  
  return (
    <ul className={styles.list}>
      {skillsList.map((item, i) => {
        
        return (
          <Skill key={i} skill={item} />
        );
      })}
    </ul>
  );
};

export default SkillsList;
