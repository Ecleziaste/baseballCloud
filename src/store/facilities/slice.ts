import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFacilities } from "./actions";
import { Facility } from "../../Types";

const initialState = null as null | Array<Facility>;

const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {},
  extraReducers: {
    [getFacilities.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Facility>>
    ) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = facilitiesSlice;

export { reducer, actions };
