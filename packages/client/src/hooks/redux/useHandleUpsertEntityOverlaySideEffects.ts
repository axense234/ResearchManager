// React
import { useEffect } from "react";
// Types
import { LoadingStateType } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppDispatch } from "./redux";
import {
  closeEntityOverlay,
  closeUpsertTagOverlay,
} from "@/redux/slices/general/slice";
import { setCreateResearchActivityDto } from "@/redux/slices/research/activity";
import {
  defaultCreateResearchActivityDto,
  defaultCreateResearchPhaseDto,
  defaultCreateTagDto,
} from "@/data/redux";
import { setCreateTagDto } from "@/redux/slices/tag";
import { setCreateResearchPhaseDto } from "@/redux/slices/research/phase";

const setCreateEntityDtos = {
  researchActivity: () =>
    setCreateResearchActivityDto({ ...defaultCreateResearchActivityDto }),
  researchPhase: () =>
    setCreateResearchPhaseDto({ ...defaultCreateResearchPhaseDto }),
  tag: () => setCreateTagDto({ ...defaultCreateTagDto }),
};

export const useHandleUpsertEntityOverlaySideEffects = (
  entityType: EntityType,
  loadingUpsertEntity: LoadingStateType,
  upsertEntityMethod: "create" | "update",
) => {
  const dispatch = useAppDispatch();

  const setCreateEntityDto = setCreateEntityDtos[entityType];

  useEffect(() => {
    if (loadingUpsertEntity === "SUCCEEDED") {
      if (upsertEntityMethod === "create") {
        dispatch(setCreateEntityDto);
      }
      if (entityType !== "tag") {
        dispatch(closeEntityOverlay());
      } else if (entityType === "tag") {
        dispatch(closeUpsertTagOverlay());
      }
    }
  }, [loadingUpsertEntity, entityType]);
};
