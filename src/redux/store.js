import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"; // Assuming you have a productsSlice
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartlistSlice";

const store = configureStore({
  reducer: {
    products: productsReducer, // Add products reducer
    wishlist: wishlistReducer, // Add wishlist reducer
    cartlist: cartReducer,
  },
});

export default store;
