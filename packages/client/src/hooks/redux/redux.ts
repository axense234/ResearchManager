import { Dispatch, State } from "@/redux/api/store";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// Use instead of plain useSelector and useDispatch

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
