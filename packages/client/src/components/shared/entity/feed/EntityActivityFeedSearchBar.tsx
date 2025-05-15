// React
import { FC } from "react";
// SCSS
import entityActivityFeedSearchBarStyles from "@/scss/components/shared/entity/feed/EntityActivityFeedSearchBar.module.scss";
// Interfaces
import {
  EntityActivityFeedSearchBarProps,
  SelectFormControlEntityPropertyType,
} from "@/core/interfaces";
// Components
import SelectFormControl from "../../form/SelectFormControl";
// Redux
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectActivityDaysByActivityDaysIds,
  selectCurrentActivityDayId,
  setCurrentActivityDayId,
} from "@/redux/slices/activity/day";

const EntityActivityFeedSearchBar: FC<EntityActivityFeedSearchBarProps> = ({
  activityDaysIds,
}) => {
  const dispatch = useAppDispatch();

  const currentActivityDayId = useAppSelector(selectCurrentActivityDayId);
  const activityDays = useAppSelector((state) =>
    selectActivityDaysByActivityDaysIds(state, activityDaysIds),
  );

  const activityDaysForSelect = activityDays?.map((activityDay) => {
    return {
      label: new Date(activityDay.createdAt).toLocaleString(undefined, {
        month: "long",
        day: "numeric",
      }),
      value: activityDay.id,
    };
  }) as SelectFormControlEntityPropertyType[];

  return (
    <div className={entityActivityFeedSearchBarStyles.searchBarContainer}>
      <div className={entityActivityFeedSearchBarStyles.searchBarFormControls}>
        <SelectFormControl
          currentEntityProperty={currentActivityDayId}
          entityProperty={activityDaysForSelect}
          labelContent="Specific Day:"
          noEntityPropertyMessage="No Activity Days."
          onEntityPropertyValueChange={(e) =>
            dispatch(setCurrentActivityDayId(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default EntityActivityFeedSearchBar;
