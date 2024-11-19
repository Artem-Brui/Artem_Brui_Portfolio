import { currentSkils } from "../../currentSkillsList";
import Skill from "../Skill/Skill";
import styles from "./SkillsList.module.scss";

const SkillsList = () => {

  return (
    <ul className={styles.list}>
      {currentSkils.map((item, i) => {
        return (
          <Skill key={i} skill={item} />
        );
      })}
    </ul>
  );
};

export default SkillsList;
