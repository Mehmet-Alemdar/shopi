import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  basketProducts: [],
}

const basketProductsSlice = createSlice({
  name: "basketProducts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.basketProducts.push(action.payload)
    },
    removeProducts: (state, action) => {
      state.basketProducts = action.payload
    },
  }
})

export const { addProduct, removeProducts } = basketProductsSlice.actions

export default basketProductsSlice.reducer