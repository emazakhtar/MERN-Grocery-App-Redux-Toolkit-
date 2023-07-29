import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, * as others from "axios";

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export const loadToNuts = createAsyncThunk(
  "nut/loadNuts",
  async (userId, thunkAPI) => {
    const response = await axios.get("http://localhost:8085/collections/nut");
    return response.data;
  }
);

export const nutSlice = createSlice({
  name: "nut",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadToNuts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.pending = false;
      })
      .addCase(loadToNuts.pending, (state) => {
        state.pending = true;
      })
      .addCase(loadToNuts.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { load } = nutSlice.actions;

export default nutSlice.reducer;
