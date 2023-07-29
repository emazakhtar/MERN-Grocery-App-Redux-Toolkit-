import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, * as others from "axios";

const initialState = {
  userInfo: {},
  pending: false,
  error: null,
};

export const loadToUser = createAsyncThunk(
  "user/loadUser",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8085/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const addToUsersWishlist = createAsyncThunk(
  "user/addWishlist",
  async ({ userId, data }) => {
    console.log(data);
    const authToken = localStorage.getItem("jwtToken");
    const response = await axios.post(
      "http://localhost:8085/user/wishlist/" + userId,
      data,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  }
);
export const loadToUsersWishlist = createAsyncThunk(
  "user/loadWishlist",
  async (userId, thunkAPI) => {
    const authToken = localStorage.getItem("jwtToken");
    try {
      const response = await axios.get(
        "http://localhost:8085/user/wishlist/" + userId,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteFromUsersWishlist = createAsyncThunk(
  "user/deleteWishlist",
  async ({ userId, itemId }, thunkAPI) => {
    const authToken = localStorage.getItem("jwtToken");
    try {
      const response = await axios.delete(
        "http://localhost:8085/user/wishlist/" + userId + "/" + itemId,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    emptyFromUser: (state) => {
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.pending = false;
      })
      .addCase(loadToUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(loadToUser.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(addToUsersWishlist.fulfilled, (state, action) => {
        state.userInfo.userWishlist = [
          ...state.userInfo.userWishlist,
          { ...action.payload },
        ];
        state.pending = false;
      })
      .addCase(addToUsersWishlist.pending, (state) => {
        state.pending = true;
      })
      .addCase(addToUsersWishlist.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(loadToUsersWishlist.fulfilled, (state, action) => {
        state.userInfo.userWishlist = action.payload;
        state.pending = false;
      })
      .addCase(loadToUsersWishlist.pending, (state) => {
        state.pending = true;
      })
      .addCase(loadToUsersWishlist.rejected, (state, action) => {
        state.error = action.error;
      })

      .addCase(deleteFromUsersWishlist.fulfilled, (state, action) => {
        state.userInfo.userWishlist = state.userInfo.userWishlist.filter(
          (w) => {
            return action.payload._id !== w._id;
          }
        );
        state.pending = false;
      })
      .addCase(deleteFromUsersWishlist.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(deleteFromUsersWishlist.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case reducer function
export const { emptyFromUser } = userSlice.actions;

export default userSlice.reducer;
