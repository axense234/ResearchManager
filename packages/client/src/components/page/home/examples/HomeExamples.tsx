"use client";
// Interfaces
import { FC } from "react";
// SCSS
import homeExamplesStyles from "@/scss/components/page/home/examples/HomeExamples.module.scss";
// Components
import HomeSectionTitle from "../shared/HomeSectionTitle";
import HomeExample from "./HomeExample";
// Data
import { homeExamplesData } from "@/data/general/home";
// Redux
import { useAppSelector } from "@/hooks";
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
import { selectResearchPhasesExamples } from "@/redux/slices/research/phase";
import { selectResearchLogsExamples } from "@/redux/slices/research/log";
// Helper
import { getResearchActivityExampleImages } from "@/helpers";

const HomeExamples: FC = () => {
  const researchLogsExamples = useAppSelector(selectResearchLogsExamples);

  const researchPhasesExamples = useAppSelector(selectResearchPhasesExamples);

  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );
  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );

  const researchActivityExample =
    researchActivitiesExamples[currentResearchActivityExampleIndex - 1];

  const researchActivityExampleImages = getResearchActivityExampleImages(
    researchActivityExample,
    researchPhasesExamples,
    researchLogsExamples,
  );

  return (
    <section className={homeExamplesStyles.homeExamplesContainer}>
      <HomeSectionTitle
        title={homeExamplesData.title}
        description={homeExamplesData.description}
      />
      <HomeExample images={researchActivityExampleImages} />
    </section>
  );
};

export default HomeExamples;
