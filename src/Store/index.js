import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
