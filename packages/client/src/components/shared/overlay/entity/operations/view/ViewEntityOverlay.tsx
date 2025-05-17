// React
import { FC } from "react";
// Redux
import { selectViewEntityOverlay } from "@/redux/slices/general";
import { useAppSelector } from "@/hooks";
// Components
import ViewResearchLogOverlayInterface from "./interfaces/ViewResearchLogOverlayInterface";
import ViewResearchSessionOverlayInterface from "./interfaces/ViewResearchSessionOverlayInterface";

const ViewEntityOverlay: FC = () => {
  const viewEntityOverlay = useAppSelector(selectViewEntityOverlay);

  switch (viewEntityOverlay.entityType) {
    case "researchSession":
      return <ViewResearchSessionOverlayInterface />;
    case "researchLog":
      return <ViewResearchLogOverlayInterface />;
    default:
      throw new Error("Invalid entity type.");
  }
};

export default ViewEntityOverlay;
