import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, * as others from "axios";

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export const loadToVegetables = createAsyncThunk(
  "vegetable/loadVegetable",
  async (userId, thunkAPI) => {
    const response = await axios.get(
      "http://localhost:8085/collections/vegetable"
    );
    return response.data;
  }
);

export const vegetableSlice = createSlice({
  name: "vegetable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadToVegetables.fulfilled, (state, action) => {
        state.items = action.payload;
        state.pending = false;
      })
      .addCase(loadToVegetables.pending, (state) => {
        state.pending = true;
      })
      .addCase(loadToVegetables.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { load } = vegetableSlice.actions;

export default vegetableSlice.reducer;
