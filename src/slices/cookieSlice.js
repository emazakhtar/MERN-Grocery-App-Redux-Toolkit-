import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, * as others from "axios";

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export const loadToCookies = createAsyncThunk(
  "cookie/loadCookies",
  async (userId, thunkAPI) => {
    const response = await axios.get(
      "http://localhost:8085/collections/cookie"
    );
    return response.data;
  }
);

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadToCookies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.pending = false;
      })
      .addCase(loadToCookies.pending, (state) => {
        state.pending = true;
      })
      .addCase(loadToCookies.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { load } = cookieSlice.actions;

export default cookieSlice.reducer;
