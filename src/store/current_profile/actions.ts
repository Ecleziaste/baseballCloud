import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentProfileApi } from "../current_profile/api";
import { CurrentProfile } from "./slice";

export const setCurrentProfile = createAsyncThunk<
  CurrentProfile,
  CurrentProfileParams
>("currentProfile/set", async (params) => {
  const { data } = await currentProfileApi(params);

  return data;
});

// type CurrentProfileParams = {};

type CurrentProfileParams = {
  // query: {
  current_profile: {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    position2: string;
    avatar: string;
    throws_hand: string;
    bats_hand: string;
    biography: string;
    school_year: string;
    feet: number;
    inches: number;
    weight: number;
    age: number;
    school: { id: number; name: string };
    teams: [{ id: number; name: string }];
    facilities: [{ id: number; email: string; u_name: string }];
  };
  // };
};
