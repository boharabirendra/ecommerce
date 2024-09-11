import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "./productsSlice";

type CardProduct = {
  product: ProductType;
  count: number;
};

const getExistingProduct = (data: CardProduct[], id: number) => {
  const existingProduct = data.find((item) => item.product.id === id);
  return existingProduct;
};

export const fetchCartAddedProduct = createAsyncThunk(
  "fetchAddedProduct",
  async (id?: string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

const cartAddProductSlice = createSlice({
  name: "productDetail",
  initialState: {
    data: [] as CardProduct[],
    isLoading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAddedProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartAddedProduct.fulfilled, (state, action) => {
        const existingProduct = getExistingProduct(
          state.data,
          action.payload.id
        );
        if (existingProduct) {
          existingProduct.count += 1;
        } else {
          const newProduct: CardProduct = {
            product: action.payload,
            count: 1,
          };
          state.data.push(newProduct);
        }
        state.isLoading = false;
      })
      .addCase(fetchCartAddedProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as any;
      });
  },
  reducers: {
    deleteItem: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (item) => item.product.id !== action.payload
      );
    },
    increment: (state, action: PayloadAction<number>) => {
      const existingProduct = getExistingProduct(state.data, action.payload);
      if (existingProduct) {
        existingProduct.count += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const existingProduct = getExistingProduct(state.data, action.payload);
      if (existingProduct) {
        existingProduct.count -= 1;
      }
    },
  },
});

export const { deleteItem, increment, decrement } = cartAddProductSlice.actions;

export default cartAddProductSlice.reducer;
