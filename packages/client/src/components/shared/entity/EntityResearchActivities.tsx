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
import { profileResearchActivitiesData } from "@/data/general/profile";
import { dashboardResearchActivitiesData } from "@/data/general/dashboard";
// Redux and Hooks
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";
import { setUpsertEntityOverlay } from "@/redux/slices/general/slice";
import {
  selectResearchActivitiesCustom,
  selectResearchActivitiesExamples,
} from "@/redux/slices/research/activity";
// Interfaces
import { EntityViewEntitiesProps } from "@/core/interfaces";

const EntityResearchActivities: FC<EntityViewEntitiesProps> = ({
  pageType,
}) => {
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

  const usedPageTitleData =
    pageType === "dashboard"
      ? dashboardResearchActivitiesData
      : profileResearchActivitiesData;

  const researchActivitiesIds = useAppSelector((state) =>
    selectResearchActivitiesCustom(state, {
      unarchived: true,
      sorted: true,
    }),
  ).map((ra) => ra.id);

  const researchActivitiesExamplesIds = useAppSelector(
    selectResearchActivitiesExamples,
  ).map((example) => example.id);

  const usedIds =
    usedViewType === "entity"
      ? researchActivitiesIds
      : researchActivitiesExamplesIds;

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
            content="Create Research Activity"
            disabled={false}
            onHoverContent="Create Research Activity"
            onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
            onClickFunction={() =>
              dispatch(
                setUpsertEntityOverlay({
                  entityType: "researchActivity",
                  method: "create",
                  showOverlay: true,
                }),
              )
            }
          />
        </div>
        <EntityView
          entityType="researchActivity"
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

export default EntityResearchActivities;
