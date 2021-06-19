import { createAsyncThunk } from "@reduxjs/toolkit";
import { facilitiesApi } from "../facilities/api";
import { Facility } from "../../Types";

export const getFacilities = createAsyncThunk<Array<Facility>, string>(
  "facilities/get",
  async (params) => {
    const {
      data: {
        data: { facilities },
      },
    } = await facilitiesApi(params);

    return facilities;
  }
);
