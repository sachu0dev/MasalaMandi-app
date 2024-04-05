import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.card.info.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].foodCount++;
      } else {
        state.items.push({ ...action.payload, foodCount: 1, id: action.payload.card.info.id });
      }
    },
    removeItem: (state, action) => {
      const getIndex = state.items.findIndex(item => item.id === action.payload);
      if (getIndex !== -1) {
        if (state.items[getIndex].foodCount === 1) {
          state.items.splice(getIndex, 1);
        } else {
          state.items[getIndex].foodCount--;
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
})



export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
