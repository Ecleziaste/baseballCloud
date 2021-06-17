import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLeaderboardBatting } from "./actions";
import { LeaderCardType } from "../../Types";

const initialState = null as null | LeaderboardBatting;

const leaderboardBattingSlice = createSlice({
  name: "leaderboard_batting",
  initialState,
  reducers: {},
  extraReducers: {
    [setLeaderboardBatting.fulfilled.type]: (
      state,
      action: PayloadAction<LeaderboardBatting>
    ) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = leaderboardBattingSlice;

export { reducer, actions };

export type LeaderboardBatting = {
  leaderboard_batting: Array<LeaderCardType>;
};
