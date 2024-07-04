import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filters: {
    price: null,
    brand: '',
    category: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setProducts, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
