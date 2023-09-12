import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
      }
      else {
        let temp = { ...action.payload, quantity: 1 }
        state.cartItems.push(temp)
      }
    },
    readingTime: (state, action) => {

    }
  }

});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;