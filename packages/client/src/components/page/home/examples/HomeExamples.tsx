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
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
import { changeShowEntityContainerWrapper } from "@/redux/slices/general/slice";
import { selectResearchPhasesExamples } from "@/redux/slices/research/phase";
import { selectResearchLogsExamples } from "@/redux/slices/research/log";
// Helper
import { getResearchActivityExampleImages } from "@/helpers";

const HomeExamples: FC = () => {
  const dispatch = useAppDispatch();

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
    <section
      className={homeExamplesStyles.homeExamplesContainer}
      onMouseEnter={() => dispatch(changeShowEntityContainerWrapper(true))}
      onMouseLeave={() => dispatch(changeShowEntityContainerWrapper(false))}
    >
      <HomeSectionTitle
        title={homeExamplesData.title}
        description={homeExamplesData.description}
      />
      <HomeExample images={researchActivityExampleImages} />
    </section>
  );
};

export default HomeExamples;
