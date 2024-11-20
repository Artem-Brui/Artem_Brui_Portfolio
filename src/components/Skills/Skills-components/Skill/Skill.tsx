import { SkillType } from "../../../../contexts/Main/types";
import useTheme from "../../../../customHooks/useTheme";
import { PropsIcons } from "../../../SVGs/Icons";
import styles from "./Skill.module.scss";

type Props = {
  skill: SkillType;
};

const Skill: React.FC<Props> = ({ skill }) => {
  const { name, logo } = skill;

  const { colorBrand } = useTheme();

  const iconSize = "55px";
  const IconComponent: React.FC<PropsIcons> = logo;

  return (
    <li className={styles.list__item}>
      {IconComponent ? (
        <IconComponent width={iconSize} height={iconSize} color={colorBrand} />
      ) : (
        <p>Not found</p>
      )}
      <p className={styles.title}>{name}</p>
    </li>
  );
};

export default Skill;
