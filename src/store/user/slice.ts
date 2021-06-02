import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setUser, signIn, signUp } from "./actions";

const initialState = null as null | User;
// const initialState = {} as User;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
      console.log(action.payload);

      return action.payload;
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
      // const data = JSON.parse(action.payload);
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
  // data: {
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
  // };
};
