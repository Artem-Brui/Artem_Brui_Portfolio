import classNames from "classnames";
import { content } from "../../content/mainContent_EN";
import SectionHead from "../SectionHead";
import cl from "./Works.module.scss";
import useTheme from "../../customHooks/useTheme";
import WorksGallery from "./Works-components/WorksGallery";

const Works = () => {
  const { theme } = useTheme();

  const sectionClass = theme === "dark" ? cl.dark : cl.light;

  const title = content.WorksSection.sectionName;
  const textHead = content.WorksSection.sectionHeader;

  return (
    <section className={classNames(cl.works, sectionClass)}>
      <SectionHead title={title} text={textHead} />
      <WorksGallery />
    </section>
  );
};

export default Works;
