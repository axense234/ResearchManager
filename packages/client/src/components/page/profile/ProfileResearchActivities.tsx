// React
import { FC, useState } from "react";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import EntityView from "@/components/shared/entity/view/EntityView";
import ShowEntityExamplesToggle from "@/components/shared/entity/view/ShowEntityExamplesToggle";
// SCSS
import profileResearchActivitiesStyles from "@/scss/components/page/profile/ProfileResearchActivities.module.scss";
// Data
import { profileResearchActivitiesData } from "@/data/general/profile";
// Redux and Hooks
import {
  useAppDispatch,
  useAppSelector,
  useGetEntityIdByCurrentIndex,
} from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";

const ProfileResearchActivities: FC = () => {
  const dispatch = useAppDispatch();
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const loadingGetProfileJWT = useAppSelector(selectLoadingGetProfileJWT);
  const laodingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  const entityViewIsLoading =
    loadingGetProfileJWT === "PENDING" ||
    laodingGetProfileOAuth === "PENDING" ||
    loadingGetProfileJWT === "IDLE";

  const usedViewType = showExamples ? "example" : "entity";

  const entityId = useGetEntityIdByCurrentIndex(
    "researchActivity",
    usedViewType,
  );

  return (
    <section className={profileResearchActivitiesStyles.sectionContainer}>
      <ShowEntityExamplesToggle
        showExamples={showExamples}
        onShowExamplesChange={(e) => setShowExamples(e.target.value !== "true")}
      />
      <div className={profileResearchActivitiesStyles.sectionTitle}>
        <PageSectionTitle {...profileResearchActivitiesData} />
        <FunctionalButton
          content="Create Research Activity"
          disabled={false}
          onHoverContent="Create Research Activity"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() => dispatch(() => {})}
        />
      </div>
      <EntityView
        entityType="researchActivity"
        viewType={usedViewType}
        entityId={entityId}
        isLoading={entityViewIsLoading}
      />
    </section>
  );
};

export default ProfileResearchActivities;
