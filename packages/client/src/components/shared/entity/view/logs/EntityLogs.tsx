// React
import { FC } from "react";
// SCSS
import entityLogsStyles from "@/scss/components/shared/entity/view/logs/EntityLogs.module.scss";
// Interfaces
import { EntityLogsProps } from "@/core/interfaces";
// Components
import EntityLogsTitle from "./EntityLogsTitle";
import EntityLogsContent from "./EntityLogsContent";
// Redux
import { useAppSelector } from "@/hooks";
import { selectResearchLogsByResearchPhaseId } from "@/redux/slices/research/log";
import { selectResearchSessionsByResearchActivityId } from "@/redux/slices/research/session";

const EntityLogs: FC<EntityLogsProps> = ({
  entity,
  entityType,
  darkMode,
  position,
  showLogs,
  setShowLogs,
}) => {
  const researchPhaseLogsIds = useAppSelector((state) =>
    selectResearchLogsByResearchPhaseId(state, entity.id),
  )
    .filter((rl) => !rl.archived)
    .map((rs) => rs.id);

  const researchActivityLogsIds = useAppSelector((state) =>
    selectResearchSessionsByResearchActivityId(state, entity.id),
  )
    .filter((rl) => !rl.archived)
    .map((rs) => rs.id);

  const usedLogsIds =
    entityType === "researchPhase"
      ? researchPhaseLogsIds
      : researchActivityLogsIds;

  return (
    <section
      className={`${entityLogsStyles.entityLogsContainer} ${position}`}
      style={{ backgroundColor: entity.backgroundColorOrImageSrc }}
    >
      <EntityLogsTitle
        title="Research Logs"
        darkMode={darkMode}
        showLogs={showLogs}
        setShowLogs={setShowLogs}
        showSectionControl={usedLogsIds.length > 0}
      />
      <EntityLogsContent
        darkMode={darkMode}
        logsIds={usedLogsIds}
        showLogs={showLogs}
      />
    </section>
  );
};

export default EntityLogs;
