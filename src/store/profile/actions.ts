import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileApi } from "../profile/api";
import { Profile } from "./slice";

export const setProfile = createAsyncThunk<Profile, ProfileParams>(
  "profile/set",
  async (params) => {
    const {
      data: {
        data: { profile },
      },
    } = await profileApi(params);

    return profile;
  }
);

export type ProfileParams = {};
