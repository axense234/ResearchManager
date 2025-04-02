// Types
import { ResearchSession, Tag } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchSessionRedux = ReduxEntityWrapper<
  ResearchSession & {
    tags: Tag[];
  }
>;
