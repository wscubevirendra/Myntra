import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cart";
const store = configureStore(
    {
        reducer: {
            cart: CartReducer
        }
    }
)

export default store;