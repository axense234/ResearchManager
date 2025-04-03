// Types
import { ResearchLog } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchLogRedux = ReduxEntityWrapper<
  ResearchLog & {
    tagsIds: string[];
  }
>;
