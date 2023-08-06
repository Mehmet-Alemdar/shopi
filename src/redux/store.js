import { configureStore } from "@reduxjs/toolkit";
import basketProductsReducer from "./features/basket/basketProducts";
import totalPriceReducer from "./features/basket/totalPrice";

const store = configureStore({
  reducer: {
    basketProducts: basketProductsReducer,
    totalPrice: totalPriceReducer,
  },
});

export default store;