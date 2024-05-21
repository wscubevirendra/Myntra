import { createSlice } from '@reduxjs/toolkit';
import Product_Data from '../../components/data'; 
const cart = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const { pId, qty } = action.payload;
            const product = Product_Data.find(item => item.id === pId);
            const existingItem = state.cartItems.find(item => item.pId === pId);

            if (existingItem) {
                existingItem.qty += qty;
            } else {
                state.cartItems.push({ pId, qty });
            }

            state.totalPrice += product.Price * qty;
        },
        removeFromCart: (state, action) => {
            const { pId } = action.payload;
            const existingItem = state.cartItems.find(item => item.pId === pId);
            if (existingItem) {
                state.totalPrice -= existingItem.qty * Product_Data.find(item => item.id === pId).Price;
            }
            state.cartItems = state.cartItems.filter(item => item.pId !== pId);
        },
        increaseItemQty: (state, action) => {
            const { pId } = action.payload;
            const item = state.cartItems.find(item => item.pId === pId);
            if (item) {
                item.qty += 1;
                state.totalPrice += Product_Data.find(product => product.id === pId).Price;
            }
        },
        decreaseItemQty: (state, action) => {
            const { pId } = action.payload;
            const item = state.cartItems.find(item => item.pId === pId);
            if (item && item.qty > 1) {
                item.qty -= 1;
                state.totalPrice -= Product_Data.find(product => product.id === pId).Price;
            }
        }
    }
});

export default cart.reducer;
export const { addToCart, removeFromCart, increaseItemQty, decreaseItemQty } = cart.actions;

export const selectCartItems = state => state.cart.cartItems;
export const selectTotalPrice = state => state.cart.totalPrice;
