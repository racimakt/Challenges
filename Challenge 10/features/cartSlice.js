import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    checkout: (state) => {
      state.items = [];
      alert("Checkout successful!");
    },
  },
});

export const { addToCart, removeFromCart, checkout } = cartSlice.actions;
export default cartSlice.reducer;
