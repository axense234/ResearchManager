// React
import { FC, useState } from "react";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import EntityView from "@/components/shared/entity/view/EntityView";
import EntityViewSetting from "@/components/shared/entity/view/EntityViewSetting";
// SCSS
import profileResearchPhasesStyles from "@/scss/components/page/profile/ProfileResearchPhases.module.scss";
// Data
import { profileResearchPhasesData } from "@/data/general/profile";
// Redux
import {
  useAppDispatch,
  useAppSelector,
  useGetCurrentEntityIdAndIndex,
} from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";

const ProfileResearchPhases: FC = () => {
  const dispatch = useAppDispatch();

  const [showExamples, setShowExamples] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const loadingGetProfileJWT = useAppSelector(selectLoadingGetProfileJWT);
  const laodingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  const entityViewIsLoading =
    loadingGetProfileJWT === "PENDING" ||
    laodingGetProfileOAuth === "PENDING" ||
    loadingGetProfileJWT === "IDLE";

  const usedViewType = showExamples ? "example" : "entity";

  const entityId = useGetCurrentEntityIdAndIndex("researchPhase", usedViewType);

  return (
    <section className={profileResearchPhasesStyles.sectionContainer}>
      <div className={profileResearchPhasesStyles.sectionSettings}>
        <EntityViewSetting
          value={darkMode}
          onValueChange={(e) => setDarkMode(e.target.value !== "true")}
          labelContent="Dark Mode:"
          id="profileResearchPhasesDarkMode"
        />
        <EntityViewSetting
          value={showExamples}
          onValueChange={(e) => setShowExamples(e.target.value !== "true")}
          labelContent="Examples:"
          id="profileResearchPhasesExamples"
        />
      </div>
      <div className={profileResearchPhasesStyles.sectionContent}>
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
          darkMode={darkMode}
        />
      </div>
    </section>
  );
};

export default ProfileResearchPhases;
