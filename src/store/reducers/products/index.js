import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productThunk";

const initialState = {
  products: [],
  status: "nothing",
  error: "",
  limit: 10,
  name: null,
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLimit: (state) => {
      state.limit += 1;
    },
    setName: (state, actions) => {
      state.name += actions.payload;
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

export const { setLimit, setName } = productReducer.actions;

export default productReducer.reducer;
