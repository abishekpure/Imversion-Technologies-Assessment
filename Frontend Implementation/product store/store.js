import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productslices';
import cartReducer from './slices/cartslices';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
