import { RootState } from "..";

export const selectUser = (state: RootState) => state.auth.user;
export const selectHeaders = (state: RootState) => state.auth.headers;
