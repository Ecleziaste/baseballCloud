import { RootState } from "..";
import { createSelector } from "reselect";

export const selectProfile = (state: RootState) => state.profile;

export const selectProfileById = createSelector(
  (state: RootState) => state.profiles?.profiles,
  (_: RootState, id: string) => id,
  (profiles, id) => profiles!.find((profile) => profile.id === id)
);
