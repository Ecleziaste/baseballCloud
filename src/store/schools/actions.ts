import { createAsyncThunk } from "@reduxjs/toolkit";
import { schoolsApi } from "../schools/api";
import { School } from "../../Types";

export const getSchools = createAsyncThunk<Array<School>, string>(
  "schools/get",
  async (params) => {
    const {
      data: {
        data: { schools },
      },
    } = await schoolsApi(params);

    return schools;
  }
);
