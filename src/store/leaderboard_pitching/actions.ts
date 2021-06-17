import { createAsyncThunk } from "@reduxjs/toolkit";
import { leaderboardPitchingApi } from "../leaderboard_pitching/api";
import { LeaderboardPitching } from "./slice";
import { LeaderboardSelects } from "../../Types";

export const setLeaderboardPitching = createAsyncThunk<
  LeaderboardPitching,
  LeaderboardSelects
>("leaderboardPitching/set", async (params) => {
  const {
    data: {
      data: { leaderboard_pitching },
    },
  } = await leaderboardPitchingApi(params);

  return leaderboard_pitching;
});
