/** @format */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authUser: null,
  },
  reducers: {
    bindAuthUser: (state, action) => {
      //   console.log("p", action?.payload);
      state.authUser = action.payload;
    },
    // extraReducers: builder=> {
    //     builder
    //     .addCase( login.fulfilled, ( state, action ) => {
    //         state.authUser = action.payload;
    //     } )
    // }
  },
});

export const { bindAuthUser } = authSlice.actions;

export default authSlice.reducer;
