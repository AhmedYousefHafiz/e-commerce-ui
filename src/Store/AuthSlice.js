import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import AppConfiguration from "../appConfiguration";

const initialState = {
  loading: false,
  error: null,
  user: null,
  accessToken: null,
};

const requestConfig = {
  // baseURL: "/api/",
  baseURL: AppConfiguration.hostName,
  headers: {
    "Content-Type": "application/json",
  },
};

const ApiClient = axios.create(requestConfig);

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  const request = await ApiClient.post(
    "/auth/authenticate",
    JSON.stringify(user)
  );
  const response = await request.data;
  localStorage.setItem("user", JSON.stringify(response));
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.accessToken = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.accessToken = "testAccessToken";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
        state.accessToken = null;
      });
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

export const selectCurrentAccessToken = (state) => state.auth.accessToken;
