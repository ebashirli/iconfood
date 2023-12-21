import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productThunk";

const initialState = {
  products: [],
  status: "nothing",
  error: "",
  limit: 10,
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLimit: (state) => {
      state.limit += 1;
    },
  },
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

export const { setLimit } = productReducer.actions;

export default productReducer.reducer;
