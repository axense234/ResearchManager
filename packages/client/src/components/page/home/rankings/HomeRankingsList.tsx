// Interfaces
import { FC } from "react";
// Chartjs
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";
// Data
import { mainLightBlueColor, mainWhiteColor } from "@/data/general";
// Redux
import { useAppSelector, useCalculateEntityResearchPoints } from "@/hooks";
import { selectResearchActivitiesExamples } from "@/redux/slices/research/activity";

const HomeRankingsList: FC = () => {
  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );

  const horizontalBarGraphDataValues = researchActivitiesExamples.map(
    (activity) => {
      return {
        label: activity.name,
        rp: useCalculateEntityResearchPoints(
          activity,
          "researchActivity",
          "example",
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

  return (
    <Bar
      data={horizontalBarGraphData}
      options={{
        indexAxis: "y",
        scales: {
          y: {
            ticks: {
              color: mainWhiteColor,
              font: {
                size: 18,
              },
            },
          },
          x: {
            ticks: {
              color: mainWhiteColor,
              font: {
                size: 18,
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: mainWhiteColor,
              font: {
                size: 20,
              },
            },
          },
        },
      }}
    />
  );
};

export default HomeRankingsList;
