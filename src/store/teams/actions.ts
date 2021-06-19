import { createAsyncThunk } from "@reduxjs/toolkit";
import { teamsApi } from "../teams/api";
import { Team } from "../../Types";

export const getTeams = createAsyncThunk<Array<Team>, string>(
  "teams/get",
  async (params) => {
    const {
      data: {
        data: { teams },
      },
    } = await teamsApi(params);

    return teams;
  }
);
