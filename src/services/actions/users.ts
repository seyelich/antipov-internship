import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersRequest } from "../../utils/api";
import { IUsersRes } from "../types/data";

export const getUsersInfo = createAsyncThunk<IUsersRes, number>(
  'users/getAll',
  async (page) => {
    const res = await getUsersRequest(page);
    return res;
});

