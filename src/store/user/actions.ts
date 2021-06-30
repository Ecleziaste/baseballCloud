import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi, signInApi, passwordApi } from "../user/api";

export const setUser = createAction<any>("user/set");
export const signOut = createAction("user/signOut");

export const signUp = createAsyncThunk<any, SignUpParams>(
  "user/signUp",
  async (params, { rejectWithValue }) => {
    try {
      const {
        data: { status },
        data: { data },
        headers,
      } = await signUpApi(params);
      return { data, headers, status };
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

export const signIn = createAsyncThunk<any, SignInParams>(
  "user/signIn",
  async (params, { rejectWithValue }) => {
    try {
      const {
        data: { data },
        headers,
      } = await signInApi(params);
      return { data, headers };
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

export const resetPassword = createAsyncThunk<any, string>(
  "user/resetPassword",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await passwordApi(params);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.errors);
    }
  }
);

export type SignUpParams = {
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
};

export type SignInParams = { email: string; password: string };
export type ResetPass = { email: string; redirect_url: string };
