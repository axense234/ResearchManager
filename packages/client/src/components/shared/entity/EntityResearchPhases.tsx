// React
import { FC, useState } from "react";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import EntityView from "@/components/shared/entity/view/EntityView";
import EntityViewSetting from "@/components/shared/entity/view/EntityViewSetting";
// SCSS
import entityResearchActivitiesStyles from "@/scss/components/shared/entity/EntityResearchActivities.module.scss";
// Data
import { dashboardResearchPhasesData } from "@/data/general/dashboard";
import { profileResearchPhasesData } from "@/data/general/profile";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";
import {
  selectResearchPhasesCustom,
  selectResearchPhasesExamples,
} from "@/redux/slices/research/phase";
import { setUpsertEntityOverlay } from "@/redux/slices/general/slice";
// Interfacse
import { EntityViewEntitiesProps } from "@/core/interfaces";

const EntityResearchPhases: FC<EntityViewEntitiesProps> = ({ pageType }) => {
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

  const researchPhasesIds = useAppSelector((state) =>
    selectResearchPhasesCustom(state, { sorted: true, unarchived: true }),
  ).map((rp) => rp.id);

  const researchPhasesExamplesIds = useAppSelector(
    selectResearchPhasesExamples,
  ).map((example) => example.id);

  const usedIds =
    usedViewType === "entity" ? researchPhasesIds : researchPhasesExamplesIds;

  const usedPageTitleData =
    pageType === "dashboard"
      ? dashboardResearchPhasesData
      : profileResearchPhasesData;

  return (
    <section className={entityResearchActivitiesStyles.sectionContainer}>
      <div className={entityResearchActivitiesStyles.sectionSettings}>
        <EntityViewSetting
          value={darkMode}
          onValueChange={(e) => setDarkMode(e.target.value !== "true")}
          labelContent="Dark Mode:"
          id={`${pageType}-darkMode`}
        />
        <EntityViewSetting
          value={showExamples}
          onValueChange={(e) => setShowExamples(e.target.value !== "true")}
          labelContent="Examples:"
          id={`${pageType}-examples`}
        />
      </div>
      <div className={entityResearchActivitiesStyles.sectionContent}>
        <div className={entityResearchActivitiesStyles.sectionTitle}>
          <PageSectionTitle {...usedPageTitleData} pageType={pageType} />
          <FunctionalButton
            content="Create Research Phase"
            disabled={false}
            onHoverContent="Create Research Phase"
            onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
            onClickFunction={() =>
              dispatch(
                setUpsertEntityOverlay({
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
          pageType={pageType}
        />
      </div>
    </section>
  );
};

export default EntityResearchPhases;
