// Interfaces
import { FC } from "react";
import { HomeRankingComponentProps } from "@/core/interfaces";
// SCSS

const HomeRankingComponent: FC<HomeRankingComponentProps> = ({
  containerType,
  researchActivityId,
}) => {
  return (
    <div className={homeRankingComponentStyles.homeRankingComponentContainer}>
      <p></p>
    </div>
  );
};

export default HomeRankingComponent;
