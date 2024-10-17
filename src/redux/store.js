import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"; // Assuming you have a productsSlice
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    products: productsReducer, // Add products reducer
    wishlist: wishlistReducer, // Add wishlist reducer
  },
});

export default store;
