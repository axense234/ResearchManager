// React
import { FC, useEffect } from "react";
// Interfaces
import { EntityUsedOnProps } from "@/core/interfaces";
// SCSS
import entityUsedOnStyles from "@/scss/components/shared/entity/view/usedOn/EntityUsedOn.module.scss";
// Components
import EntityUsedOnTitle from "./EntityUsedOnTitle";
import EntityUsedOnList from "./EntityUsedOnList";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectTagEntitiesIdsById } from "@/redux/slices/tag";
import { setNumberOfCurrentTagUsedOnEntities } from "@/redux/slices/general/slice";

const EntityUsedOn: FC<EntityUsedOnProps> = ({
  darkMode,
  setShowEntities,
  showEntities,
  tag,
  position,
  isCurrentView,
}) => {
  const dispatch = useAppDispatch();
  const tagEntitiesIds = useAppSelector((state) =>
    selectTagEntitiesIdsById(state, tag?.id),
  );

  useEffect(() => {
    if (isCurrentView) {
      dispatch(setNumberOfCurrentTagUsedOnEntities(tagEntitiesIds.length));
    }
  }, [tagEntitiesIds, isCurrentView]);

  return (
    <div className={`${entityUsedOnStyles.entityUsedOnContainer} ${position}`}>
      <EntityUsedOnTitle
        title="Used On"
        darkMode={darkMode}
        setShowEntities={setShowEntities}
        showEntities={showEntities}
        showSectionControl={tagEntitiesIds.length > 0}
      />
      <EntityUsedOnList
        darkMode={darkMode}
        showEntities={showEntities}
        entitySelectors={tagEntitiesIds}
      />
    </div>
  );
};

export default EntityUsedOn;
