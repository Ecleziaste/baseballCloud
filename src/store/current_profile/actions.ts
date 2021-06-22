import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentProfileApi, updateCurrentProfileApi, uploadPhotoApi} from "../current_profile/api";
import {CurrentProfile, UpdateProfileSelects, UploadedPhoto} from "../../Types";

export const setCurrentProfile = createAsyncThunk<
CurrentProfile,
CurrentProfileParams
>(
  "currentProfile/set",
  async (params) => {
    const {
      data: {
        data: { current_profile },
      },
    } = await currentProfileApi(params);

    return current_profile;
  }
);

export const updateCurrentProfile = createAsyncThunk<
  CurrentProfile,
  UpdateProfileSelects
>("currentProfile/update", async (params) => {
  const {
    data: {
      data: { update_profile },
    },
  } = await updateCurrentProfileApi(params);

  return update_profile;
});

export const uploadPhoto = createAsyncThunk<
  UploadedPhoto,
  {name: string}
>("currentProfile/upload_photo", async (params) => {
  const {
    data: { signed_url },
  } = await uploadPhotoApi(params);
  
  console.log(signed_url)
  return signed_url;
});

export type CurrentProfileParams = {};
