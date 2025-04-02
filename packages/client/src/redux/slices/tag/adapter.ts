// Types
import { TagRedux } from "@/core/types";
// Redux
import { createEntityAdapter } from "@reduxjs/toolkit";

export const tagsAdapter = createEntityAdapter<TagRedux>();
