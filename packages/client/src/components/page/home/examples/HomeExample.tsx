// Interfaces
import { FC } from "react";
import { HomeExampleProps } from "@/core/interfaces";
// Components
import EntityGraphs from "@/components/shared/entity/EntityGraphs";
import EntityImages from "@/components/shared/entity/images/EntityImages";
import EntityContainer from "@/components/shared/entity/container/EntityContainer";
// SCSS
import homeExampleStyles from "@/scss/components/page/home/examples/HomeExample.module.scss";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectCurrentResearchActivityExampleIndex,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
import { changeShowEntityContainerWrapper } from "@/redux/slices/general/slice";

const HomeExample: FC<HomeExampleProps> = ({ images }) => {
  const dispatch = useAppDispatch();

  const researchActivitiesExamples = useAppSelector(
    selectResearchActivitiesExamples,
  );
  const currentResearchActivityExampleIndex = useAppSelector(
    selectCurrentResearchActivityExampleIndex,
  );

  return (
    <div
      className={homeExampleStyles.homeExamplesExampleContainer}
      onMouseEnter={() => dispatch(changeShowEntityContainerWrapper(true))}
      onMouseLeave={() => dispatch(changeShowEntityContainerWrapper(false))}
    >
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
