// React
import { FC } from "react";
// SCSS
import entityLogsContentStyles from "@/scss/components/shared/entity/view/logs/EntityLogsContent.module.scss";
// Components
import EntityLogsList from "./EntityLogsList";
import FunctionalButton from "@/components/shared/general/FunctionalButton";
// Interfaces
import { EntityLogsContentProps } from "@/core/interfaces";
// Redux
import { useAppDispatch } from "@/hooks";
import { setUpsertEntityOverlay } from "@/redux/slices/general/slice";

const EntityLogsContent: FC<EntityLogsContentProps> = ({
  darkMode,
  logsIds,
  showLogs,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={entityLogsContentStyles.logsContent}>
      <EntityLogsList
        darkMode={darkMode}
        logsIds={logsIds}
        showLogs={showLogs}
      />
      <FunctionalButton
        content="Create Research Log"
        alignment="flex-start"
        disabled={false}
        onHoverContent="Create Research Log"
        onHoverContentDisabled="Please wait, we are doing some tech stuff right now."
        onClickFunction={() =>
          dispatch(
            setUpsertEntityOverlay({
              entityType: "researchLog",
              method: "create",
              showOverlay: true,
            }),
          )
        }
      />
    </div>
  );
};

export default EntityLogsContent;
