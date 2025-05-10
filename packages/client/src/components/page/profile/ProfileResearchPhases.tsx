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
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";
import {
  selectAllUnarchivedResearchPhasesIds,
  selectResearchPhasesExamples,
} from "@/redux/slices/research/phase";
import { setEntityOverlay } from "@/redux/slices/general/slice";

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

  const researchPhasesIds = useAppSelector(
    selectAllUnarchivedResearchPhasesIds,
  );

  const researchPhasesExamplesIds = useAppSelector(
    selectResearchPhasesExamples,
  ).map((example) => example.id);

  const usedIds =
    usedViewType === "entity" ? researchPhasesIds : researchPhasesExamplesIds;

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
            onClickFunction={() =>
              dispatch(
                setEntityOverlay({
                  entityType: "researchPhase",
                  method: "create",
                  showOverlay: true,
                }),
              )
            }
          />
        </div>
        <EntityView
          entityType="researchPhase"
          viewType={usedViewType}
          isLoading={entityViewIsLoading}
          darkMode={darkMode}
          entitiesIds={usedIds}
          setShowEntityExamples={(value: boolean) => setShowExamples(value)}
        />
      </div>
    </section>
  );
};

export default ProfileResearchPhases;
