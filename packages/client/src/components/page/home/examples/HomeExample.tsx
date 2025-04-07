// Interfaces
import { FC } from "react";
import { HomeExampleProps } from "@/core/interfaces";
// Components
import EntityGraphs from "@/components/shared/entity/EntityGraphs";
import EntityImages from "@/components/shared/entity/EntityImages";
import EntityContainer from "@/components/shared/entity/container/EntityContainer";
// SCSS
import homeExampleStyles from "@/scss/components/page/home/examples/HomeExample.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";

const HomeExample: FC<HomeExampleProps> = ({ images }) => {
  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );
  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );

  return (
    <div className={homeExampleStyles.homeExamplesExampleContainer}>
      <EntityContainer
        containerType="example"
        entityId={
          researchActivitiesExamples[currentResearchActivityExampleIndex - 1].id
        }
        entityType="researchActivity"
      />
      <div className={homeExampleStyles.homeExamplesExampleDetails}>
        <EntityImages images={images} />
        <EntityGraphs />
      </div>
    </div>
  );
};

export default HomeExample;
