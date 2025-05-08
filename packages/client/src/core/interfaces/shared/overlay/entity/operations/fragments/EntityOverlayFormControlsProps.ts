// Types
import { ObjectKeyValueType } from "@/core/types";
import { UnknownAction } from "@reduxjs/toolkit";
import {
  CreateResearchActivityDto,
  CreateResearchLogDto,
  CreateResearchPhaseDto,
  CreateTagDto,
  EntityType,
  UpdateResearchActivityDto,
  UpdateResearchLogDto,
  UpdateResearchPhaseDto,
  UpdateTagDto,
} from "@researchmanager/shared/types";

export interface EntityOverlayFormControlsProps {
  dto:
    | CreateResearchActivityDto
    | UpdateResearchActivityDto
    | CreateResearchPhaseDto
    | UpdateResearchPhaseDto
    | CreateResearchLogDto
    | UpdateResearchLogDto
    | CreateTagDto
    | UpdateTagDto;
  dtoUpdateFunction: (updateObj: ObjectKeyValueType) => UnknownAction;
  entityType: EntityType;
  method: "create" | "update";
}
