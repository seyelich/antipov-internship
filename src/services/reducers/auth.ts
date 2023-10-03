import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth";
import { cookieLiveTime } from "../../utils/constants";
import { deleteCookie, setCookie } from "../../utils/utils";

type TInitialState = {
  userId: number | null;
  loading: boolean;
  error: null | string;
}

const initialState: TInitialState = {
  userId: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.userId = null;
      deleteCookie('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.id;
        setCookie('token', action.payload.token, { expires: cookieLiveTime });
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.id;
        setCookie('token', action.payload.token, { expires: cookieLiveTime })
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});


function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { logout } = authSlice.actions;
export default authSlice.reducer;
