import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCurrentProfile } from "./actions";

const initialState = null as null | CurrentProfile;
// const initialState = {} as User;

const currentProfileSlice = createSlice({
  name: "current_profile",
  initialState,
  reducers: {},
  extraReducers: {
    [setCurrentProfile.fulfilled.type]: (
      state,
      action: PayloadAction<CurrentProfile>
    ) => {
      console.log(action.payload);
      // const data = JSON.parse(action.payload);
      return action.payload;
    },
  },
});

const { reducer, actions } = currentProfileSlice;

export { reducer, actions };

export type CurrentProfile = {
  // data: {
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
