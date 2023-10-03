import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../utils/api";
import { IAuthRes } from "../types/data";
import { TUserForm } from "../../types";

export const register = createAsyncThunk<IAuthRes, TUserForm>(
  'auth/register',
  async (form) => {
    const res = await registerUser(form);
    return res;
});

export const login = createAsyncThunk<IAuthRes, TUserForm>(
  'auth/login',
  async (form) => {
    const res = await loginUser(form);
    return res;
});

