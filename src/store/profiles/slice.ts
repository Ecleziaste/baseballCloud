import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setProfiles, updateFavoriteProfie } from "./actions";
import { PlayerCard } from "../../Types";

const initialState = null as null | Profiles;

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: {
    [setProfiles.fulfilled.type]: (state, action: PayloadAction<Profiles>) => {
      return action.payload;
    },
    [updateFavoriteProfie.fulfilled.type]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      setProfiles({ profiles_count: 10, offset: 0 });
      return state;
    },
  },
});

const { reducer, actions } = profilesSlice;

export { reducer, actions };

export type Profiles = {
  profiles: Array<PlayerCard>;
  total_count: number;
};
