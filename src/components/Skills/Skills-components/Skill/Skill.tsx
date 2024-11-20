import useTheme from "../../../../customHooks/useTheme";
import { Bootstrap, Bulma, Css, Express, Git, Html, Javascript, Mongodb, PropsIcons, React, Redux, Sass, Typescript } from "../../../SVGs/Icons";
import styles from "./Skill.module.scss";

type Props = {
  skill: {
    name: string;
    logo: string;
    descreption: string;
  }
}

type Icon = {
  [key: string]: React.FC<PropsIcons>
}

const Skill: React.FC<Props> = ({ skill }) => {
  const { name } = skill;

  const icon: Icon = {
    html: Html,
    css: Css,
    bootstrap: Bootstrap,
    bulma: Bulma,
    sass: Sass,
    git: Git,
    javascript: Javascript,
    typescript: Typescript,
    react: React,
    redux: Redux,
    express: Express,
    mongodb: Mongodb,
  }

  const { colorBrand } = useTheme();
  
  const iconSize = "55px";
  const IconComponent: React.FC<PropsIcons> = icon[name];

  return (
    <li className={styles.list__item}>
      {IconComponent
        ? <IconComponent
          width={iconSize}
          height={iconSize}
          color={colorBrand} />
        : <p>Not found</p>}
      <p className={styles.title}>{name}</p>
    </li>
  );
};

export default Skill;
