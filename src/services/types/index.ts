import { useDispatch } from "react-redux";
import { rootReducer } from "../reducers";
import { store } from "../store";

export type RootState = ReturnType<typeof rootReducer>;

// export type TApplicationActions = TAuthActions | TUsersActions;

// export type AppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, RootState, TApplicationActions>
// >;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
