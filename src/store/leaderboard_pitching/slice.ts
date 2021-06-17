import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLeaderboardPitching } from "./actions";
import { PitchingType } from "../../Types";

const initialState = null as null | LeaderboardPitching;

const leaderboardPitchingSlice = createSlice({
  name: "leaderboard_pitching",
  initialState,
  reducers: {},
  extraReducers: {
    [setLeaderboardPitching.fulfilled.type]: (
      state,
      action: PayloadAction<LeaderboardPitching>
    ) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = leaderboardPitchingSlice;

export { reducer, actions };

export type LeaderboardPitching = {
  leaderboard_pitching: Array<PitchingType>;
};
