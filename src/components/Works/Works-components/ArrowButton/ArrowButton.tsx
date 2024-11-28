import classNames from "classnames";
import cl from "./ArrowButton.module.scss";
import { Right } from "../../../SVGs/Icons";
import useTheme from "../../../../customHooks/useTheme";
import { content } from "../../../../content/mainContent_EN";
import { handleArrowClick } from "./service";

type Props = {
  direction: string;
  highlightIndex: number;
  handleClick: (number: number) => void;
};

const ArrowButton: React.FC<Props> = ({
  direction,
  highlightIndex,
  handleClick,
}) => {
  const { theme, colorDark, colorLight } = useTheme();
  const isDark = theme === "dark";
  const arrowColor = isDark ? colorLight : colorDark;
  const worksAmount = content.WorksSection.works.length;

  return (
    <button
      className={classNames(cl.button, {
        [cl.button_left]: direction === "left",
        [cl.button_right]: direction === "right",
      })}
      onClick={() =>
        handleArrowClick(direction, highlightIndex, handleClick, worksAmount)
      }
    >
      <Right width={100} height={100} color={arrowColor} />
    </button>
  );
};

export default ArrowButton;
