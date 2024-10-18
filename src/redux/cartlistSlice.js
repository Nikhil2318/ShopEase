import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0, // Initialize to 0
    totalPrice: 0, // Initialize to 0
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Current state before adding:", JSON.stringify(state));
      console.log("Payload being added:", action.payload);

      // Look for the existing item by its id
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If found, increment the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        // If not found, create a new item entry
        const newItem = {
          title: action.payload.title,
          image: action.payload.image,
          id: action.payload.id,
          price: action.payload.price,
          quantity: action.payload.quantity || 1, // Ensure quantity defaults to 1 if undefined
        };
        state.items.push(newItem); // Add new item to the items array
      }

      // Update total quantity and total price
      state.totalQuantity += action.payload.quantity || 1; // Ensure this adds up correctly
      state.totalPrice += action.payload.price * (action.payload.quantity || 1); // Ensure this adds up correctly

      console.log("Updated state after adding:", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update quantity
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;

        // Update totals
        state.totalQuantity += quantityDifference;
        state.totalPrice += existingItem.price * quantityDifference;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
