// Types
import { EntityState } from "@reduxjs/toolkit";
import { TagRedux } from "./TagRedux";
import { TagsSliceInitialStateType } from "./TagsSliceInitialStateType";

export type TagsSliceStateType = EntityState<TagRedux, string> &
  TagsSliceInitialStateType;
