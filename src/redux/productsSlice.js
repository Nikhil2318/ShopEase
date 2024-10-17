import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Set the products in the state
    },
  },
});

// Export actions
export const { setProducts } = productsSlice.actions;

// Export reducer
export default productsSlice.reducer;
