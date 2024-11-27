import cl from "./SkillItem.module.scss";
import React from "react";
import { getSkillLogo, getSkillLogoColor } from "./service";
import { FigmaHighlight } from "../../../SVGs/Icons";

type Props = {
  skill: string;
};

const SkillItem: React.FC<Props> = ({ skill }) => {
  const SkillLogoColor = getSkillLogoColor(skill);
  const SkillName = skill;
  const SkillLogo = skill !== "figma" ? getSkillLogo(skill) : FigmaHighlight;

  const logoSize = 25;

  return (
    <li className={cl.skills_item}>
      {typeof SkillLogo === "string" ? (
        <p className={cl.skill_logo}>{SkillLogo}</p>
      ) : (
        <div style={{ width: `${logoSize}px` }} className={cl.skill_logo}>
          <SkillLogo
            width={logoSize}
            height={logoSize}
            color={SkillLogoColor}
          />
        </div>
      )}
      <p className={cl.skill_name}>
        {SkillName}
      </p>
    </li>
  );
};

export default SkillItem;
