import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setUser, signIn, signUp } from "./actions";

const initialState = null as null | User;

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    [setUser.type]: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export { reducer, actions };

export type User = {
  data: {
    id: number;
    email: string;
    u_name: null | string;
    team_avatar: {
      url: null;
      size_100_100: { url: null };
      size_40_40: { url: null };
      size_32_32: { url: null };
      size_20_20: { url: null };
    };
    role: string;
    team_user: boolean;
    uid: string;
    unsubscribe: boolean;
    plan_id: null;
    paid: boolean;
    direct_paid: boolean;
  };

  // headers: {
  access_token: string;
  cache_control: string;
  client: string;
  content_type: string;
  uid: string;
  // };
};
