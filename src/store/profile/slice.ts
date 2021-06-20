import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setProfile } from "./actions";
import { Profile } from "../../Types";

const initialState = null as null | Profile;

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [setProfile.fulfilled.type]: (state, action: PayloadAction<Profile>) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = profileSlice;

export { reducer, actions };
