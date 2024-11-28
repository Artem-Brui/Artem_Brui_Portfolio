import WorksList from "../WorksList";
import cl from "./WorksGallery.module.scss";
import { content } from "../../../../content/mainContent_EN";
import { useState } from "react";
import ArrowButton from "../ArrowButton";
import PreviewList from "../PreviewList";

const WorksGallery = () => {
  const [highlightIndex, setHighlightIndex] = useState(1);

  const worksList = [...content.WorksSection.works].reverse();

  return (
    <div className={cl.works_gallery_container}>
      <PreviewList highlightIndex={highlightIndex} />
      <WorksList worksList={worksList} highlightIndex={highlightIndex} />
      <ArrowButton
        direction="left"
        highlightIndex={highlightIndex}
        handleClick={setHighlightIndex}
      />
      <ArrowButton
        direction="right"
        highlightIndex={highlightIndex}
        handleClick={setHighlightIndex}/>
    </div>
  );
};

export default WorksGallery;
