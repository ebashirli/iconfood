import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../api/products";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      const result = await getAllProducts(params);
      return result;
    } catch (error) {
      return rejectWithValue("Xeta bas verdi");
    }
  }
);
