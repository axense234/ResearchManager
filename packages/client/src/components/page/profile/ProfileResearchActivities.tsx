// React
import { FC } from "react";
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
import {
  selectShowProfileResearchActivitiesExamples,
  setShowProfileResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
import { setEntityOverlay } from "@/redux/slices/general/slice";

const ProfileResearchActivities: FC = () => {
  const dispatch = useAppDispatch();

  const showExamples = useAppSelector(
    selectShowProfileResearchActivitiesExamples,
  );

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
        onShowExamplesChange={(e) =>
          dispatch(
            setShowProfileResearchActivitiesExamples(e.target.value !== "true"),
          )
        }
        id="profileResearchActivities"
      />
      <div className={profileResearchActivitiesStyles.sectionTitle}>
        <PageSectionTitle {...profileResearchActivitiesData} />
        <FunctionalButton
          content="Create Research Activity"
          disabled={false}
          onHoverContent="Create Research Activity"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() =>
            dispatch(
              setEntityOverlay({
                entityType: "researchActivity",
                showOverlay: true,
              }),
            )
          }
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
