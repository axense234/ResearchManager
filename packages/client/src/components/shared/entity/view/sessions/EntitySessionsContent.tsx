// React
import { FC } from "react";
// SCSS
import entitySessionsContentStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionsContent.module.scss";
// Redux
import { useAppDispatch } from "@/hooks";
// Components
import EntitySessionsList from "./EntitySessionsList";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Interfaces
import { EntitySessionsContentProps } from "@/core/interfaces";
// Redux
import { setUpsertEntityOverlay } from "@/redux/slices/general/slice";

const EntitySessionsContent: FC<EntitySessionsContentProps> = ({
  darkMode,
  sessionsIds,
  showSessions,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={entitySessionsContentStyles.sessionsContent}>
      <EntitySessionsList
        darkMode={darkMode}
        sessionsIds={sessionsIds}
        showSessions={showSessions}
      />
      <FunctionalButton
        content="Create Research Session"
        alignment="flex-start"
        disabled={false}
        onHoverContent="Create Research Session"
        onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
        onClickFunction={() =>
          dispatch(
            setUpsertEntityOverlay({
              entityType: "researchSession",
              method: "create",
              showOverlay: true,
            }),
          )
        }
      />
    </div>
  );
};

export default EntitySessionsContent;
