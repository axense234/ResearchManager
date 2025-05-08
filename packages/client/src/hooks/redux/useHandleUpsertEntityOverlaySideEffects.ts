// React
import { useEffect } from "react";
// Types
import { LoadingStateType } from "@/core/types";
import { EntityType } from "@researchmanager/shared/types";
// Redux
import { useAppDispatch } from "./redux";
import { closeEntityOverlay } from "@/redux/slices/general/slice";
import { setCreateResearchActivityDto } from "@/redux/slices/research/activity";
import {
  defaultCreateResearchActivityDto,
  defaultCreateTagDto,
} from "@/data/redux";
import { setCreateTagDto } from "@/redux/slices/tag";

const setCreateEntityDtos = {
  researchActivity: () =>
    setCreateResearchActivityDto({ ...defaultCreateResearchActivityDto }),
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
      dispatch(closeEntityOverlay());
    }
  }, [loadingUpsertEntity]);
};
