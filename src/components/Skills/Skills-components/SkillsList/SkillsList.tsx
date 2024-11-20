import useTheme from "../../../../customHooks/useTheme";
import Skill from "../Skill/Skill";
import styles from "./SkillsList.module.scss";

const SkillsList = () => {
  const { currentSkills } = useTheme();
  
  return (
    <ul className={styles.list}>
      {currentSkills.map((item, i) => {
        
        return (
          <Skill key={i} skill={item} />
        );
      })}
    </ul>
  );
};

export default SkillsList;
