import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi, signInApi, passwordApi } from "../user/api";

export const setUser = createAction<any>("user/set");
export const signOut = createAction("user/signOut");

export const signUp = createAsyncThunk<any, SignUpParams>(
  "user/signUp",
  async (params) => {
    const {
      data: { status },
      data: { data },
      headers,
    } = await signUpApi(params);

    return { data, headers, status };
  }
);

export const signIn = createAsyncThunk<any, SignInParams>(
  "user/signIn",
  async (params) => {
    const {
      data: { data },
      headers,
    } = await signInApi(params);

    return { data, headers };
  }
);

export const resetPassword = createAsyncThunk<any, any>(
  "user/resetPassword",
  async (params) => {
    const { data } = await passwordApi(params);

    return data;
  }
);

export type SignUpParams = {
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
};

export type SignInParams = { email: string; password: string };
