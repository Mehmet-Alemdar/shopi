import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  isDiscounted: false,
  totalDiscount: 0,
}

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      if(!state.isDiscounted) {
        state.totalPrice = action.payload
      } else {
        state.totalPrice = action.payload - (action.payload * 20 / 100)
        state.totalDiscount = action.payload * 20 / 100
      }
    },
    setDiscoentPrice: (state, action) => {
      state.isDiscounted = true
      state.totalPrice = action.payload - (action.payload * 20 / 100)
      state.totalDiscount = action.payload * 20 / 100
    },
    setDisableDiscount: (state, action) => {
      state.isDiscounted = false
      state.totalPrice = action.payload
      state.totalDiscount = 0
    },
  }
})

export const { setTotalPrice, setDiscoentPrice, setDisableDiscount } = totalPriceSlice.actions

export default totalPriceSlice.reducer