// React
import { FC } from "react";
// SCSS
import entityGraphsContentStyles from "@/scss/components/shared/entity/view/graphs/EntityGraphsContent.module.scss";
// Charts
import { Line } from "react-chartjs-2";
// Interfaces
import { EntityGraphsContentProps } from "@/core/interfaces";

const EntityGraphsContent: FC<EntityGraphsContentProps> = ({ showGraph }) => {
  return (
    <div
      className={entityGraphsContentStyles.graphsContentContainer}
      style={{
        height: showGraph ? "17.5rem" : "0",
      }}
    >
      <Line
        data={{
          labels: ["Test-1", "Test-2"],
          datasets: [{ label: "Test 3", data: [3, 4] }],
        }}
      />
    </div>
  );
};

export default EntityGraphsContent;
