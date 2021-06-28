import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  setCurrentProfile,
  updateCurrentProfile,
  uploadPhoto,
} from "./actions";
import { CurrentProfile, UploadedPhoto } from "../../Types";

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
      action: PayloadAction<CurrentProfile>
    ) => {
      return action.payload;
    },
    [uploadPhoto.fulfilled.type]: (
      state,
      action: PayloadAction<UploadedPhoto>
    ) => {
      console.log(action.payload);

      state!.avatar = action.payload.signedUrl;
    },
  },
});

const { reducer, actions } = currentProfileSlice;

export { reducer, actions };
