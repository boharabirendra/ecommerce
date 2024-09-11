import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "./productsSlice";

export const fetchProductDetail = createAsyncThunk(
  "fetchProductDetail",
  async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    data: {} as ProductType,
    isLoading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as any;
      });
  },
  reducers: {},
});

export default productDetailSlice.reducer;
