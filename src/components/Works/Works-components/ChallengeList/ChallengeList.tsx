import cl from "./ChallengeList.module.scss";
import React from "react";
import { content } from "../../../../content/mainContent_EN";
import ChallengeItem from "../ChallengeItem";

type Props = {
  challenges: string[];
};

const ChallengeList: React.FC<Props> = ({ challenges }) => {
  const { challengesTitle } = content.WorksSection;

  return (
    <ul className={cl.challenges_list}>
      {challengesTitle}
      {challenges.map((challenge, index) => <ChallengeItem key={index} challengeItem={challenge} />
      )}
    </ul>
  );
};

export default ChallengeList;
