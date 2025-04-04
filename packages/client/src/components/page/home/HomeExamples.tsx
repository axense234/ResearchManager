"use client";
// Interfaces
import { FC } from "react";
// Data
import { homeExamplesDescriptions } from "@/data/static";
// SCSS
import homeExamplesStyles from "@/scss/components/page/home/HomeExamples.module.scss";
// Components
import { EntityContainer } from "@/components/shared/entity/container/EntityContainer";
import EntityGraphs from "@/components/shared/entity/EntityGraphs";
import EntityImages from "@/components/shared/entity/EntityImages";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
import { changeShowEntityContainerWrapper } from "@/redux/slices/general/slice";
import { selectResearchPhasesExamples } from "@/redux/slices/research/phase";
import { selectResearchLogsExamples } from "@/redux/slices/research/log";

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

  const researchActivityExampleResearchPhases = researchPhasesExamples.filter(
    (phase) => phase.researchActivityId === researchActivityExample.id,
  );
  const researchActivityExampleResearchLogs =
    researchActivityExampleResearchPhases
      .map((phase) => {
        return researchLogsExamples.filter(
          (log) => log.researchPhaseId === phase.id,
        );
      })
      .flat();

  const researchActivityExampleImages =
    researchActivityExampleResearchLogs[0]?.imagesSrc;

  return (
    <section
      className={homeExamplesStyles.homeExamplesContainer}
      onMouseEnter={() => dispatch(changeShowEntityContainerWrapper(true))}
      onMouseLeave={() => dispatch(changeShowEntityContainerWrapper(false))}
    >
      <div className={homeExamplesStyles.homeExamplesDetails}>
        <h3>Research Activity Examples</h3>
        <div className={homeExamplesStyles.homeExamplesDescription}>
          <p>{homeExamplesDescriptions[0]}</p>
          <p>{homeExamplesDescriptions[1]}</p>
        </div>
      </div>
      <div className={homeExamplesStyles.homeExamplesExampleContainer}>
        <EntityContainer
          containerType="example"
          entityId={
            researchActivitiesExamples[currentResearchActivityExampleIndex - 1]
              .id
          }
          entityType="researchActivity"
        />
        <div className={homeExamplesStyles.homeExamplesExampleDetails}>
          <EntityImages images={researchActivityExampleImages} />
          <EntityGraphs />
        </div>
      </div>
    </section>
  );
};

export default HomeExamples;
