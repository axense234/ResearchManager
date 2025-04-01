// Types
import {
  ActivityFeed,
  ResearchActivity,
  ResearchPhase,
  Tag,
  User,
} from "@prisma/client";
import { ReduxEntityWrapper } from "../../../wrapper";

export type ResearchActivityRedux = ReduxEntityWrapper<
  ResearchActivity & {
    user: User;
    activityFeed: ActivityFeed;
    researchPhases: ResearchPhase[];
    tags: Tag[];
  }
>;
