import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentProfileApi, updateCurrentProfileApi} from "../current_profile/api";
import {CurrentProfile, UpdateProfileSelects} from "../../Types";

export const setCurrentProfile = createAsyncThunk<
CurrentProfile,
CurrentProfileParams
>(
  "currentProfile/set",
  async (params) => {
    const {
      data: {
        data: { current_profile },
      },
    } = await currentProfileApi(params);

    return current_profile;
  }
);

export const updateCurrentProfile = createAsyncThunk<
  CurrentProfile,
  UpdateProfileSelects
>("currentProfile/update", async (params) => {
  const {
    data: {
      data: { update_profile },
    },
  } = await updateCurrentProfileApi(params);

  return update_profile;
});

export type CurrentProfileParams = {};
