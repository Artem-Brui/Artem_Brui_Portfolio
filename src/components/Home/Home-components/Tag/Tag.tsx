import styles from "./Tag.module.scss";
import classNames from "classnames";

type Props = {
  content: string;
}

const Tag: React.FC<Props> = ({ content }) => {
  return <p className={classNames("tags", styles.tag)}>{content}</p>;
};

export default Tag;
