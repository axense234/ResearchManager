// Interfaces
import { FC } from "react";
// Chartjs
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";
// Data
import { mainLightBlueColor, mainWhiteColor } from "@/data/static";
// Redux
import { useAppSelector } from "@/hooks";
import {
  selectAllResearchActivities,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
import { calculateResearchActivityExampleResearchPoints } from "@/helpers";
import { selectResearchPhasesExamples } from "@/redux/slices/research/phase";
import { selectResearchLogsExamples } from "@/redux/slices/research/log";

const HomeRankingsList: FC = () => {
  const researchActivities = useAppSelector((state) =>
    selectAllResearchActivities(state),
  );

  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );

  const researchPhasesExamples = useAppSelector(selectResearchPhasesExamples);
  const researchLogsExamples = useAppSelector(selectResearchLogsExamples);

  const usedResearchActivities =
    researchActivities?.length > 0
      ? researchActivities
      : researchActivitiesExamples;

  const horizontalBarGraphDataValues = researchActivitiesExamples.map(
    (activity) => {
      return {
        label: activity.name,
        rp: calculateResearchActivityExampleResearchPoints(
          activity,
          researchPhasesExamples,
          researchLogsExamples,
        ),
      };
    },
  );

  const sortedHorizontalBarGraphDataValues = horizontalBarGraphDataValues.sort(
    (a, b) => b.rp - a.rp,
  );

  const horizontalBarGraphData: ChartData<"bar"> = {
    labels: sortedHorizontalBarGraphDataValues.map((value) => value.label),
    datasets: [
      {
        label: "Research Points",
        data: sortedHorizontalBarGraphDataValues.map((value) => value.rp),
        backgroundColor: mainWhiteColor,
        borderRadius: 5,
        hoverBackgroundColor: mainLightBlueColor,
      },
    ],
  };

  return <Bar data={horizontalBarGraphData} options={{ indexAxis: "y" }} />;
};

export default HomeRankingsList;
