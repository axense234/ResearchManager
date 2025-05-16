// React
import { FC } from "react";
// Interfaces
import { EntitySessionItemProps } from "@/core/interfaces";
// SCSS
import entitySessionItemStyles from "@/scss/components/shared/entity/view/sessions/EntitySessionItem.module.scss";
// Redux
import { useAppSelector } from "@/hooks";
import { selectResearchSessionById } from "@/redux/slices/research/session";

const EntitySessionItem: FC<EntitySessionItemProps> = ({
  researchSessionId,
}) => {
  const researchSession = useAppSelector((state) =>
    selectResearchSessionById(state, researchSessionId),
  );

  console.log(researchSession);

  return (
    <div className={entitySessionItemStyles.sessionContainer}>
      <div>{researchSession.name}</div>
      <div>details</div>
    </div>
  );
};

export default EntitySessionItem;
