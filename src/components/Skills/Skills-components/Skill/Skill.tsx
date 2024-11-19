import styles from "./Skill.module.scss";

type Props = {
  skill: {
    name: string;
    logo: string;
    descreption: string;
  }
}
const Skill: React.FC<Props> = ({ skill }) => {
  const { name, logo } = skill;
  return (
    <li className={styles.list__item}>
      <img className={styles.logo} src={logo} alt="" />
      <p className={styles.title}>{name}</p>
    </li>
  );
};

export default Skill;
