// React
import { useEffect } from "react";
// Types
import { LoadingStateType } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppDispatch } from "./redux";
import {
  closeUpsertEntityOverlay,
  closeUpsertTagOverlay,
} from "@/redux/slices/general/slice";
import { setCreateResearchActivityDto } from "@/redux/slices/research/activity";
import {
  defaultCreateResearchActivityDto,
  defaultCreateResearchLogDto,
  defaultCreateResearchPhaseDto,
  defaultCreateResearchSessionDto,
  defaultCreateTagDto,
} from "@/data/redux";
import { setCreateTagDto } from "@/redux/slices/tag";
import { setCreateResearchPhaseDto } from "@/redux/slices/research/phase";
import { setCreateResearchSessionDto } from "@/redux/slices/research/session";
import { setCreateResearchLogDto } from "@/redux/slices/research/log";

const setCreateEntityDtos = {
  researchActivity: () =>
    setCreateResearchActivityDto({ ...defaultCreateResearchActivityDto }),
  researchPhase: () =>
    setCreateResearchPhaseDto({ ...defaultCreateResearchPhaseDto }),
  researchSession: () =>
    setCreateResearchSessionDto({ ...defaultCreateResearchSessionDto }),
  researchLog: () =>
    setCreateResearchLogDto({ ...defaultCreateResearchLogDto }),
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
        dispatch(closeUpsertEntityOverlay());
      } else if (entityType === "tag") {
        dispatch(closeUpsertTagOverlay());
      }
    }
  }, [loadingUpsertEntity, entityType]);
};
