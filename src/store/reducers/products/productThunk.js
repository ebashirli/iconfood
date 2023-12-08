import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../api/products";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const result = await getAllProducts();

      return result;
    } catch (error) {
      return rejectWithValue("Xeta bas verdi");
    }
  }
);
