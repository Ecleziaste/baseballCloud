import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileApi } from "../profile/api";
import { Profile } from "../../Types";

export const setProfile = createAsyncThunk<Profile, string>(
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

export type ProfileParams = { id: string };
