import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (category?: string) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const response = await axios.get(url);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [] as ProductType[],
    isLoading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as any;
      });
  },
  reducers: {},
});

export default productSlice.reducer;
