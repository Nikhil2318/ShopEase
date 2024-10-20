import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartlistSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    wishlist: wishlistReducer,
    cartlist: cartReducer,
  },
});

export default store;
