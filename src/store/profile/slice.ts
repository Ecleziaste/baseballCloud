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
  act_score: null;
  age: number;
  avatar: string;
  bats_hand: string;
  batter_summary: [];
  batting_top_values: [];
  biography: string;
  broad_jump: null;
  events_opened: true;
  facilities: Array<Facility>;
  favorite: boolean;
  feet: number;
  first_name: string;
  gpa_score: null;
  grip_left: null;
  grip_right: null;
  id: string;
  inches: number;
  last_name: string;
  paid: boolean;
  pitcher_summary: [];
  pitching_top_values: [];
  position: string;
  position2: string | null;
  recent_events: [];
  sat_score: null;
  school: { id: string; name: string };
  school_year: string;
  teams: Array<Team>;
  throws_hand: string;
  weight: number;
  winsgspan: null;
  wrist_to_elbow: null;
};

type Facility = { id: string; email: string; u_name: string };
type Team = { id: string; name: string };
