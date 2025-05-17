// React
import { FC, useState } from "react";
// Interfaces
import { EntityGraphsProps } from "@/core/interfaces";
// SCSS
import entityGraphsStyles from "@/scss/components/shared/entity/view/graphs/EntityGraphs.module.scss";
// Components
import EntityGraphsTitle from "./EntityGraphsTitle";
import EntityGraphsContent from "./EntityGraphsContent";

const EntityGraphs: FC<EntityGraphsProps> = ({
  specialEntity,
  darkMode,
  position,
}) => {
  const [showGraph, setShowGraph] = useState<boolean>(false);

  return (
    <article
      className={`${entityGraphsStyles.entityGraphsContainer} ${position}`}
      style={{ backgroundColor: specialEntity.backgroundColorOrImageSrc }}
    >
      <EntityGraphsTitle
        title="Graphs"
        darkMode={darkMode}
        showGraph={showGraph}
        setShowGraph={setShowGraph}
      />
      <EntityGraphsContent showGraph={showGraph} />
    </article>
  );
};

export default EntityGraphs;
