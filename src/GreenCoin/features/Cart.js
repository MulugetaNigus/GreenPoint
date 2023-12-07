// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        item.quantities++;
      },
      decrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item.quantities === 1) {
          item.quantities = 1
        } else {
          item.quantities--;
        }
      },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    clearAllItems: (state , action) => {
      state.cart = action.payload.cart;
    }
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearAllItems,
} = cartSlice.actions;