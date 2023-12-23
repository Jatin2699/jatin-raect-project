import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
};

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (product) => {
    return product;
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    removeProductFromCart: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.products.push(payload);
      });
  },
});

export const { removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;