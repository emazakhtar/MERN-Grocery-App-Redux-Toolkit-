import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, * as others from "axios";

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export const loadToFruits = createAsyncThunk(
  "fruit/loadFruits",
  async (itemId, thunkAPI) => {
    const response = await axios.get("http://localhost:8085/collections/fruit");
    return response.data;
  }
);

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadToFruits.fulfilled, (state, action) => {
        state.items = action.payload;
        state.pending = false;
      })
      .addCase(loadToFruits.pending, (state) => {
        state.pending = true;
      })
      .addCase(loadToFruits.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { load } = fruitSlice.actions;

export default fruitSlice.reducer;
