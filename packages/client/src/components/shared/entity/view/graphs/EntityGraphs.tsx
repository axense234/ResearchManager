// Interfaces
import { FC } from "react";
// SCSS
import entityGraphsStyles from "@/scss/components/shared/entity/view/graphs/EntityGraphs.module.scss";
// Graphs
import { Line } from "react-chartjs-2";

const EntityGraphs: FC = () => {
  return (
    <article className={entityGraphsStyles.entityGraphsContainer}>
      <div className={entityGraphsStyles.entityGraphsTitle}>
        <h6>Graphs</h6>
        <hr />
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
