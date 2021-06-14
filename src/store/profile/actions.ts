import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileApi } from "../profile/api";
import { Profile } from "./slice";

export const setProfile = createAsyncThunk<Profile, CurrentProfileParams>(
  "currentProfile/set",
  async (params) => {
    const {
      data: {
        data: { current_profile },
      },
    } = await profileApi(params);

    return current_profile;
  }
);

export type CurrentProfileParams = {};
