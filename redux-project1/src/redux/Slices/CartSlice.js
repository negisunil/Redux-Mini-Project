import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (selectedItem) {
        selectedItem.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload,
      });
    },
    removeFromCart: (state, action) => {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (selectedItem) {
        selectedItem.quantity -= 1;
        if (selectedItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
