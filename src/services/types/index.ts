import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../reducers";
import { store } from "../store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
