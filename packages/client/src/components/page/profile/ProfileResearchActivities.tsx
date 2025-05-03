// React
import { FC, useState } from "react";
// Components
import PageSectionTitle from "@/components/shared/general/PageSectionTitle";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
import EntityView from "@/components/shared/entity/view/EntityView";
import EntityViewSetting from "@/components/shared/entity/view/EntityViewSetting";
// SCSS
import profileResearchActivitiesStyles from "@/scss/components/page/profile/ProfileResearchActivities.module.scss";
// Data
import { profileResearchActivitiesData } from "@/data/general/profile";
// Redux and Hooks
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";
import { setEntityOverlay } from "@/redux/slices/general/slice";
import {
  selectResearchActivitiesExamples,
  selectResearchActivitiesIds,
} from "@/redux/slices/research/activity";

const ProfileResearchActivities: FC = () => {
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

  const researchActivitiesIds = useAppSelector(selectResearchActivitiesIds);
  const researchActivitiesExamplesIds = useAppSelector(
    selectResearchActivitiesExamples,
  ).map((example) => example.id);

  const usedIds =
    usedViewType === "entity"
      ? researchActivitiesIds
      : researchActivitiesExamplesIds;

  return (
    <section className={profileResearchActivitiesStyles.sectionContainer}>
      <div className={profileResearchActivitiesStyles.sectionSettings}>
        <EntityViewSetting
          value={darkMode}
          onValueChange={(e) => setDarkMode(e.target.value !== "true")}
          labelContent="Dark Mode:"
          id="profileResearchActivitiesDarkMode"
        />
        <EntityViewSetting
          value={showExamples}
          onValueChange={(e) => setShowExamples(e.target.value !== "true")}
          labelContent="Examples:"
          id="profileResearchActivitiesExamples"
        />
      </div>
      <div className={profileResearchActivitiesStyles.sectionContent}>
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
        />
      </div>
    </section>
  );
};

export default ProfileResearchActivities;
