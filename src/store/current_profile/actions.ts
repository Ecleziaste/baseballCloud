import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentProfileApi } from "../current_profile/api";
import { CurrentProfile, UpdateProfile } from "../../Types";

export const setCurrentProfile = createAsyncThunk<
  CurrentProfile,
  CurrentProfileParams
>("currentProfile/set", async (params) => {
  const {
    data: {
      data: { current_profile },
    },
  } = await currentProfileApi(params);

  return current_profile;
});

export const updateCurrentProfile = createAsyncThunk<
  UpdateProfile,
  CurrentProfileParams
>("currentProfile/update", async (params) => {
  const {
    data: {
      data: { update_profile },
    },
  } = await currentProfileApi(params);

  return update_profile;
});

export type CurrentProfileParams = {};
