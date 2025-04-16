// React
import { FC, useState } from "react";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import EntityView from "@/components/shared/entity/view/EntityView";
import ShowEntityExamplesToggle from "@/components/shared/entity/view/ShowEntityExamplesToggle";
// SCSS
import profileResearchPhasesStyles from "@/scss/components/page/profile/ProfileResearchPhases.module.scss";
// Data
import { profileResearchPhasesData } from "@/data/general/profile";
// Redux
import {
  useAppDispatch,
  useAppSelector,
  useGetEntityIdByCurrentIndex,
} from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";

const ProfileResearchPhases: FC = () => {
  const dispatch = useAppDispatch();
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const loadingGetProfileJWT = useAppSelector(selectLoadingGetProfileJWT);
  const laodingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  const entityViewIsLoading =
    loadingGetProfileJWT === "PENDING" ||
    laodingGetProfileOAuth === "PENDING" ||
    loadingGetProfileJWT === "IDLE" ||
    laodingGetProfileOAuth === "IDLE";

  const usedViewType = showExamples ? "example" : "entity";

  const entityId = useGetEntityIdByCurrentIndex("researchPhase", usedViewType);

  return (
    <section className={profileResearchPhasesStyles.sectionContainer}>
      <ShowEntityExamplesToggle
        showExamples={showExamples}
        onShowExamplesChange={(e) => setShowExamples(e.target.value !== "true")}
      />
      <div className={profileResearchPhasesStyles.sectionTitle}>
        <PageSectionTitle {...profileResearchPhasesData} />
        <FunctionalButton
          content="Create Research Phase"
          disabled={false}
          onHoverContent="Create Research Phase"
          onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
          onClickFunction={() => dispatch(() => {})}
        />
      </div>
      <EntityView
        entityType="researchPhase"
        viewType={usedViewType}
        entityId={entityId}
        isLoading={entityViewIsLoading}
      />
    </section>
  );
};

export default ProfileResearchPhases;
