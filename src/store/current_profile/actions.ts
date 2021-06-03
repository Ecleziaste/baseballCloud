import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentProfileApi } from "../current_profile/api";
import { CurrentProfile } from "./slice";

export const setCurrentProfile = createAsyncThunk<
  CurrentProfile,
  CurrentProfileParams
>("currentProfile/set", async (params) => {
  const data = await currentProfileApi(params);

  return data;
});

export type CurrentProfileParams = {};
