import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register as registerApi, login as loginApi } from "../../../api/auth";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await loginApi(credentials);
  return response.data;
});

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const response = await registerApi(credentials);
    return response.data;
  }
);

const initialState = {
  token: "",
  user: null,
  isLoading: false,
  error: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
