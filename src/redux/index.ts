import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Features/auth/redux/auth.slice";

const rootReducers = combineReducers({
  auth: authSlice
});

export default rootReducers;
