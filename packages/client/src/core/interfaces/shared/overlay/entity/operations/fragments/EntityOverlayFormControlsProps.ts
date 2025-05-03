// Types
import { ObjectKeyValueType } from "@/core/types";
import { UnknownAction } from "@reduxjs/toolkit";
import {
  CreateResearchActivityDto,
  CreateResearchLogDto,
  CreateResearchPhaseDto,
  EntityType,
  UpdateResearchActivityDto,
  UpdateResearchLogDto,
  UpdateResearchPhaseDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayFormControlsProps {
  dto:
    | CreateResearchActivityDto
    | UpdateResearchActivityDto
    | CreateResearchPhaseDto
    | UpdateResearchPhaseDto
    | CreateResearchLogDto
    | UpdateResearchLogDto;
  dtoUpdateFunction: (updateObj: ObjectKeyValueType) => UnknownAction;
  entityType: EntityType;
  method: "create" | "update";
}
