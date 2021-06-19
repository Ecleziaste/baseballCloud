import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCurrentProfile, updateCurrentProfile } from "./actions";
import { CurrentProfile, UpdateProfile } from "../../Types";

const initialState = null as null | CurrentProfile;

const currentProfileSlice = createSlice({
  name: "current_profile",
  initialState,
  reducers: {},
  extraReducers: {
    [setCurrentProfile.fulfilled.type]: (
      state,
      action: PayloadAction<CurrentProfile>
    ) => {
      return action.payload;
    },
    [updateCurrentProfile.fulfilled.type]: (
      state,
      action: PayloadAction<UpdateProfile>
    ) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = currentProfileSlice;

export { reducer, actions };
