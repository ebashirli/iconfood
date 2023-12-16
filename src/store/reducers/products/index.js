import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productThunk";

const initialState = {
  products: [],
  status: "nothing",
  error: "",
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.products = payload.data.data;
      })
      .addCase(fetchAllProducts.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });
  },
});

export default productReducer.reducer;
