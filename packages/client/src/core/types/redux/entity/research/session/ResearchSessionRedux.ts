// Types
import { ResearchSession } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchSessionRedux = ReduxEntityWrapper<
  ResearchSession & {
    tagsIds: string[];
  }
>;
