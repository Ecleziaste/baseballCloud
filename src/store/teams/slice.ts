import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTeams } from "./actions";
import { Team } from "../../Types";

const initialState = null as null | Array<Team>;

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: {
    [getTeams.fulfilled.type]: (state, action: PayloadAction<Array<Team>>) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = teamsSlice;

export { reducer, actions };
