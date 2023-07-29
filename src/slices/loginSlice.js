import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLogin = true;
    },

    logoutUser: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
