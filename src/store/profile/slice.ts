import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setProfile } from "./actions";

const initialState = null as null | Profile;

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [setProfile.fulfilled.type]: (state, action: PayloadAction<Profile>) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = profileSlice;

export { reducer, actions };

export type Profile = {
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
