import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlistItem: (state, action) => {
      const productId = action.payload;
      if (state.wishList.includes(productId)) {
        state.wishList = state.wishList.filter((id) => id !== productId);
      } else {
        state.wishList.push(productId);
      }
    },
  },
});

export const { toggleWishlistItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
