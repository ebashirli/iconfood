import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categoryReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

// export const { } = categoryReducer.actions;

export default categoryReducer.reducer;
