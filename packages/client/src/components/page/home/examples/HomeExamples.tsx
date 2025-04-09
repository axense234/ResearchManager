"use client";
// Interfaces
import { FC } from "react";
// SCSS
import homeExamplesStyles from "@/scss/components/page/home/examples/HomeExamples.module.scss";
// Components
import HomeSectionTitle from "../shared/HomeSectionTitle";
import EntityView from "@/components/shared/entity/view/EntityView";
// Data
import { homeExamplesData } from "@/data/general/home";
// Redux
import { useAppSelector } from "@/hooks";
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";

const HomeExamples: FC = () => {
  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );
  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );
  const researchActivityExample =
    researchActivitiesExamples[currentResearchActivityExampleIndex - 1];

  return (
    <section className={homeExamplesStyles.homeExamplesContainer}>
      <HomeSectionTitle
        title={homeExamplesData.title}
        description={homeExamplesData.description}
      />
      <EntityView
        entityType="researchActivity"
        viewType="example"
        entityId={researchActivityExample.id}
      />
    </section>
  );
};

export default HomeExamples;
