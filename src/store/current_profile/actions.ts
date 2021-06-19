import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentProfileApi } from "../current_profile/api";
import { CurrentProfile } from "../../Types";

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

export type CurrentProfileParams = {};
