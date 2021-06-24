import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setUser, signIn, signUp } from "./actions";

const initialState = { headers: null, user: null } as {
  headers: null | Headers;
  user: null | User;
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled.type]: (
      state,
      {
        payload,
      }: PayloadAction<{ status: string; data: User; headers: Headers }>
    ) => {
      console.log("signUp payload", payload);
      // FIXME:
      if (payload.status === "success") {
        state.headers = payload.headers;
        state.user = payload.data;
        console.log("sign UP succesful");
        return state;
      }

      return;
    },
    [signIn.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ data: User; headers: any }>
    ) => {
      state.headers = payload.headers;
      state.user = payload.data;
      return state;
    },
    [setUser.type]: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export { reducer, actions };

export type User = {
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

export type Headers = {
  access_token: string;
  cache_control: string;
  client: string;
  content_type: string;
  uid: string;
};
