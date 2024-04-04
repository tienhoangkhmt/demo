import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { callApi } from "../../../Api";

const account =  {
  isLoginInThirdParty: false,
  password: "123456a@A",
  rememberClient: false,
  userNameOrEmailAddress: "tiendc",
}

interface Auth {
  token: string,
  name: string
}

export const postLogin = createAsyncThunk('auth/login', async (_, { rejectWithValue }) => {
 
  try {
    const res = await callApi({ url:'/TokenAuth/Authenticate', body: account , method: 'POST'});
    return res.data;
  }catch (error) {
    return rejectWithValue(error)
  }
})

const initialState: Auth = {
  token: "",
  name: ""
}

const AdminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.token = action.payload?.result?.accessToken
      console.log("action", action);
      
    })
    builder.addCase(postLogin.pending, (state) => {
      state.name = "lo1"
      state.token = "true11111111"
    })
    builder.addCase(postLogin.rejected, (state) => {
      state.token = "false1111"
    })
  }
})

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ['token', 'name']
}

export default persistReducer(persistConfig, AdminSlice.reducer);
