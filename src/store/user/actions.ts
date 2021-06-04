import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi, signInApi } from "../user/api";
import { User } from "./slice";

export const setUser = createAction<any>("user/set");
export const signOut = createAction("user/signOut");

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
    const {
      data: { data },
      headers,
    } = await signInApi(params);

    console.log(data, headers);
    return { data, headers };
  }
);

type Params = { email: string; password: string; name: string };
type SignInParams = { email: string; password: string };
