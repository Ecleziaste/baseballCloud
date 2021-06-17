import { createAsyncThunk } from "@reduxjs/toolkit";
import { profilesApi } from "../profiles/api";
import { Profiles } from "./slice";
import { ProfilesSelects } from "../../Types";

export const setProfiles = createAsyncThunk<Profiles, ProfilesSelects>(
  "profiles/set",
  async (params) => {
    const {
      data: {
        data: { profiles },
      },
    } = await profilesApi(params);

    return profiles;
  }
);
