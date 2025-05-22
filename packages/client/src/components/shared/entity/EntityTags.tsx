// React
import { FC, useState } from "react";
// SCSS
import entityResearchActivitiesStyles from "@/scss/components/shared/entity/EntityResearchActivities.module.scss";
// Components
import EntityViewSetting from "./view/EntityViewSetting";
import PageSectionTitle from "../general/PageSectionTitle";
import FunctionalButton from "../general/FunctionalButton";
import EntityView from "@/components/shared/entity/view/EntityView";
// Data
import { dashboardTagsData } from "@/data/general/dashboard";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  setUpsertEntityOverlay,
  setUpsertTagOverlay,
} from "@/redux/slices/general/slice";
import {
  selectLoadingGetProfileJWT,
  selectLoadingGetProfileOAuth,
} from "@/redux/slices/general";
import { selectAllTagsIds, selectTagsExamples } from "@/redux/slices/tag";

const EntityTags: FC = () => {
  const dispatch = useAppDispatch();

  const [showExamples, setShowExamples] = useState<boolean>(false);

  const loadingGetProfileJWT = useAppSelector(selectLoadingGetProfileJWT);
  const laodingGetProfileOAuth = useAppSelector(selectLoadingGetProfileOAuth);

  const entityViewIsLoading =
    loadingGetProfileJWT === "PENDING" ||
    laodingGetProfileOAuth === "PENDING" ||
    loadingGetProfileJWT === "IDLE";

  const usedViewType = showExamples ? "example" : "entity";

  const tagsIds = useAppSelector(selectAllTagsIds);

  const tagsExamplesIds = useAppSelector(selectTagsExamples).map(
    (example) => example.id,
  );

  const usedIds = usedViewType === "entity" ? tagsIds : tagsExamplesIds;

  return (
    <section className={entityResearchActivitiesStyles.sectionContainer}>
      <div className={entityResearchActivitiesStyles.sectionSettings}>
        <EntityViewSetting
          value={showExamples}
          onValueChange={(e) => setShowExamples(e.target.value !== "true")}
          labelContent="Examples:"
          id={`tags-examples`}
        />
      </div>
      <div className={entityResearchActivitiesStyles.sectionContent}>
        <div className={entityResearchActivitiesStyles.sectionTitle}>
          <PageSectionTitle {...dashboardTagsData} pageType={"dashboard"} />
          <FunctionalButton
            content="Create Tag"
            disabled={false}
            onHoverContent="Create Tag"
            onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
            onClickFunction={() =>
              dispatch(
                setUpsertTagOverlay({
                  method: "create",
                  showOverlay: true,
                }),
              )
            }
          />
        </div>
        <EntityView
          entityType="tag"
          viewType={usedViewType}
          isLoading={entityViewIsLoading}
          darkMode={true}
          entitiesIds={usedIds}
          setShowEntityExamples={(value: boolean) => setShowExamples(value)}
        />
      </div>
    </section>
  );
};

export default EntityTags;
