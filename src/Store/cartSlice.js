import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const cartIndex = state.items.findIndex((item) => item.id === product.id);

      if (cartIndex !== -1) {
        state.items[cartIndex].quantity += 1;
        
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (state.items[index].quantity > 1) {
        state.items[index].quantity--
      }
      else {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      }
    },

    removeQuantityCart: (state, action) => {
      const remove = state.items.findIndex(item => item.id === action.payload.id);
      if (state.items[remove].quantity > 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      }
    },
    
  },
});

export const { addToCart, removeFromCart, removeQuantityCart } = cartSlice.actions;

export default cartSlice.reducer;
