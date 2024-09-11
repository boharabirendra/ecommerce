import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type CategoryType = {
  id: number;
  name: string;
  image: string;
};

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const response = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return response.data;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [] as CategoryType[],
    isLoading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as any;
      });
  },
  reducers: {},
});

export default categorySlice.reducer;
