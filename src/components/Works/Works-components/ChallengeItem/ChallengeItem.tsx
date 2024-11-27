import cl from "./ChallengeItem.module.scss";
import React from "react";

type Props = {
  challengeItem: string;
};

const ChallengeItem: React.FC<Props> = ({ challengeItem }) => {
  return <li className={cl.challenge_item}>{challengeItem}</li>;
};

export default ChallengeItem;
