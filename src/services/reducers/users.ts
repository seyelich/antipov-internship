import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  getUsersInfo } from "../actions/users";
import { TUser } from "../../types";

type TInitialState = {
  users: TUser[];
  pageLimit: number;
  loading: boolean;
  error: null | string;
}

const initialState: TInitialState = {
  users: [],
  pageLimit: 0,
  loading: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersInfo.fulfilled, (state, action) => {
        state.users = state.users.concat(action.payload.data.map((el: TUser) => {
          el.name = el.first_name! + el.last_name!;
          delete el.first_name;
          delete el.last_name;
          return el;
        }));
        state.pageLimit = action.payload.total_pages;
        state.loading = false;
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

export default usersSlice.reducer;
