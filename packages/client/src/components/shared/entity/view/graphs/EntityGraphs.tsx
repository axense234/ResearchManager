// React
import { FC } from "react";
// Interfaces
import { EntityGraphsProps } from "@/core/interfaces";
// SCSS
import entityGraphsStyles from "@/scss/components/shared/entity/view/graphs/EntityGraphs.module.scss";
// Graphs
import { Line } from "react-chartjs-2";
// Data
import { mainBlackColor, secondaryWhiteColor } from "@/data/general";

const EntityGraphs: FC<EntityGraphsProps> = ({
  specialEntity,
  darkMode,
  position,
}) => {
  const textColor = darkMode ? mainBlackColor : secondaryWhiteColor;

  return (
    <article
      className={`${entityGraphsStyles.entityGraphsContainer} ${position}`}
      style={{ backgroundColor: specialEntity.backgroundColorOrImageSrc }}
    >
      <div className={entityGraphsStyles.entityGraphsTitle}>
        <h6 style={{ color: textColor }}>Graphs</h6>
        <hr style={{ backgroundColor: textColor }} />
      </div>
      <Line
        data={{
          labels: ["Test-1", "Test-2"],
          datasets: [{ label: "Test 3", data: [3, 4] }],
        }}
      />
    </article>
  );
};

export default EntityGraphs;
