import styles from "./SectionHead.module.scss";

type Props = {
  title: string;
  text: string;
}

const SectionHead: React.FC<Props> = ({ title, text}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{ title }</h2>
      <p className={styles.text}>{ text }</p>
    </div>
  );
};

export default SectionHead;
