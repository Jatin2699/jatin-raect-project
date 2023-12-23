import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "home/fetchAllProducts",
  async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.products = payload;
      });
  },
});

export default homeSlice.reducer;









































// in this homefeatures.js we are making slice or features an whole js also called rdeucers function 
// first of all we import createSlice from redux toolkit and then we create instace of this and 
// in this we define builder to create case , is used in extrareducers in async code to handle all
// the state return by promise in api calling .
// define the inital state and  to async code we have to use thunk middle ware which is ayncthunk 
// and it returns the functions instead of action object ,it is a standard approach to write ascync logic
// in redux apps and commonly used in data fetching.
//createAsyncThunk it takes two things first is strings work as type second one if async function that 
// works for api calling
// when we use asyncthunk we have to  return data because
//  we are exprot this api calling function and we have to call or import in home page.
// now in home page we import hooks useEffect and useDispatch hook in home page.
// useDispatch for the api calling function 