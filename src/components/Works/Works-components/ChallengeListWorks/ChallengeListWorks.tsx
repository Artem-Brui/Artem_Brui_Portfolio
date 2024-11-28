import cl from "./ChallengeListWorks.module.scss";
import React from "react";
import { content } from "../../../../content/mainContent_EN";
import ChallengeItem from "../ChallengeItemWorks";

type Props = {
  challenges: string[];
};

const ChallengeListWorks: React.FC<Props> = ({ challenges }) => {
  const { challengesTitle } = content.WorksSection;

  return (
    <ul className={cl.challenges_list}>
      {challengesTitle}
      {challenges.map((challenge, index) => <ChallengeItem key={index} challengeItem={challenge} />
      )}
    </ul>
  );
};

export default ChallengeListWorks;
