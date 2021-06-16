import { createAsyncThunk } from "@reduxjs/toolkit";
import { leaderboardBattingApi } from "../leaderboard_batting/api";
import { LeaderboardBatting } from "./slice";
import { LeaderboardSelects } from "../../Types";

export const setLeaderboardBatting = createAsyncThunk<
  LeaderboardBatting,
  LeaderboardSelects
>("leaderboardBatting/set", async (params) => {
  const {
    data: {
      data: { leaderboard_batting },
    },
  } = await leaderboardBattingApi(params);

  return leaderboard_batting;
});

// export type LeaderboardBattingParams = {};
