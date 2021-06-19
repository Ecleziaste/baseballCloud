import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSchools } from "./actions";
import { School } from "../../Types";

const initialState = null as null | Array<School>;

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {},
  extraReducers: {
    [getSchools.fulfilled.type]: (
      state,
      action: PayloadAction<Array<School>>
    ) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = schoolsSlice;

export { reducer, actions };
