import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi, signInApi } from "../user/api";
import { User } from "./slice";

export const setUser = createAction<any>("user/set");

export const signUp = createAsyncThunk<any, Params>(
  "user/signUp",
  async (params) => {
    const { data } = await signUpApi(params);

    return data;
  }
);

export const signIn = createAsyncThunk<any, SignInParams>(
  "user/signIn",
  async (params) => {
    const response = await signInApi(params);
    const { data, headers } = response;
    console.log(data, headers);
    return { data, headers };
  }
);

type Params = { email: string; password: string; name: string };
type SignInParams = { email: string; password: string };
