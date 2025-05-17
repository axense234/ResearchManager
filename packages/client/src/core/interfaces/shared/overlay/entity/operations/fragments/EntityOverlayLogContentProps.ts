// Types
import {
  CreateResearchLogDto,
  CreateResearchSessionDto,
  UpdateResearchLogDto,
  UpdateResearchSessionDto,
} from "@researchmanager/shared/types";
import { ChangeEvent } from "react";

export interface EntityOverlayLogContentProps {
  dto?:
    | CreateResearchSessionDto
    | CreateResearchLogDto
    | UpdateResearchSessionDto
    | UpdateResearchLogDto;

  sectionTitle: string;
  type: "view" | "upsert";

  onContentChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
