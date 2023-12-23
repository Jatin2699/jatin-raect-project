import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./features/homeSlice";
import CartReducer from "./features/cartSlice";

const Store = configureStore({
  reducer: {
    home: HomeReducer,
    cart: CartReducer,
  },
});

export default Store;