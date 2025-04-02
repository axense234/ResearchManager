// Types
import { ResearchLog, Tag } from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchLogRedux = ReduxEntityWrapper<
  ResearchLog & {
    tags: Tag[];
  }
>;
