import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLeaderboardBatting } from "./actions";
import { School, Team } from "../../Types";

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
  leaderboard_batting: Array<LeaderCard>;
};

export type LeaderCard = {
  batter_name: string;
  exit_velocity: number;
  launch_angle: number;
  distance: number;
  batter_datraks_id: number;
  age: number;
  school: School;
  teams: Array<Team>;
  favorite: false;
};
