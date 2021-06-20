import { createAsyncThunk } from "@reduxjs/toolkit";
import { profilesApi, favoriteProfileApi } from "../profiles/api";
import { Profiles } from "./slice";
import { ProfilesSelects, Favorite, IsUpdated } from "../../Types";

export const setProfiles = createAsyncThunk<Profiles, ProfilesSelects>(
  "profiles/set",
  async (params) => {
    const {
      data: {
        data: { profiles },
      },
    } = await profilesApi(params);

    return profiles;
  }
);

export const updateFavoriteProfie = createAsyncThunk<IsUpdated, Favorite>(
  "profiles/update",
  async (params) => {
    const {
      data: {
        data: { update_favorite_profile },
      },
    } = await favoriteProfileApi(params);

    console.log(update_favorite_profile);
    return update_favorite_profile;
  }
);
