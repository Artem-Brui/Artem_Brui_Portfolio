import classNames from "classnames";
import { content } from "../../../../content/mainContent_EN";
import { SkillType } from "../../../../contexts/Main/types";
import useTheme from "../../../../customHooks/useTheme";
import { FigmaHighlight, PropsIcons } from "../../../SVGs/Icons";
import cl from "./SkillItem.module.scss";

type Props = {
  skill: SkillType;
  index: number;
  moveIndex: number;
  circleRadius: number;
  highlightIndex: number;
};

const skillsAmount = content.SkillsSection.skillsList.length;
const anglePerSkill = 360 / skillsAmount;

const SkillItem: React.FC<Props> = ({ skill, index, moveIndex, circleRadius, highlightIndex }) => {
  const { theme, colorBrand } = useTheme();
  const isThemeDark = theme === 'dark';

  const isHighlighted = highlightIndex === index;

  const iconSize = isHighlighted ? 100 : 30;
  const iconColor = isHighlighted ? skill.logoColor : colorBrand;
  const movementAngle = isHighlighted
    ? Math.floor(moveIndex / anglePerSkill) * anglePerSkill
    : moveIndex;
  
  const IconComponent: React.FC<PropsIcons> =
    skill.name !== 'figma' || !isHighlighted
      ? skill.logo
      : FigmaHighlight;
      
  const rotateAngle = anglePerSkill * (index + 1) + movementAngle;

  return (
      <li
      className={classNames(cl.list__item, {
        [cl.highlighted]: isHighlighted,
        [cl.dark]: isHighlighted && isThemeDark,
        [cl.light]: isHighlighted && !isThemeDark,
      })}
      style={{
          width: iconSize,
          height: iconSize,
          transform: `rotate(${rotateAngle}deg) translate(0, -${circleRadius}px) rotate(-${rotateAngle}deg)`
        }}>
        {IconComponent ? (
          <IconComponent width={iconSize} height={iconSize} color={iconColor} />
        ) : (
          <p>Not found</p>
        )}
      </li>
      
  );
};

export default SkillItem;
