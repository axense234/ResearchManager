// Types
import { User } from "@prisma/client";
import { ReduxEntityWrapper } from "../../wrapper";

export type UserRedux = ReduxEntityWrapper<User>;
